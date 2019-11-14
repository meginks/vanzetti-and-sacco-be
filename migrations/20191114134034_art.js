exports.up = function(knex) {
    return knex.schema.createTable('art', table => {
        table.increments(); // id
        table.string("title"); 
        table.string("shortTitle");
        table.text("description"); 
        table.date("dateCreated"); 
        table.text("materialsUsed");
})
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('art');
};
