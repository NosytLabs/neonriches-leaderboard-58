
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, PieChart } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SpendingDistributionData {
  category: string;
  value: number;
  color: string;
}

const sampleData: SpendingDistributionData[] = [
  { category: 'Team Events', value: 35, color: '#9B87F5' },
  { category: 'Profile Boosts', value: 25, color: '#D4AF37' },
  { category: 'Mockery Actions', value: 15, color: '#DC2626' },
  { category: 'Wishes', value: 10, color: '#3B82F6' },
  { category: 'Certificates', value: 8, color: '#10B981' },
  { category: 'Other', value: 7, color: '#8B5CF6' }
];

const timeFrames = [
  { value: 'week', label: 'This Week' },
  { value: 'month', label: 'This Month' },
  { value: 'quarter', label: 'This Quarter' },
  { value: 'year', label: 'This Year' },
  { value: 'all', label: 'All Time' }
];

const SpendingDistributionChart: React.FC = () => {
  const [chartType, setChartType] = useState<'pie' | 'bar'>('pie');
  const [timeFrame, setTimeFrame] = useState('month');
  const [data, setData] = useState<SpendingDistributionData[]>(sampleData);
  
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  // Recalculate data when timeframe changes
  useEffect(() => {
    // This would typically fetch from an API based on timeFrame
    // For demo, we'll just randomize the existing data
    const randomizedData = sampleData.map(item => ({
      ...item,
      value: Math.max(5, Math.floor(item.value * (0.7 + Math.random() * 0.6)))
    }));
    
    setData(randomizedData);
  }, [timeFrame]);
  
  // Create/update chart based on type
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();
    
    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const tooltip = d3.select(tooltipRef.current);
    
    // Chart dimensions
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    
    if (chartType === 'pie') {
      // Create pie chart
      const radius = Math.min(chartWidth, chartHeight) / 2;
      
      // Group element to hold the pie chart
      const g = svg.append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);
      
      // Create pie layout
      const pie = d3.pie<SpendingDistributionData>()
        .value(d => d.value)
        .sort(null);
      
      // Create arc generator
      const arc = d3.arc<d3.PieArcDatum<SpendingDistributionData>>()
        .innerRadius(radius * 0.5) // Make it a donut chart
        .outerRadius(radius * 0.8);
      
      // Create outer arc for labels
      const outerArc = d3.arc<d3.PieArcDatum<SpendingDistributionData>>()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9);
      
      // Create slices
      const slices = g.selectAll('.slice')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'slice');
      
      // Add tooltip events
      const showTooltip = function(event: MouseEvent, d: d3.PieArcDatum<SpendingDistributionData>) {
        tooltip.style('display', 'block')
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY + 10}px`)
          .html(`
            <div class="font-medium">${d.data.category}</div>
            <div class="text-sm">$${d.data.value}</div>
            <div class="text-xs text-gray-400">${Math.round(d.data.value / d3.sum(data, d => d.value) * 100)}%</div>
          `);
      };
      
      const hideTooltip = function() {
        tooltip.style('display', 'none');
      };
      
      // Draw slices
      slices.append('path')
        .attr('d', arc)
        .attr('fill', d => d.data.color)
        .attr('stroke', '#0f0f0f')
        .attr('stroke-width', 2)
        .style('opacity', 0.9)
        .style('transition', 'opacity 0.3s ease')
        .on('mouseover', function(event) {
          d3.select(this).style('opacity', 1);
          showTooltip(event, d3.select(this).datum() as d3.PieArcDatum<SpendingDistributionData>);
        })
        .on('mouseout', function() {
          d3.select(this).style('opacity', 0.9);
          hideTooltip();
        });
      
      // Add polylines for labels
      slices.append('polyline')
        .attr('stroke', 'rgba(255, 255, 255, 0.5)')
        .attr('fill', 'none')
        .attr('stroke-width', 1)
        .attr('points', function(d) {
          const pos = outerArc.centroid(d);
          pos[0] = radius * 0.95 * (d.startAngle + d.endAngle) / 2 < Math.PI ? 1 : -1;
          return [arc.centroid(d), outerArc.centroid(d), pos].join(' ');
        });
      
      // Add labels
      slices.append('text')
        .attr('transform', function(d) {
          const pos = outerArc.centroid(d);
          pos[0] = radius * 0.95 * (d.startAngle + d.endAngle) / 2 < Math.PI ? 1 : -1;
          return `translate(${pos})`;
        })
        .attr('dy', '.35em')
        .style('text-anchor', function(d) {
          return (d.startAngle + d.endAngle) / 2 < Math.PI ? 'start' : 'end';
        })
        .text(d => `${d.data.category} (${Math.round(d.data.value / d3.sum(data, d => d.value) * 100)}%)`)
        .attr('fill', 'white')
        .style('font-size', '10px');
      
      // Add inner text - total
      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '0em')
        .style('font-size', '18px')
        .style('font-weight', 'bold')
        .attr('fill', 'white')
        .text(`$${d3.sum(data, d => d.value)}`);
      
      // Add inner text - label
      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '1.2em')
        .style('font-size', '12px')
        .attr('fill', 'rgba(255, 255, 255, 0.7)')
        .text('Total Spent');
    } else {
      // Create bar chart
      const g = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);
      
      // Sort data by value descending
      const sortedData = [...data].sort((a, b) => b.value - a.value);
      
      // Create scales
      const x = d3.scaleBand()
        .domain(sortedData.map(d => d.category))
        .range([0, chartWidth])
        .padding(0.3);
      
      const y = d3.scaleLinear()
        .domain([0, d3.max(sortedData, d => d.value) || 0])
        .range([chartHeight, 0]);
      
      // Create axes
      const xAxis = g.append('g')
        .attr('transform', `translate(0, ${chartHeight})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
          .style('text-anchor', 'end')
          .attr('dx', '-.8em')
          .attr('dy', '.15em')
          .attr('transform', 'rotate(-45)')
          .attr('fill', 'white');
      
      const yAxis = g.append('g')
        .call(d3.axisLeft(y)
          .ticks(5)
          .tickFormat(d => `$${d}`))
        .selectAll('text')
          .attr('fill', 'white');
      
      // Style axes
      g.selectAll('.domain')
        .attr('stroke', 'rgba(255, 255, 255, 0.3)');
      
      g.selectAll('.tick line')
        .attr('stroke', 'rgba(255, 255, 255, 0.3)');
      
      // Add tooltip events
      const showTooltip = function(event: MouseEvent, d: SpendingDistributionData) {
        tooltip.style('display', 'block')
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY + 10}px`)
          .html(`
            <div class="font-medium">${d.category}</div>
            <div class="text-sm">$${d.value}</div>
            <div class="text-xs text-gray-400">${Math.round(d.value / d3.sum(data, d => d.value) * 100)}%</div>
          `);
      };
      
      const hideTooltip = function() {
        tooltip.style('display', 'none');
      };
      
      // Create bars
      g.selectAll('.bar')
        .data(sortedData)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.category) || 0)
        .attr('width', x.bandwidth())
        .attr('y', d => y(d.value))
        .attr('height', d => chartHeight - y(d.value))
        .attr('fill', d => d.color)
        .attr('rx', 4)
        .attr('ry', 4)
        .style('opacity', 0.9)
        .style('transition', 'opacity 0.3s ease')
        .on('mouseover', function(event, d) {
          d3.select(this).style('opacity', 1);
          showTooltip(event, d);
        })
        .on('mouseout', function() {
          d3.select(this).style('opacity', 0.9);
          hideTooltip();
        });
      
      // Add value labels above bars
      g.selectAll('.value-label')
        .data(sortedData)
        .enter()
        .append('text')
        .attr('class', 'value-label')
        .attr('x', d => (x(d.category) || 0) + x.bandwidth() / 2)
        .attr('y', d => y(d.value) - 5)
        .attr('text-anchor', 'middle')
        .text(d => `$${d.value}`)
        .attr('fill', 'white')
        .style('font-size', '10px');
    }
  }, [chartType, data]);
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BarChart3 className="mr-3 h-5 w-5 text-royal-gold" />
            <CardTitle className="text-lg">Spending Distribution</CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={timeFrame} onValueChange={setTimeFrame}>
              <SelectTrigger className="h-8 w-[130px] glass-morphism border-white/10">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent className="glass-morphism border-white/10">
                {timeFrames.map(option => (
                  <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Tabs value={chartType} onValueChange={value => setChartType(value as 'pie' | 'bar')}>
              <TabsList className="h-8 glass-morphism border-white/10">
                <TabsTrigger value="pie" className="h-7 px-2">
                  <PieChart className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="bar" className="h-7 px-2">
                  <BarChart3 className="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        <CardDescription>
          How you've spent your royal treasury
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-80">
          <svg ref={svgRef} width="100%" height="100%"></svg>
          <div 
            ref={tooltipRef} 
            className="absolute hidden p-2 bg-black/80 border border-white/20 rounded shadow-lg text-white z-10"
            style={{ pointerEvents: 'none' }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingDistributionChart;
