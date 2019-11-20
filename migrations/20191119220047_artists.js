exports.up = function(knex) {
    return knex.schema.createTable('artists', table => {
            table.increments();
    
            table
            .integer('artist_id')
            .references('id')
            .inTable('people')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    
            table 
            .integer('art_id') 
            .references('id')
            .inTable('art')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    };
    
exports.down = function(knex) {
        return knex.schema.dropTableIfExists('artists');
    };
    