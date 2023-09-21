import { SrvRecord } from "dns";

/**
 * 인터페이스와 클래스
 */
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {
    // 필드

    // 생성자
    // 인터페이스의 인자는 무조건 퍼블릭이므로 다른 제어접근자를 넣을 시 클래스 생성자안에 작성
    constructor(
        public name: string,
        public moveSpeed: number,
        private extra: string
    ) {}

    // 메서드
    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
