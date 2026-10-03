
function ResetSettings()
{
  localStorage.setItem("IsButton0on", false);
  localStorage.setItem("IsButton1on", true);
  localStorage.setItem("IsButton2on", false);
  
  Button4.style.animation = "ClickReset 0.15s ease";
  Button4.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
  Button4.style.color = "white";
  location.reload();



}



function ResetAll()
{
  localStorage.setItem("IsButton0on", false);
  localStorage.setItem("IsButton1on", true);
  localStorage.setItem("IsButton2on", false);
  ResetScores();
  location.reload();
}



var Button = document.getElementById("Button0");
var Button1 = document.getElementById("Button1");
var Button2 = document.getElementById("Button2");
var Button3 = document.getElementById("Button3");
var Button4 = document.getElementById("Button4");
var Button5 = document.getElementById("Button5");

var DisableHoverButton1 = false;

const myElement = document.getElementsByClassName("U");
var IsButton0on = JSON.parse(localStorage.getItem("IsButton0on"));

var IsButton1on = JSON.parse(localStorage.getItem("IsButton1on"));

var IsButton2on = JSON.parse(localStorage.getItem("IsButton2on"));



console.log(IsButton0on);















if (IsButton0on == null) {
  localStorage.setItem("IsButton0on", false);
  IsButton0on = JSON.parse(localStorage.getItem("IsButton0on"));

}
else {

  if (JSON.parse(localStorage.getItem("IsButton0on")) == true) {
    YesMag();
    Button.style.color = "black";
    Button.innerHTML = "on";
    Button.style.backgroundColor = "rgb(94, 255, 0)";


    localStorage.setItem("IsButton0on", IsButton0on);

  }
  else {
    NoMag();
    Button.style.color = "white";
    Button.innerHTML = "off";
    Button.style.backgroundColor = "rgba(64, 64, 64, 0.8)";

    localStorage.setItem("IsButton0on", IsButton0on);
  }
}





if (IsButton1on == null) {
  localStorage.setItem("IsButton1on", true);
  IsButton1on = JSON.parse(localStorage.getItem("IsButton1on"));

}
else {

  if (JSON.parse(localStorage.getItem("IsButton1on")) == true) {
    Button1.style.color = "black";
    Button1.innerHTML = "on";
    Button1.style.backgroundColor = "rgb(94, 255, 0)";


    localStorage.setItem("IsButton1on", IsButton1on);

  }
  else {
    Button1.style.color = "white";
    Button1.innerHTML = "off";
    Button1.style.backgroundColor = "rgba(64, 64, 64, 0.8)";

    localStorage.setItem("IsButton1on", IsButton1on);
  }
}








if (IsButton2on == null) {
  localStorage.setItem("IsButton2on", false);
  IsButton2on = JSON.parse(localStorage.getItem("IsButton2on"));

}
else {

  if (JSON.parse(localStorage.getItem("IsButton2on")) == true) {
    localStorage.setItem("IsButton1on", false);
    Button1.disabled = true;
    DisableHoverButton1 = true;
    Button1.style.color = "white";

    Button1.textContent = "off";
    Button1.style.backgroundColor = "rgba(24, 24, 24, 0.6)";
    
    Button2.style.color = "black";
    Button2.textContent = "on";
    Button2.style.backgroundColor = "rgb(94, 255, 0)";



  }
  else {
    Button1.disabled = false;
    DisableHoverButton1 = false;
    localStorage.setItem("IsButton1on", IsButton1on);
    if (JSON.parse(localStorage.getItem("IsButton1on")) == true) {
      Button1.style.color = "black";
      Button1.textContent = "on";
      Button1.style.backgroundColor = "rgb(94, 255, 0)";
  
  
  
    }
    else {
      Button1.style.color = "white";
  
      Button1.textContent = "off";
      Button1.style.backgroundColor = "rgba(64, 64, 64, 0.8)";
  
    }








    Button2.style.color = "white";

    Button2.textContent = "off";
    Button2.style.backgroundColor = "rgba(64, 64, 64, 0.8)";

  }
}











Button.addEventListener("click", Function1);
Button1.addEventListener("click", Function2);
Button2.addEventListener("click", Function3);
Button3.addEventListener("click", ResetScores);
Button4.addEventListener("click", ResetSettings);
Button5.addEventListener("click", ResetAll);

var previousColor = "";
Button.addEventListener("mouseenter", () => {
  Button.style.backgroundColor = "rgb(255, 255, 255)";
  Button.style.color = "black";
  
  // Perform actions when the mouse enters the button
});

Button.addEventListener("mouseleave", () => {

  if (JSON.parse(localStorage.getItem("IsButton0on")) == true) {
    YesMag();

    Button.textContent = "on";
    Button.style.color = "black";

    Button.style.backgroundColor = "rgb(94, 255, 0)";



  }
  else {
    NoMag();
    Button.style.color = "white";
    Button.textContent = "off";
    Button.style.backgroundColor = "rgba(64, 64, 64, 0.8)";

  }
});







