// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 숫자형 enum
enum Role {
    ADMIN = 10,
    USER,
    GUEST,
}

// 문자형 enum
enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "임재진",
    role: Role.ADMIN, // 10 <- 관리자
    language: Language.korean,
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 11 <- 일반유저
    language: Language.english,
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 12 <- 게스트
    language: Language.english,
};

console.log(user1, user2, user3);
