const request = require('request');
module.exports = getUsers;
function getUsers(req,res){ 
    const options = {
        url: 'https://jsonplaceholder.typicode.com/users',
        method:'GET',
        headers: {
            'User-Agent': 'request'
        }
    };
    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let content = JSON.parse(body); // Print the HTML for the Google homepage.
            res.send({data:content})
        }else{
            console.log('error ', error)
            return res.status(400).send({error:"Error_on_get_users"});
        }
    });
    
}
