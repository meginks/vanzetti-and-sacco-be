exports.up = function(knex) {
    return knex.schema.createTable('committee_members', table => {
            table.increments();
    
            table
            .integer('member_id')
            .references('id')
            .inTable('people')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    
            table 
            .integer('committee_id') 
            .references('id')
            .inTable('committees')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};
    
exports.down = function(knex) {
        return knex.schema.dropTableIfExists('committee_members');
};
    