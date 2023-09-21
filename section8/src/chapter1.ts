/**
 * 인덱스드 엑세스 타입 - 객체, 배열, 튜플에 사용
 */

// 객체
interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}

function printAuthorInfo(author: Post["author"]) {
    console.log(`${author.name} - ${author.id}`);
}

const post: Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "임재진",
        age: 29,
    },
};

// 배열
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
    console.log(`${author.name} - ${author.id}`);
}

const postList: PostList[number] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "임재진",
        age: 29,
    },
};

// 튜플

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// type Tup3 = Tup[3];

type TupNum = Tup[number];
