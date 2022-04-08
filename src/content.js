let status = 0; // 0 = false (not running), 1 = true (running)

let menu = document.createElement("div");
menu.style.marginBottom = "32px";

var menu_heading = document.createElement("h3");
menu_heading.innerText = "CSGORoll Deposit Script";

var button = document.createElement("button");
button.innerHTML = "Start script";

menu.appendChild(menu_heading);
menu.appendChild(button);

document.addEventListener('readystatechange', event => {

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        document.getElementsByTagName("cw-player-to-player-deposit")[0].prepend(menu);
    }

});

button.addEventListener("click", function() {
    if (button.innerHTML == "Start script") {
        button.innerHTML = "Stop script";
    } else if (button.innerHTML == "Stop script") {
        button.innerHTML = "Start script";
    }
    setInterval(function() {
        alert("Hallo");
    }, 5000);
});

