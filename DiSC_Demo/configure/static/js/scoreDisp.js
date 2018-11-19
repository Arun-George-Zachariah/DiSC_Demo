var output;

var ajax = function(url, type) {
  output = "";
  var req = new XMLHttpRequest();
  req.open(type, url, true);
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
      output = JSON.parse(req.responseText)
      //alert("The Score has been generated!")
      $( "#scorePlaceholder" ).remove();
      $( "#score" ).append("The Estimated score calculated is "+ output.EstScore + " while the actual score is "+ output.ActScore + "." );
      //Preventing UI from being blocked.
      //$.blockUI({ message: '<div style="top:25%; position:relative;"><br><p style="font-size: 20px;">The Estimated score calculated is :: ' + output.EstScore + ' while the actual score is '+ output.ActScore + '.</p></div>' });
    }
  };
  req.send("");
  return req;
};

$(document).ready(function() {
    //To check if the gossip is complete and to auto redirect to the plots page.
    var w;
    //Note worker thread needs to be stopped after the gossip process is complete.
    if(typeof(Worker) !== "undefined") {
      console.log("Creating worker");
      if(typeof(w) == "undefined") {
        w = new Worker("../static/js/gossipWorker.js");
      }
      w.onmessage = function(event) {

          if($.parseJSON(event.data).inProgress == 'true') {
            console.log("The Gossip Process is in progress.");
          } else if($.parseJSON(event.data).inProgress == 'false') {
            //Killing the worker as the gossip process is completed.
            w.terminate();
            console.log("Gossip is Completed");
            ajax('http://128.110.152.141:8080/StreamData/CalcScore','GET');
          }
      };
    } else {
      alert("Sorry, your browser will not support the Demo");
    }
  });
