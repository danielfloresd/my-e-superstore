const Tag = require('../models/Tag');

describe('Tag', () => {
    describe('Tag model', () => {
        test('should have the correct properties', () => {
            const tag = new Tag();

            expect(tag).toHaveProperty('id');
            expect(tag).toHaveProperty('tag_name');
        });
    });
});