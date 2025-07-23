var box = window.document.getElementById("container-background-circles")
for (var i = 0; i < 72; i++) {
    var element_created = window.document.createElement("div")
    element_created.classList.add("container-background-circles-each")
    box.appendChild(element_created)
}


window.onload = function () {
  var image = window.document.getElementById("center");
  image.classList.add("start");
  var triangle = window.document.getElementById("container-background-triangle");
    triangle.classList.add("start")
    var retangle1 = window.document.getElementById("retangle1")
    retangle1.classList.add("start")
    var retangle2 = window.document.getElementById("retangle2")
    retangle2.classList.add("start")
    var retangle3 = window.document.getElementById("retangle3")
    retangle3.classList.add("start")
    var retangle4 = window.document.getElementById("retangle4")
    retangle4.classList.add("start")
    var retangle5 = window.document.getElementById("retangle5")
    retangle5.classList.add("start")
    var retangle6 = window.document.getElementById("retangle6")
    retangle6.classList.add("start")
};