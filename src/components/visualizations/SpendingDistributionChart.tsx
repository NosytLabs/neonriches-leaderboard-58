
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChartPie, ChartBar, Activity, BarChart, RefreshCw } from 'lucide-react';

interface SpendingDistributionData {
  id: string;
  label: string;
  value: number;
  color: string;
}

interface SpendingDistributionChartProps {
  data: SpendingDistributionData[];
  title?: string;
  height?: number;
  className?: string;
}

type ChartType = 'pie' | 'bar' | 'donut';

const SpendingDistributionChart: React.FC<SpendingDistributionChartProps> = ({
  data,
  title = 'Spending Distribution',
  height = 300,
  className = ''
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [chartType, setChartType] = useState<ChartType>('donut');
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (!svgRef.current || !data.length) return;
    
    // Clear existing chart
    d3.select(svgRef.current).selectAll('*').remove();
    
    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    
    // Create the main group element
    const g = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Different chart types
    if (chartType === 'pie' || chartType === 'donut') {
      const radius = Math.min(chartWidth, chartHeight) / 2;
      
      // Create a group for the pie chart, centered in the available space
      const pieG = svg
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);
      
      // Create the pie layout
      const pie = d3.pie<SpendingDistributionData>()
        .value(d => d.value)
        .sort(null);
      
      // Create the arc generator
      const arc = d3.arc<d3.PieArcDatum<SpendingDistributionData>>()
        .innerRadius(chartType === 'donut' ? radius * 0.5 : 0)
        .outerRadius(radius * 0.8);
      
      // Create an arc for the hover effect
      const hoverArc = d3.arc<d3.PieArcDatum<SpendingDistributionData>>()
        .innerRadius(chartType === 'donut' ? radius * 0.5 : 0)
        .outerRadius(radius * 0.85);
      
      // Create the pie slices
      const arcs = pieG
        .selectAll('.arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');
      
      // Add animation for the paths
      setIsAnimating(true);
      
      arcs
        .append('path')
        .attr('d', d => arc(d) as string)
        .attr('fill', d => d.data.color)
        .attr('stroke', 'rgba(255, 255, 255, 0.1)')
        .attr('stroke-width', 1)
        .style('opacity', 0)
        .transition()
        .duration(800)
        .delay((_, i) => i * 100)
        .style('opacity', 1)
        .attrTween('d', function(d) {
          const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
          return function(t) {
            return arc(i(t)) as string;
          };
        })
        .on('end', () => setIsAnimating(false));
      
      // Add hover effects
      arcs
        .on('mouseover', function(event, d) {
          d3.select(this).select('path')
            .transition()
            .duration(200)
            .attr('d', d => hoverArc(d) as string);
          
          // Show tooltip
          const tooltip = svg.append('g')
            .attr('class', 'tooltip')
            .attr('transform', `translate(${width / 2},${height / 2})`);
          
          tooltip.append('text')
            .attr('y', -10)
            .attr('text-anchor', 'middle')
            .attr('fill', 'white')
            .text(d.data.label);
          
          tooltip.append('text')
            .attr('y', 10)
            .attr('text-anchor', 'middle')
            .attr('fill', 'white')
            .text(`$${d.data.value.toLocaleString()}`);
        })
        .on('mouseout', function() {
          d3.select(this).select('path')
            .transition()
            .duration(200)
            .attr('d', d => arc(d) as string);
          
          // Remove tooltip
          svg.select('.tooltip').remove();
        });
      
      // Add center text for donut chart
      if (chartType === 'donut') {
        const totalSpent = data.reduce((sum, d) => sum + d.value, 0);
        
        pieG.append('text')
          .attr('text-anchor', 'middle')
          .attr('dy', '0.35em')
          .attr('fill', 'white')
          .attr('font-size', '18px')
          .text(`$${totalSpent.toLocaleString()}`);
        
        pieG.append('text')
          .attr('text-anchor', 'middle')
          .attr('dy', '1.5em')
          .attr('fill', 'rgba(255, 255, 255, 0.6)')
          .attr('font-size', '12px')
          .text('Total Spent');
      }
      
      // Add legend
      const legend = svg
        .append('g')
        .attr('transform', `translate(${width / 2},${height - 10})`)
        .attr('text-anchor', 'middle');
      
      const legendItems = legend
        .selectAll('.legend-item')
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'legend-item')
        .attr('transform', (d, i) => {
          const itemWidth = 80;
          const totalWidth = data.length * itemWidth;
          const startX = -totalWidth / 2;
          return `translate(${startX + i * itemWidth},0)`;
        });
      
      legendItems
        .append('rect')
        .attr('width', 10)
        .attr('height', 10)
        .attr('fill', d => d.color);
      
      legendItems
        .append('text')
        .attr('x', 15)
        .attr('y', 10)
        .attr('font-size', '10px')
        .attr('fill', 'white')
        .text(d => d.label);
    } else if (chartType === 'bar') {
      // Sort data by value in descending order
      const sortedData = [...data].sort((a, b) => b.value - a.value);
      
      // Create scales
      const x = d3.scaleBand()
        .domain(sortedData.map(d => d.label))
        .range([0, chartWidth])
        .padding(0.3);
      
      const y = d3.scaleLinear()
        .domain([0, d3.max(sortedData, d => d.value) || 0])
        .range([chartHeight, 0])
        .nice();
      
      // Create and append the axes
      g.append('g')
        .attr('transform', `translate(0,${chartHeight})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('fill', 'rgba(255, 255, 255, 0.7)')
        .attr('font-size', '10px')
        .attr('transform', 'rotate(-45)')
        .attr('text-anchor', 'end');
      
      g.append('g')
        .call(d3.axisLeft(y)
          .ticks(5)
          .tickFormat(d => `$${d}`))
        .selectAll('text')
        .attr('fill', 'rgba(255, 255, 255, 0.7)')
        .attr('font-size', '10px');
      
      // Style the axes
      g.selectAll('.domain')
        .attr('stroke', 'rgba(255, 255, 255, 0.2)');
      
      g.selectAll('.tick line')
        .attr('stroke', 'rgba(255, 255, 255, 0.2)');
      
      // Add bars with animation
      setIsAnimating(true);
      
      g.selectAll('.bar')
        .data(sortedData)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.label) as number)
        .attr('width', x.bandwidth())
        .attr('y', chartHeight)
        .attr('height', 0)
        .attr('fill', d => d.color)
        .attr('rx', 2)
        .transition()
        .duration(800)
        .delay((_, i) => i * 100)
        .attr('y', d => y(d.value))
        .attr('height', d => chartHeight - y(d.value))
        .on('end', (_, i) => {
          if (i === data.length - 1) setIsAnimating(false);
        });
      
      // Add value labels above bars
      g.selectAll('.bar-label')
        .data(sortedData)
        .enter()
        .append('text')
        .attr('class', 'bar-label')
        .attr('x', d => (x(d.label) as number) + x.bandwidth() / 2)
        .attr('y', d => y(d.value) - 5)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('fill', 'white')
        .attr('opacity', 0)
        .text(d => `$${d.value}`)
        .transition()
        .duration(800)
        .delay((_, i) => i * 100 + 400)
        .attr('opacity', 1);
    }
  }, [data, chartType, height]);
  
  const handleRefresh = () => {
    // Trigger re-render of the chart with animation
    setChartType(prev => prev);
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 w-8 p-0 ${chartType === 'pie' ? 'bg-white/10' : ''}`}
              onClick={() => setChartType('pie')}
              disabled={isAnimating}
            >
              <ChartPie className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 w-8 p-0 ${chartType === 'donut' ? 'bg-white/10' : ''}`}
              onClick={() => setChartType('donut')}
              disabled={isAnimating}
            >
              <Activity className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 w-8 p-0 ${chartType === 'bar' ? 'bg-white/10' : ''}`}
              onClick={() => setChartType('bar')}
              disabled={isAnimating}
            >
              <BarChart className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={handleRefresh}
              disabled={isAnimating}
            >
              <RefreshCw className={`h-4 w-4 ${isAnimating ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-1">
          <div className="text-xs text-white/50">
            Distribution of spending across categories
          </div>
          <Badge variant="outline" className="text-xs bg-black/20">
            Interactive
          </Badge>
        </div>
      </CardHeader>
      <CardContent className={className}>
        <div className="relative w-full" style={{ height }}>
          <svg ref={svgRef} className="w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingDistributionChart;
