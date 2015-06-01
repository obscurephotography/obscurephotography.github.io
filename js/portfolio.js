var i;
var maxi = 9;
var vis_port = false;

$(document).ready(function() { 
    $("#menu_port").click(function() { 
        i = 1;
        $(".horizon-prev").hide();
        $(".portphoto").hide();
        $("#portf1").show();
  });
});

$(document).ready(function() { 
    $(".horizon-next").click(function() {     
    i++;

    if (i <= maxi) {
        if (i > 1) { $("#portf"+(i-1)).fadeOut(750); }
        $("#portf"+i).fadeIn(750);
    }
       
    if (i == maxi) { $(".horizon-next").hide(); } else { $(".horizon-next").show(); }
    if (i == 1) { $(".horizon-prev").hide(); } else { $(".horizon-prev").show(); }
  });
});

$(document).ready(function() { 
    $(".horizon-prev").click(function() {
    i--;

    if (i <= maxi) {
        if (i > 1) { $("#portf"+(i+1)).fadeOut(750); }
        $("#portf"+(i)).fadeIn(750);
    }
       
    if (i == maxi) { $(".horizon-next").hide(); } else { $(".horizon-next").show(); }
    if (i == 1) { $(".horizon-prev").hide(); } else { $(".horizon-prev").show(); }
  });
});
