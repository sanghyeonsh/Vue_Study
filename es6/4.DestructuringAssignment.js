
    // Destructuring Assignment (비구조화 할당)-------------------------
    // 배열이나 객체에 입력된 값을 개별적인 변수에 할당하는 간편한 방식 제공
    const user = {
        id: "ssafy",
        name: "김싸피",
        age: 25,
    };
    //기존방식
    {
        let id = user.id;
        let name = user.name;
        let age = user.age;
        console.log(id, name, age);
    }
    // Destructuring Assignment
    {
        let { id, name, age } = user;
        console.log(id, name, age);
    }  
    //--------------------------------------------
    var area2 = new Array("서울", "대전", "구미", "광주");
    console.log(area2[0] + "  " + area2[1]);

    // Destructuring Assignment
    {
        const[a1,a2,a3,a4]=area2;
        console.log(a1,a2);
    }   
    //--------------------------------------------
    //객체를 리턴하는 함수
    function getUser(){
        return{
        id: "ssafy",
        name: "김싸피",
        age: 25,
        }
    };
    //기존방식
    {
        let user1 = getUser();
        let id = user1.id;
        let name = user1.name;
        let age = user1.age;
        console.log(id, name, age);
    }
    // Destructuring Assignment
    {
        let{id, name,age}=getUser();
        console.log(id, name, age);
    }    
    //--------------------------------------------
    //기존방식
    const user2 = {
        id: "ssafy",
        name: "김싸피",
        age: 25,
    };
    function showUserInfo(user){
        console.log("userInfo1");
        console.log("아이디 : ", user.id);
        console.log("이름 : ", user.name);
        console.log("나이 : ", user.age);
    }
    showUserInfo(user2);

    // Destructuring Assignment
    function showUserInfo2({id, name,age}){
        console.log("userInfo2");
        console.log("아이디 : ", id);
        console.log("이름 : ", name);
        console.log("나이 : ", age);
    }
    showUserInfo2(user2);

//  [문제]
// 이름, 국어,영어,수학 점수를 각각 "홍길동",77,88,100를 대입하고
// getAvg()를 만들어 출력하시오

//- 출력-
//이름은 홍길동이고 평균은 88.3333점 입니다
const user3 = {
        name : "홍길동",
        kor: 77,
        eng: 88,
        mat: 100,
    }
    function getAvg({name, kor, eng, mat}){
        return "이름은 "+name+"이고 평균은 "+ ((kor+eng+mat)/3).toFixed(2) +" 입니다";
    }
    console.log(getAvg(user3));


let user4 = {
        name: "홍길동",
        kor: 77,
        eng: 88,
        mat: 99,

        getAvg() {
            return `이름은 ${this.name}이고, 평균은 ${(this.kor + this.eng + this.mat) / 3}입니다.`;
        },
    };

    console.log(user4.getAvg());
