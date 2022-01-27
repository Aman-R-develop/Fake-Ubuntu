let inpval;
function formfunction() {
    inpval = document.getElementById("input").value;
    console.log(inpval)
    localStorage.setItem("name", inpval)
}



