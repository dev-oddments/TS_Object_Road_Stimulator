# CLASS101 서류전형 과제

## **> 해결 과정**

#### 1) .gitignore 추가 - [320fcc6](https://github.com/dididy/class101-quiz/commit/320fcc67cfb6a34053c48cb20c1398cad5a8e7d8)

#### 2) eslint, jest, package.json 설정 - [1b28660](https://github.com/dididy/class101-quiz/commit/1b2866054a99d57da392abedec1c09b6d9bf7f0b)

- eslint는 airbnb 컨벤션으로 설정
- 테스트코드를 jest기반으로 작성하기 위한 환경 설정

#### 3) 당장 해결할 수 있는 lint error 해결 - [12796cc](https://github.com/dididy/class101-quiz/commit/12796cc6229232a00c082e8c2d2008944f77090d)

#### 4) main.ts 내의 클래스들을 파일 단위로 분리 - [12796cc](https://github.com/dididy/class101-quiz/commit/12796cc6229232a00c082e8c2d2008944f77090d)

#### 5) 구조적으로 적절할 수 있도록 Road 클래스 생성 및 정리 - [3dcfe32](https://github.com/dididy/class101-quiz/commit/3dcfe32bfc108f07ec6940a9e3f733615dc4f034)

#### 5) 앞서 해결못한 lint 에러 해결 및 적절하게 코드 리팩토링 - [44a2352](https://github.com/dididy/class101-quiz/commit/44a2352f33e730aa46720c99d7ca61f10ccca597)

#### 6) jest를 활용한 테스트코드  추가 - [ceb88e9](https://github.com/dididy/class101-quiz/commit/ceb88e9b06855bf0d2aede115d024099086452fc)

- TypeScript에서 `describe-context-it` 중 `context` 를 사용하려면 `jest-plugin-context` 가 필요하며, JavaScript와 다르게 추가적으로`@types/jest-plugin-context` 를 사용하여야 함

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

