let baseUrl = Cypress.config('baseURL')
let path =  '/public-api'

export function deleteUser(id) {
    return cy.request({
          method: 'DELETE',
          url: `${baseUrl}${path}/users/${id}`,
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 93fe37179ea0aca121ff6a0edb4e386064a673fd741444b21de3e471a9d362a8'
          },
          failOnStatusCode: false
    });
  }

  export function deleteUserInvalidToken(id) {
    return cy.request({
          method: 'DELETE',
          url: `${baseUrl}${path}/users/${id}`,
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ''
          },
          failOnStatusCode: false
    });
  }