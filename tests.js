

// Unit tests for the helloWorld function
// exercise 1
describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
});


//exercise 2
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    //exercise 3
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    //exercise 4
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    //exercise 5
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    //exercise 6
//exercise 7
    // exercise 8
    it('()should return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('(true)should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('(false)should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('(null)should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('("")should return the string "Hello, World!" when executed', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('(2.3)should return the string "Hello, World!" when executed', function () {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });

});

//
//
// // exercise 10
// describe('isFive', function() {
//     it('should be a defined function', function () {
//         expect(typeof isFive).toBe('function');
//     });
//     it('should return a boolean when called', function () {
//         expect(typeof isFive()).toBe("boolean");
//     });
//
// });






// describe('isFive', function() {
//     it('should be a defined function', function () {
//         expect(typeof isFive).toBe('function');
//         it('should return a boolean when called', function () {
//             expect(typeof isFive()).toBe("boolean");
//         });
//     });



