let baseUrl = Cypress.config('baseURL')
let path =  '/public-api'

export function getUsers() {
  return cy.request({
        method: 'GET',
        url: `${baseUrl}${path}/users`,
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        failOnStatusCode: false
  });
}

export function getUser(idUser) {
  return cy.request({
        method: 'GET',
        url: `${baseUrl}${path}/users/${idUser}`,
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        failOnStatusCode: false
  });
}