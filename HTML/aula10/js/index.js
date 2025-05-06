var btn = document.getElementById("btn")

btn.onclick = function() {
    quadrado()
}
document.body.scroll = function() {
    qyadrado()
}
function quadrado() {
    var quadrado = document.getElementById("quadrado")
    quadrado.style.width = "200px"
    quadrado.style.height = "200px"
    quadrado.style.backgroundColor = "blue"
}