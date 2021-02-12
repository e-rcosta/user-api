Feature: Delete Users

Scenario: Delete a user
Given need to delete a user
And locate a user
When to call the API to delete the user
Then the query will return delete status 200
And the code delete is 204