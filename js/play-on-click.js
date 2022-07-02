

import {
        TimingObject,
        TimingSampler,
        TimingProgress
    } from "https://webtiming.github.io/timingsrc/lib/timingsrc-esm-v3.js";

// timing object
const to = new TimingObject({range:[0,209]});

//ambisonic test
var ambi = document.getElementById('a1');
console.log(ambi);



// Hook up buttons UI
document.getElementById("reset").onclick = function () {
    to.update({position:0});
    to.update({velocity:0});
   
};
document.getElementById("pause").onclick = function () {
    to.update({velocity:0});

};
document.getElementById("play").onclick = function () {
    to.update({velocity:1});
   // ambi.el.components.ambisonic.playSound();
  //ambi.entity.setAttribute('sound',play);
ambi.playSound();

};


// refresh position every 100 ms
const sampler = new TimingSampler(to, {period:100});

// position
const pos_elem = document.getElementById("position");
sampler.on("change", function () {
    pos_elem.innerHTML = `${to.pos.toFixed(2)}`;
});

// progress
const progress_elem = document.getElementById("progress");
const progress = new TimingProgress(to,
                                    progress_elem,              {sampler:sampler});

// Set up video sync
const sync1 = MCorp.mediaSync(document.getElementById('v1'), to);

// Set up video sync
const sync2 = MCorp.mediaSync(document.getElementById('v2'), to);

// Set up video sync
const sync2 = MCorp.mediaSync(document.getElementById('v3'), to);

// Set up video sync
const sync2 = MCorp.mediaSync(document.getElementById('v4'), to);

// Set up video sync
const sync2 = MCorp.mediaSync(document.getElementById('v5'), to);

// Set up video sync
const sync2 = MCorp.mediaSync(document.getElementById('v6'), to);

// Set up video sync
const sync2 = MCorp.mediaSync(document.getElementById('v7'), to);

// Set up video sync
const sync2 = MCorp.mediaSync(document.getElementById('v8'), to);

// Set up video sync
const sync2 = MCorp.mediaSync(document.getElementById('v9'), to);

// Set up video sync
const sync2 = MCorp.mediaSync(document.getElementById('v10'), to);

//Set up audio sync
const sync3 = MCorp.mediaSync(document.getElementById('a1'), to);

window.to = to;
