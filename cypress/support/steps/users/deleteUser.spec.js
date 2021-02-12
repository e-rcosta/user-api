/* global Given, Then, When, And */

import { getUsers, deleteUser } from '../../../api/users'

let idUser;
let deleteUsersResponse;

Given('need to delete a user', () =>{});

And('locate a user', () =>{
    getUsers().then((res) =>{
        idUser = res.body.data[0].id
    })
});

when('to call the API to delete the user', () => {
    deleteUser(idUser).then( res => {
        deleteUsersResponse = res
    })
}); 

Then('the query will return delete status {int}', (statusCode) => {
    expect(deleteUsersResponse.status).to.be.equal(statusCode);
});

And('the code delete is {int}', (code) =>{
    expect(deleteUsersResponse.body.code).to.be.equal(code)
});

