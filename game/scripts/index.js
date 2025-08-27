var encrypted = true;

function displayMessage() {
    if (encrypted) {
        notification_sound.play();
    }
    document.getElementById('screen').innerHTML = (
        `
                <h2>From: Uncle Phil</h2>
                <p id="message">
                Hi Jon,
                <br>
                <br>
                I hope that you're doing well. I know it's been a while...
                i know that you are mad at me. And, I won't even try to explain myself, son.
                I messed up, that's the truth. I thought I could make it. I really did!
                <br>
                <br>
                My ship has crashed down on Planet X324, son. I know I won't last more than a couple of hours.
                Don't try to come here, I will be dead by the time you arrive.

                However, there's a secret I want to tell you son. I can't send it directly through the messaging system,
                so I have sent you an attachment that only your system can decrypt.
                <br>
                <br>
                I also want to let you know that I know you are the only one who can do it. I am really sorry, son...i am really sorry.
                <br>
                <br>
                Uncle Phil

                <br>
                <br>
                <button onclick=displayAttachment()>View Attachment</button>
                <button onclick=displayIntroScreen()>Back</button>
                </p>
                `
    );
}

function displayIntroScreen() {
    document.getElementById('screen').innerHTML = (
        `<img src="assets/spacecraft_static.gif" alt="">
                <br>
                <p>
                    Status <b>OK</b>
                    <br> Destination <b class="error">NOT SET</b>
                </p>
                <p id="message">
                    > 1 message requires your attention
                    <button onclick="displayMessage()">Click to view</button>
                </p>
                `
    );
}

function displayAttachment() {
    if (!encrypted) {
        showFile();
    } else {

        document.getElementById('screen').innerHTML = (
            `
                    <h2>SECRET.pkey</h2>
                    <p id = "message">
                        <b class="error">> ERROR: REQUIRES KEY TO UNLOCK</b>
                    </p>
                    <br>
                    <button onclick=useKey()>Use Key</button>
                    <button onclick=displayMessage()>Back</button>
                `
        );
    }
}

var counter = 0;

function incrementCounter() {
    counter += 1;
}

function useKey(counter) {

    document.getElementById('screen').innerHTML = (
        `
             <p id="message">
             > Use the key 4 more times and hit enter!
             <br>
             <b class="error">WARNING: File will be deleted otherwise!</b>
             </p>
             <button onclick=incrementCounter()>Use key</button>
             <button onclick=enterKey()>Enter</button>
            `

    );
}

function enterKey() {
    if (counter != 4) {
        error_sound.play();
        document.getElementById('screen').innerHTML = (
            `
             <p id="message">
             <b class="error">WARNING: INCORRECT COMBINATION!</b>
             <br>
             <b class="error">FILE DELETED!</b>
             </p>
             <button onclick=restart()>Restart Game</button>
            `

        );
    } else {
        encrypted = false;
        showFile();
    }
}

function showFile() {
    document.getElementById('screen').innerHTML = (
        `
                <h2>SECRET.pkey</h2>
                <p id="message">
                    If you are seeing this, you have successfully decrypted the file.
                    Didn't expect any less from my nephew, the best commander of the elite Skeptal unit.
                    <br>
                    Alright, I want you to hear me out properly, son. They are returning again. The Flasks...they're not legends.
                    I don't have time to prove it to you. You have to take my word for it. You already know I have been doing
                    research on them for decades.
                    <br>
                    They are returning to destroy the universe...they will kill everybody! Only you can stop this, son. I have attached
                    the coordinates of the black hole #9821 with this file. It's actually a wormhole that connects our universe to the universe
                    of the flasks.
                    <br>
                    I managed to gather some important information about what's going on. You might find it helpful.
                    <ul>
                        <li>Some flasks have already leaked out of the wormhole. Killing them might give you access to their weapons.
                        <li>Creation of wormhole also releases a weird liquid. I don't exactly know whether it's harmful or useful, but don't ignore it!
                    </ul>
                    <br>
                    Please save humanity! You are our last hope!
                <br>
                <br>
                <button onclick=proceedtoDestination()>Proceed to Destination</button>
                <button onclick=displayMessage()>Back</button>
                </p>
                `
    );


}

function proceedtoDestination() {
    var audio = document.getElementById('fly_sound');
    audio.play();

    document.getElementById('screen').innerHTML = (
        `<img src="assets/spacecraft.gif" alt="">
                <br>
                <p>
                    Status <b>OK</b>
                    <br> Destination <b> SET </b>
                    <br>
                    Time Remaining: <b class="error">1 year</br>
                </p>
                <p id="message">
                    > Activate max speed to reach on time
                    <button onclick="lightspeedTravel()">Activate</button>
                </p>
                `
    );
}

function lightspeedTravel() {
    window.location.href = "travel.html?ap=1&hp=1";
}

function restart() {
    window.location.href = "index.html";
}