/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
    // 필드

    // 생성자
    // constructor에 접근 제어자를 넣어주면 필드와 리셋값을 넣지않아도 자동으로 기입해줌
    constructor(
        private name: string, // private - 클래스 내부에서만 접근가능 (파생클래스도 접근불가)
        protected age: number, // protected - 클래스 외부에서 접근 불가 (파생클래스에 접근가능)
        public position: string // public - 기본접근 제어자, 외부에서도 접근가능하며 안쓰면 default값
    ) {}

    // 메서드
    work() {
        console.log(`${this.name} 일함`);
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(
        name: string,
        age: number,
        position: string,
        officeNumber: number
    ) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    // 메서드
    func() {
        // this.name;
        this.age;
        this.position;
    }
}

const employee = new Employee("임재진", 29, "developer");
// employee.name = "원지은";
// employee.age = 30;
employee.position = "기획자";

console.log(employee);
