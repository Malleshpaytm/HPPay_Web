var margin = {
    top: 20,
    right: 120,
    bottom: 20,
    left: 120,
  },
  width = 960 - margin.right - margin.left,
  height = 800 - margin.top - margin.bottom;
//get json in token and overrite with root
const refresh_token = sessionStorage.getItem('refresh_token');
var root = {
  name: 'Jacqueline Das',
  designation: 'Sales Head',
  territory: 'New Delhi',
  category: 'Corporate',
  imageUrl: 'assets/imgs/1.jpg',
  isLoggedUser: false,
  children: [
    {
      name: 'Adams Parker',
      designation: 'Zonal Manager',
      territory: 'North India',
      category: 'Corporate',
      imageUrl: 'assets/imgs/2.jpeg',
      isLoggedUser: false,
      children: [
        {
          name: 'Andrew Michel',
          designation: 'Regional Sales Manager',
          territory: 'Punjab, Haryana',
          category: 'Corporate',
          imageUrl: 'assets/imgs/4.jpg',
          isLoggedUser: false,
        },
        {
          name: 'Margaret',
          designation: 'Regional Sales Manager',
          territory: 'UP, Bihar, Gujarat',
          category: 'Corporate',
          imageUrl: 'assets/imgs/5.jpg',
          isLoggedUser: false,
          children: [
            {
              name: 'Mahesh Naidu',
              designation: 'Area Sales Executive',
              territory: 'Lucknow',
              category: 'Corporate',
              imageUrl: 'assets/imgs/6.jpg',
              isLoggedUser: false,
              children: [
                {
                  name: 'Veeru Naidu',
                  designation: 'Sales Executive',
                  territory: 'Lucknow',
                  category: 'Corporate',
                  imageUrl: 'assets/imgs/avtr.png',
                  isLoggedUser: false,
                },
                {
                  name: 'Sameer Sethi',
                  designation: 'Sales Executive',
                  territory: 'Lucknow',
                  category: 'Corporate',
                  imageUrl: 'assets/imgs/7.jpg',
                  isLoggedUser: false,
                },
                {
                  name: 'Raju Sahani',
                  designation: 'Sales Executive',
                  territory: 'Lucknow',
                  category: 'Corporate',
                  imageUrl: 'assets/imgs/8.jpg',
                  isLoggedUser: true,
                },
                {
                  name: 'Rahul Rai',
                  designation: 'Sales Executive',
                  territory: 'Lucknow',
                  category: 'Corporate',
                  imageUrl: 'assets/imgs/9.jpg',
                  isLoggedUser: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Leverling Janet',
      designation: 'Zonal Manager',
      territory: 'South India',
      category: 'Corporate',
      imageUrl: 'assets/imgs/3.jpg',
      isLoggedUser: false,
      children: [
        {
          name: 'Buchanan Patel',
          designation: 'Regional Sales Manager',
          territory: 'WB, Odisha, Jharkhand',
          category: 'Corporate',
          imageUrl: 'assets/imgs/10.jpg',
          isLoggedUser: false,
          children: [
            {
              name: ' Sweta Mishra',
              designation: 'Area Sales Executive',
              territory: 'Bhubaneswar',
              category: 'Corporate',
              imageUrl: 'assets/imgs/13.jpg',
              isLoggedUser: false,
            },
          ],
        },
        {
          name: 'Grace Hamilton',
          designation: 'Regional Sales Manager',
          territory: 'Telangana, Karnataka',
          category: 'Corporate',
          imageUrl: 'assets/imgs/11.jpg',
          isLoggedUser: false,
        },
        {
          name: 'Charlotte Hamilton',
          designation: 'Regional Sales Manager',
          territory: 'Maharashtra, Tamil Nadu',
          category: 'Corporate',
          imageUrl: 'assets/imgs/12.jpeg',
          isLoggedUser: false,
          children: [
            {
              name: 'Appa Rao',
              designation: 'Area Sales Executive',
              territory: 'Chennai',
              category: 'Corporate',
              imageUrl: 'assets/imgs/19.jpg',
              isLoggedUser: false,
            },
            {
              name: 'Shelley Josef',
              designation: 'Area Sales Executive',
              territory: 'Mumbai',
              category: 'Corporate',
              imageUrl: 'assets/imgs/14.jpg',
              isLoggedUser: false,
              children: [
                {
                  name: 'Mahesh Naidu',
                  designation: 'Sales Executive',
                  territory: 'Area 1',
                  category: 'Corporate',
                  imageUrl: 'assets/imgs/15.jpg',
                  isLoggedUser: false,
                },
                {
                  name: 'Manish Pandey',
                  designation: 'Sales Executive',
                  territory: 'Area 2',
                  category: 'Corporate',
                  imageUrl: 'assets/imgs/16.jpg',
                  isLoggedUser: false,
                },
                {
                  name: 'Mahesh Sahani',
                  designation: 'Sales Executive',
                  territory: 'Area 3',
                  category: 'Corporate',
                  imageUrl: 'assets/imgs/17.jpeg',
                  isLoggedUser: false,
                },
                {
                  name: 'Gyanendra Pradhan',
                  designation: 'Sales Executive',
                  territory: 'Area 4',
                  category: 'Corporate',
                  imageUrl: 'assets/imgs/18.jpg',
                  isLoggedUser: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
var i = 0,
  duration = 750,
  rectW = 240,
  rectH = 88;

var tree = d3.layout.tree().nodeSize([rectW + 20, rectH]);
var diagonal = d3.svg.diagonal().projection(function (d) {
  return [d.x + rectW / 2, d.y + rectH / 2];
});

var svg = d3
  .select('#body')
  .append('svg')
  .attr('width', window.innerWidth)
  .attr('height', window.innerHeight)
  .call((zm = d3.behavior.zoom().scaleExtent([0.05, 3]).on('zoom', redraw)))
  .append('g')
  .attr('transform', 'translate(' + window.innerWidth / 2 + ',' + 20 + ')');

//necessary so that zoom knows where to zoom and unzoom from
zm.translate([window.innerWidth / 2, 20]);

root.x0 = 0;
root.y0 = height / 2;

function collapse(d) {
  // if (d.children) {
  //   d._children = d.children;
  //   d._children.forEach(collapse);
  //   d.children = null;
  // }
}

function findmySelf(d) {
  if (d.isLoggedUser) {
    expandParents(d);
  } else if (d._children) {
    d._children.forEach(function (ch) {
      ch.parent = d;
      findmySelf(ch);
    });
  } else if (d.children) {
    d.children.forEach(function (ch) {
      ch.parent = d;
      findmySelf(ch);
    });
  }
}

function expandParents(d) {
  while (d.parent) {
    d = d.parent;
    if (!d.children) {
      d.children = d._children;
      d._children = null;
    }
  }
}

function showMySelf() {
  if (!root.children) {
    if (!root.isLoggedUser) {
      root.children = root._children;
    }
  }
  if (root.children) {
    root.children.forEach(collapse);
    root.children.forEach(findmySelf);
  }

  update(root, true);
}
root.children.forEach(collapse);

update(root);

//d3.select("#body").style("height", "800px");

var tooltip = d3.select('body').append('div').attr('class', 'customTooltip-wrapper');

function update(source, centerMySelf) {
  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function (d) {
    d.y = d.depth * 180;
  });

  // Update the nodes…
  var node = svg.selectAll('g.node').data(nodes, function (d) {
    return d.id || (d.id = ++i);
  });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('transform', function (d) {
      return 'translate(' + source.x0 + ',' + source.y0 + ')';
    })
    .on('click', click);

  nodeEnter
    .append('rect')
    .attr('width', rectW)
    .attr('height', rectH)
    .attr('stroke', '#ea9531')
    .attr('stroke-width', 1)
    .style('fill', function (d) {
      return d._children ? '#C9C9C9' : '#ffffff';
    })
    .attr('class', 'shadow');

  nodeEnter
    .append('text')
    .attr('x', (rectH * 3) / 4 + 5)
    .attr('y', 14)
    .attr('dy', '.35em')
    .attr('text-anchor', 'left')
    .attr('class', 'name')
    .text(function (d) {
      return d.name;
    });

  nodeEnter
    .append('text')
    .attr('x', (rectH * 3) / 4 + 5)
    .attr('y', 36)
    .attr('dy', '.35em')
    .attr('text-anchor', 'left')
    .attr('class', 'desig')
    .text(function (d) {
      return d.designation;
    })
    .style('fill', function (d) {
      if (d.isLoggedUser) return '#ffffff';
    });

  nodeEnter
    .append('text')
    .attr('x', (rectH * 3) / 4 + 5)
    .attr('y', 56)
    .attr('dy', '.35em')
    .attr('text-anchor', 'left')
    .text(function (d) {
      return d.territory;
    })
    .style('fill', function (d) {
      if (d.isLoggedUser) return '#ffffff';
    });

  nodeEnter
    .append('text')
    .attr('x', (rectH * 3) / 4 + 5)
    .attr('y', 75)
    .attr('dy', '.35em')
    .attr('text-anchor', 'left')
    .text(function (d) {
      return d.category;
    })
    .style('fill', function (d) {
      if (d.isLoggedUser) return '#ffffff';
    });

  nodeEnter
    .append('svg:image')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', (rectH * 100) / 140)
    .attr('height', rectH)
    .attr('xlink:href', function (v) {
      return v.imageUrl;
    });

  // Transition nodes to their new position.
  var nodeUpdate = node
    .transition()
    .duration(duration)
    .attr('transform', function (d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });

  nodeUpdate
    .select('rect')
    .attr('width', rectW)
    .attr('height', rectH)
    .attr('stroke', '#ccc')
    .attr('stroke-width', 1)
    .style('fill', function (d) {
      if (d.isLoggedUser) return '#ea9531';
      return d._children ? '#C9C9C9' : '#ffffff';
    })
    .attr('class', 'shadow');

  nodeUpdate.select('text').style('fill-opacity', 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node
    .exit()
    .transition()
    .duration(duration)
    .attr('transform', function (d) {
      return 'translate(' + source.x + ',' + source.y + ')';
    })
    .remove();

  nodeExit
    .select('rect')
    .attr('width', rectW)
    .attr('height', rectH)
    //.attr("width", bbox.getBBox().width)""
    //.attr("height", bbox.getBBox().height)
    .attr('stroke', 'black')
    .attr('stroke-width', 1)
    .attr('class', 'shadow');

  nodeExit.select('text');

  // Update the links…
  var link = svg.selectAll('path.link').data(links, function (d) {
    return d.target.id;
  });

  // Enter any new links at the parent's previous position.
  link
    .enter()
    .insert('path', 'g')
    .attr('class', 'link')
    .attr('x', rectW / 2)
    .attr('y', rectH / 2)
    .attr('d', function (d) {
      var o = {
        x: source.x0,
        y: source.y0,
      };
      return diagonal({
        source: o,
        target: o,
      });
    });

  // Transition links to their new position.
  link.transition().duration(duration).attr('d', diagonal);

  // Transition exiting nodes to the parent's new position.
  link
    .exit()
    .transition()
    .duration(duration)
    .attr('d', function (d) {
      var o = {
        x: source.x,
        y: source.y,
      };
      return diagonal({
        source: o,
        target: o,
      });
    })
    .remove();

  // Stash the old positions for transition.
  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });

  if (centerMySelf) {
    var x;
    var y;

    nodes.forEach(function (d) {
      if (d.isLoggedUser) {
        x = d.x;
        y = d.y;
      }
    });

    // normalize for width/height
    var new_x = -x + window.innerWidth / 2;
    var new_y = -y + window.innerHeight / 2;

    // move the main container g
    svg.attr('transform', 'translate(' + new_x + ',' + new_y + ')');
    zm.translate([new_x, new_y]);
    zm.scale(1);
  }

  /*################  TOOLTIP  #############################*/

  function getTagsFromCommaSeparatedStrings(tags) {
    return tags
      .split(',')
      .map(function (v) {
        return '<li><div class="tag">' + v + '</div></li>  ';
      })
      .join('');
  }

  function tooltipContent(params) {
    return (
      '   <a class="customTooltip">  ' +
      '     <div class="tooltip-image-wrapper"> <img src="' +
      params.imageUrl +
      '">  ' +
      '     </div>  ' +
      '     <div class="tooltip-desc">  ' +
      '       <h4 class="position">' +
      params.name +
      '</h4>  ' +
      '       <h4 class="area">' +
      params.positionName +
      ' </h4>  ' +
      '       <h3 class="name"> ' +
      params.area +
      ' <h3>   ' +
      '       <h4 class="office">' +
      params.office +
      '</h4>  ' +
      '     </div>  ' +
      '  </a>  '
    );

    return (
      '<div >' +
      ' <img width=120 height=160 src="' +
      params.imageUrl +
      '"/>' +
      '<h3 class="tooltip-name">' +
      params.name +
      '</h3>' +
      '<h5 class="tooltip-positionName">' +
      params.positionName +
      '</h3>' +
      '<h5 class="tooltip-department">' +
      params.department +
      '</h3>' +
      '</div>'
    );
  }

  function tooltipHoverHandler(d) {
    tooltip.html(tooltipContent(d));

    tooltip.transition().duration(200).style('opacity', '1').style('display', 'block');
    d3.select(this).attr('cursor', 'pointer').attr('stroke-width', 50);
  }

  function tooltipOutHandler() {
    tooltip.transition().duration(200).style('opacity', '0').style('display', 'none');
    d3.select(this).attr('stroke-width', 5);
  }

  //nodeEnter.on('mouseover', tooltipHoverHandler);

  // nodeEnter.on('mouseout', tooltipOutHandler);

  nodeEnter.on('mousemove', function (d) {
    var zoomIndex = (window.outerWidth - 8) / window.innerWidth;
    tooltip.style('top', /*d3.event.pageY - 300*/ -60 + 'px').style('left', /*d3.event.pageX - 200*/ -125 + 'px');
  });
}

// Toggle children on click.
function click(d) {
  var mdl = document.getElementById('mdlInfo');
  jQuery.noConflict();
  $(mdl).modal('show');
  $('#name').text(d.name);
  $('#desig').text(d.designation);
  $('#territory').text(d.territory);
  $('#category').text(d.category);
  $('.profile-pic').attr('src', d.imageUrl);

  // if (d.children) {
  //   d._children = d.children;
  //   d.children = null;
  // } else {
  //   d.children = d._children;
  //   d._children = null;
  // }
  // update(d);
}

//########################################################

//Redraw for zoom
function redraw() {
  //console.log("here", d3.event.translate, d3.event.scale);
  svg.attr('transform', 'translate(' + d3.event.translate + ')' + ' scale(' + d3.event.scale + ')');
}
