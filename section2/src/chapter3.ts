// 객체(object) - 구조적 타입 시스템(Property Based TS)
let user: {
    id?: number; //선택적 프로퍼티(Optional)
    name: string;
} = {
    id: 1,
    name: "이정환",
};

let config: {
    readonly apiKey: string; // 읽기전용 프로퍼티
} = {
    apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
