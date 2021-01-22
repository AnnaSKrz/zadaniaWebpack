import {sum} from "./sum";
import style from "./css/index.scss";
import Icon from "./assets/img/proba.jpg";

console.log("Hello World");
console.log(sum(2,4));

let heading = document.querySelector("#demo"),
sumValue = sum(10,3);
heading.innerHTML = `10 + 3 = ${sumValue}`;

let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").appendChild(myIcon);
document.querySelector("div").classList.add("change");
