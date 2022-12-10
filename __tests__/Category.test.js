const Category = require('../models/Category');

describe('Category', () => {
    describe('Category model', () => {
        test('should have the correct properties', () => {
            const category = new Category();

            expect(category).toHaveProperty('id');
            expect(category).toHaveProperty('category_name');
        });
    });
});