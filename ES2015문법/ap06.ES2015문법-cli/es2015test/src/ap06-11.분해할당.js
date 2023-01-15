/*
 (구조) 분해 할당에 대해서 알아본다.


*/
//배열 분해 할당은 배열의 순번을 이용해서 매핑한다
const points = [20, 30, 40];
const x1 = points[0]; // 20
const y1 = points[1]; // 30
const z1 = points[2]; // 40

console.log(x1, y1, z1);

const [x2, y2, z2] = points;
console.log(x2, y2, z2);

// const x3 = points[0]; // 20
// const z3 = points[2]; // 40
//두번째값 무시
const [x3, , z3] = points;
console.log(x3, z3);

//세번째값 무시
const [x4, y4] = points;
console.log(x4, y4);

//객체 분해 할당

const car = {
  type: 't',
  color: 's',
  model: 2017,
};

//es5
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1);

//객체 분해 할당을 이용해서 type, color, model을 만드시오
//객체 분해 할당은 객체의 프로터티 명을 이용해서 매핑한다.
const { type, color, model, gear } = car;
console.log(type, color, model, gear); //'t','s',2017, undefined
