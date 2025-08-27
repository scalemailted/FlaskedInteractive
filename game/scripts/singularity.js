inventory_frame.src += location.search;
var queryString = new URLSearchParams(location.search);
var hp = +queryString.get("hp");
var ap = +queryString.get("ap");

var singularityHP = 20;

function attack() {
    if (ap > 20) {
        singularityHP -= 20;
        ap -= 20;
        queryString.set("ap", 20);
    } else {
        dead();
    }

    if (singularityHP <= 0) {
        explosion_sound.play();
        singularity.src = "assets/singularity_final.gif";
        message.innerHTML = (
            `
                    Singularity is about to explode. ACTIVATE LIGHT SPEED immediately!
                    `
        );
        buttons.innerHTML = (
            `                        
                    <button onclick=escape()>ACTIVATE</button>
                    `
        );
        queryString.set("ap", ap + 10);
    }
    inventory_frame.src = 'inventory.html?' + queryString;

}

function goBack() {
    window.location.href = "eventhorizon.html?" + queryString;
}

function escape() {
    window.location.href = "escape.html";
}

function dead() {
    window.location.href = "end.html";
}