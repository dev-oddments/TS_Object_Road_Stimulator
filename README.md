# CLASS101 서류전형 과제

## **> 해결 과정**

#### 1) .gitignore 추가 - [1b28660](https://github.com/dididy/class101-quiz/commit/1b2866054a99d57da392abedec1c09b6d9bf7f0b)

#### 2) eslint, jest, package.json 설정 - [12796cc](https://github.com/dididy/class101-quiz/commit/12796cc6229232a00c082e8c2d2008944f77090d)

- eslint는 airbnb 컨벤션으로 설정했다.
- 테스트코드를 jest기반으로 작성하기 위한 환경을 설정했다.

#### 3) 당장 해결할 수 있는 lint error 해결 - [55ecece](https://github.com/dididy/TS_Object_Road_Stimulator/commit/55ecece2990a71cb21889477c5e7028d6bda68db)

#### 4) main.ts 내의 클래스들을 파일 단위로 분리 - [3dcfe32](https://github.com/dididy/class101-quiz/commit/3dcfe32bfc108f07ec6940a9e3f733615dc4f034)

#### 5) 구조적으로 적절한 Road 클래스 생성 및 정리 - [44a2352](https://github.com/dididy/class101-quiz/commit/44a2352f33e730aa46720c99d7ca61f10ccca597)

#### 5) 앞서 해결못한 lint 에러 해결 및 코드 리팩토링 - [ceb88e9](https://github.com/dididy/class101-quiz/commit/ceb88e9b06855bf0d2aede115d024099086452fc)

- wheel.js 파일명의 첫글자를 대문자로 변경하려 했으나 git이 대소문자 변경의 tracking을 못하는 문제가 있어 `git config core.ignorecase false` 를 사용하려 해결하려 했지만 실패했다. 기존 파일이 스테이지에 올라가있는 상태에서 파일명의 대소문자만 변경할 경우 tracking이 되긴 하지만 새로운 파일로 간주해버리게 된다. 따라서 문제를 해결하기 위해서는 `git mv wheel.js Wheel.js` 와 같이 `git mv` 를 사용하여 파일명을 변경하면 된다. 
  - git에서 이런 문제가 발생하는 이유는 git이 운영체제 파일 시스템을 따라서인데 Windows나 Mac OS의 파일시스템에서 대소문자가 달라도 같은 파일로 인식하기 때문이다. 

#### 6) jest기반의 테스트코드 추가 - [fe36021](https://github.com/dididy/class101-quiz/commit/fe360215af2d9ba6356532995463fbb114369bc9)

- TypeScript에서 `describe-context-it` 중 `context` 를 사용하려면 `jest-plugin-context` 가 필요하며, TypeScript의 경우 추가적으로`@types/jest-plugin-context` 를 설정해줘야 한다.

## **> 요구사항**

1. 가독성, 유지보수, 생산성, 협업 등 모든 측면에서 본인이 생각하기에 코드 퀄리티를 높이는 방향으로 리팩토링해주세요.
  - 코드의 의도(차량이 도로를 달리는 현실세계를 표현)를 유지하는 선에서 코드의 모든 영역(네이밍, 파일 구조, 프로그래밍 패러다임, 패턴, 라이브러리, …)에 대해 수정을 가해도 괜찮습니다.
  - 예시 코드는 타입스크립트로 작성되었으나, 다른 원하시는 언어가 있다면 그 언어를 사용하실 수 있습니다. 단, 가능하면 정적 타입이 포함된 언어로 작성해주세요. 슈도코드도 가능합니다.
2. 작업하는 코드는 깃허브에 올려주세요. 만약 여러 커밋에 걸쳐서 작업하신다면 깃 히스토리가 남겨지도록 작업해주세요.
3. 서류 제출 시, 작업하신 깃허브 레포지토리의 링크를 같이 제출해주세요.

## **> 기존 코드**

#### Vehicle.ts

```typescript

import { Wheel } from './main';

export default class Vehicle {
  private numberOfWheels: number; // bigger than -1
  public wheels: Wheel[];
  private fuel: number; // 0~100

  constructor(numberOfWheels: number, wheels: Wheel[], fuel: number) {
    this.numberOfWheels = numberOfWheels;
    this.wheels = wheels;
    this.fuel = fuel;
  }
  public getNumberOfWheels() { return this.numberOfWheels; }

  public getFuel() {return this.fuel; }
}
```

#### main.ts

```typescript
import Vehicle from './Vehicle';

export class Wheel {
  public kind: string;
  public rpm: number = 0;

  constructor(kind) { this.kind = kind; }

  public setNewRPM(r: number) {
    this.rpm = r;
  }

  
}

class Car extends Vehicle {
  // 시동을 켠다
  public run() {
    for (let i = 0; i < this.getNumberOfWheels(); i++) {
      this.wheels[i].rpm = 5;
    }
  }
  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}

class Bike extends Vehicle {
  // 페달을 밟는다
  public start(){
    for (let i = 0; i < this.getNumberOfWheels(); i++) {
      this.wheels[i].rpm = 8;
    }
  }
  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}

// ------------

const road: Vehicle[] = [];

const car = new Car(4, [new Wheel("rubber"),new Wheel("rubber"),new Wheel("rubber"),new Wheel("ribber")], 100);

const bike = new Bike(2, [new Wheel("plastic"), new Wheel("plastic")], 50);

road.push(car);
road.push(bike);
car.run();
bike.start();

console.log("All vehicles on road: ", road);
console.log("isEmpty: ", car.isRoadEmpty(road));

```

