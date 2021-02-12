/* global Given, Then, When, And */

import { deleteUser, deleteUserInvalidToken } from '../../../api/users/deleteUser'
import { getUsers } from '../../../api/users/listUser'
import { invalidUser } from '../../../date/users.date'

let idUser;
let deleteUsersResponse;

Given('need to delete a user', () =>{});

And('locate a user', () =>{
    getUsers().then((res) =>{
        idUser = res.body.data[0].id
    })
});

when('to call the API to delete the user with an {string}', (valid) => {
    if(valid === 'valid user'){
        deleteUser(idUser).then( res => {
            deleteUsersResponse = res
        })
    } else if(valid === 'invalid token'){
        deleteUserInvalidToken(idUser).then( res => {
            deleteUsersResponse = res
        })
    } else if(valid === 'invalid user'){
        deleteUser(invalidUser).then( res => {
            deleteUsersResponse = res
        })
    } else {
        deleteUser('').then( res => {
            deleteUsersResponse = res
        })
    }
    
}); 

Then('the query will return delete status {int}', (statusCode) => {
    expect(deleteUsersResponse.status).to.be.equal(statusCode);
});

And('the code delete is {int}', (code) =>{
    expect(deleteUsersResponse.body.code).to.be.equal(code)
});

And('displays the delete message', () =>{
    expect(deleteUsersResponse.body.data.message).to.exist;
}) 
