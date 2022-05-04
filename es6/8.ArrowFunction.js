
// arrow function (화살표 함수, 람다함수)
// function(param) {code} 형태를 축약
// 함수 이름이 없는 익명 함수 이므로 사용시 변수에 담아서 사용.
// (param) => {code};
// param => {code};
// () => {code};
// () => code;
// () => ({key: value});
    
    const func1=function(){
        console.log('익명함수1');
    }
    func1();

    const func2=()=>{
        console.log('화살표 함수1');
    }
    func2();
    //-----------------------------------------------
    const func3 = function (num) {
        console.log('익명 함수2', num);
    };
    func3(100);

    const func4 = (num) => {
        console.log('화살표 함수2', num);
    }
    func4(100);
    //-----------------------------------------------
    const func5 = function(num1, num2){
        console.log('익명 함수3', num1, num2);
    };
    func5(100, 200);

    const func6 = (num1, num2)=>console.log('익명 함수3', num1, num2);
    func6(100, 200);
    // num1, num2 => console.log('익명 함수3', num1, num2);에서 ()는 생략할수 없다
    //-----------------------------------------------
    const func7 = (num)=>{return num * num;}
    console.log(func7(50));

    const func8 = num=>num * num;           // return과 {}생략가능
    console.log(func8(50));
    //-----------------------------------------------
    // parameter와 화살표 사이에 개행이 불가능
    // 문법적으로 틀렸기 때문에 prettier에 의해 자동 정렬이 안된다.
    // const func09 = num  
    // => num * num;
    // console.log(func09(10));   //실행 안됨(블럭없이 줄바꿈X)

    const func10 = (num) => (
        num * num
    );
    console.log(func10(10));      //실행 가능
