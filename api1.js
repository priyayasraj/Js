const axios = require('axios').default;
const { DateTime } = require("luxon");
const url = 'https://jsonplaceholder.typicode.com/users';


const getDotOrgUsers = (users) => users.filter(user => user.website.includes('.org'));
    
const createJsonObject = (users) => {
    const now = DateTime.now().toString();
    const userInfo = users.map(user => {
        return {
            "fullName": user.name,
            "username": user.username,
            "emailId": user.email,
            "timeStamp": now
        }
    });
    console.log(userInfo);
}
const findTheUser = (users) => {
    const findUser = users.find(user => user.email = 'Nathan@yesenia.net');
    console.log(findUser);
}

const sumOfAllUserId = (users) => {
    const sum = users.reduce((accumulator,currentValue) => { 
        return accumulator + currentValue.id;
    },0);
    
    console.log(sum);
}
const formNameEmailPairs = (users) => {
    const nameEmailPair = users.reduce((accumulator,currentValue) =>{
        const username = currentValue.username;
        const email = currentValue.email;
        accumulator[username] = email;
        return accumulator;
    },{});
    console.log(nameEmailPair);
}
const getAllUsers = async () => {
    try {
        const response = await axios.get(url);
        const users = response.data;
            const dotUser = getDotOrgUsers(users);
            console.log(dotUser);
            //createJsonObject(users);
            //findTheUser(users);
            //sumOfAllUserId(users);
            //formNameEmailPairs(users);    
    } catch (error) {
        console.log(error);
    }
}
getAllUsers();