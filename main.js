//verouillage majuscule

let warning = document.getElementById("warning");
document.getElementById("input").addEventListener("keyup",
function(event) {
   if(event.getModifierState("CapsLock") == true){
        warning.style.display ="block";
   }else{
        warning.style.display="none";
   }
});

// verouillage numérique
let warningnum=document.getElementById("warningnum");
document.getElementById("input").addEventListener("keyup",
function(num) {
   if(num.getModifierState("NumLock") == true){
        warningnum.style.display ="none";

    }else{
        warningnum.style.display="block";
   }
});

// // //les deux à la fois
let warningboth=document.getElementById("warningboth");
document.getElementById("input").addEventListener("keyup", function (both) {
  if ((both.getModifierState("NumLock") == false) && (both.getModifierState("CapsLock") == true)) {
    warningboth.style.display = "block";
    warning.style.display = "none";
    warningnum.style.display = "none";
  } else {
    warningboth.style.display = "none";
  }
});
