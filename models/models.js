const db = require('./dbConfig.js'); 

module.exports = {
    add, 
    findAll,
    findById,
    update,
    remove
}

// add -- takes new data and table (string for table name)
async function add(data, table) {
    const [id] = await db(table).insert(data).returning('id') 
    return findById(id, table);
}

// find All -- takes table name, returns everything
function findAll(table) {
    return db(table);
}

// find by id -- takes id and table name
function findById(id, table) {
    return db(table).where({id}).first()
}

// update -- takes id, changes to make, and table name
function update(id, changes, table) {
    return db(table).where({id}).update(changes)
} 

// delete  -- takes id and table name
async function remove(id, table) {
    return db(table)
    .where({id})
    .del();
}

