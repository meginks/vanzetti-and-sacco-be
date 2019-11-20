
exports.up = function(knex) {
    return knex.schema.createTable('publications', table => {
        table.increments(); // id
        
        table 
        .integer('text_id') 
        .references('id')
        .inTable('texts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE') 

        table
        .integer('publisher_id')
        .references('id')
        .inTable('publishers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE') 
        
        table
        .date('publicationDate') 

        table.string('publicationLanguage')


})
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('publications');
};
