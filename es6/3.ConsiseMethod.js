    // concise method(간결한 메소드)
    // 기존
/*    const id = "ssafy", name = "싸피", age = 30;
    const user = {
        id: id,
        name: name,
        age: age,
        info: function () {
            console.log("user info : " + this.id + " " + this.name + " " + this.age);
        },
    };
    user.info();
*/

    const id = "ssafy", name = "싸피", age = 30;
    const user = {
        id,
        name,
        age,
        info: function () {
            console.log("user info : " + this.id + " " + this.name + " " + this.age);
        },
    };
    user.info();    
