const db = require('./dbConfig.js'); 

module.exports = {
    addPerson,
    findPeople,
    findPersonById,
    updatePerson,
    removePerson, 
}
// People Models
async function addPerson(person) {
    const [id] = await db('people').insert(person).returning('id') // this makes work with postgres
    return findPersonById(id);
}

function findPeople() {
    return db('people')
}

function findPersonById(id) {
    return db('people')
    .where({id})
    .first();
}

function updatePerson(id, changes) {
    return db('people')
    .where({id})
    .update(changes);
}

async function removePerson(id) {
    return db('people')
    .where({id})
    .del();
}

