const db = require('./dbConfig.js'); 

module.exports = {
    add,
    findById,
    update,
    removePerson, 
}

async function add(person) {
    const [id] = await db('people').insert(person).returning('id') // this makes work with postgres
    return findById(id);
}

function findById(id) {
    return db('people')
    .where({id})
    .first();
}

function update(id, changes) {
    return db('people')
    .where({id})
    .update(changes);
}

async function removePerson(id) {
    return db('people')
    .where({id})
    .del();
}

