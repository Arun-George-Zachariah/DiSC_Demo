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
  var ws1 = new WebSocket("ws://128.110.154.248:8080/StreamData/discStream");

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

  //Chart 2 - Start
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
  var ws2 = new WebSocket("ws://128.110.155.13:8080/StreamData/discStream");

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

  //Chart 3 - Start
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
  var ws3 = new WebSocket("ws://128.110.154.160:8080/StreamData/discStream");

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

  //Chart 4 - Start
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
  var ws4 = new WebSocket("ws://128.110.154.137:8080/StreamData/discStream");

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

  var dps5 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Chart 5 - Start
  var chart5 = new CanvasJS.Chart("chartContainer5", {
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
      dataPoints: dps5
    }]
  });

  var updateChart5 = function (xVal, yVal) {
    dps5.push({
      x: xVal,
      y: yVal
    });

    if (dps5.length > dataLength) {
      dps5.shift();
    }

    chart5.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws5 = new WebSocket("ws://128.110.154.149:8080/StreamData/discStream");

  ws5.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart5(Number(res[0]), Number(res[1]));
  };

  ws5.onerror = function(event){
    console.log("Error on WebSocket 5", event)
  }
  //Creating Web Socket - End

  var dps6 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Chart 4 - Start
  var chart6 = new CanvasJS.Chart("chartContainer6", {
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
      dataPoints: dps6
    }]
  });

  var updateChart6 = function (xVal, yVal) {
    dps6.push({
      x: xVal,
      y: yVal
    });

    if (dps6.length > dataLength) {
      dps6.shift();
    }

    chart6.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws6 = new WebSocket("ws://128.110.155.9:8080/StreamData/discStream");

  ws6.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart6(Number(res[0]), Number(res[1]));
  };

  ws6.onerror = function(event){
    console.log("Error on WebSocket 6", event)
  }
  //Creating Web Socket - End

  var dps7 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Chart 4 - Start
  var chart7 = new CanvasJS.Chart("chartContainer7", {
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
      dataPoints: dps7
    }]
  });

  var updateChart7 = function (xVal, yVal) {
    dps7.push({
      x: xVal,
      y: yVal
    });

    if (dps7.length > dataLength) {
      dps7.shift();
    }

    chart7.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws7 = new WebSocket("ws://128.110.155.25:8080/StreamData/discStream");

  ws7.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart7(Number(res[0]), Number(res[1]));
  };

  ws7.onerror = function(event){
    console.log("Error on WebSocket 7", event)
  }
  //Creating Web Socket - End

  var dps8 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Chart 4 - Start
  var chart8 = new CanvasJS.Chart("chartContainer8", {
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
      dataPoints: dps8
    }]
  });

  var updateChart8 = function (xVal, yVal) {
    dps8.push({
      x: xVal,
      y: yVal
    });

    if (dps8.length > dataLength) {
      dps8.shift();
    }

    chart8.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws8 = new WebSocket("ws://128.110.155.22:8080/StreamData/discStream");

  ws8.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart8(Number(res[0]), Number(res[1]));
  };

  ws8.onerror = function(event){
    console.log("Error on WebSocket 8", event)
  }
  //Creating Web Socket - End

  var dps9 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Chart 4 - Start
  var chart9 = new CanvasJS.Chart("chartContainer9", {
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
      dataPoints: dps9
    }]
  });

  var updateChart9 = function (xVal, yVal) {
    dps9.push({
      x: xVal,
      y: yVal
    });

    if (dps9.length > dataLength) {
      dps9.shift();
    }

    chart9.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws9 = new WebSocket("ws://128.110.154.140:8080/StreamData/discStream");

  ws9.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart9(Number(res[0]), Number(res[1]));
  };

  ws9.onerror = function(event){
    console.log("Error on WebSocket 9", event)
  }
  //Creating Web Socket - End

  var dps10 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Chart 4 - Start
  var chart10 = new CanvasJS.Chart("chartContainer10", {
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
      dataPoints: dps10
    }]
  });

  var updateChart10 = function (xVal, yVal) {
    dps10.push({
      x: xVal,
      y: yVal
    });

    if (dps10.length > dataLength) {
      dps10.shift();
    }

    chart10.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws10 = new WebSocket("ws://128.110.154.159:8080/StreamData/discStream");

  ws10.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart10(Number(res[0]), Number(res[1]));
  };

  ws10.onerror = function(event){
    console.log("Error on WebSocket 10", event)
  }
  //Creating Web Socket - End

  var dps11 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Chart 4 - Start
  var chart11 = new CanvasJS.Chart("chartContainer11", {
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
      dataPoints: dps11
    }]
  });

  var updateChart11 = function (xVal, yVal) {
    dps11.push({
      x: xVal,
      y: yVal
    });

    if (dps11.length > dataLength) {
      dps11.shift();
    }

    chart11.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws11 = new WebSocket("ws://128.110.154.243:8080/StreamData/discStream");

  ws11.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart11(Number(res[0]), Number(res[1]));
  };

  ws11.onerror = function(event){
    console.log("Error on WebSocket 11", event)
  }
  //Creating Web Socket - End

  var dps12 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Chart 4 - Start
  var chart12 = new CanvasJS.Chart("chartContainer12", {
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
      dataPoints: dps12
    }]
  });

  var updateChart12 = function (xVal, yVal) {
    dps12.push({
      x: xVal,
      y: yVal
    });

    if (dps12.length > dataLength) {
      dps12.shift();
    }

    chart12.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws12 = new WebSocket("ws://128.110.155.4:8080/StreamData/discStream");

  ws12.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart12(Number(res[0]), Number(res[1]));
  };

  ws12.onerror = function(event){
    console.log("Error on WebSocket 12", event)
  }
  //Creating Web Socket - End

  var dps13 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Chart 4 - Start
  var chart13 = new CanvasJS.Chart("chartContainer13", {
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
      dataPoints: dps13
    }]
  });

  var updateChart13 = function (xVal, yVal) {
    dps13.push({
      x: xVal,
      y: yVal
    });

    if (dps13.length > dataLength) {
      dps13.shift();
    }

    chart13.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws13 = new WebSocket("ws://128.110.155.10:8080/StreamData/discStream");

  ws13.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart13(Number(res[0]), Number(res[1]));
  };

  ws13.onerror = function(event){
    console.log("Error on WebSocket 13", event)
  }
  //Creating Web Socket - End

  var dps14 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Chart 4 - Start
  var chart14 = new CanvasJS.Chart("chartContainer14", {
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
      dataPoints: dps14
    }]
  });

  var updateChart14 = function (xVal, yVal) {
    dps14.push({
      x: xVal,
      y: yVal
    });

    if (dps14.length > dataLength) {
      dps14.shift();
    }

    chart14.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws14 = new WebSocket("ws://128.110.154.156:8080/StreamData/discStream");

  ws14.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart14(Number(res[0]), Number(res[1]));
  };

  ws14.onerror = function(event){
    console.log("Error on WebSocket 14", event)
  }
  //Creating Web Socket - End

  var dps15 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Chart 4 - Start
  var chart15 = new CanvasJS.Chart("chartContainer15", {
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
      dataPoints: dps15
    }]
  });

  var updateChart15 = function (xVal, yVal) {
    dps15.push({
      x: xVal,
      y: yVal
    });

    if (dps15.length > dataLength) {
      dps15.shift();
    }

    chart15.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws15 = new WebSocket("ws://128.110.155.21:8080/StreamData/discStream");

  ws15.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart15(Number(res[0]), Number(res[1]));
  };

  ws15.onerror = function(event){
    console.log("Error on WebSocket 15", event)
  }
  //Creating Web Socket - End

  var dps16 = []; // dataPoints

  var updateInterval = 1000;
  var dataLength = 20000000; // number of dataPoints visible at any point

  //Chart 4 - Start
  var chart16 = new CanvasJS.Chart("chartContainer16", {
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
      dataPoints: dps16
    }]
  });

  var updateChart16 = function (xVal, yVal) {
    dps16.push({
      x: xVal,
      y: yVal
    });

    if (dps16.length > dataLength) {
      dps16.shift();
    }

    chart16.render();
  };
  //Creating Charts - End

  //Creating Web Socket - Start
  var ws16 = new WebSocket("ws://128.110.155.27:8080/StreamData/discStream");

  ws16.onmessage = function(event) {
    console.log("Sending the data");
    var str = event.data;
    var res = str.split(",");

    updateChart16(Number(res[0]), Number(res[1]));
  };

  ws16.onerror = function(event){
    console.log("Error on WebSocket 16", event)
  }
  //Creating Web Socket - End
  });
