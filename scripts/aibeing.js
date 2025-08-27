inventory_frame.src += location.search;
var queryString = new URLSearchParams(location.search);
var hp = +queryString.get("hp");
var ap = +queryString.get("ap");

var aibeingHP = Math.floor(Math.random() * 2 + 2);
var aibeingAP = Math.floor(Math.random() * 3 + 2);

function attack() {
    if (ap > 0) {
        aibeingHP -= 1;
        ap -= 1;
        queryString.set("ap", ap);
    }

    if (aibeingHP <= 0) {
        being.src = "assets/enemy_explosion.gif";
        explosion_sound.play();
        message.innerHTML = (
            `
                    The being has been defeated! It droppped alien technology missiles!
                    `
        );
        buttons.innerHTML = (
            `                        
                    <button onclick=goBack()>Return</button>
                    `
        );
        queryString.set("hp", hp);
        queryString.set("ap", ap + 10);
    } else {
        hp -= aibeingAP;
        queryString.set("hp", hp);
        if (hp <= 0) {
            dead();
        }
    }
    inventory_frame.src = 'inventory.html?' + queryString;

}

function goBack() {
    window.location.href = "eventhorizon.html?" + queryString;
}

function dead() {
    window.location.href = "end.html";
}