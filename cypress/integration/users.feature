
Feature: Users

Scenario: Consult Users

Given need to consult "with users"
When to call the user query API
Then the query will return status 200
And the code is 200
And all users will be displayed

Scenario: Includ a user

Given need to includ a user
And that the name is "Rosangela Fenandes da Costa"
And that the gender is "Female" 
And that the email is "rosangelacosta22t1@gmail.com"
And that the status is "Active" 
When to call the API to include the user 
Then the query will return status 200
And the code includ is 201
And displays the creation date