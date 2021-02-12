Feature: Consult Users

Scenario: Consult Users
Given need to consult "with users"
When to call the "valid" user query API
Then the query will return consult status 200
And the code consult is 200
And all users will be displayed

Scenario: Consult invalid User
Given need to consult "invalid users"
When to call the "invalid" user query API
Then the query will return consult status 200
And the code consult is 404
And displays the response message