import component from "./component";
//Styles
import "./styles/style.css";
//Image
import imagem from "./images/blanca.jpg";

const img = document.createElement("img");
img.src = imagem;
document.body.appendChild(img);

document.body.appendChild(component());