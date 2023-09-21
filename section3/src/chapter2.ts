/**
 * Unknown 타입
 */
function UnknownExam() {
    // 업캐스팅
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // 다운캐스팅
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    //다운캐스팅
    // let never1: never = 10;
    // let never2: never = 'string';
    // let never3: never = true;
}

/**
 * Void 타입
 */
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    // 업캐스팅
    let voidVar: void = undefined;
}

/**
 * any 타입 (치트키)
 * 다운캐스팅 가능
 */
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    // 다운캐스팅
    anyVar = unknownVar;
    undefinedVar = anyVar;

    // 예외
    // neverVar = anyVar
}
