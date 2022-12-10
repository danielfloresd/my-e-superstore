const ProductTag = require('../models/ProductTag');

describe('ProductTag', () => {
    describe('ProductTag model', () => {
        test('should have the correct properties', () => {
            const productTag = new ProductTag();

            expect(productTag).toHaveProperty('id');
            expect(productTag).toHaveProperty('product_id');
            expect(productTag).toHaveProperty('tag_id');
        });
    });
});