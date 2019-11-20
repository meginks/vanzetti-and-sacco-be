exports.up = function(knex) {
    return knex.schema.createTable('authors', table => {
            table.increments();
    
            table
            .integer('author_id')
            .references('id')
            .inTable('people')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    
            table 
            .integer('text_id') 
            .references('id')
            .inTable('texts')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};
    
exports.down = function(knex) {
        return knex.schema.dropTableIfExists('authors');
};
    