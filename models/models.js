const db = require('./dbConfig.js'); 

module.exports = {
    addPerson,
    findPersonById,
    updatePerson,
    removePerson, 
}
// People Models
async function addPerson(person) {
    const [id] = await db('people').insert(person).returning('id') // this makes work with postgres
    return findById(id);
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

