function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email:string, isPaid: boolean) {

}

let loginUser = (name:string, email:string, isPaid: boolean = false) => {

}

addTwo(5);
console.log(getUpper("ashik"))
signUpUser("ashik", "ashik@email.com", true)

loginUser("ashik", "ashik@email.com")

// function getValue(myVal: number) {
//     if(myVal > 5) {
//         return true
//     } 

//     return " 200 ok"
// }

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): never {
    throw new Error(errmsg);
}