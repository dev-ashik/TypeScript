const User = {
    name: "Ashik",
    email: "ashik@email.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {

}

createUser({name: "ashik", isPaid: false})


function createCourse(): {name: string, price: number} {
    return {name: 'reactjs', price: 399}
}



type User = {
    name: string;
    email: string;
    isActive: boolean
}

function newUser({user: User}): User {
    return {name: "", email:"", isActive:true}
}


newUser({name: "", email:"", isActive:true})


export {}