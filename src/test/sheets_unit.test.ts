import { Autocorrect } from "../autocorrect";

test('adds 1 + 2 to equal 3', () => {
    expect(lib.subtract(1,4)).toBe(-3)
    expect(Autocorrect.sum(1, 2)).toBe(3)
});