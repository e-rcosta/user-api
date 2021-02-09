
Feature: Users

Scenario: Consult Users

Given need to consult "with users"
When to call the user query API
Then the query will return status 200
And the code is 200
And all users will be displayed

Scenario: Consult user if data blanck

Given need to includ a user
And inform all user "data blanck"
When to call the API to include the user 
Then the query will return status 200
And the code is 422
And displays the message

Scenario: Includ a user

Given need to includ a user
And inform all user "data"
When to call the API to include the user 
Then the query will return status 200
And the code is 201
And displays the creation date

Scenario: Delete a user

Given need to delete a user
And locate a user
When to call the API to delete the user
Then the query will return status 200
And the code is 204
