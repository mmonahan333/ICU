AFRAME.registerComponent('start', {
    init: function() {
        let loadingScreen = document.getElementById("loadingClass");
        loadingScreen.style["visibility"] = "hidden";
        loadingScreen.style["transition"] = "visibility 10000ms linear";
        let uiDiv = document.getElementById("uiDiv");
        uiDiv.style["pointer-events"] = "auto";
        uiDiv.style["background-color"] = "rgba(0, 0, 0, 1)";
        let buttonEnter = document.getElementById("buttonEnter");
        buttonEnter.style.cursor = "pointer";
        let fadeIn = function() {
            uiDiv.style["pointer-events"] = "none";
            let soP1 = document.querySelector("#a1p");
            soP1.components.sound.playSound();
            let soP2 = document.querySelector("#a2p");
            soP2.components.sound.playSound();
            let soP3 = document.querySelector("#a3p");
            soP3.components.sound.playSound();
            let soP4 = document.querySelector("#a4p");
            soP4.components.sound.playSound();
            let soP5 = document.querySelector("#a5p");
            soP5.components.sound.playSound();
            let soP6 = document.querySelector("#a6p");
            soP6.components.sound.playSound();
            let soP7 = document.querySelector("#a7p");
            soP7.components.sound.playSound();
            let soP8 = document.querySelector("#a8p");
            soP8.components.sound.playSound();
            buttonEnter.parentNode.remove(buttonEnter);
            /* document.getElementById('v1').play();
             /* document.getElementById('v2').play();
            document.getElementById('v3').play();
            document.getElementById('v4').play();
            document.getElementById('v5').play();
            document.getElementById('v6').play();
            document.getElementById('v7').play();
            document.getElementById('v8').play();
            document.getElementById('v9').play();
            document.getElementById('v10').play(); */
            // PLUGIN: Video Sync

            

            uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.0)";
            uiDiv.style["transition"] = "background-color 10ms linear";
        }
        buttonEnter.addEventListener('touchstart', fadeIn);
        buttonEnter.addEventListener('mousedown', fadeIn);
        
    }
});
