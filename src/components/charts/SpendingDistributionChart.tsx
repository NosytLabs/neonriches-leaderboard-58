
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface SpendingDataItem {
  id: string;
  label: string;
  value: number;
  color: string;
}

interface SpendingDistributionChartProps {
  data: SpendingDataItem[];
  width?: number;
  height?: number;
  className?: string;
}

const SpendingDistributionChart: React.FC<SpendingDistributionChartProps> = ({
  data,
  width = 350,
  height = 300,
  className = '',
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current || !data.length) return;
    
    // Clear any existing chart
    d3.select(svgRef.current).selectAll('*').remove();
    
    // Set up dimensions
    const margin = { top: 20, right: 20, bottom: 60, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Create scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, innerWidth])
      .padding(0.3);
    
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) || 0])
      .nice()
      .range([innerHeight, 0]);
    
    // Add gradient definitions
    const defs = svg.append('defs');
    
    data.forEach(d => {
      const gradient = defs.append('linearGradient')
        .attr('id', `gradient-${d.id}`)
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%');
      
      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', d.color)
        .attr('stop-opacity', 0.9);
      
      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', d.color)
        .attr('stop-opacity', 0.4);
    });
    
    // Add glow filter for hover effect
    const filter = defs.append('filter')
      .attr('id', 'glow');
    
    filter.append('feGaussianBlur')
      .attr('stdDeviation', '3.5')
      .attr('result', 'coloredBlur');
    
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode')
      .attr('in', 'coloredBlur');
    feMerge.append('feMergeNode')
      .attr('in', 'SourceGraphic');
    
    // Create and add the bars
    const barGroups = svg.selectAll('.bar-group')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'bar-group')
      .attr('transform', d => `translate(${xScale(d.label)},0)`);
    
    barGroups.append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => innerHeight - yScale(d.value))
      .attr('rx', 4)
      .attr('fill', d => `url(#gradient-${d.id})`)
      .style('transition', 'all 0.3s ease')
      .on('mouseover', function() {
        d3.select(this)
          .attr('filter', 'url(#glow)')
          .attr('stroke', '#ffffff')
          .attr('stroke-width', 1.5);
      })
      .on('mouseout', function() {
        d3.select(this)
          .attr('filter', null)
          .attr('stroke', 'none');
      });
    
    // Add value labels on top of bars
    barGroups.append('text')
      .attr('class', 'value-label')
      .attr('x', xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.value) - 5)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('fill', 'rgba(255, 255, 255, 0.8)')
      .text(d => `$${d.value}`);
    
    // Add category labels below bars
    barGroups.append('text')
      .attr('class', 'category-label')
      .attr('x', xScale.bandwidth() / 2)
      .attr('y', innerHeight + 20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('fill', 'rgba(255, 255, 255, 0.6)')
      .text(d => d.label);
    
    // Add axes
    const xAxis = d3.axisBottom(xScale)
      .tickSize(0)
      .tickFormat(() => '');
    
    const yAxis = d3.axisLeft(yScale)
      .ticks(5)
      .tickSize(-innerWidth)
      .tickFormat(d => `$${d}`);
    
    // Add X axis
    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(xAxis)
      .select('.domain')
      .remove();
    
    // Add Y axis
    svg.append('g')
      .attr('class', 'y-axis')
      .call(yAxis)
      .selectAll('line')
      .attr('stroke', 'rgba(255, 255, 255, 0.1)');
    
    // Style the axis
    svg.selectAll('.y-axis .domain').remove();
    svg.selectAll('.y-axis text')
      .attr('fill', 'rgba(255, 255, 255, 0.6)')
      .attr('font-size', '12px');
    
    // Add chart title
    svg.append('text')
      .attr('class', 'chart-title')
      .attr('x', innerWidth / 2)
      .attr('y', -5)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', 'bold')
      .attr('fill', 'rgba(255, 255, 255, 0.9)')
      .text('Spending Distribution');
    
    // Add animation
    svg.selectAll('.bar')
      .attr('y', innerHeight)
      .attr('height', 0)
      .transition()
      .duration(800)
      .delay((_, i) => i * 100)
      .attr('y', d => yScale(d.value))
      .attr('height', d => innerHeight - yScale(d.value));
    
    svg.selectAll('.value-label')
      .attr('opacity', 0)
      .transition()
      .duration(800)
      .delay((_, i) => i * 100 + 300)
      .attr('opacity', 1);
    
  }, [data, width, height]);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg ref={svgRef} className="w-full h-full"></svg>
    </div>
  );
};

export default SpendingDistributionChart;
