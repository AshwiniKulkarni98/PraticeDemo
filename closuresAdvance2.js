//added another scope chain which is test() to check and it works..

function test() {
    var y = 10000
    function closures() {
        var x = 10;
        x = 100;
        console.log(x);
        function close() {
            console.log(x, y)
        }
        return close()
    }
    return closures()
}

test()

// // Uses of the closures
// 1.Module Design patterns,
// 2.Currying,
// 3.Function like once,
// 4.Memoize
// 5.Maintaining the state in the async world
// 6.setTimeout();
// 7.Iterations