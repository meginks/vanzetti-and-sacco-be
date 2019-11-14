
exports.up = function(knex) {
    return knex.schema.createTable('texts', table => {
        table.increments(); // id
        table.string("title"); 
        table.string("short_title");
        table.string("original_language"); 
        table.text("description"); 
})
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('texts');
};
