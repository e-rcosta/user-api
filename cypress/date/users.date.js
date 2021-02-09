import faker from 'faker'

export const userDateBlack = { 
    name: '', 
    gender: '', 
    email: '', 
    status: '' 
};

export const userDate = { 
    name: faker.name.findName() + faker.name.lastName(), 
    gender: 'Female', 
    email: faker.internet.email(), 
    status: 'Active' 
};