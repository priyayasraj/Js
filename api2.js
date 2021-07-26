const axios = require('axios');
const userurl = 'https://jsonplaceholder.typicode.com/users';
const posturl = ' https://jsonplaceholder.typicode.com/posts';

const createUserObject = (user,posts) => {
    const finalObject = {};
    finalObject.userId = user.id;
    finalObject.posts = posts.map (post => {
        return {
            'postId' : post.id,
            'title'  : post.title,
            'post'   : post.body
        }
    } );
    finalObject.name = user.name;
    finalObject.username = user.username;
    finalObject.email = user.email;
    finalObject.city = user.address.city;
    finalObject.zipcode = user.address.zipcode;
    finalObject.phone = user.phone;
    finalObject.website = user.website;
    finalObject.company = user.company.name;
    return finalObject;
}

const getAllUsers = async () => {
    try {
        const userResponse = (await axios.get(userurl)).data;
        for(let index = 1 ; index <= userResponse.length ; index++)
        {
           
            const postResponse = (await axios.get(`${posturl}?userId = userResponse[index].id`)).data;
            if(postResponse)
            {
               console.log(createUserObject(userResponse[index],postResponse));
                
            }
        }
              
    } catch (error) {
        console.log(error);
    }
}
getAllUsers();