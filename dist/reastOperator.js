"use strict";
const myFriend = (...Friend) => {
    Friend.forEach(friend => {
        console.log(`Hi Friend ${friend}`);
    });
};
myFriend("Sobuj", "Bablu", "Sojib");
