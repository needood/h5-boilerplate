import "./css/demo.css"
import testObj from "./css/demo.css.json"
const a = document.createElement('div');
a.className = testObj.main
a.innerText = "it's demo.html"
document.body.appendChild(a);

document.body.addEventListener("click", function(event) {
    console.log("body", this, event.target);
}, false)
a.addEventListener("click", function(event) {
    console.log("a", this, event.target);
}, false)

const event = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
});
a.dispatchEvent(event);