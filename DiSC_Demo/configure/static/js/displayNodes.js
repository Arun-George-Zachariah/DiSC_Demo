$(document).ready(function(){
  //var nodes=document.getElementById('NodesCount').value;
var nodes=16;
  console.log("nodes :: " + nodes);

  var j;
  for (j = 1;j <= nodes; j++) {
    var iDiv = document.createElement('div');
    iDiv.id = 'field'+j;
    iDiv.className = 'field';
    document.getElementById("container").appendChild(iDiv);
    var textnode = document.createTextNode(j);
    document.getElementById('field'+j).appendChild(textnode);
  }

  function makeSVG(tag, attrs) {
    var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
    el.setAttribute(k, attrs[k]);
    return el;
  }

  var map = new Object();
  var radius = 200;
  var fields = $('.field'), container = $('#container'), width = container.width(), height = container.height();
  var angle = 0, step = (2*Math.PI) / fields.length;
  var i=1;
  fields.each(function() {
    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
    var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
    var cordMap = {"x":x,"y":y};
    map[i] = cordMap;
    $(this).css({
      left: x + 'px',
      top: y + 'px'
    });
    angle += step;
    i += 1;
  });

  for (var key1 in map) {
    for(var key2 in map) {
      if(key1 != key2) {
        var srcMap = map[key1];
        var destMap = map[key2];
        var xa = srcMap["x"];
        var ya = srcMap["y"];
        var xb = destMap["x"];
        var yb = destMap["y"];
        //console.log("x1 :: " + xa + " :: y1 :: " + ya);
        //console.log("x2 :: " + xb + " :: y2 :: " + yb);
        var line= makeSVG('line', {id: key1+"-"+key2, display: "none", class : "key-anim1",x1: xa+20, y1: ya+20, x2: xb+20, y2:yb+20, stroke: 'black', 'stroke-width': 2});
        document.getElementById("svg").appendChild(line);
      }
    }
  }
});

$(document).ready(function(){
  //ws1
  var ws1 = new WebSocket("ws://128.110.153.173:8080/NodeStream/NodeStream");

  ws1.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '2') {
      $("#1-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#1-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#1-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-4").attr("display", "none");
      }, 1000);

    }

  };

  //ws2
  var ws2 = new WebSocket("ws://128.110.153.174:8080/NodeStream/NodeStream");

  ws2.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#2-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#2-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#2-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-4").attr("display", "none");
      }, 1000);

    }

  };

  //ws2
  var ws3 = new WebSocket("ws://128.110.153.174:8080/NodeStream/NodeStream");

  ws3.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#3-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#3-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#3-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-4").attr("display", "none");
      }, 1000);

    }

  };

});
