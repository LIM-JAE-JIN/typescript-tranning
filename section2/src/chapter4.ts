// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "임재진",
    nickname: "jjfact",
    birth: "1994.06.16",
    bio: "안녕하세요",
    location: "서울시",
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};
let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
    //Korea: string;
    Korea: number;
};

let countryNumberAndStringCodes: CountryNumberCodes = {
    // Korea: 'ko',
    Korea: 410,
};
