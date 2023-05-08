import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames function', () => {
    test('returns the className string when only className argument is passed', () => {
        expect(classNames('my-class')).toBe('my-class');
    });

    test('returns the className string with modifiers when mods object is passed', () => {
        expect(classNames('my-class', { 'my-class--modifier': true })).toBe('my-class my-class--modifier');
    });

    test('filters out falsy values from the additional array', () => {
        expect(classNames('my-class', {}, ['extra', '', undefined, null])).toBe('my-class extra');
    });

    test('returns the className string with modifiers and additional classes', () => {
        expect(classNames('my-class', { 'my-class--modifier': true }, ['extra'])).toBe('my-class extra my-class--modifier');
    });

    test('returns the expected result when multiple modifiers and additional classes are passed', () => {
        expect(classNames('my-class', { 'my-class--modifier1': true, 'my-class--modifier2': false }, ['extra1', 'extra2', ''])).toBe('my-class extra1 extra2 my-class--modifier1');
    });
});
