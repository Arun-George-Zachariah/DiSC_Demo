$(document).ready(function() {
  $("#submit").click(function() {
    $.blockUI({ message: '<img src="../static/images/spinner.gif"/><br><p>Please Wait. The gossip procsses is being initialized.</p>' });
  })
})