Button1.addEventListener("mouseenter", () => {
  if(DisableHoverButton1 == false)
  {
    Button1.style.backgroundColor = "rgb(255, 255, 255)";
    Button1.style.color = "black";
  }

  
  // Perform actions when the mouse enters the button
});

Button1.addEventListener("mouseleave", () => {

  if (JSON.parse(localStorage.getItem("IsButton1on")) == true) {

    Button1.textContent = "on";
    Button1.style.color = "black";

    Button1.style.backgroundColor = "rgb(94, 255, 0)";



  }
  else {
    Button1.style.color = "white";
    Button1.textContent = "off";
    Button1.style.backgroundColor = "rgba(64, 64, 64, 0.8)";

  }
});






Button2.addEventListener("mouseenter", () => {
  Button2.style.backgroundColor = "rgb(255, 255, 255)";
  Button2.style.color = "black";
  
  // Perform actions when the mouse enters the button
});

Button2.addEventListener("mouseleave", () => {

  if (JSON.parse(localStorage.getItem("IsButton2on")) == true) {

    Button2.textContent = "on";
    Button2.style.color = "black";

    Button2.style.backgroundColor = "rgb(94, 255, 0)";



  }
  else {
    Button2.style.color = "white";
    Button2.textContent = "off";
    Button2.style.backgroundColor = "rgba(64, 64, 64, 0.8)";

  }
});





Button3.addEventListener("mouseenter", () => {
  Button3.style.backgroundColor = "rgb(255, 255, 255)";
  Button3.style.color = "black";
  
  // Perform actions when the mouse enters the button
});

Button3.addEventListener("mouseleave", () => {
  Button3.style.backgroundColor = "rgba(255, 0, 0, 0.8)";

  Button3.style.color = "white";
});






Button4.addEventListener("mouseenter", () => {
  Button4.style.backgroundColor = "rgb(255, 255, 255)";
  Button4.style.color = "black";
  
  // Perform actions when the mouse enters the button
});

Button4.addEventListener("mouseleave", () => {
  Button4.style.backgroundColor = "rgba(255, 0, 0, 0.8)";

  Button4.style.color = "white";
});






Button5.addEventListener("mouseenter", () => {
  Button5.style.backgroundColor = "rgb(255, 255, 255)";
  Button5.style.color = "black";
  
  // Perform actions when the mouse enters the button
});

Button5.addEventListener("mouseleave", () => {
  Button5.style.backgroundColor = "rgba(255, 0, 0, 0.8)";

  Button5.style.color = "white";
});






function Function1() {

  IsButton0on = !IsButton0on;
  localStorage.setItem("IsButton0on", IsButton0on);
  console.log(JSON.parse(localStorage.getItem("IsButton0on")));
  if (JSON.parse(localStorage.getItem("IsButton0on")) == true) {
    YesMag();
    Button.style.color = "black";
    Button.textContent = "on";
    Button.style.backgroundColor = "rgb(94, 255, 0)";



  }
  else {
    NoMag();
    Button.style.color = "white";

    Button.textContent = "off";
    Button.style.backgroundColor = "rgba(64, 64, 64, 0.8)";

  }
}



function Function2() {

  IsButton1on = !IsButton1on;
  localStorage.setItem("IsButton1on", IsButton1on);
  console.log(JSON.parse(localStorage.getItem("IsButton1on")));
  if (JSON.parse(localStorage.getItem("IsButton1on")) == true) {
    Button1.style.color = "black";
    Button1.textContent = "on";
    Button1.style.backgroundColor = "rgb(94, 255, 0)";



  }
  else {
    Button1.style.color = "white";

    Button1.textContent = "off";
    Button1.style.backgroundColor = "rgba(64, 64, 64, 0.8)";

  }
}


function Function3() {

  IsButton2on = !IsButton2on;
  localStorage.setItem("IsButton2on", IsButton2on);
  console.log(JSON.parse(localStorage.getItem("IsButton2on")));
  if (JSON.parse(localStorage.getItem("IsButton2on")) == true) {
    localStorage.setItem("IsButton1on", false);
    Button1.disabled = true;
    DisableHoverButton1 = true;
    Button1.style.color = "white";

    Button1.textContent = "off";
    Button1.style.backgroundColor = "rgba(24, 24, 24, 0.6)";
    
    Button2.style.color = "black";
    Button2.textContent = "on";
    Button2.style.backgroundColor = "rgb(94, 255, 0)";



  }
  else {
    Button1.disabled = false;
    DisableHoverButton1 = false;
    localStorage.setItem("IsButton1on", IsButton1on);
    if (JSON.parse(localStorage.getItem("IsButton1on")) == true) {
      Button1.style.color = "black";
      Button1.textContent = "on";
      Button1.style.backgroundColor = "rgb(94, 255, 0)";
  
  
  
    }
    else {
      Button1.style.color = "white";
  
      Button1.textContent = "off";
      Button1.style.backgroundColor = "rgba(64, 64, 64, 0.8)";
  
    }








    Button2.style.color = "white";

    Button2.textContent = "off";
    Button2.style.backgroundColor = "rgba(64, 64, 64, 0.8)";

  }
}