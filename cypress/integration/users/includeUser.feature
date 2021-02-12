Feature: Includ Users

Scenario: Includ a user
Given need to includ a user
And inform all user "data"
When to call the API to include the user 
Then the query will return status 200
And the code is 201
And displays the creation date

Scenario: Includ user if data blanck
Given need to includ a user
And inform all user "data blanck"
When to call the API to include the user 
Then the query will return status 200
And the code is 422
And displays the message

Scenario: Includ user if invalid token
Given need to includ a user
And inform all user "data"
When to call the API to include the user if token invalid 
Then the query will return status 200
And the code is 401
And displays the message
