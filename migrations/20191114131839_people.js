
exports.up = function(knex) {
    return knex.schema.createTable('people', table => {
        table.increments(); // id
        table.string("firstName"); 
        table.string("lastName");
        table.date("birthDate"); 
        table.date("deathDate"); 
        table.text("description"); 
});
};
    

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('people');
};
