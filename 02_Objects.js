// singleton 
/* Objects which are made from constructor are called singleton
*/


// Objects Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Jahangir",
    "full name": "Jahangir Ansari",
    [mySym]: "mykey1",
    age: 18,
    location: "Ranchi",
    email: "Jahangir@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]

}
 
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym])

JsUser.email = "jahangir@google.com"
Object.freeze(JsUser)
JsUser.email = "jahangir@rediff.com"
console.log(JsUser);

 