let width = document.getElementById("client-width")

let onresize = function(){
    width.textContent = document.body.clientWidth;
    width.classList.add("display-width")
    setTimeout(function(){
        width.classList.remove("display-width")
    }, 2000)

}

window.addEventListener("resize", onresize)