$(document).ready(function(){
  var nodes=document.getElementById('NodesCount').value;
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
  var ws1 = new WebSocket("ws://128.110.154.248:8080/NodeStream/NodeStream");

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

    if(event.data == '5') {
      $("#1-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#1-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#1-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#1-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#1-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#1-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#1-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#1-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#1-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#1-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#1-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#1-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#1-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws2
  var ws2 = new WebSocket("ws://128.110.155.13:8080/NodeStream/NodeStream");

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

    if(event.data == '5') {
      $("#2-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#2-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#2-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#2-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#2-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#2-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#2-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#2-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#2-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#2-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#2-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#2-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws3
  var ws3 = new WebSocket("ws://128.110.154.160:8080/NodeStream/NodeStream");

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

    if(event.data == '5') {
      $("#3-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#3-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#3-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#3-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#3-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#3-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#3-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#3-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#3-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#3-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#3-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#3-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#3-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws4
  var ws4 = new WebSocket("ws://128.110.154.137:8080/NodeStream/NodeStream");

  ws4.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#4-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#4-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#4-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '5') {
      $("#4-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#4-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#4-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#4-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#4-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#4-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#4-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#4-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#4-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#4-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#4-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#4-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#4-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws5
  var ws5 = new WebSocket("ws://128.110.154.149:8080/NodeStream/NodeStream");

  ws5.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#5-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#5-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#5-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#5-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-4").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#5-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#5-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#5-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#5-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#5-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#5-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#5-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#5-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#5-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#5-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#5-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#5-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws6
  var ws6 = new WebSocket("ws://128.110.155.9:8080/NodeStream/NodeStream");

  ws6.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#6-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#6-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#6-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#6-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-4").attr("display", "none");
      }, 1000);

    }

    if(event.data == '5') {
      $("#6-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#6-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#6-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#6-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#6-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#6-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#6-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#6-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#6-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#6-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#6-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#6-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws7
  var ws7 = new WebSocket("ws://128.110.155.25:8080/NodeStream/NodeStream");

  ws7.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#7-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#7-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#7-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#7-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-4").attr("display", "none");
      }, 1000);

    }

    if(event.data == '5') {
      $("#7-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#7-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#7-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#7-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#7-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#7-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#7-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#7-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#7-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#7-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#7-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#7-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws8
  var ws8 = new WebSocket("ws://128.110.155.22:8080/NodeStream/NodeStream");

  ws8.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#8-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#8-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#8-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#8-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-4").attr("display", "none");
      }, 1000);

    }

    if(event.data == '5') {
      $("#8-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#8-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#8-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#8-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#8-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#8-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#8-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#8-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#8-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#8-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#8-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#8-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws9
  var ws9 = new WebSocket("ws://128.110.154.140:8080/NodeStream/NodeStream");

  ws9.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#9-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#9-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#9-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#9-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-4").attr("display", "none");
      }, 1000);

    }

    if(event.data == '5') {
      $("#9-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#9-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#9-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#9-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#9-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#9-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#9-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#9-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#9-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#9-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#9-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#9-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws10
  var ws10 = new WebSocket("ws://128.110.154.159:8080/NodeStream/NodeStream");

  ws10.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#10-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#10-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#10-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#10-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-4").attr("display", "none");
      }, 1000);

    }

    if(event.data == '5') {
      $("#10-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#10-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#10-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#10-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#10-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#10-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#10-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#10-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#10-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#10-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#10-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#10-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws
  var ws11 = new WebSocket("ws://128.110.154.243:8080/NodeStream/NodeStream");

  ws11.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#11-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#11-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#11-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#11-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-4").attr("display", "none");
      }, 1000);

    }

    if(event.data == '5') {
      $("#11-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#11-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#11-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#11-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#11-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#11-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#11-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#11-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#11-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#11-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#11-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#11-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws12
  var ws12 = new WebSocket("ws://128.110.155.4:8080/NodeStream/NodeStream");

  ws12.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#12-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#12-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#12-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#2-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-4").attr("display", "none");
      }, 1000);

    }

    if(event.data == '5') {
      $("#12-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#12-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#12-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#12-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#12-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#12-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#12-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#12-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#12-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#12-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#12-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#12-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws2
  var ws13 = new WebSocket("ws://128.110.155.10:8080/NodeStream/NodeStream");

  ws13.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#13-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#13-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#13-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#13-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-4").attr("display", "none");
      }, 1000);

    }

    if(event.data == '5') {
      $("#13-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#13-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#13-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#13-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#13-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#13-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#13-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#13-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#13-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#13-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#13-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#13-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws14
  var ws14 = new WebSocket("ws://128.110.154.156:8080/NodeStream/NodeStream");

  ws14.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#14-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#14-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#14-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#14-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-4").attr("display", "none");
      }, 1000);

    }

    if(event.data == '5') {
      $("#14-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#14-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#14-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#14-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#14-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#2-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#2-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#14-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#14-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#14-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#14-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-15").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#14-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#14-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws15
  var ws15 = new WebSocket("ws://128.110.155.21:8080/NodeStream/NodeStream");

  ws15.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#15-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#15-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#15-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#15-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-4").attr("display", "none");
      }, 1000);

    }

    if(event.data == '5') {
      $("#15-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#15-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#15-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#15-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#15-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#15-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#15-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#15-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#15-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#15-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '16') {
      $("#15-16").removeAttr("display", "none");

      setTimeout(function() {
        $("#15-16").attr("display", "none");
      }, 1000);

    }

  };

  //ws16
  var ws16 = new WebSocket("ws://128.110.155.27:8080/NodeStream/NodeStream");

  ws16.onmessage = function(event) {
    console.log("Received the data :: " + event.data);

    if(event.data == '1') {
      $("#16-1").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-1").attr("display", "none");
      }, 1000);

    }

    if(event.data == '2') {
      $("#16-2").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-2").attr("display", "none");
      }, 1000);

    }

    if(event.data == '3') {
      $("#16-3").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-3").attr("display", "none");
      }, 1000);

    }

    if(event.data == '4') {
      $("#16-4").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-4").attr("display", "none");
      }, 1000);

    }

    if(event.data == '5') {
      $("#16-5").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-5").attr("display", "none");
      }, 1000);

    }

    if(event.data == '6') {
      $("#16-6").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-6").attr("display", "none");
      }, 1000);

    }

    if(event.data == '7') {
      $("#16-7").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-7").attr("display", "none");
      }, 1000);

    }

    if(event.data == '8') {
      $("#16-8").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-8").attr("display", "none");
      }, 1000);

    }

    if(event.data == '9') {
      $("#16-9").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-9").attr("display", "none");
      }, 1000);

    }

    if(event.data == '10') {
      $("#16-10").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-10").attr("display", "none");
      }, 1000);

    }

    if(event.data == '11') {
      $("#16-11").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-11").attr("display", "none");
      }, 1000);

    }

    if(event.data == '12') {
      $("#16-12").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-12").attr("display", "none");
      }, 1000);

    }

    if(event.data == '13') {
      $("#16-13").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-13").attr("display", "none");
      }, 1000);

    }

    if(event.data == '14') {
      $("#16-14").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-14").attr("display", "none");
      }, 1000);

    }

    if(event.data == '15') {
      $("#16-15").removeAttr("display", "none");

      setTimeout(function() {
        $("#16-15").attr("display", "none");
      }, 1000);

    }

  };

});
