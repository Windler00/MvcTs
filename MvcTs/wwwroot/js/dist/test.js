import { test2 } from "./test2.js";
function test() {
    console.log("test");
    console.log(test2());
    let test2type = typeof test2();
    console.log(test2type);
}
test();
