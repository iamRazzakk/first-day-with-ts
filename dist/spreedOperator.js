"use strict";
// SpreedOperator
const bros1 = ["Nayem", "Rakib", "Amdad", "Minhaz"];
const bross1 = bros1.push("Mazhar");
const bros2 = [...bros1, "Minhaz1", "Bijoy"];
// const myFriends = ()
console.log(bros2);
// Sprred operator in object
const mentor = {
    FrontEnd: "Jhankar vai",
    BackendDev: "Mizan"
};
const mentor2 = {
    ReactJs: "Mir vai",
    Nextjs: "Tonmoy vai"
};
const myMentor = Object.assign(Object.assign({}, mentor), mentor2);
console.log(myMentor);
