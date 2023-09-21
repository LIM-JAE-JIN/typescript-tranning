/**
 * 인덱스드 엑세스 타입 - 객체, 배열, 튜플에 사용
 */
function printAuthorInfo(author) {
    console.log(`${author.name} - ${author.id}`);
}
const post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "임재진",
        age: 29,
    },
};
function printAuthorInfo2(author) {
    console.log(`${author.name} - ${author.id}`);
}
const postList = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "임재진",
        age: 29,
    },
};
export {};
