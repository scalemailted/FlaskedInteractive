inventory_frame.src += location.search;
var queryString = new URLSearchParams(location.search);
var hp = +queryString.get("hp");

function increaseHP() {
    magic_sound.play();
    hp = 10;
    queryString.set("hp", hp);
    inventory_frame.src = 'inventory.html?' + queryString;

    document.getElementById('message').innerHTML = (
        `> The ship has been enchanted with an unknown magical power!
                `
    );

    document.getElementById('buttons').innerHTML = (
        `
                <button onclick=goBack()>Return</button>
                `
    );

}

function goBack() {
    window.location.href = "arrived.html?" + queryString;
}