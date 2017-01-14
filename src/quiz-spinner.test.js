import {
    hello,
} from './quiz-spinner';

describe('getVisibleNodeCount', () => {
    it('should greet with fervor', () => {
        expect(hello('World')).toEqual('Hello World!');
    });
});
