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

export function postUser(userData) {
  return cy.request({
        method: 'POST',
        url: `${baseUrl}${path}/users`,
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 93fe37179ea0aca121ff6a0edb4e386064a673fd741444b21de3e471a9d362a8'
        },
        body: userData,
        failOnStatusCode: false
  });
}

export function postUserTokenInvalid(userData) {
  return cy.request({
        method: 'POST',
        url: `${baseUrl}${path}/users`,
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 93fe37179ea0aca121ff6a0edb4e386064a673fd741444b21de3e471a9d362a89'
        },
        body: userData,
        failOnStatusCode: false
  });
}

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