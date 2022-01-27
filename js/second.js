let heading = document.getElementById("heading");
let inputval = document.getElementById("input");
let value = document.getElementById("value");
inpval = localStorage.getItem("name");
heading.innerText = inpval;
localStorage.removeItem("name");
let wallpaper1 = document.getElementById("wallpaper");
let timeout;
let time;
let c
const d = new Date();
if (d.getMinutes().toString.length == 0) {
    c = "0" + d.getMinutes()
    time = d.getHours() + ":" + c;
} else {
    time = d.getHours() + ":" + d.getMinutes();
}

let walltime = document.getElementById("wall-time")
let wallday = document.getElementById("wall-day")
walltime.innerText = time;
wallday.innerText = new Date().toLocaleDateString();

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