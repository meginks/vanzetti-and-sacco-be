exports.up = function(knex) {
    return knex.schema.createTable('committees', table => {
        table.increments(); // id
        table.string("name"); 
        table.text("description"); 
        table.date("dateIncorporated"); 
})
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('committees');
};
