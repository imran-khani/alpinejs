import "/index.css";
import "animate.css";
import Alpine from "alpinejs";
window.alpine = Alpine;
Alpine.start();

const data = [1, 2, 3];
const data2 = data.filter((item) => item !== 2);
console.log(data2);
