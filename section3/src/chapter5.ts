/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "임재진",
    profile: {
        nickname: "jaejinfact",
    },
    url: ["https://jaejingfact.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

let d;
d = 10;
d.toFixed();
// d.toUpperCase();

d = "hello";
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = "hello";

let arr = [1, "string"];