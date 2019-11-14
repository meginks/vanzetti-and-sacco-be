
exports.up = function(knex) {
    return knex.schema.createTable('publishers', table => {
        table.increments(); // id
        table.string("name"); 
        table.string("city");
});
};
    

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('publishers');
};
