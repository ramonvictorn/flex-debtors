const request = require('request');
module.exports = getUsers;
function getUsers(req,res){ 
    // request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
    //     if(error){
    //         return res.status(400).send({error:"Error_on_get_users"});
    //     }
    //     let content = JSON.parse(body)
    //     console.log('body:', body); // Print the HTML for the Google homepage.
    //     res.send({data:content})
    // });
    const options = {
        url: 'https://jsonplaceholder.typicode.com/users',
        method:'GET',
        headers: {
            'User-Agent': 'request'
        }
    };
    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            // console.log('sem erro', body);
            let content = JSON.parse(body)
        // console.log('body:', body); // Print the HTML for the Google homepage.
            res.send({data:content})
            // console.log(info.stargazers_count + " Stars");
            // console.log(info.forks_count + " Forks");
        }else{
            console.log('error ', error)
            return res.status(400).send({error:"Error_on_get_users"});
        }
    });
    
}
