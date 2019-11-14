exports.up = function(knex) {
    return knex.schema.createTable('music', table => {
        table.increments(); // id
        table.string("title"); 
        table.string("shortTitle");
        table.text("description"); 
        table.date("dateCreated"); 
})
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('music');
};
