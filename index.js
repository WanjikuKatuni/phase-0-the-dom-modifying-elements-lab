// Write your code here!

const maintag = document.getElementById("main")
maintag.remove();

const newHeader = document.createElement("h1")
newHeader.setAttribute("id","victory")
// document.body.append(newHeader)
// h1.id="victory"

newHeader.innerHTML =`<h1>YOUR-NAME is the champion<h1>`

