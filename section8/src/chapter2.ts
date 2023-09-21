/**
 * keyof 연산자
 */
type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}

const person = {
    name: "임재진",
    age: 29,
};

console.log(getPropertyKey(person, "name"));
