// Add jQuery codes to make it work

$(document).ready(function() {
    $("#btnShowBanana").click(function() {
      $("#banana").removeClass("collapse");
    });
  
    $("#btnHideBanana").click(function() {
      $("#banana").addClass("collapse");
    });
  
    $("#btnShowMonkey").click(function() {
      $("#monkey").removeClass("collapse");
    });
  
    $("#btnHideMonkey").click(function() {
      $("#monkey").addClass("collapse");
    });
  });
  