// Unit tests for the helloWorld function
// exercise 1
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});


//exercise 2
describe('sayHello', function () {
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


describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('(true)should return a boolean', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('(true)should return a boolean', function () {
        expect(typeof isFive("5")).toBe("boolean");
    });
});


describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('(2)should return true', function () {
        expect(isEven(2)).toBe(true);
    });
    it('(2)should return true', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('(3)should return false', function () {
        expect(isEven(3)).toBe(false);
    });
    it('(banana)should return false', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('(8)should return false', function () {
        expect(isEven("8")).toBe(true);
    });
    it('(Infinity)should return false', function () {
        expect(isEven("Infinity")).toBe(false);
    });
    it('(true)should return false', function () {
        expect(isEven(true)).toBe(false);
    });
    it('()should return false', function () {
        expect(isEven()).toBe(false);
    });
});


describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('(true)should return false', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('(true)should return false ', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('("a")should return true', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('("A")should return true', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('("y")should return false', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('(4)should return false', function () {
        expect(isVowel(4)).toBe(false);
    });
});


describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('(2, 3)should return 5', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('(-3, -9)should return -12', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('("5", 6)should return 5', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('("-4", "10")should return 5', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('("banana", "split")should return 5', function () {
        expect(add("banana", "split")).toBeNaN();
    });

    it('("banana", "split")should return NaN', function () {
        expect(add("banana", "split")).toBeNaN();
    });
    it('(2, "apples")should return NaN', function () {
        expect(add(2, "apples")).toBeNaN();
    });
    it('()should return NaN', function () {
        expect(add()).toBeNaN();
    });
});


