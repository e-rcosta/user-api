import { API_URL} from '../api-constants';

let path =  '/public-api'

export function getUsers() {
  return cy.request({
        method: 'GET',
        url: `${API_URL}${path}/users`,
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
        url: `${API_URL}${path}/users/${idUser}`,
        headers: { 
          'Content-Type': 'application/json',
        },
        failOnStatusCode: false
  });
}

export function postUser(userData) {
  return cy.request({
        method: 'POST',
        url: `${API_URL}${path}/users`,
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 93fe37179ea0aca121ff6a0edb4e386064a673fd741444b21de3e471a9d362a8'
        },
        body: userData,
        failOnStatusCode: false
  });
}