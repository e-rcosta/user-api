Feature: Delete Users

Scenario: Delete a user
Given need to delete a user
And locate a user
When to call the API to delete the user with an "valid user"
Then the query will return delete status 200
And the code delete is 204

Scenario: Delete a user if invalid token
Given need to delete a user
And locate a user
When to call the API to delete the user with an "invalid token"
Then the query will return delete status 200
And the code delete is 401
And displays the delete message

Scenario: Delete invalid User
Given need to delete a user
When to call the API to delete the user with an "invalid user"
Then the query will return delete status 200
And the code delete is 404
And displays the delete message

Scenario: Delete without informing the user
Given need to delete a user
When to call the API to delete the user with an "no user"
Then the query will return delete status 404