// Mapping to a complex anonymous type. How to reference the element type?
var data = [1, 2, 3].map(v => ({ raw: v, square: v * v }));
function checkItem(item) { }
// A statically-typed dictionary. How to reference a property type?
var things = { 'thing-1': 'baz', 'thing-2': 42 };
// A strongly-typed collection with special indexer syntax. How to reference the element type?
var nodes = document.getElementsByTagName('li');
// A factory function that returns an instance of a local class
function myAPIFactory($http, id) {
    class MyAPI {
        constructor(http) {
        }
        foo() { }
        bar() { }
    }
    MyAPI.id = id;
    return new MyAPI($http);
}
function augmentAPI(api) { }
// Recursive types are handled robustly
function foo(x, y) {
    var result; // ERROR: 'result' is referenced in its own type annotation
    return result;
}
