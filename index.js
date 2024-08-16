/* document.getElementById('test').innerHTML = 'Hello World!';

// document = html 파일 자체. ID가 test인 태그 가져오기 + HTML 내용을 "Hello World!"로 바꿈
// ID가 test인 p태그에는 아무것도 안적혀있지만, 사이트에 가보면 Hello World가 쓰여있음

var a = 10; //업데이트 가능, 재선언 가능
a = 20;
var a = 30;

let b = 10;
b = 15; //업데이트 가능
// let b= 20; 등으로 재선언은 불가능

const pi = 3.14; // 업데이트도 재선언도 불가능

console.log(a); //수정된 로그를 확인할 수 있음
console.log(b);
console.log(pi);
*/

let button = document.getElementById("button");

button.onclick = function() {
    let x = document.getElementById("x");
    let y = document.getElementById("y");

    console.log(x.value); //x에 입력된 값 가져오기
    console.log(y.value);

    let sum = parseInt(x.value) + parseInt(y.value);
    // .value 자체는 str이기 때문에 parseInt를 사용해 int로 변환해줌

    document.getElementById("result").value = sum; 
    //result라는 태그의 value를 sum으로 설정해줌


}