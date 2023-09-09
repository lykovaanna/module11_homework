import { getMonth } from "../Month.js";

describe ("test for getMonth function successfully", () => {
    it("should show the month in response to entering a number", () => {
        expect(getMonth(2)).toBe('Февраль')
    } ),
    it("should show the month in response to entering a number", () => {
        expect(getMonth(13)).toBe('Неверный ввод')
    })
}); 

describe ("test fot getMonth function unsuccessful", () => {
    it("should show the month in response to entering a number", () => {
        expect(getMonth(10)).toBe('Декабрь')
    })
});
