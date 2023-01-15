"use strict";

/*
 (구조) 분해 할당에 대해서 알아본다.


*/
//배열 분해 할당은 배열의 순번을 이용해서 매핑한다
var points = [20, 30, 40];
var x1 = points[0]; // 20
var y1 = points[1]; // 30
var z1 = points[2]; // 40

console.log(x1, y1, z1);
var x2 = points[0],
  y2 = points[1],
  z2 = points[2];
console.log(x2, y2, z2);

// const x3 = points[0]; // 20
// const z3 = points[2]; // 40
//두번째값 무시
var x3 = points[0],
  z3 = points[2];
console.log(x3, z3);

//세번째값 무시
var x4 = points[0],
  y4 = points[1];
console.log(x4, y4);

//객체 분해 할당

var car = {
  type: 't',
  color: 's',
  model: 2017
};

//es5
var type1 = car.type;
var color1 = car.color;
var model1 = car.model;
console.log(type1, color1, model1);

//객체 분해 할당을 이용해서 type, color, model을 만드시오
//객체 분해 할당은 객체의 프로터티 명을 이용해서 매핑한다.
var type = car.type,
  color = car.color,
  model = car.model,
  gear = car.gear;
console.log(type, color, model, gear); //'t','s',2017, undefined