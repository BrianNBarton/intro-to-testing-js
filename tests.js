// Unit tests for the helloWorld function (unit tests)


describe('hello', function() {
    it('should be a defined function', function() {
      expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(sayHello()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(sayHello()).not.toBe(undefined);
    });
    it("when called should return the string Hello Jane!", function() {
        expect(typeof sayHello()).toBe("Hello, Jane!")
    });
});






