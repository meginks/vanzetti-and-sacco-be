exports.up = function(knex) {
    return knex.schema.createTable('performances', table => {
        table.increments(); // id
        table.string("title"); 
        table.string("venue");
        table.text("description"); 
        table.date("datePerformed"); 
})
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('performances');
};
