       // let 예약어는 한번 선언한 똑같은 변수를 재선언할 수 없다
        var a=10;
        var a=20;
        console.log(a)   
                
        // let a=10;
        // let a=20;     //SyntaxError: Identifier 'a' has already been declared
        // console.log(a)   

        // const 예약어는 한번 할당한 값을 변경할 수 없다
        const b=20;
        //b=30;    // Uncaught TypeError: Assignment to constant variable

        //단, 객체 { } 또는 배열 [ ]로 선언했을 경우 객체의 속성과 배열의 요소는 변경 가능
        const user={
            name:"이순신",
            age:25
        };
        console.log(user.name);  //이순신
        user.name="홍길동";
        console.log(user.name);  //홍길동

        const num=[];
        console.log(num);    // []
        num.push(10);
        console.log(num);    // [10]

        // var의 유효범위 : 블록 단위로 제한, 함수 스코프(function scope)
        var x=100;
        function print(){
             var x=200;
            console.log("print() var x = ",x);
        }
        print();
        console.log("print() after var x = ",x);
/*
        //for문에서의 문제: 1 2 3 4 5 6  <---출력결과
        var i=10;
        for(var i=0; i<=5; i++){
            console.log(i);
        }
        console.log(i);
*/        
        // 해결 : let(호이스팅에서 제외)
	    // 호이스팅: 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 
        //          최상단에 선언하는 것을 말한다
        let i=10;
        for(let i=0; i<=5; i++){
            console.log(i);
        }
        console.log(i); 
