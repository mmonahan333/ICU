! function(A) {
    var t = {};

    function e(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return A[i].call(n.exports, n, n.exports, e), n.l = !0, n.exports
    }
    e.m = A, e.c = t, e.d = function(A, t, i) {
        e.o(A, t) || Object.defineProperty(A, t, {
            enumerable: !0,
            get: i
        })
    }, e.r = function(A) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(A, "__esModule", {
            value: !0
        })
    }, e.t = function(A, t) {
        if (1 & t && (A = e(A)), 8 & t) return A;
        if (4 & t && "object" == typeof A && A && A.__esModule) return A;
        var i = Object.create(null);
        if (e.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: A
            }), 2 & t && "string" != typeof A)
            for (var n in A) e.d(i, n, function(t) {
                return A[t]
            }.bind(null, n));
        return i
    }, e.n = function(A) {
        var t = A && A.__esModule ? function() {
            return A.default
        } : function() {
            return A
        };
        return e.d(t, "a", t), t
    }, e.o = function(A, t) {
        return Object.prototype.hasOwnProperty.call(A, t)
    }, e.p = "", e(e.s = 0)
}([function(A, t, e) {
    if ("undefined" == typeof AFRAME) throw new Error("Component attempted to register before AFRAME was available. Did you include A-Frame?");
    e(1)
}, function(A, t, e) {
    "use strict";
    e.r(t);
    /**
     * @license
     * Copyright 2016 Google Inc. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const i = {};
    let n, o, s, a, r, h, c, f, u, g, w, l, D, v, d, P, B, Q, _, C, p, E, m, M, x, I, b, y, O;
    i.log = function() {
        const A = `[Omnitone] ${Array.prototype.slice.call(arguments).join(" ")} (${performance.now().toFixed(2)}ms)`;
        window.console.log(A)
    }, i.throw = function() {
        const A = `[Omnitone] ${Array.prototype.slice.call(arguments).join(" ")} (${performance.now().toFixed(2)}ms)`;
        throw new Error(A)
    }, i.invertMatrix4 = function(A, t) {
        return n = t[0], o = t[1], s = t[2], a = t[3], r = t[4], h = t[5], c = t[6], f = t[7], u = t[8], g = t[9], w = t[10], l = t[11], D = t[12], v = t[13], d = t[14], P = t[15], B = n * h - o * r, Q = n * c - s * r, _ = n * f - a * r, C = o * c - s * h, p = o * f - a * h, E = s * f - a * c, m = u * v - g * D, M = u * d - w * D, x = u * P - l * D, I = g * d - w * v, b = g * P - l * v, y = w * P - l * d, O = B * y - Q * b + _ * I + C * x - p * M + E * m, O ? (O = 1 / O, A[0] = (h * y - c * b + f * I) * O, A[1] = (s * b - o * y - a * I) * O, A[2] = (v * E - d * p + P * C) * O, A[3] = (w * p - g * E - l * C) * O, A[4] = (c * x - r * y - f * M) * O, A[5] = (n * y - s * x + a * M) * O, A[6] = (d * _ - D * E - P * Q) * O, A[7] = (u * E - w * _ + l * Q) * O, A[8] = (r * b - h * x + f * m) * O, A[9] = (o * x - n * b - a * m) * O, A[10] = (D * p - v * _ + P * B) * O, A[11] = (g * _ - u * p - l * B) * O, A[12] = (h * M - r * I - c * m) * O, A[13] = (n * I - o * M + s * m) * O, A[14] = (v * Q - D * C - d * B) * O, A[15] = (u * C - g * Q + w * B) * O, A) : null
    }, i.isDefinedENUMEntry = function(A, t) {
        for (const e in A)
            if (t === A[e]) return !0;
        return !1
    }, i.isAudioContext = function(A) {
        return A instanceof AudioContext || A instanceof OfflineAudioContext
    }, i.isAudioBuffer = function(A) {
        return A instanceof AudioBuffer
    }, i.mergeBufferListByChannel = function(A, t) {
        const e = t[0].length,
            n = t[0].sampleRate;
        let o = 0;
        for (let A = 0; A < t.length; ++A) o > 32 && i.throw("Utils.mergeBuffer: Number of channels cannot exceed 32.(got " + o + ")"), e !== t[A].length && i.throw("Utils.mergeBuffer: AudioBuffer lengths are inconsistent. (expected " + e + " but got " + t[A].length + ")"), n !== t[A].sampleRate && i.throw("Utils.mergeBuffer: AudioBuffer sample rates are inconsistent. (expected " + n + " but got " + t[A].sampleRate + ")"), o += t[A].numberOfChannels;
        const s = A.createBuffer(o, e, n);
        let a = 0;
        for (let A = 0; A < t.length; ++A)
            for (let e = 0; e < t[A].numberOfChannels; ++e) s.getChannelData(a++).set(t[A].getChannelData(e));
        return s
    }, i.splitBufferbyChannel = function(A, t, e) {
        t.numberOfChannels <= e && i.throw("Utils.splitBuffer: Insufficient number of channels. (" + t.numberOfChannels + " splitted by " + e + ")");
        let n = 0;
        const o = Math.ceil(t.numberOfChannels / e);
        for (let i = 0; i < o; ++i) {
            const i = A.createBuffer(e, t.length, t.sampleRate);
            for (let A = 0; A < e; ++A) n < t.numberOfChannels && i.getChannelData(A).set(t.getChannelData(n++))
        }
        return bufferList
    }, i.getArrayBufferFromBase64String = function(A) {
        const t = window.atob(A),
            e = new Uint8Array(t.length);
        return e.forEach((A, i) => e[i] = t.charCodeAt(i)), e.buffer
    };
    const L = {
        BASE64: "base64",
        URL: "url"
    };

    function H(A, t, e) {
        this._context = i.isAudioContext(A) ? A : i.throw("BufferList: Invalid BaseAudioContext."), this._options = {
            dataType: L.BASE64,
            verbose: !1
        }, e && (e.dataType && i.isDefinedENUMEntry(L, e.dataType) && (this._options.dataType = e.dataType), e.verbose && (this._options.verbose = Boolean(e.verbose))), this._bufferList = [], this._bufferData = this._options.dataType === L.BASE64 ? t : t.slice(0), this._numberOfTasks = this._bufferData.length, this._resolveHandler = null, this._rejectHandler = new Function
    }
    H.prototype.load = function() {
        return new Promise(this._promiseGenerator.bind(this))
    }, H.prototype._promiseGenerator = function(A, t) {
        "function" != typeof A ? i.throw("BufferList: Invalid Promise resolver.") : this._resolveHandler = A, "function" == typeof t && (this._rejectHandler = t);
        for (let A = 0; A < this._bufferData.length; ++A) this._options.dataType === L.BASE64 ? this._launchAsyncLoadTask(A) : this._launchAsyncLoadTaskXHR(A)
    }, H.prototype._launchAsyncLoadTask = function(A) {
        const t = this;
        this._context.decodeAudioData(i.getArrayBufferFromBase64String(this._bufferData[A]), (function(e) {
            t._updateProgress(A, e)
        }), (function(e) {
            t._updateProgress(A, null);
            const n = 'BufferList: decoding ArrayByffer("' + A + '" from Base64-encoded data failed. (' + e + ")";
            t._rejectHandler(n), i.throw(n)
        }))
    }, H.prototype._launchAsyncLoadTaskXHR = function(A) {
        const t = new XMLHttpRequest;
        t.open("GET", this._bufferData[A]), t.responseType = "arraybuffer";
        const e = this;
        t.onload = function() {
            if (200 === t.status) e._context.decodeAudioData(t.response, (function(t) {
                e._updateProgress(A, t)
            }), (function(t) {
                e._updateProgress(A, null);
                const n = 'BufferList: decoding "' + e._bufferData[A] + '" failed. (' + t + ")";
                e._rejectHandler(n), i.log(n)
            }));
            else {
                const n = 'BufferList: XHR error while loading "' + e._bufferData[A] + '". (' + t.status + " " + t.statusText + ")";
                e._rejectHandler(n), i.log(n)
            }
        }, t.onerror = function(t) {
            e._updateProgress(A, null), e._rejectHandler(), i.log('BufferList: XHR network failed on loading "' + e._bufferData[A] + '".')
        }, t.send()
    }, H.prototype._updateProgress = function(A, t) {
        if (this._bufferList[A] = t, this._options.verbose) {
            const t = this._options.dataType === L.BASE64 ? "ArrayBuffer(" + A + ") from Base64-encoded HRIR" : '"' + this._bufferData[A] + '"';
            i.log("BufferList: " + t + " successfully loaded.")
        }
        if (0 == --this._numberOfTasks) {
            const A = this._options.dataType === L.BASE64 ? this._bufferData.length + " AudioBuffers from Base64-encoded HRIRs" : this._bufferData.length + " files via XHR";
            i.log("BufferList: " + A + " loaded successfully."), this._resolveHandler(this._bufferList)
        }
    };
    const F = {
        DEFAULT: [0, 1, 2, 3],
        SAFARI: [2, 0, 1, 3],
        FUMA: [0, 3, 1, 2]
    };

    function R(A, t) {
        this._context = A, this._splitter = this._context.createChannelSplitter(4), this._merger = this._context.createChannelMerger(4), this.input = this._splitter, this.output = this._merger, this.setChannelMap(t || F.DEFAULT)
    }

    function z(A) {
        this._context = A, this._splitter = this._context.createChannelSplitter(4), this._inY = this._context.createGain(), this._inZ = this._context.createGain(), this._inX = this._context.createGain(), this._m0 = this._context.createGain(), this._m1 = this._context.createGain(), this._m2 = this._context.createGain(), this._m3 = this._context.createGain(), this._m4 = this._context.createGain(), this._m5 = this._context.createGain(), this._m6 = this._context.createGain(), this._m7 = this._context.createGain(), this._m8 = this._context.createGain(), this._outY = this._context.createGain(), this._outZ = this._context.createGain(), this._outX = this._context.createGain(), this._merger = this._context.createChannelMerger(4), this._splitter.connect(this._inY, 1), this._splitter.connect(this._inZ, 2), this._splitter.connect(this._inX, 3), this._inY.gain.value = -1, this._inX.gain.value = -1, this._inY.connect(this._m0), this._inY.connect(this._m1), this._inY.connect(this._m2), this._inZ.connect(this._m3), this._inZ.connect(this._m4), this._inZ.connect(this._m5), this._inX.connect(this._m6), this._inX.connect(this._m7), this._inX.connect(this._m8), this._m0.connect(this._outY), this._m1.connect(this._outZ), this._m2.connect(this._outX), this._m3.connect(this._outY), this._m4.connect(this._outZ), this._m5.connect(this._outX), this._m6.connect(this._outY), this._m7.connect(this._outZ), this._m8.connect(this._outX), this._splitter.connect(this._merger, 0, 0), this._outY.connect(this._merger, 0, 1), this._outZ.connect(this._merger, 0, 2), this._outX.connect(this._merger, 0, 3), this._outY.gain.value = -1, this._outX.gain.value = -1, this.setRotationMatrix3(new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])), this.input = this._splitter, this.output = this._merger
    }

    function G(A, t) {
        this._context = A, this._active = !1, this._isBufferLoaded = !1, this._buildAudioGraph(), t && this.setHRIRBufferList(t), this.enable()
    }
    R.prototype.setChannelMap = function(A) {
        Array.isArray(A) && (this._channelMap = A, this._splitter.disconnect(), this._splitter.connect(this._merger, 0, this._channelMap[0]), this._splitter.connect(this._merger, 1, this._channelMap[1]), this._splitter.connect(this._merger, 2, this._channelMap[2]), this._splitter.connect(this._merger, 3, this._channelMap[3]))
    }, R.ChannelMap = F, z.prototype.setRotationMatrix3 = function(A) {
        this._m0.gain.value = A[0], this._m1.gain.value = A[1], this._m2.gain.value = A[2], this._m3.gain.value = A[3], this._m4.gain.value = A[4], this._m5.gain.value = A[5], this._m6.gain.value = A[6], this._m7.gain.value = A[7], this._m8.gain.value = A[8]
    }, z.prototype.setRotationMatrix4 = function(A) {
        this._m0.gain.value = A[0], this._m1.gain.value = A[1], this._m2.gain.value = A[2], this._m3.gain.value = A[4], this._m4.gain.value = A[5], this._m5.gain.value = A[6], this._m6.gain.value = A[8], this._m7.gain.value = A[9], this._m8.gain.value = A[10]
    }, z.prototype.getRotationMatrix3 = function() {
        return [this._m0.gain.value, this._m1.gain.value, this._m2.gain.value, this._m3.gain.value, this._m4.gain.value, this._m5.gain.value, this._m6.gain.value, this._m7.gain.value, this._m8.gain.value]
    }, z.prototype.getRotationMatrix4 = function() {
        const A = new Float32Array(16);
        return A[0] = this._m0.gain.value, A[1] = this._m1.gain.value, A[2] = this._m2.gain.value, A[4] = this._m3.gain.value, A[5] = this._m4.gain.value, A[6] = this._m5.gain.value, A[8] = this._m6.gain.value, A[9] = this._m7.gain.value, A[10] = this._m8.gain.value, A
    }, G.prototype._buildAudioGraph = function() {
        this._splitterWYZX = this._context.createChannelSplitter(4), this._mergerWY = this._context.createChannelMerger(2), this._mergerZX = this._context.createChannelMerger(2), this._convolverWY = this._context.createConvolver(), this._convolverZX = this._context.createConvolver(), this._splitterWY = this._context.createChannelSplitter(2), this._splitterZX = this._context.createChannelSplitter(2), this._inverter = this._context.createGain(), this._mergerBinaural = this._context.createChannelMerger(2), this._summingBus = this._context.createGain(), this._splitterWYZX.connect(this._mergerWY, 0, 0), this._splitterWYZX.connect(this._mergerWY, 1, 1), this._splitterWYZX.connect(this._mergerZX, 2, 0), this._splitterWYZX.connect(this._mergerZX, 3, 1), this._mergerWY.connect(this._convolverWY), this._mergerZX.connect(this._convolverZX), this._convolverWY.connect(this._splitterWY), this._convolverZX.connect(this._splitterZX), this._splitterWY.connect(this._mergerBinaural, 0, 0), this._splitterWY.connect(this._mergerBinaural, 0, 1), this._splitterWY.connect(this._mergerBinaural, 1, 0), this._splitterWY.connect(this._inverter, 1, 0), this._inverter.connect(this._mergerBinaural, 0, 1), this._splitterZX.connect(this._mergerBinaural, 0, 0), this._splitterZX.connect(this._mergerBinaural, 0, 1), this._splitterZX.connect(this._mergerBinaural, 1, 0), this._splitterZX.connect(this._mergerBinaural, 1, 1), this._convolverWY.normalize = !1, this._convolverZX.normalize = !1, this._inverter.gain.value = -1, this.input = this._splitterWYZX, this.output = this._summingBus
    }, G.prototype.setHRIRBufferList = function(A) {
        this._isBufferLoaded || (this._convolverWY.buffer = A[0], this._convolverZX.buffer = A[1], this._isBufferLoaded = !0)
    }, G.prototype.enable = function() {
        this._mergerBinaural.connect(this._summingBus), this._active = !0
    }, G.prototype.disable = function() {
        this._mergerBinaural.disconnect(), this._active = !1
    };
    const U = ["UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD+/wIA9v8QAPv/CwD+/wcA/v8MAP//AQD7/wEACAAEAPj/+v8YABAA7v/n//v/9P/M/8D//f34/R38EvzxAfEBtA2lDTcBJQFJ9T71FP0D/cD1tfVo/Wv9uPTO9PPmOufc/U/+agL3Aisc/RxuGKEZBv3j/iYMzQ2gAzsEQQUABiQFrASzA5cB2QmyCy0AtgR4AeYGtfgAA2j5OQHP+scArPsMBJgEggIEBtz6+QVq/pj/aPg8BPP3gQEi+jEAof0fA1v9+/7S+8IBjvwd/xD4IADL/Pf9zvs+/l3+wgB7/+L+7fzFADH9kf6A+n3+DP6+/TP9xP68/pn+w/26/i39YgA0/u790Pt9/kD+7v1s/Wb+8f4C/1P+pf/x/cT+6/3p/Xz9ff5F/0f9G/4r/6v/4P5L/sL+ff7c/pj+Ov7X/UT+9P5G/oz+6v6A/2D+9/6P/8r/bP7m/ij+C//e/tj/Gf4e/9v+FwDP/lz/sP7F/2H+rv/G/s7/Hf7y/4P+NAD9/k0AK/6w/zP/hACh/sX/gf44AOP+dgCm/iUAk/5qAOD+PwC+/jEAWP4CAAr/bQBw/vv/zf5iACD/OgCS/uD/Cv9oAAb/CgDK/kwA//5tACH/TgCg/h4AHP9aABP/JADP/hEAYv9gAAj/3f8m/ysAYv8gACX/8/8k/ysAXv8bABH//v8j/ygAa/8qAAD/9f9g/1YAWf8JACH/AgB2/z4AXP/w/z3/FgB2/ykAX//9/z//EwCV/zUAS//n/1T/GACK/x4ATv/0/4P/QQB4//v/WP/2/3X/HAB8//P/V//3/2f/AQBh/9v/Tf/x/5P/IwCI/wMAf/8hAKP/JACZ/xUAiv8nAK//HgCr/yMAm/8uAMz/OACi/yQAqf87AMT/MwCY/yUAtP9FAMH/KgCu/ycAyP85AMv/IwCz/xoA1f8qAMn/FgC8/xQA4/8nAMX/CwDJ/xQA4f8ZAMH/BgDO/xQA4f8WAMP/BwDU/xQA4P8QAMH/AQDb/xQA3P8JAMP/AgDh/xIA2v8EAMj/AgDk/w0A1f/+/8v/AwDm/wwA0v/+/9H/BgDl/wkAzv/8/9T/BwDk/wcAzv/8/9r/CQDi/wQAzf/8/9//CADf////0P/9/+L/BwDd//7/0////+T/BgDb//z/1f8AAOf/BQDZ//v/2v8CAOb/AwDY//v/3v8EAOb/AgDY//3/4f8FAOX/AQDZ//7/5P8GAOP/AADb/wAA5/8GAOH////d/wIA5/8FAOD////f/wMA6P8FAOD////h/wQA6P8EAN7////h/wUA4v8DANv/AQDd/wQA3P8CANn/AgDb/wMA2/8CANv/AgDd/wIA3v8CAOH/AQDj/wEA", "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAAAAAAA/f8CAP//AQD//wEA//8BAP3/AAACAP7/+f8AAAIA/P8FAAQA8/8AABoA+f/V/wQAHQDO/xoAQQBO/ocA0Px1/ucHW/4UCm8HLO6kAjv8/fCRDdAAYfPiBIgFXveUCM0GBvh6/nz7rf0J/QcQSRVdBgoBSgFR62r9NP8m+LoEAvriBVAAiAPmABEGMf2l+SwBjva6/G4A//8P/CYDMgXm/R0CKAE6/fcBBwAtAND+kQA0A5UDhwFs/8IB8fydAEP/A/8v/e7/mP8j/2YBIwE3Av0AYv+uAOD8lgAg/wwAIf/L/n0Ae//OAJMB3P/XAF//XwCM/08AB/8NAEf/rf4jAT3/lgAJAP4AHgDpAO8AUf9L/07/Qf8KAOD/x/+D/3sATQCDAMoA0f79/+L/EQDt/7EAqv+S/7IAuv/o/wgAc//X//H/SwCm/+3/Yf/B/yoAAADI/7X/AwBg/5EATgCX/xYA/P+q/00AVACY/6v/BADD/zwALQCN/8z/KQDu/ygAEgCZ/6f/VQDC//T/KQCs/7P/UgAfAO7/NgC8/57/awAZAPP/+P/V/8z/bQBBAL//DgD0/+T/TABBAMz/CwAxAPz/SQBqALn/BgALAPz/EAA7AIz/3/8iAAUA//8kALf/y/9VABQA+v81AOj/0P9cAB4A+f8WAOr/vv83ABgAw/8JAOj/4f8nACIAsf/y/w4A3v8gACQAxP/n/ycA7P8WAC0Ayf/U/ycA9v/7/yUA0P/P/zUABADc/xUA5P/J/zcACwDS/xUA9P/m/zAACQDX/+3/9v/2/yQACgDZ/+P/AwAKABYA///b/9j/EQALABkADgD6/+7/GwD4/w4A8P/w//j/EgAEAAUA9f/1/wQAGgD4/wAA5////wAAGQD1////7f8FAAUAFQDv/wAA6v8LAAcAFQDs/wEA9P8SAAYACwDr//7/AQASAAYABQDv/wIAAwAWAAIAAgDv/wAABgATAAEA/f/u/wQABgAQAPr/+P/z/wUACQALAPj/9//4/wgABwAKAPT/+f/5/w4ABwAIAPT/+//9/w4AAwADAPH//f///w8A//8BAPP///8BAA0A/f/+//X/AgACAA0A+//8//b/BAADAAoA+f/7//n/BgADAAcA+P/7//v/BwABAAQA+P/8//3/CQABAAIA9//9////CQD/////+P///wAACAD9//7/+f8AAAAABwD8//3/+v8CAAAABgD7//z//P8EAAAABAD6//3//P8FAP//AgD6//7//v8FAP7/AQD7//////8GAP7/AAD7/wEA//8EAP3/AAD9/wEA/v8DAP3/AAD9/wIA/v8CAP3/AQD9/wIA/v8CAP7/AQD+/wEA"],
        S = {
            AMBISONIC: "ambisonic",
            BYPASS: "bypass",
            OFF: "off"
        };

    function Y(A, t) {
        this._context = i.isAudioContext(A) ? A : i.throw("FOARenderer: Invalid BaseAudioContext."), this._config = {
            channelMap: R.ChannelMap.DEFAULT,
            renderingMode: S.AMBISONIC
        }, t && (t.channelMap && (Array.isArray(t.channelMap) && 4 === t.channelMap.length ? this._config.channelMap = t.channelMap : i.throw("FOARenderer: Invalid channel map. (got " + t.channelMap + ")")), t.hrirPathList && (Array.isArray(t.hrirPathList) && 2 === t.hrirPathList.length ? this._config.pathList = t.hrirPathList : i.throw("FOARenderer: Invalid HRIR URLs. It must be an array with 2 URLs to HRIR files. (got " + t.hrirPathList + ")")), t.renderingMode && (Object.values(S).includes(t.renderingMode) ? this._config.renderingMode = t.renderingMode : i.log("FOARenderer: Invalid rendering mode order. (got" + t.renderingMode + ') Fallbacks to the mode "ambisonic".'))), this._buildAudioGraph(), this._tempMatrix4 = new Float32Array(16), this._isRendererReady = !1
    }

    function N(A, t, e) {
        this._context = A, this._active = !1, this._isBufferLoaded = !1, this._ambisonicOrder = t, this._numberOfChannels = (this._ambisonicOrder + 1) * (this._ambisonicOrder + 1), this._buildAudioGraph(), e && this.setHRIRBufferList(e), this.enable()
    }

    function X(A, t) {
        return A === t ? 1 : 0
    }

    function T(A, t, e, i, n) {
        const o = (i + t) * (2 * t + 1) + (e + t);
        A[t - 1][o].gain.value = n
    }

    function j(A, t, e, i) {
        const n = (i + t) * (2 * t + 1) + (e + t);
        return A[t - 1][n].gain.value
    }

    function k(A, t, e, i, n) {
        return i === n ? j(A, 1, t, 1) * j(A, n - 1, e, n - 1) - j(A, 1, t, -1) * j(A, n - 1, e, 1 - n) : i === -n ? j(A, 1, t, 1) * j(A, n - 1, e, 1 - n) + j(A, 1, t, -1) * j(A, n - 1, e, n - 1) : j(A, 1, t, 0) * j(A, n - 1, e, i)
    }

    function Z(A, t, e, i) {
        return k(A, 0, t, e, i)
    }

    function J(A, t, e, i) {
        if (0 === t) return k(A, 1, 1, e, i) + k(A, -1, -1, e, i);
        if (t > 0) {
            const n = X(t, 1);
            return k(A, 1, t - 1, e, i) * Math.sqrt(1 + n) - k(A, -1, 1 - t, e, i) * (1 - n)
        } {
            const n = X(t, -1);
            return k(A, 1, t + 1, e, i) * (1 - n) + k(A, -1, -t - 1, e, i) * Math.sqrt(1 + n)
        }
    }

    function K(A, t, e, i) {
        return 0 === t ? 0 : t > 0 ? k(A, 1, t + 1, e, i) + k(A, -1, -t - 1, e, i) : k(A, 1, t - 1, e, i) - k(A, -1, 1 - t, e, i)
    }

    function W(A, t, e) {
        const i = X(A, 0),
            n = Math.abs(t) === e ? 1 / (2 * e * (2 * e - 1)) : 1 / ((e + t) * (e - t));
        return [Math.sqrt((e + A) * (e - A) * n), .5 * (1 - 2 * i) * Math.sqrt((1 + i) * (e + Math.abs(A) - 1) * (e + Math.abs(A)) * n), -.5 * (1 - i) * Math.sqrt((e - Math.abs(A) - 1) * (e - Math.abs(A))) * n]
    }

    function V(A, t) {
        for (let e = -t; e <= t; e++)
            for (let i = -t; i <= t; i++) {
                const n = W(e, i, t);
                Math.abs(n[0]) > 0 && (n[0] *= Z(A, e, i, t)), Math.abs(n[1]) > 0 && (n[1] *= J(A, e, i, t)), Math.abs(n[2]) > 0 && (n[2] *= K(A, e, i, t)), T(A, t, e, i, n[0] + n[1] + n[2])
            }
    }

    function q(A) {
        for (let t = 2; t <= A.length; t++) V(A, t)
    }

    function $(A, t) {
        this._context = A, this._ambisonicOrder = t;
        const e = (t + 1) * (t + 1);
        let i, n, o, s, a;
        this._splitter = this._context.createChannelSplitter(e), this._merger = this._context.createChannelMerger(e), this._gainNodeMatrix = [];
        for (let A = 1; A <= t; A++) {
            i = A * A, n = 2 * A + 1, this._gainNodeMatrix[A - 1] = [];
            for (let t = 0; t < n; t++) {
                o = i + t;
                for (let e = 0; e < n; e++) s = i + e, a = t * n + e, this._gainNodeMatrix[A - 1][a] = this._context.createGain(), this._splitter.connect(this._gainNodeMatrix[A - 1][a], o), this._gainNodeMatrix[A - 1][a].connect(this._merger, 0, s)
            }
        }
        this._splitter.connect(this._merger, 0, 0), this.setRotationMatrix3(new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])), this.input = this._splitter, this.output = this._merger
    }
    Y.prototype._buildAudioGraph = function() {
        this.input = this._context.createGain(), this.output = this._context.createGain(), this._bypass = this._context.createGain(), this._foaRouter = new R(this._context, this._config.channelMap), this._foaRotator = new z(this._context), this._foaConvolver = new G(this._context), this.input.connect(this._foaRouter.input), this.input.connect(this._bypass), this._foaRouter.output.connect(this._foaRotator.input), this._foaRotator.output.connect(this._foaConvolver.input), this._foaConvolver.output.connect(this.output), this.input.channelCount = 4, this.input.channelCountMode = "explicit", this.input.channelInterpretation = "discrete"
    }, Y.prototype._initializeCallback = function(A, t) {
        (this._config.pathList ? new H(this._context, this._config.pathList, {
            dataType: "url"
        }) : new H(this._context, U)).load().then(function(t) {
            this._foaConvolver.setHRIRBufferList(t), this.setRenderingMode(this._config.renderingMode), this._isRendererReady = !0, i.log("FOARenderer: HRIRs loaded successfully. Ready."), A()
        }.bind(this), (function() {
            const A = "FOARenderer: HRIR loading/decoding failed.";
            t(A), i.throw(A)
        }))
    }, Y.prototype.initialize = function() {
        return i.log("FOARenderer: Initializing... (mode: " + this._config.renderingMode + ")"), new Promise(this._initializeCallback.bind(this))
    }, Y.prototype.setChannelMap = function(A) {
        this._isRendererReady && A.toString() !== this._config.channelMap.toString() && (i.log("Remapping channels ([" + this._config.channelMap.toString() + "] -> [" + A.toString() + "])."), this._config.channelMap = A.slice(), this._foaRouter.setChannelMap(this._config.channelMap))
    }, Y.prototype.setRotationMatrix3 = function(A) {
        this._isRendererReady && this._foaRotator.setRotationMatrix3(A)
    }, Y.prototype.setRotationMatrix4 = function(A) {
        this._isRendererReady && this._foaRotator.setRotationMatrix4(A)
    }, Y.prototype.setRotationMatrixFromCamera = function(A) {
        this._isRendererReady && (i.invertMatrix4(this._tempMatrix4, A.elements), this._foaRotator.setRotationMatrix4(this._tempMatrix4))
    }, Y.prototype.setRenderingMode = function(A) {
        if (A !== this._config.renderingMode) {
            switch (A) {
                case S.AMBISONIC:
                    this._foaConvolver.enable(), this._bypass.disconnect();
                    break;
                case S.BYPASS:
                    this._foaConvolver.disable(), this._bypass.connect(this.output);
                    break;
                case S.OFF:
                    this._foaConvolver.disable(), this._bypass.disconnect();
                    break;
                default:
                    return void i.log('FOARenderer: Rendering mode "' + A + '" is not supported.')
            }
            this._config.renderingMode = A, i.log("FOARenderer: Rendering mode changed. (" + A + ")")
        }
    }, N.prototype._buildAudioGraph = function() {
        const A = Math.ceil(this._numberOfChannels / 2);
        this._inputSplitter = this._context.createChannelSplitter(this._numberOfChannels), this._stereoMergers = [], this._convolvers = [], this._stereoSplitters = [], this._positiveIndexSphericalHarmonics = this._context.createGain(), this._negativeIndexSphericalHarmonics = this._context.createGain(), this._inverter = this._context.createGain(), this._binauralMerger = this._context.createChannelMerger(2), this._outputGain = this._context.createGain();
        for (let t = 0; t < A; ++t) this._stereoMergers[t] = this._context.createChannelMerger(2), this._convolvers[t] = this._context.createConvolver(), this._stereoSplitters[t] = this._context.createChannelSplitter(2), this._convolvers[t].normalize = !1;
        for (let A = 0; A <= this._ambisonicOrder; ++A)
            for (let t = -A; t <= A; t++) {
                const e = A * A + A + t,
                    i = Math.floor(e / 2);
                this._inputSplitter.connect(this._stereoMergers[i], e, e % 2), this._stereoMergers[i].connect(this._convolvers[i]), this._convolvers[i].connect(this._stereoSplitters[i]), t >= 0 ? this._stereoSplitters[i].connect(this._positiveIndexSphericalHarmonics, e % 2) : this._stereoSplitters[i].connect(this._negativeIndexSphericalHarmonics, e % 2)
            }
        this._positiveIndexSphericalHarmonics.connect(this._binauralMerger, 0, 0), this._positiveIndexSphericalHarmonics.connect(this._binauralMerger, 0, 1), this._negativeIndexSphericalHarmonics.connect(this._binauralMerger, 0, 0), this._negativeIndexSphericalHarmonics.connect(this._inverter), this._inverter.connect(this._binauralMerger, 0, 1), this._inverter.gain.value = -1, this.input = this._inputSplitter, this.output = this._outputGain
    }, N.prototype.setHRIRBufferList = function(A) {
        if (!this._isBufferLoaded) {
            for (let t = 0; t < A.length; ++t) this._convolvers[t].buffer = A[t];
            this._isBufferLoaded = !0
        }
    }, N.prototype.enable = function() {
        this._binauralMerger.connect(this._outputGain), this._active = !0
    }, N.prototype.disable = function() {
        this._binauralMerger.disconnect(), this._active = !1
    }, $.prototype.setRotationMatrix3 = function(A) {
        this._gainNodeMatrix[0][0].gain.value = -A[0], this._gainNodeMatrix[0][1].gain.value = A[1], this._gainNodeMatrix[0][2].gain.value = -A[2], this._gainNodeMatrix[0][3].gain.value = -A[3], this._gainNodeMatrix[0][4].gain.value = A[4], this._gainNodeMatrix[0][5].gain.value = -A[5], this._gainNodeMatrix[0][6].gain.value = -A[6], this._gainNodeMatrix[0][7].gain.value = A[7], this._gainNodeMatrix[0][8].gain.value = -A[8], q(this._gainNodeMatrix)
    }, $.prototype.setRotationMatrix4 = function(A) {
        this._gainNodeMatrix[0][0].gain.value = -A[0], this._gainNodeMatrix[0][1].gain.value = A[1], this._gainNodeMatrix[0][2].gain.value = -A[2], this._gainNodeMatrix[0][3].gain.value = -A[4], this._gainNodeMatrix[0][4].gain.value = A[5], this._gainNodeMatrix[0][5].gain.value = -A[6], this._gainNodeMatrix[0][6].gain.value = -A[8], this._gainNodeMatrix[0][7].gain.value = A[9], this._gainNodeMatrix[0][8].gain.value = -A[10], q(this._gainNodeMatrix)
    }, $.prototype.getRotationMatrix3 = function() {
        const A = new Float32Array(9);
        return A[0] = -this._gainNodeMatrix[0][0].gain.value, A[1] = this._gainNodeMatrix[0][1].gain.value, A[2] = -this._gainNodeMatrix[0][2].gain.value, A[4] = -this._gainNodeMatrix[0][3].gain.value, A[5] = this._gainNodeMatrix[0][4].gain.value, A[6] = -this._gainNodeMatrix[0][5].gain.value, A[8] = -this._gainNodeMatrix[0][6].gain.value, A[9] = this._gainNodeMatrix[0][7].gain.value, A[10] = -this._gainNodeMatrix[0][8].gain.value, A
    }, $.prototype.getRotationMatrix4 = function() {
        const A = new Float32Array(16);
        return A[0] = -this._gainNodeMatrix[0][0].gain.value, A[1] = this._gainNodeMatrix[0][1].gain.value, A[2] = -this._gainNodeMatrix[0][2].gain.value, A[4] = -this._gainNodeMatrix[0][3].gain.value, A[5] = this._gainNodeMatrix[0][4].gain.value, A[6] = -this._gainNodeMatrix[0][5].gain.value, A[8] = -this._gainNodeMatrix[0][6].gain.value, A[9] = this._gainNodeMatrix[0][7].gain.value, A[10] = -this._gainNodeMatrix[0][8].gain.value, A
    }, $.prototype.getAmbisonicOrder = function() {
        return this._ambisonicOrder
    };
    const AA = ["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AAD7/wEAAgD7//7/AQD8/wAAAwD8//3/AwD9/wAAAgD9//z/AwD/////AgD+//z/AwAAAP7/AQD///3/AgABAP3/AAAAAP3/AgACAPz///8BAP3/AQACAP3//v8BAP7/AAABAP3//v8CAP7///8BAP7//f8CAP////8AAAAA/v8CAAAAAAAAAAAA/v8BAAAAAAD//wAA//8AAP//AAD//wAA//8AAP//", "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAAAAP//AAD//wAA//8AAAAA/////wAAAQD+////AAAGAP3/OAABAIIAAwBv//f/E/0QAK0ADQCzA/7/8P4u/0cBDQCJA6ABbQDg/w7/z/9o+Vn/SPnL/1//Ef+2+jr9RfZgA5QFZwILDFj+PAb2/nEFKgKk/R0Dlv6b/FUDsP6YAoj9SgAT/iL/tAPwAv8A0P6zAr7/dwAnAf39uP22/skA2v///2YCoP4UAUsAZgF2AJH+4P70/rz9+f+U/Xv/8v7CAcb+TACS/kwAv/+x/tX9oP71/oL/1f8nAEUAZwGtAAgAIgC/AD4BaP8GAGH/dQDF/64Arf8nAakAhAH9/+kAQQD3AFb/q/8p/yIAR/8FAPD/ZAA/AIYA3v8tADQADQBp/3f/CwABAP3/Wf8OANj/WwDH/xoAe/8DAKz/zv96/z8A3f/J/5X/IAD5//j/q//c/+//RADq//D/vv8pADUAFQDI/y8ACAAbANb/OwD3/+3/9f/e/wcAIAAeAMH/8/8xAC0AEADW/+3/HAADAPv/8P8DAOL/OwD3/xcACQAHAM//5f8XAAcAz//T/9D/HgD9////yf/e//v/AgD//9H/6/////H/+/8hAAIA9//7/w0AFgAQAPL/2v/8/xsAGQABANz/9P8YAAQA/v/y/wMA5v8YAAkAAAAAAAMA7/8KABgADwDs//j/BwATABsA8P/1//z/BAAMAAAA9P/s/xAA/v8GAAkA/v/p/wMACwALAP7/9P/p/wcADQAFAPb/7//4/w0ACAD8//b//v/1/wMACwD1//T/8P/8/wAACQDz/+f/5P8GAAkABQD5//D/+v8FAA0AAwD///T/AgACABAA/v8CAPD/+/8FAAoA9f/3//f//v8GAP7/9v/t//z/+f8AAPj/+v/3/wEA+v8HAPr//P/5/wQA//8DAPr/+P/3/wYA///+//X/+//5/wQA/f/7//X/+//4/wMA/f/8//j//v/9/wYA///8//f/AgAAAAUA/f/6//n/AwACAAIA/f/7//z/AwACAAAA/f/6//3/AgADAP7//f/7/wAAAwAFAPz////8/wMAAgAEAPv//v/+/wMAAgADAPv//v///wMAAQABAPv//f8AAAIAAAD///v//f8BAAIA///+//z//v8CAAIA/v/9//3///8CAAEA/v/9//7/AAACAAAA/v/9////AAABAAAA/f/9/wAAAQABAP///f/+/wEAAQAAAP///v/+/wEAAQD///7//v///wEAAQD///7//v///wEAAAD+//7///8AAAAAAAD+//7///8AAAAA///+//7///8AAAAA////////AAAAAP////////////8AAP//////////", "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAAAAAAAAAABAAAAAAD//////////////v////3/////////+//8////AQD9//z/9f8BAAIA+f8dACgAWQBxAJX/qv+Y/uz9aP9k/7UDUQQBAiQA4Pgi/AkB0gKaBsD/+fxp/vz9CQSp/I/+ywDO+vMD0fzK/PABcgBeBfoBv/+uAuH9Sf5gAy39awMmBWUBuP9fA9/9fgDj/2/+EACaACcCSv9Z/2j/rv7hAA0AWf55/7L84P7E/SIAT/67AMv/tf+FAA7/1v+7/gv/IP+E/sQA+P5aAXz/tP9XAFX/tP8o/4r/j//e/yQAMv9mAJT/rgCr/9X/EwCb//H/9f7F/6D/EAAoAK3//v+e/zsAh/+B/7r/if/C/2r/4P/z/6//HwCy/0IA7/9ZALT/y/80ACgA9v/J/9//DgA5ADUALQARADIACwAfAOf/NgArACMACQBBAEcAGAAjAC4AWQBUAHcAAAAfACEAIAAcAPj/CADk/yQA7v89AEEAFwD5/xYA6f8aAOX/AADF/zQADwAUAOT/BQDr/yUA6P8XAOf/HADR/0AA8P8nAAgACQDt/ycAKAAHAPH/IQDz/xsACADn//n/DgADAA4A8P///8z/GgDN/yMA/f8QANj/MwACAC0ACwAOAO3/JgAZAAUACgAAAA4AIgAaAAkADwACAAAAHQATAAUABQACAAgACwAjAO////8AAA8ABQAPAPL//f8GAAsABgAGAPD/8v8GAPz/CAD6//H/6v8PAAgABgD4//3/9v8aAAgABwD1//7//v8QAAoACAD//wUA9v8QAAoABAAFAAgAAgAJAAoAAwD//w0AAgD//wcA/v8DAAoABQAFABUABAAKAAYABwAHAA8ACgAGAAwADwAMAAkAEAAJAAgADwAMAAgADgAJAAUACQAPAAUACwAHAAEABgAIAAEABAAGAP//AgAJAAAAAgAEAP7///8IAAIA//8GAAEAAQAJAAIA/v8EAAMA//8JAAEA/v8DAAMA/v8HAAMA/f8BAAUA/v8FAAMA/v8BAAcA//8DAAMA/v8BAAYA//8CAAMA/////wcAAAAAAAMAAAD//wYAAQD+/wMAAQD//wUAAQD+/wIAAgD//wQAAgD+/wEAAwD//wMAAwD+/wEAAwD//wIAAwD//wEABAAAAAEABAD//wAABAABAAAAAwAAAAAABAABAP//AwABAAAAAwACAP//AgACAAAAAwACAP//AgACAAAAAgACAAAAAQADAAAAAQACAAAAAQADAAAAAQACAAAAAAACAAEAAAACAAEAAAACAAEAAAABAAEAAAABAAEAAAABAAEAAAABAAEAAAABAAEAAAABAAEAAAAAAAAAAAAAAAAA", "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAAAAP//AAD//wAA//8AAAAA//8AAP//AAACAAAA+f8BAAYA///4/wIA//8AAA8A/v/V/wEAEwA9AAEBRwA2AF7/kfog/3gBwv99CDYBU/qtAUX/AP7OAfkAX/o9B38FSfwaAuT14/60BAr8CQAI/tfyIQTzAXP+egdUBBwBof7TBMT8bAWi/5EEWwBRAAAKyfxE/8b88vp6ACP+PAF4/qD8MQNM/ygCJ/2XAPD9kP5gAVT/iP9I/lEB4P8qAD0BFAGa/+7/DgB2AOP98gFm/u/+Vv5/AG8ASP9gAM//qv9w//oAcv+2/jIBHgA7/6D/oAAGAKH/lADT/wAAggC8AAYAkP9yAEcAkf8BAOD/RAAr/zUANwDt/xQAJQAkAMT/zwA/AOH/xv9zAGsANQBTAIcALAAvACIATACy/xMADADg/xcAWABvAJL/7f9VAPb/EgDt/wcA4f8kAPP/5P+h/wgACQDy//r/LgAQAMn/8/9CAOX/5v/S/9//3P8pABYAuP/s/w8AFgDt/+3/7v/w/9j/5/8GAOf/2P/2//P//v8kABMAuf/m/xoADADZ/+r/3P8KAAUAKwDe/wsA3P8VAAAADgAfAB0ACAAMAF4AGgAhAPL/MwDz/0kABAAKAPX/LwAbAAkA9v/s/+3/8/8CABAAAADm//n/BQALAAUAAQDj//n/JQAVAPX/9v/+/wIAEQABAPP/8P/1/wAABgD6/+3/7//o//j/DAD8/+b/8P8IAAkABgD4//D/8P8UAAoAAwD4/wAA+f8OAAcAAAAFAPX/9v8TAAkA8v8EAPb/9/8dAA0A7/8CAPn/+f8SAAQA8/8CAOf/+v8DAAgA9P////H//P8IAAUA8//0/wIAAQAGAAgA9//7/wAA+/8EAP//+P/+////AgACAAsA8v/+/wIABQD7/wgA9v/7/wMABAD5/wAA/P/3/wEAAQD7//7//P/1/wQA///3//r////3/wMAAwD1//r/AwD6////AgD4//n/AwD8//7/AgD4//n/AwD+//3/AQD4//n/BQD///n/AAD6//j/BAABAPj/AAD9//v/AwADAPj//v/+//z/AwAEAPj//v8BAP7/AQADAPj//f8CAP////8EAPr//P8DAAAA/v8CAPv//P8DAAEA/f8BAP3//f8DAAIA/P8AAP7//f8DAAIA/P///wAA/f8BAAIA+//+/wEA//8AAAEA+//+/wEA/////wEA/P/+/wEA///+/wAA/f/9/wEAAAD9/wAA/f/+/wEAAQD8/////v/+/wAAAQD8////////////AQD9////AAD/////AAD+////AAAAAP//AAD///////8AAP//AAD//wAA//8AAP//"],
        tA = ["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/P////v//P8CAAQA+//+//3//f8CAAUA+v/9//////8AAAQA+v/8////AAD//wIA+//8/wAAAQD+/wEA+//8/wAAAgD9/////P/9/wEAAgD8//7//f/9/wAAAgD8//3//v/+////AQD8//z/////////AAD8//3///8AAP7/AAD9//7///8AAP7////+//////8AAP7////+////////////////////", "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD//////v8AAP///////wAAAAAAAP7/AQABAAAABwD///X/BQAjAPL/CQDb/9D/GAAb/7sAYwCW/z0BcP/X/7T/2QDW+wH8yANCCCUJ5QT++UXmhPwhA78FuAxH+p78ifudBlAG9vmu/lAK2fdlB///cfjoCa0E7Akn9Yb/zvba+AkAHPywBGEBFwUNAL8AXAAGA20DFvmR/kz+F/06Ag/+GwHl/5EEKgJd/q0AP/ym/9n6EfxY/2H+/QFtAC4C6QBDAaMCo/20/+3/3f/p/fL9rv9V/6cBhQHuAX4AcwJYAaH/IP/P/gsApP0LAe7/sQBuAI0AAgGDAE4BzACe/5X//v+v/+f+Zf+gAOv/5QBhAOIApAANASYAuP+h/8b/HQBr/9//bACWAGEAFAB5AD0AWQDU/+D/Yf/p//D/s/+R/4QAMQBvABEAkQBfABQAJgDW/wwA8/8XALz/vf8zAFAAKwD1/zEAPwDJ/x0A7/8LAOX/FwDR//H/EQAdAO//6P8QAFEA2f8WABEAMgDy/xIA+f/s/xAALgDv////HQAvAPT/+f8iAAYAEgAFABoAGgD//w0A+f/0/xsAHgDx/9f/GAACAPH/8f8JAPf/GwALABEA7/8cAPT/CgD2//j/BQD8/+3/OgAgAAYA9f8PAN7/DgD9/9r/1//3/+3/9//1//b/8//5//f/AgAJAOf/+v8OAAMACwD9/+7/5f8eAAEA9//q//7/8P8WAP7/+//4/wIA+f8TAAIA9f/5/wcA+P8iAAgA9v/n/xoA//8gAAUABwDj/wAA9v8BAAUAFQDn/wMA7v8QABAAEQDm/wwA8f8aAAAABwDu/wcACgASAAEA7//w//f/BgARAAkA6P/3/wcADgAKAAYA4f/4/wYADgAAAPr/8P/9/xQACgAHAPn/7//9/xEAAgD+//L/8v/8/xUAAwDw//H/9f8CAAsA/v/q//L/+f8FAAYA/P/r//j///8GAAkA+//o//j/AQAIAP//+v/o//v/CAAIAPv/+P/w/wEACQAHAPj/+f/0/wIACwAFAPb/+f/4/wQACwACAPP/+f/+/wYACAD///L/+/8BAAYABQD9//P//P8FAAUAAgD7//T//f8HAAQA///7//f///8IAAMA/P/6//r/AQAIAAEA+v/6//3/AgAHAAAA+f/7/wAAAwAFAP7/+P/8/wIAAgACAP3/+f/9/wMAAwAAAPz/+v/+/wQAAgD+//z/+/8AAAQAAQD8//z//f8BAAQAAAD7//3///8BAAMA///7//3/AAACAAEA/v/7//7/AQABAAAA/v/9////AQAAAP///v/+////AAD/////////////////////////////", "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD////////+//////8AAAAA/v/+/wAAAQD8//3/CQAJAP3/+v8PAAcApABlABkBkwCO/i//lfqa/HQAcf/3BdkCzwJcBCMC0wMN/9/9wgI7AaECYfxV/Tf83vhn/xrt8Owx/8n7cgHABYb43QcZDh4WugNrA7P74gHu/9z/zv0t/acCiQHY/iv4qQOl/ysCE/0//XT9Sf4O//j9xfupAn394gHO+rsCXAFIAxQC9wIXBgcD2AQuAnb/9gJh/6wAVfxEAI4Bvf7oAFv/bALsAMQBe/88/joAT/4dAH39/v9LAXn/gwDI//QBdABcAA0A7f4lAMn///+9/tv/iABp/13/pP/dALv/w/8MAHv//f+y/6////7U/5AAZP+Z/8r/nQDR/5r/DwDr/xAA4v+s/3z/+P9uAOv/t/82AGcAHgCb/yQAFQBGAM7/CgD3/xoAegAaAOz/CgBHAA8Adv8/AAAABQC2/xIAAAA7ABQAKgCj/z4AAQAXAJz/JAADAAcA8f/1/2AAAQAlAPD/NgDx/1wA7v/4/wMAZADv//3/HQAkAFoA8P9FAPv/FgBIAPf/WQAHAEUACQD0/xIAQwDu/wMAwP9VALn/XwCw/yEA5f8sAPj/FgDD/1YAyv8rAOX/HQDo//j/IQAQACAAHwD9/yQAHQBAABgABQAiAAUAKAD3/wkACwAKAAMABwAJAPb/+f8GAOr/JQAHABMA6P8TAA4AGgD//woA8/8ZAP//GADu/w0A9v8SAAMABwD4/wQA5P8XAAQACgDq/wUA+/8VAAcACADs/xIAAAATAPH/+v/1//T/7f///+z/+v/y/+//9/8KAAcACgAJAPT/BAAKAAAABgAIAPL/9v8KAAMABAACAPr/9v8OAAIA+P/x//v/+f8MAPb/+P/w/wQA9f8MAPn////7/woA/v8PAAEAAgD1/xAAAQAPAP//AwD//xQABwALAAAABgADABAAAgAHAAAACAABAA8ABQAFAAMABwAEAA4ABwADAAEACQAFAAoAAwD//wAACQADAAUAAQD/////CAABAAMAAAD/////BwACAAEAAAD/////BwACAP7///8BAAAABgABAP7///8CAAAABAAAAP7///8DAAAAAwAAAP3///8DAAAAAQAAAP3//v8EAAAAAAD+//////8EAP/////+/wAA/v8EAP/////+/wEA/v8EAP///v/+/wIA//8DAP///v/+/wIA//8BAP///v/+/wMA//8BAP/////+/wMA//8AAP//AAD+/wQA//8AAP7/AQD//wIA////////AQD//wIA////////AQAAAAEAAAAAAP//AQD//wEAAAAAAP//AQAAAAEAAAAAAAAA", "UklGRiQEAABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YQAEAAD+/wAA+v8AAPz/AAD//wAA/f8AAAEAAAD+/wAACQAAAAQAAAAZAAAAtgAAAFsBAABW/gAAH/oAAGcBAABoBwAAlAAAAO3/AAARAQAA+wIAAEoEAACe/gAAiv4AALD0AADJ8wAAkQQAAF34AABi8QAAPQAAAAH2AAD19AAADAMAAJwGAACTEAAA0AwAAJkHAACOBwAAuQEAANcDAAC6AgAAHwUAAHEFAAB0AwAAbgEAADz+AADYAQAAGAAAAJwCAADgAAAA//0AAMn+AAAT/AAAwP8AAOn9AAAJAAAAewEAAOn+AACN/wAAOv0AAO3+AADN/gAAcP8AACj/AACq/gAA+f4AAML9AACa/wAA/f4AAN7/AABo/wAA6/4AAE//AAAC/wAAEQAAAHX/AAB0AAAA5f8AAEwAAAB3AAAA5/8AAMIAAABCAAAAzgAAAE8AAAB3AAAAKAAAADMAAACqAAAALwAAAK4AAAASAAAAVgAAACgAAAAtAAAATAAAAP3/AAA7AAAA2/8AACQAAADw/wAALQAAADEAAAAlAAAAbAAAADMAAABUAAAAEAAAACgAAAD1/wAA9v8AAPr/AADu/wAALgAAABIAAABUAAAARAAAAGUAAABGAAAAOAAAAGAAAAAuAAAARQAAACEAAAAfAAAAAAAAAAkAAAAQAAAAAwAAABIAAADs/wAAEAAAAAYAAAASAAAAIgAAABEAAAADAAAABAAAAA8AAAD4/wAAHQAAAAsAAAAIAAAADgAAAP//AAAcAAAADwAAAAYAAAASAAAAFwAAAAMAAAAYAAAAEgAAAPr/AAAQAAAADQAAAAoAAAD3/wAABgAAAPb/AADf/wAA/v8AAPL/AAD6/wAAFAAAAAQAAAAEAAAAGwAAAAEAAAAMAAAAIAAAAAIAAAAdAAAAGAAAAAIAAAAcAAAAEgAAAAcAAAAeAAAADwAAAAQAAAAeAAAABAAAAAYAAAAZAAAAAQAAAA4AAAATAAAA/v8AAAoAAAAOAAAA+/8AAAsAAAAJAAAA+f8AAAsAAAABAAAA+f8AAAoAAAD9/wAA+v8AAAcAAAD5/wAA+v8AAAUAAAD3/wAA/f8AAAQAAAD2/wAAAAAAAAEAAAD3/wAAAgAAAAAAAAD4/wAAAwAAAP7/AAD6/wAABAAAAP3/AAD8/wAABAAAAPv/AAD+/wAAAwAAAPv/AAD//wAAAQAAAPv/AAAAAAAAAAAAAPv/AAACAAAA//8AAPz/AAACAAAA/v8AAP3/AAACAAAA/f8AAP7/AAABAAAA/f8AAP//AAABAAAA/f8AAAAAAAAAAAAA/v8AAAEAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA"],
        eA = {
            AMBISONIC: "ambisonic",
            BYPASS: "bypass",
            OFF: "off"
        },
        iA = [2, 3];

    function nA(A, t) {
        this._context = i.isAudioContext(A) ? A : i.throw("HOARenderer: Invalid BaseAudioContext."), this._config = {
            ambisonicOrder: 3,
            renderingMode: eA.AMBISONIC
        }, t && t.ambisonicOrder && (iA.includes(t.ambisonicOrder) ? this._config.ambisonicOrder = t.ambisonicOrder : i.log("HOARenderer: Invalid ambisonic order. (got " + t.ambisonicOrder + ") Fallbacks to 3rd-order ambisonic.")), this._config.numberOfChannels = (this._config.ambisonicOrder + 1) * (this._config.ambisonicOrder + 1), this._config.numberOfStereoChannels = Math.ceil(this._config.numberOfChannels / 2), t && t.hrirPathList && (Array.isArray(t.hrirPathList) && t.hrirPathList.length === this._config.numberOfStereoChannels ? this._config.pathList = t.hrirPathList : i.throw("HOARenderer: Invalid HRIR URLs. It must be an array with " + this._config.numberOfStereoChannels + " URLs to HRIR files. (got " + t.hrirPathList + ")")), t && t.renderingMode && (Object.values(eA).includes(t.renderingMode) ? this._config.renderingMode = t.renderingMode : i.log("HOARenderer: Invalid rendering mode. (got " + t.renderingMode + ') Fallbacks to "ambisonic".')), this._buildAudioGraph(), this._isRendererReady = !1
    }
    nA.prototype._buildAudioGraph = function() {
        this.input = this._context.createGain(), this.output = this._context.createGain(), this._bypass = this._context.createGain(), this._hoaRotator = new $(this._context, this._config.ambisonicOrder), this._hoaConvolver = new N(this._context, this._config.ambisonicOrder), this.input.connect(this._hoaRotator.input), this.input.connect(this._bypass), this._hoaRotator.output.connect(this._hoaConvolver.input), this._hoaConvolver.output.connect(this.output), this.input.channelCount = this._config.numberOfChannels, this.input.channelCountMode = "explicit", this.input.channelInterpretation = "discrete"
    }, nA.prototype._initializeCallback = function(A, t) {
        let e;
        e = this._config.pathList ? new H(this._context, this._config.pathList, {
            dataType: "url"
        }) : 2 === this._config.ambisonicOrder ? new H(this._context, tA) : new H(this._context, AA), e.load().then(function(t) {
            this._hoaConvolver.setHRIRBufferList(t), this.setRenderingMode(this._config.renderingMode), this._isRendererReady = !0, i.log("HOARenderer: HRIRs loaded successfully. Ready."), A()
        }.bind(this), (function() {
            const A = "HOARenderer: HRIR loading/decoding failed.";
            t(A), i.throw(A)
        }))
    }, nA.prototype.initialize = function() {
        return i.log("HOARenderer: Initializing... (mode: " + this._config.renderingMode + ", ambisonic order: " + this._config.ambisonicOrder + ")"), new Promise(this._initializeCallback.bind(this))
    }, nA.prototype.setRotationMatrix3 = function(A) {
        this._isRendererReady && this._hoaRotator.setRotationMatrix3(A)
    }, nA.prototype.setRotationMatrix4 = function(A) {
        this._isRendererReady && this._hoaRotator.setRotationMatrix4(A)
    }, nA.prototype.setRenderingMode = function(A) {
        if (A !== this._config.renderingMode) {
            switch (A) {
                case eA.AMBISONIC:
                    this._hoaConvolver.enable(), this._bypass.disconnect();
                    break;
                case eA.BYPASS:
                    this._hoaConvolver.disable(), this._bypass.connect(this.output);
                    break;
                case eA.OFF:
                    this._hoaConvolver.disable(), this._bypass.disconnect();
                    break;
                default:
                    return void i.log('HOARenderer: Rendering mode "' + A + '" is not supported.')
            }
            this._config.renderingMode = A, i.log("HOARenderer: Rendering mode changed. (" + A + ")")
        }
    };
    const oA = {
            getBrowserInfo: function() {
                const A = navigator.userAgent;
                let t, e = A.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
                if (/trident/i.test(e[1])) return t = /\brv[ :]+(\d+)/g.exec(A) || [], {
                    name: "IE",
                    version: t[1] || ""
                };
                if ("Chrome" === e[1] && (t = A.match(/\bOPR|Edge\/(\d+)/), null != t)) return {
                    name: "Opera",
                    version: t[1]
                };
                e = e[2] ? [e[1], e[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (t = A.match(/version\/([\d.]+)/i)) && e.splice(1, 1, t[1]);
                let i = A.match(/android|ipad|iphone/i);
                return i || (i = A.match(/cros|linux|mac os x|windows/i)), {
                    name: e[0],
                    version: e[1],
                    platform: i ? i[0] : "unknown"
                }
            },
            patchSafari: function() {
                window.webkitAudioContext && window.webkitOfflineAudioContext && (window.AudioContext = window.webkitAudioContext, window.OfflineAudioContext = window.webkitOfflineAudioContext)
            }
        },
        sA = {};
    sA.browserInfo = oA.getBrowserInfo(), sA.createBufferList = function(A, t, e) {
        return new H(A, t, e || {
            dataType: "url"
        }).load()
    }, sA.mergeBufferListByChannel = i.mergeBufferListByChannel, sA.splitBufferbyChannel = i.splitBufferbyChannel, sA.createFOAConvolver = function(A, t) {
        return new G(A, t)
    }, sA.createFOARouter = function(A, t) {
        return new R(A, t)
    }, sA.createFOARotator = function(A) {
        return new z(A)
    }, sA.createHOARotator = function(A, t) {
        return new $(A, t)
    }, sA.createHOAConvolver = function(A, t, e) {
        return new N(A, t, e)
    }, sA.createFOARenderer = function(A, t) {
        return new Y(A, t)
    }, sA.createHOARenderer = function(A, t) {
        return new nA(A, t)
    }, i.log(`Version 1.3.0 (running ${sA.browserInfo.name} ${sA.browserInfo.version} on ${sA.browserInfo.platform})`), "safari" === sA.browserInfo.name.toLowerCase() && (oA.patchSafari(), i.log(sA.browserInfo.name + " detected. Polyfill applied."));
    var aA, rA, hA = sA;
    window.AFRAME;
    aA = rA = function() {};
    var cA = window.AFRAME,
        fA = window.THREE;

    function uA(A, t, e) {
        A && (e ? A.setAttribute(t, !0) : A.removeAttribute(t))
    }

    function gA(A) {
        var t = A + 1;
        return t * t
    }
    var wA = ["setCamera", "onEntityChange", "onLoadSound", "onPlaySound", "onPauseSound", "onEndSound"],
        lA = {
            sid: [0, 3, 1, 2, 8, 4, 7, 5, 6, 15, 9, 14, 10, 13, 11, 12],
            fuma: [0, 3, 1, 2, 6, 7, 5, 8, 4, 12, 13, 11, 14, 10, 15, 9]
        },
        DA = /^([0-9]+)(\s*,\s*([0-9]+))*$/;
    cA.registerComponent("ambisonic", {
        schema: {
            src: {
                type: "audio"
            },
            sources: {
                type: "array",
                default: []
            },
            loop: {
                type: "boolean",
                default: !0
            },
            autoplay: {
                type: "boolean",
                default: !1
            },
            useMediaElement: {
                type: "boolean",
                default: !0
            },
            order: {
                type: "number",
                default: 1
            },
            channelMap: {
                parse: function(A) {
                    return "string" == typeof A && (A = A.trim().toLowerCase()), lA[A] ? lA[A] : DA.test(A) ? A.split(",").map(parseFloat) : []
                },
                stringify: function(A) {
                    return Array.isArray(A) ? A.join(", ") : A
                },
                default: "ACN"
            },
            mode: {
                default: "ambisonic",
                oneOf: ["bypass", "ambisonic", "off"]
            }
        },
        init: function() {
            var A = this;
            this.context = null, this.renderer = null, this.audio = null, this.mediaElement = null, this.audioSources = [], this.loading = !1, this.ownMediaElement = !1, this.playing = !1, wA.forEach((function(t) {
                A[t] = A[t].bind(A)
            })), this.el.addEventListener("componentchanged", this.onEntityChange)
        },
        update: function(A) {
            var t = this,
                e = this.el.sceneEl,
                i = e.audioListener,
                n = i && i.context || this.context || fA.AudioContext.getContext();
            this.camera = e.camera || null, e.addEventListener("camera-set-active", this.setCamera);
            var o = this.data,
                s = o.order,
                a = o.src,
                r = o.sources,
                h = gA(s),
                c = this.data.useMediaElement && (!r || !(r.length >= 2)),
                f = n !== this.context || !this.renderer || this.renderer.input.channelCount > 4 != h >= 4;
            if (f) {
                this.context = n, this.resumeAudioContext(), this.renderer && (this.renderer.output.disconnect(), this.renderer = null);
                var u = 4 === h ? hA.createFOARenderer : hA.createHOARenderer,
                    g = this.renderer = u(this.context, {
                        ambisonicOrder: s
                    });
                g.initialize().then((function() {
                    g === t.renderer && n === t.context && (t.audio.gain.connect(t.renderer.input), g.output.connect(n.destination), t.updateAmbisonicSettings())
                })), this.audio = new fA.Audio(i || {
                    context: n,
                    getInput: function() {
                        return n.destination
                    }
                }), this.audio.gain.disconnect()
            }
            if (f || !!A.useMediaElement != !!c || A.src !== a || JSON.stringify(A.sources) !== JSON.stringify(r))
                if (c) {
                    var w = null;
                    a instanceof window.HTMLMediaElement ? (w = a, this.ownMediaElement = !1) : a && ((w = document.createElement("audio")).src = a, this.ownMediaElement = !0), this.mediaElement !== w && this.cleanMediaAssets(), w && (w.addEventListener("play", this.onPlaySound), w.addEventListener("pause", this.onPauseSound), w.addEventListener("load", this.onLoadSound), w.addEventListener("canplay", this.onLoadSound), w.addEventListener("ended", this.onEndSound)), !this.mediaElement && w && this.ownMediaElement && (w.onerror = function(A) {
                        rA("Error loading audio", a, A)
                    }, w.onloadedmetadata = function() {
                        aA("Audio metadata loaded", a, t.mediaElement)
                    }), this.mediaElement = w, this.audioSources = [], this.mediaElement ? this.audio.setMediaElementSource(this.mediaElement) : this.audio.source && this.audio.disconnect()
                } else {
                    var l = a;
                    if (a && "string" != typeof a && a instanceof window.HTMLMediaElement) {
                        if ("video" === a.tagName.toLowerCase()) throw new Error("Unable to load video as audio buffer");
                        l = a.src || a.srcObject || a.currentSrc
                    }
                    r && r.length ? this.audioSources = r : this.audioSources = [l], this.cleanMediaAssets(), this.data.autoplay && this.loadBuffer()
                } this.updatePlaybackSettings(), this.updateAmbisonicSettings()
        },
        tick: function() {
            var A, t;
            this.renderer && this.camera && (A = this.renderer, t = this.camera, A.setRotationMatrix4(t.matrixWorldInverse.elements))
        },
        play: function() {
            this.data.autoplay && this.playSound()
        },
        pause: function() {
            this.pauseSound()
        },
        cleanMediaAssets: function() {
            this.mediaElement && (this.mediaElement.removeEventListener("play", this.playSound), this.mediaElement.removeEventListener("pause", this.onPauseSound), this.mediaElement.removeEventListener("load", this.onLoadSound), this.mediaElement.removeEventListener("canplay", this.onLoadSound), this.mediaElement.removeEventListener("ended", this.onEndSound), this.ownMediaElement && (this.mediaElement.pause(), this.mediaElement.src = "", this.mediaElement.load()), this.mediaElement = null), this.audio && (this.audio.isPlaying && this.audio.stop(), this.audio.source && this.audio.source.removeEventListener("ended", this.onEndSound), this.audio.source = null, this.audio.buffer = null, this.audio.sourceType = "empty"), this.loading && (this.loading = !1), this.audio.crossOrigin = "anonymous")
        },
        remove: function() {
            var A = this.el,
                t = A && A.sceneEl;
            t && t.removeEventListener("camera-set-active", this.setCamera), this.el.removeEventListener("componentchanged", this.onEntityChange), this.disconnect(), this.cleanMediaAssets()
        },
        setCamera: function(A) {
            this.camera = A.detail.cameraEl.getObject3D("camera")
        },
        resumeAudioContext: function() {
            return this.context && this.context.resume && "suspended" === this.context.state ? this.context.resume().catch((function() {})) : Promise.resolve()
        },
        loadBuffer: function() {
            var A = this;
            this.resumeAudioContext().then((function() {
                if (!A.loading && A.audioSources.length) {
                    A.loading = !0;
                    var t = JSON.stringify(A.audioSources);
                    hA.createBufferList(A.context, A.audioSources).then((function(e) {
                        var i = hA.mergeBufferListByChannel(A.context, e);
                        A.data.useMediaElement && (!t || !(t.length >= 2)) || t !== JSON.stringify(A.audioSources) || (A.audio.setBuffer(i), A.onLoadSound(), A.updatePlaybackSettings(), A.playing && A.playSound())
                    })).catch((function(t) {
                        rA("Unable to decode audio source", A.audioSources, t)
                    }))
                }
            }))
        },
        playSound: function() {
            if (this.playing = !0, this.resumeAudioContext(), this.mediaElement) {
                var A = this.mediaElement.play();
                A && A.catch((function(A) {
                    rA("Unable to play media", A.message)
                }))
            } else this.audio && !this.audio.isPlaying && (this.loadBuffer(), this.audio.buffer && (this.audio.play(), this.audio.source.addEventListener("ended", this.onEndSound), this.onPlaySound()))
        },
        pauseSound: function() {
            this.playing = !1, this.mediaElement ? this.mediaElement.pause() : this.audio && this.audio.isPlaying && (this.audio.pause(), this.onPauseSound())
        },
        stopSound: function() {
            this.mediaElement ? this.mediaElement.pause() : this.audio && (this.audio.stop(), this.onPauseSound())
        },
        onPlaySound: function() {
            this.resumeAudioContext(), this.el.emit("sound-play")
        },
        onPauseSound: function() {
            this.el.emit("sound-pause")
        },
        onLoadSound: function() {
            this.el.emit("sound-loaded")
        },
        onEndSound: function() {
            this.audio && this.audio.source && (this.onPauseSound(), this.audio.source.removeEventListener("ended", this.onEndSound)), this.el.emit("sound-ended")
        },
        updateAmbisonicSettings: function() {
            if (this.renderer) {
                if (this.renderer.setChannelMap) {
                    for (var A = this.data.channelMap.slice(0), t = gA(this.data.order), e = A.length; e < t; e++) A[e] = e;
                    A.length = t, this.renderer.setChannelMap((A.length, A))
                }
                var i = this.data,
                    n = i.order,
                    o = i.mode,
                    s = n >= 1 && n <= 3 || "ambisonic" !== o ? this.data.mode : "bypass";
                this.renderer.setRenderingMode(s)
            }
        },
        updatePlaybackSettings: function() {
            this.mediaElement ? this.ownMediaElement && (uA(this.mediaElement, "loop", this.data.loop), uA(this.mediaElement, "autoplay", this.data.autoplay)) : this.audio && (this.audio.setLoop(this.data.loop), this.audio.autoplay = this.data.autoplay)
        },
        onEntityChange: function(A) {
            "rotation" === A.detail.name && this.el.sceneEl.object3D.updateMatrixWorld(!0)
        },
        disconnect: function() {
            this.audio && (this.audio.disconnect(), this.audio.gain.disconnect()), this.renderer && (this.renderer.input.disconnect(), this.renderer.output.disconnect())
        }
    }), cA.registerPrimitive("a-ambisonic", {
        defaultComponents: {
            ambisonic: {}
        },
        mappings: {
            src: "ambisonic.src",
            sources: "ambisonic.sources",
            loop: "ambisonic.loop",
            autoplay: "ambisonic.autoplay",
            order: "ambisonic.order",
            "use-media-element": "ambisonic.useMediaElement",
            "channel-map": "ambisonic.channelMap",
            mode: "ambisonic.mode"
        }
    })
}]);
//# sourceMappingURL=aframe-ambisonic-component.min.js.map
