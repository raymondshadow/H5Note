import "../css/style.css";
import sunImg from "../images/sun.png";

const titleEl = document.createElement("span");
titleEl.innerText = "你好啊 raymond";
titleEl.className = "title";
document.body.appendChild(titleEl);
document.body.appendChild(document.createElement("br"));

const linkEl = document.createElement("a");
linkEl.href = "https://www.baidu.com";
linkEl.innerText = "百度一下，你就知道";
document.body.appendChild(linkEl);
document.body.appendChild(document.createElement("br"));

const imgEL = document.createElement("img");
imgEL.src = sunImg;
imgEL.width = 200;
imgEL.height = 200;
document.body.appendChild(imgEL);
document.body.appendChild(document.createElement("br"));

const thumbImgEL = document.createElement("img");
thumbImgEL.className = "thumb";
document.body.appendChild(thumbImgEL);
