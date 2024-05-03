const myFriend = (...Friend: string[]) => {
    Friend.forEach(friend => {
        console.log(`Hi Friend ${friend}`)
    })
}
myFriend("Sobuj", "Bablu", "Sojib")