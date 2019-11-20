
exports.up = function(knex) {
    return knex.schema.createTable('performers', table => {
            table.increments();
    
            table
            .integer('performer_id')
            .references('id')
            .inTable('people')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    
            table 
            .integer('performance_id') 
            .references('id')
            .inTable('performances')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    }
    )
    };
    
    exports.down = function(knex) {
        return knex.schema.dropTableIfExists('performers');
    };
    