let heading = document.getElementById("heading");
let inputval = document.getElementById("input");
let value = document.getElementById("value");
inpval = localStorage.getItem("name");
heading.innerText = inpval;
localStorage.removeItem("name");
let wallpaper1 = document.getElementById("wallpaper");
let timeout;
const d = new Date();
let options = {  
    hour: "2-digit", minute: "2-digit"  
};  

let option ={
    weekday: "long", month: "long", day: "numeric"
}

let walltime = document.getElementById("wall-time")
let wallday = document.getElementById("wall-day")
walltime.innerText = d.toLocaleTimeString("en-us", options);
wallday.innerText = d.toLocaleDateString("en-us", option);

document.onmousemove = function name() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        wallpaper1.style.transform = "translateY(0px)";
        document.onmousemove = function () {
            wallpaper1.style.transform = "translateY(-100%)";
            name();
        }
    }, 6000);
}

function cancel() {
    inputval.value = "";
}

function unlock() {
    value.style.color = "rgb(202, 31, 31)";
    inputval.value = "";
    setInterval(() => {
        value.style.color = "#2b0720";
    }, 3000);
}