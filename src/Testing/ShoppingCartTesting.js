import {unmountComponentAtNode} from "react-dom"
import detail from '../Pages/ProductDetail'


let container = null;
beforeEach(() =>{
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})