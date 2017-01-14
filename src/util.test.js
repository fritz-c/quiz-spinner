import {
    popRandom,
    angleDiff,
} from './util';

describe('popRandom', () => {
    it('should randomly pop an element', () => {
        const arr = [1, 2, 3, 4];
        const [resultArr, el] = popRandom(arr);
        expect(arr.indexOf(el) >= 0).toEqual(true);
        expect(resultArr.indexOf(el)).toEqual(-1);
    });
});

describe('angleDiff', () => {
    it('should measure angle difference', () => {
        expect(angleDiff(4, 350)).toEqual(14);
        expect(angleDiff(4, 14)).toEqual(10);
    });
});
