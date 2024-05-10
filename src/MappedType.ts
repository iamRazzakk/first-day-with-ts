{
    type arrayNumber = {
        hight: number,
        width: number
    }
    type arrayString = {
        [index in keyof arrayNumber]: string
    }

    // leats learn look up type in mapped type
    type Height = arrayNumber["hight"]
}