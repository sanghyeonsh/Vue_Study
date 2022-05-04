  // Spread Syntax (전개 구문)
  
    const user1={id:"ssafy1"};
    const user2={id:"ssafy2"};

    const array=[user1, user2];

    //array copy
    const arrayCopy=[...array];
    console.log("array copy : ",array, arrayCopy);

    // 주의 : spread operator의 경우 값 복사가 아닌 주소를 가지고 
    //        오기때문에 값을 바꿀경우 모두 변경
    user1.id="ssafy5";
    console.log("id changed  : ",array, arrayCopy);  
    //--------------------------------------------------------------
    // add
    const arrayAdd = [...array, { id: "ssafy3" }];
    console.log("array add : ",arrayAdd);

    // object copy
    const user3 = { ...user1 };
    console.log("object copy : ",user3);

    //---------------------------------------------------------------   
    // array concat
    const team1 = ['대전', '광주'];
    const team2 = ['구미', '서울'];
    const team = [...team1, ...team2];
    console.log("array concat : ",team); 

    // obejct merge(병합)
    const u1 = { id1: 'ssafy1' };
    const u2 = { id2: 'ssafy2' };
    const u = { ...u1, ...u2 };
    console.log("object merge : ",u);
    // 주의점 : key가 같은 obejct를 병합 하게 되면 마지막 obj가 기존 값을 덮어쓴다.
