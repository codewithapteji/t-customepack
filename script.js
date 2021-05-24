var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
}

// var hover = document.getElementById("o");
// hover.addEventListener("click",function(){
//   prompt("hiii");
// });


// var hovert = document.getElementById("n");
// hovert.addEventListener("click",function(){
//   prompt("hiii");
// });


// var hoverth = document.getElementById("e");
// hoverth.addEventListener("click",function(){
//   prompt("hiii");
// });

// var elms = document.querySelectorAll("[class='courseoffer']");

// for(var i=0; i<elms.length ;i++){
//   elms[i].addEventListener("click",function(){
//     console.log(elms[i]);
//   })
// }

function myfunc(id)
  {
    if(id==="one"){
      document.getElementById(id).style.backgroundColor = "#FF9D8F";
      document.getElementById(id).style.color = "#fff";
      document.getElementById(id).style.boxShadow = "0px 0px 30px 5px #ececec";
    }
    else if(id==="two"){
      document.getElementById(id).style.backgroundColor = "#AECAF9";
      document.getElementById(id).style.color = "#fff"; 
      document.getElementById(id).style.boxShadow = "0px 0px 30px 5px #ececec";
    }
    else{
      document.getElementById(id).style.backgroundColor = "#7BC6BE";
      document.getElementById(id).style.color = "#fff";
      document.getElementById(id).style.boxShadow = "0px 0px 30px 5px #ececec";
    }
  }