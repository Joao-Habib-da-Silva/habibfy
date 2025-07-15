var box = window.document.getElementById("container-background-circles")
for (var i = 0; i < 72; i++) {
    var element_created = window.document.createElement("div")
    element_created.classList.add("container-background-circles-each")
    box.appendChild(element_created)
}