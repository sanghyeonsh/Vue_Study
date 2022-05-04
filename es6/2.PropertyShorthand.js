    // property shorthand (단축 속성명)
    // [기존방법]
/*    const id = "ssafy", name = "싸피", age = 3;
    const user = {
        id: id,
        name: name,
        age: age,
    };
    console.log(user);    
*/
    const id = "ssafy", name = "싸피", age = 3;
    const user={
        id,
        name,
        age,
    };
    console.log(user); 

// class User{
//     constructor(id, name, age) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//     info() {
//         console.log("user info : " + this.id + " " + this.name + " " + this.age);
//     }
// }
// console.log(User.info())