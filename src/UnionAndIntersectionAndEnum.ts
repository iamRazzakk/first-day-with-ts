type noobDeveloper = {
    name: string,
}
type JuniourDeveloper = noobDeveloper & {
    exprience: number,
    expertice: string,
}
const newDeveloper: JuniourDeveloper = {
    name: 'Md Abdur Razzak Rakib',
    exprience: 6,
    expertice: "JavaScript"
}
console.log(newDeveloper)