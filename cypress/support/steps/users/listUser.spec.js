/* global Given, Then, When, And */

import { getUsers, getUser } from '../../../api/users'
import { invalidUser } from '../../../date/users.date'

let getUsersResponse;

Given('need to consult {string}', () => {});

When('to call the {string} user query API', (condition) =>{
    if(condition === 'valid'){
        getUsers().then( res => {
            getUsersResponse = res
        })    
    } else {
        getUser(invalidUser).then( res => {
            getUsersResponse = res
        })
    }
});

Then('the query will return consult status {int}', (statusCode) => {
    expect(getUsersResponse.status).to.be.equal(statusCode);
});

And('all users will be displayed', () =>{
    expect(getUsersResponse.body.data).to.be.an('array')
});

And('the code consult is {int}', (code) =>{
    expect(getUsersResponse.body.code).to.be.equal(code)
});

And('displays the response message', () =>{
    expect(getUsersResponse.body.data.message).to.exist
});