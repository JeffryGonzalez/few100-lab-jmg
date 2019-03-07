import { add } from "./utils";

describe('writing specs in typescript', () => {
    it('is easy', () => {
        expect(true).toBe(true);
    });
    it('can add DELETE ME', () => {
        expect(add(2,2)).toBe(4);
    });
});