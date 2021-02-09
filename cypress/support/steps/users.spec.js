/* global Given, Then, When, And */

import { getUsers, postUser, deleteUser } from '../../api/users'
import { userDate, userDateBlack} from '../../date/users.date'

let getUsersResponse;
let idUser;
let user = userDateBlack;

Given('need to consult {string}', () => {});

When('to call the user query API', () =>{
    getUsers().then((res) => {
        getUsersResponse = res
    })
});

Given('need to includ a user', () =>{});

And('inform all user {string}', (data) =>{
    if(data === 'data') user = userDate
    else user = userDateBlack
});

When('to call the API to include the user', () =>{
    postUser(user).then((res) => {
        getUsersResponse = res
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

And('displays the creation date', () => {
    expect(getUsersResponse.body.data.created_at).to.exist;
});

And('displays the message', () =>{
    getUsersResponse.body.data.forEach( data => {
        expect(data.field).to.exist;    
        expect(data.message).to.exist;   
    });
}) 

Given('need to delete a user', () =>{});

And('locate a user', () =>{
    getUsers().then((res) =>{
        idUser = res.body.data[0].id
    })
})

when('to call the API to delete the user', () => {
    deleteUser(idUser).then((res) => {
        getUsersResponse = res
    })
}) 


