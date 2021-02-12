/* global Given, Then, When, And */

import { postUser, postUserTokenInvalid } from '../../../api/users/includUser'
import { userDate, userDateBlack} from '../../../date/users.date'

let user = userDateBlack;
let postUsersResponse;

Given('need to includ a user', () =>{});

And('inform all user {string}', (data) =>{
    if(data === 'data') user = userDate
    else user = userDateBlack
});

When('to call the API to include the user', () =>{
    postUser(user).then( res => {
        postUsersResponse = res
    })
});

When('to call the API to include the user if token invalid', () =>{
    postUserTokenInvalid(user).then( res => {
        postUsersResponse = res
    })
})

Then('the query will return status {int}', (statusCode) => {
    expect(postUsersResponse.status).to.be.equal(statusCode);
});

And('the code is {int}', (code) =>{
    expect(postUsersResponse.body.code).to.be.equal(code)
});

And('displays the creation date', () => {
    expect(postUsersResponse.body.data.created_at).to.exist;
});

And('displays the message', () =>{
    if(Array.isArray(postUsersResponse.body.data)){ 
        postUsersResponse.body.data.forEach( data => {
            expect(data.field).to.exist;    
            expect(data.message).to.exist;   
        });
    } else 
        expect(postUsersResponse.body.data).to.exist;   
}); 