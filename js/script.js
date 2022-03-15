
// using "Fetch" keyword to get data. 

// fetch("http://localhost:3000/users").
// then((res) =>{
//    return res.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// using "await async" keyword to get data

const url = "http://localhost:3000/users"
async function getAllUser() {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
} 
getAllUser()


// getting  a single user with id = 2

async function getUser(userId) {
    const resp = await fetch(`${url}/${userId}`);
    const data = await resp.json();
    console.log(data);
}
getUser(3);



// // creating a user and adding it to the url

let user = {
    firstname : "John",
    lastName : "Doe",
    userName : "JOhnDoe",
    email : "john@gmail.com",
    gender : "male"
};

async function createUser(userInfo) {
    const resp = await fetch(url, {
        method : "POST",
        body : JSON.stringify(userInfo),
        headers : {
            "Content-Type" : "application/json",
        }
    });
    const data = await resp.json();
    console.log(data);
}
createUser(user);



// //patch(Editting a User data)
async function updateUser(userId, userData) {
    const resp = await fetch(`${url}/${userId}`, {
        method: "PATCH",
        body : JSON.stringify(userData),
        headers : {
            "Content-Type" : "application/json",
        }
    });
    const data = await resp.json();
    console.log(data);   
}
updateUser(51,data);


// //Deleting a user from the url

async function deleteUser(userId) {
   const resp = await fetch(`${url}/${userId}`, {
       method : "DELETE",
    });
    const data = await resp.json();
    console.log(data);
};
deleteUser(172)