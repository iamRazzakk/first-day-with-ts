var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// SpreedOperator
var bros1 = ["Nayem", "Rakib", "Amdad", "Minhaz"];
var bross1 = bros1.push("Mazhar");
var bros2 = __spreadArray(__spreadArray([], bros1, true), ["Minhaz1", "Bijoy"], false);
// const myFriends = ()
console.log(bros2);
