import "../css/demo.css"
import testObj from "../css/demo.css.json"
const a = document.createElement('div');
a.className = testObj.main
a.innerText = "it's demo.html"
document.body.appendChild(a);
const b = document.createElement('div');
b.innerText = "it's demo.html"
document.body.appendChild(b);