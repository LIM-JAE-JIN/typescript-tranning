function getPropertyKey(person, key) {
    return person[key];
}
const person = {
    name: "임재진",
    age: 29,
};
getPropertyKey(person, "name");
export {};
