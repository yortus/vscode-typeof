

// Mapping to a complex anonymous type. How to reference the element type?
var data = [1, 2, 3].map(v => ({ raw: v, square: v * v }));
function checkItem(item: typeof data[0]) {/***/}


// A statically-typed dictionary. How to reference a property type?
var things = { 'thing-1': 'baz', 'thing-2': 42 };
type Thing2Type = typeof things['thing-2'];


// A strongly-typed collection with special indexer syntax. How to reference the element type?
var nodes = document.getElementsByTagName('li');
type ItemType = typeof nodes.item(0);


// A factory function that returns an instance of a local class
function myAPIFactory($http: {/***/}, id: number) {
    class MyAPI {
        constructor(http) {/***/}
        foo() {/***/}
        bar() {/***/}
        static id = id;
    }
    return new MyAPI($http);
}
type MyAPI = typeof myAPIFactory(null, 0);
function augmentAPI(api: MyAPI) {/***/}


// Declare an interface DRY-ly and without introducing extra type names
interface MyInterface {
    prop1: {
        big: {
            complex: {
                anonymous: { type: {} }
            }
        }
    },

    // prop2 shares some structure with prop1
    prop2: typeof (<MyInterface>null).prop1.big.complex;
}


// Recursive types are handled robustly
function foo<X,Y>(x: X, y: Y) {
    var result: typeof foo(x, y); // ERROR: 'result' is referenced in its own type annotation
    return result;
}


// Can query the return type of an overloaded function
declare function bar(a: boolean): string;
declare function bar(a: number): any[];
type P = typeof bar(0);    // P is any[]
type Q = typeof bar(true); // Q is string
