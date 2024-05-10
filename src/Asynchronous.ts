{
    const createPromise = () => {
        return new Promise((res, rej) => {
            const data: string = "Something"
            if (data) {
                res(data)
            } else {
                rej("Faild to load data")
            }
        })
    }
}