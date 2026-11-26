
let count = 0;

function increment() {

    count++;

    document.getElementById("counter").textContent = count;

    document.getElementById("message").textContent =
        "You clicked " + count + " times!";
}

function reset() {

    count = 0;

    document.getElementById("counter").textContent = count;

    document.getElementById("message").textContent =
        "Counter has been reset!";
}
