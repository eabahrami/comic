

/* Navigation Bar Toggle */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

/* Previous and Next Buttons */


$(document).ready(function() {
  var divs = $('.mydivs>div');
  var now = 0; // currently shown div
  divs.hide().first().show();
  $("button[name=next]").click(function(e) {
    divs.eq(now).hide();
    now = (now + 1 < divs.length) ? now + 1 : 0;
    divs.eq(now).show(); // show next
  });
  $("button[name=prev]").click(function(e) {
    divs.eq(now).hide();
    now = (now > 0) ? now - 1 : divs.length - 1;
    divs.eq(now).show(); // or .css('display','block');
    //console.log(divs.length, now);
  });
});


/* Lights Animation */

let panelBorder = document.getElementById("Christmas_tree");
let topLightbulbs = document.getElementById("top-lightbulbs-red");
let bottomLightbulbs = document.getElementById("bottom-lightbulbs-yellow");
let starColor = document.getElementById("star-yellow");

panelBorder.addEventListener("click", () => {
    setInterval(lightColorChange, 1000);
  /*
  if(topLightbulbs.style.visibility == "visible") {
      topLightbulbs.style.visibility = "hidden";

  }else {
      topLightbulbs.style.visibility = "visible";

  }
  if(bottomLightbulbs.style.visibility == "visible") {
    bottomLightbulbs.style.visibility = "hidden";
  } else {
    bottomLightbulbs.style.visibility = "visible";
  }
  if(starColor.style.visibility == "visible") {
    starColor.style.visibility = "hidden";
  } else {
    starColor.style.visibility = "visible";
  }*/
})

function lightColorChange() {
  if(topLightbulbs.style.visibility == "visible") {
      topLightbulbs.style.visibility = "hidden";

  }else {
      topLightbulbs.style.visibility = "visible";
  }
  if(bottomLightbulbs.style.visibility == "visible") {
    bottomLightbulbs.style.visibility = "hidden";
  } else {
    bottomLightbulbs.style.visibility = "visible";
  }
  if(starColor.style.visibility == "visible") {
    starColor.style.visibility = "hidden";
  } else {
    starColor.style.visibility = "visible";
  }
}
