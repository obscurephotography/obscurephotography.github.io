var vis_home = true;
var vis_port = false;
var vis_cont = false;
var vis_who = false;

$(document).ready(function() { 
    $(".info-block").hide();
});

$(document).ready(function() { 
  $("#menu_port").click(function() { 
    if ((vis_home == true || vis_cont == true || vis_who == true) && vis_port == false) {

        $("#who").fadeOut(750);
        $("#cont").fadeOut(750);

        $("#port").fadeIn(750);

        $("#menu_home").removeClass("active");
        $("#menu_who").removeClass("active");
        $("#menu_cont").removeClass("active");
        $("#menu_port").addClass("active");

        vis_port = true;
        vis_home = false;
        vis_cont = false;
        vis_who = false;

        $(".horizon-prev").hide();
        $(".portphoto").hide();
        $("#portf1").show();
        
        return false;
    } else if (vis_port == true) {
        $("#port").fadeOut(750);
        $("#menu_port").removeClass("active");
        $("#menu_home").addClass("active");
        vis_port = false;
        vis_home = true;

        return false;         
    }
  });
});

$(document).ready(function() { 
    $("#menu_home").click(function() { 
        if ((vis_port == true || vis_who == true || vis_cont == true) && vis_home == false){
        
        $("#port").fadeOut(750);
        $("#who").fadeOut(750);
        $("#cont").fadeOut(750);

        $("#menu_port").removeClass("active");
        $("#menu_who").removeClass("active");
        $("#menu_cont").removeClass("active");       
        $("#menu_home").addClass("active");

        vis_port = false;
        vis_home = true;
        vis_cont = false;
        vis_who = false;

        return false;
        } else { return false; }
  });
}); 

$(document).ready(function() { 
    $("#menu_who").click(function() { 
        if ((vis_home == true || vis_cont == true || vis_port == true) && vis_who == false){

        $("#port").fadeOut(750);
        $("#cont").fadeOut(750);

        $("#who").fadeIn(750);

        $("#menu_home").removeClass("active");
        $("#menu_port").removeClass("active");
        $("#menu_cont").removeClass("active");
        $("#menu_who").addClass("active");

        vis_port = false;
        vis_home = false;
        vis_cont = false;
        vis_who = true;

        return false;
        } else
        if (vis_who == true){
        $("#who").fadeOut(750);
        $("#menu_who").removeClass("active");
        $("#menu_home").addClass("active");
        vis_who = false;
        vis_home = true;

        return false;          
    }
  });
});

$(document).ready(function() { 
    $("#menu_cont").click(function() { 
        if ((vis_home == true || vis_port == true|| vis_who == true) && vis_cont == false){

        $("#port").fadeOut(750);
        $("#who").fadeOut(750);

        $("#cont").fadeIn(750);

        $("#menu_home").removeClass("active");
        $("#menu_who").removeClass("active");
        $("#menu_port").removeClass("active");
        $("#menu_cont").addClass("active");

        vis_port = false;
        vis_home = false;
        vis_cont = true;
        vis_who = false;

        return false;
        } else
        if (vis_cont == true){
        $("#cont").fadeOut(750);
        $("#menu_cont").removeClass("active");
        $("#menu_home").addClass("active");
        vis_cont = false; 
        vis_home = true;

        return false;         
        }
  });
});