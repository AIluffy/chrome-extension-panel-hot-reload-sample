import { h, render } from "preact";
import "./index.css";
import Main from "./components/main"

declare const module: any

const mountNode = document.getElementById('root');

render(<Main />, mountNode, mountNode.lastChild as Element);

// Hot Module Replacement
console.log(module.hot)

// setInterval(() => {
//     console.log(1)
//     // location.reload();
// }, 3000)
if (module.hot) {
    module.hot.accept(() => {
        console.log('module hot')
    });
}



