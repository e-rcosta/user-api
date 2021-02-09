/* global Given, Then, When, And */

import { getUsers, postUser } from '../../api/users'

let getUsersResponse;
let postUserResponse;
const user = { 
    name: '', 
    gender: '', 
    email: '', 
    status: '' 
};
   
Given('need to consult {string}', () => {});

Given('need to includ a user', () =>{});

And('that the name is {string}', (nameUser) =>{
    user.name = nameUser
});

And('that the gender is {string}', (genderUser) =>{
    user.gender = genderUser
});

And('that the email is {string}', (emailUser) =>{
    user.email = emailUser
});

And('that the status is {string}', (statusUser) =>{
    user.status = statusUser
});

When('to call the user query API', () =>{
    getUsers().then((res) => {
        getUsersResponse = res
    })
});

When('to call the API to include the user', () =>{
    postUser(user).then((res) => {
        postUserResponse = res
    })
});

Then('the query will return status {int}', (statusCode) => {
    expect(getUsersResponse.status).to.be.equal(statusCode);
});

And('all users will be displayed', () =>{
    expect(getUsersResponse.body.data).to.be.an('array')
});

And('the code is {int}', (code) =>{
    expect(getUsersResponse.body.code).to.be.equal(code)
})

And('the code includ is {int}', (code) =>{
    expect(postUserResponse.body.code).to.be.equal(code)
})

And('displays the creation date', () => {
    expect(postUserResponse.body.data.created_at).to.exist;
});