{

    type dataType = {
        userId: number,
        id: number,
        title: string,
        completed: boolean,
    }
    const fetchData = async (): Promise<dataType> => {
        const respone = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await respone.json()
        return data
    }
    fetchData()
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })


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

    const showData = async () => {
        const data = await createPromise()
        console.log(data)
    }
    showData()
}