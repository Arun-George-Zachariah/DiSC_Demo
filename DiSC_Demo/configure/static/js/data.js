$(document).ready(function() {
    //Check if the gossip is in progress. If not redirect to display plots.
    $("#button").click( function() {
      $.ajax({
        url: 'http://localhost:8000/disc/plots',
        success: function (data) {
          if(typeof(data.inProgress) === 'undefined') {
            //window.location.replace('http://localhost:8000/disc/plots');
          } else {
            alert("Please Wait! The Gossip Process is in progress.");
          }
        }
      });
      return false;
    });

    //To display accordions
    $(function() {
      $( "#accordion" ).accordion();
    });

    //To check if the gossip is complete and to auto redirect to the plots page.
    var w;
    if(typeof(Worker) !== "undefined") {
      if(typeof(w) == "undefined") {
        w = new Worker("../static/js/gossipWorker.js");
      }
      w.onmessage = function(event) {
        try {
          if($.parseJSON(event.data).inProgress == 'true') {
            console.log("The Gossip Process is in progress.");
          }
        }
        catch(err) {
          console.log("Gossip is Completed");
          $("#div1").removeAttr("style");
          $("#div2").removeAttr("style");
          //window.location.replace('http://localhost:8000/disc/plots');
        }
      };
    } else {
      alert("Sorry, your browser will not support the Demo");
    }

    //Error Plot Stream - Start
    var dps1 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Creating Charts - Start
  //Chart 1 - Start
  var chart1 = new CanvasJS.Chart("chartContainer1", {
    title :{
      text: "Relative Error"
    },
    axisX: {
      includeZero: true,
      title: 'Time (Seconds)',
    },
    axisY: {
      includeZero: true,
      title: "Avg. Relative Error",
      suffix: "%"
    },
    data: [{
      type: "line",
      dataPoints: dps1
    }]
  });

  var updateChart1 = function (xVal, yVal) {
    dps1.push({
      x: xVal,
      y: yVal
    });

    if (dps1.length > dataLength) {
      dps1.shift();
    }

    chart1.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws1 = new WebSocket("ws://128.110.153.173:8080/StreamData/discStream");

  ws1.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart1(Number(res[0]), Number(res[1]));
  };

  ws1.onerror = function(event){
    console.log("Error on WebSocket 1", event)
  }
  //Creating Web Socket - End

  var dps2 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Creating Charts - Start
  //Chart 1 - Start
  var chart2= new CanvasJS.Chart("chartContainer2", {
    title :{
      text: "Relative Error"
    },
    axisX: {
      includeZero: true,
      title: 'Time (Seconds)',
    },
    axisY: {
      includeZero: true,
      title: "Avg. Relative Error",
      suffix: "%"
    },
    data: [{
      type: "line",
      dataPoints: dps2
    }]
  });

  var updateChart2 = function (xVal, yVal) {
    dps2.push({
      x: xVal,
      y: yVal
    });

    if (dps2.length > dataLength) {
      dps2.shift();
    }

    chart2.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws2 = new WebSocket("ws://128.110.153.174:8080/StreamData/discStream");

  ws2.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart2(Number(res[0]), Number(res[1]));
  };

  ws2.onerror = function(event){
    console.log("Error on WebSocket 2", event)
  }
  //Creating Web Socket - End

  var dps3 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Creating Charts - Start
  //Chart 1 - Start
  var chart3 = new CanvasJS.Chart("chartContainer3", {
    title :{
      text: "Relative Error"
    },
    axisX: {
      includeZero: true,
      title: 'Time (Seconds)',
    },
    axisY: {
      includeZero: true,
      title: "Avg. Relative Error",
      suffix: "%"
    },
    data: [{
      type: "line",
      dataPoints: dps3
    }]
  });

  var updateChart3 = function (xVal, yVal) {
    dps3.push({
      x: xVal,
      y: yVal
    });

    if (dps3.length > dataLength) {
      dps3.shift();
    }

    chart3.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws3 = new WebSocket("ws://128.110.153.160:8080/StreamData/discStream");

  ws3.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart3(Number(res[0]), Number(res[1]));
  };

  ws3.onerror = function(event){
    console.log("Error on WebSocket 3", event)
  }
  //Creating Web Socket - End

  var dps4 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Creating Charts - Start
  //Chart 1 - Start
  var chart4 = new CanvasJS.Chart("chartContainer4", {
    title :{
      text: "Relative Error"
    },
    axisX: {
      includeZero: true,
      title: 'Time (Seconds)',
    },
    axisY: {
      includeZero: true,
      title: "Avg. Relative Error",
      suffix: "%"
    },
    data: [{
      type: "line",
      dataPoints: dps4
    }]
  });

  var updateChart4 = function (xVal, yVal) {
    dps4.push({
      x: xVal,
      y: yVal
    });

    if (dps4.length > dataLength) {
      dps4.shift();
    }

    chart4.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws4 = new WebSocket("ws://128.110.153.165:8080/StreamData/discStream");

  ws4.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart4(Number(res[0]), Number(res[1]));
  };

  ws4.onerror = function(event){
    console.log("Error on WebSocket 4", event)
  }
  //Creating Web Socket - End
  });
