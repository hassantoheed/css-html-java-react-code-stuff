//console.log("connected script")
//const h1=document.querySelector("h1")
c//onsole.log(h1)
  //  h1.innerHTML="<button>click here</button>"
//const lightBulb=document.getElementById("lightBulb")
//lightBulb.addEventListener("click",function(){
//lightBulb.classList.toggle("on");
//})
//const myH1=document.getElementById("myH1")
//const btn=document.createElement("button")
//btn.innerText="Click here";
//myH1.appendChild(btn)
const userName= document.getElementById("username")

const display= document.getElementById("display")
function datasubmit(){
    if (userName.value===""){
        alert("Please Fill the field");
        return;
    }
    display.innertext=userName.value;
}