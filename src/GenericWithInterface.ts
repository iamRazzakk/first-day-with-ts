{

// generic with interface
    interface GoodDeveloper<T> {
        name: string,
        MyComputer: T,
        skill: string,
        haveExprience: boolean
        companyName?: string
        haveBaike?: boolean
    }
    interface MyComputer {
        brandName: string,
        model: string,
        Ram: number

    }

    const jrFrontEndDeveloper: GoodDeveloper<MyComputer> = {
        name: "Md Abdur Razzak",
        MyComputer: {
            brandName: "HP",
            model: "probook4520s",
            Ram: 8
        },
        skill: "HTML,CSS,JAVASCRIPT,NODEJS,REACTJS,NEXT.JS,TYPESCRIPT",
        haveExprience: false,

    }
    console.log(jrFrontEndDeveloper)

    const seniourFrontEndDeveloper: GoodDeveloper<MyComputer> = {
        name: 'Shakib',
        MyComputer: {
            brandName: "Asus",
            model: "a2500",
            Ram: 16
        },
        skill: "HTML CSS JS REACTJS NODEJS NEXTJS EXPRESSJS MONGODB MONGOOSE TYPESCRIPT REDUX SOCITEIO",
        haveExprience: true,
    }
    console.log(seniourFrontEndDeveloper)


}