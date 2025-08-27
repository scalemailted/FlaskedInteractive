var time_remaining = 6;
var queryString = new URLSearchParams(location.search);
var ap = +queryString.get("ap");
var hp = +queryString.get("hp");

inventory_frame.src += location.search;
document.getElementById('time').innerText = time_remaining.toString() + ' hrs';

function reduceTime(amount) {
    time_remaining -= amount;
}

function loadWeapon() {
    if (time_remaining > 0) {
        reduceTime(1);
        ap += 1
        queryString.set("ap", ap);
    } else {

    }
    displayTime();

}

function rest() {
    if (time_remaining > 1) {
        reduceTime(2);
        hp += 1;
        queryString.set('hp', hp);
    }
    displayTime();
}

function displayTime() {
    document.getElementById('time').innerText = time_remaining == 0 ? "Proceed to decelerate" : time_remaining.toString() + " hrs";
    inventory_frame.src = 'inventory.html?' + queryString;
    if (time_remaining == 0) {
        document.getElementById('buttons').innerHTML = (
            `
                    <button onclick=decelerate()>Decelerate</button>

                    `
        );
    }
}

function decelerate() {
    window.location.href = "arrived.html?" + queryString;
}