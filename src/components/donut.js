import React, { Component } from 'react'
import {withFauxDOM} from 'react-faux-dom'
import * as d3 from 'd3-3'

class Donut extends Component {
  data0 = [ 80, 50, 42.5, 27.5 ]
  data1 = [ 50, 42.5, 27.5, 80 ]

  componentDidMount() {
   var faux = this.props.connectFauxDOM('div', 'donut');

   var scale_factor = 0.30,
       width = 490 * scale_factor,
       height = 490 * scale_factor,
       outerRadius = Math.min(width, height) * .5,
       innerRadius = outerRadius - (110 * scale_factor);

   var angle = 3.15;
   var pad_angle = 0.01;

   var n = 4,
       // data0 = d3.range(n).map(Math.random),
       // data1 = d3.range(n).map(Math.random),

       data0 = [ 80, 50, 42.5, 27.5 ],
       data1 = [ 50, 42.5, 27.5, 80 ];

   var color = d3.scale.ordinal()
       .range(["#57068c", "#FDD835", "#03A9F4","#BDBDBD"]);

   var arc = d3.svg.arc();

   var pie = d3.layout.pie()
       .sort(null)
       .startAngle([angle])
       .endAngle([angle + Math.PI * 2])
       .padAngle(pad_angle);

   var svg = d3.select(faux).append("svg")
       .attr("width", width)
       .attr("height", height);

   svg.selectAll(".arc")
       .data(arcs(data0, data1))
     .enter().append("g")
       .attr("class", "arc")
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
     .append("path")
       .attr("fill", function(d, i) { return color(i); })
       .attr("d", arc);

    transition(0);


   function arcs(data0, data1) {
     var arcs0 = pie(data0),
         arcs1 = pie(data1),
         i = -1,
         arc;
     while (++i < n) {
       arc = arcs0[i];
       arc.innerRadius = innerRadius;
       arc.outerRadius = outerRadius;
       arc.next = arcs1[i];
     }
     return arcs0;
   }

   function transition(state) {
     var path = d3.selectAll(".arc > path")
         .data(state ? arcs(data0, data1) : arcs(data1, data0));

     // Wedges split into two rings.
     var t0 = path.transition()
         .duration(500)
         .attrTween("d", tweenArc(function(d, i) {
           return {
             innerRadius: i & 1 ? innerRadius : (innerRadius + outerRadius) / 2,
             outerRadius: i & 1 ? (innerRadius + outerRadius) / 2 : outerRadius
           };
         }));

     // Wedges translate to be centered on their final position.
     var t1 = t0.transition()
         .attrTween("d", tweenArc(function(d, i) {
           var a0 = d.next.startAngle + d.next.endAngle,
               a1 = d.startAngle - d.endAngle;
           return {
             startAngle: (a0 + a1) / 2,
             endAngle: (a0 - a1) / 2
           };
         }));

     // Wedges then update their values, changing size.
     var t2 = t1.transition()
           .attrTween("d", tweenArc(function(d, i) {
             return {
               startAngle: d.next.startAngle,
               endAngle: d.next.endAngle
             };
           }));

     // Wedges reunite into a single ring.
     var t3 = t2.transition()
         .attrTween("d", tweenArc(function(d, i) {
           return {
             innerRadius: innerRadius,
             outerRadius: outerRadius
           };
         }));

     setTimeout(function() { transition(!state); }, 5000);
   }

   function tweenArc(b) {
     return function(a, i) {
       var d = b.call(this, a, i), i = d3.interpolate(a, d);
       for (var k in d) a[k] = d[k]; // update data
       return function(t) { return arc(i(t)); };
     };
   }
}


  render () {
    return (
      <div className="fauxDonut">
        {this.props.donut}
      </div>
    )
  }
}

const FauxDonut = withFauxDOM(Donut);
export default FauxDonut;
