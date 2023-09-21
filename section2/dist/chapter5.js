// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 숫자형 enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
})(Role || (Role = {}));
// 문자형 enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "임재진",
    role: Role.ADMIN,
    language: Language.korean,
};
const user2 = {
    name: "홍길동",
    role: Role.USER,
    language: Language.english,
};
const user3 = {
    name: "아무개",
    role: Role.GUEST,
    language: Language.english,
};
console.log(user1, user2, user3);
export {};
