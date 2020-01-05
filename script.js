function play(id){
    if (id == 'f1'){
        var audio = new Audio('Notes/FirstOctave/F1.mp3');
    }
    else if (id == 'f#1') {
        var audio = new Audio('Notes/FirstOctave/Fs1.mp3');
    }
    else if (id == 'g1'){
        var audio = new Audio('Notes/FirstOctave/G1.mp3');
    }
    else if (id == 'g#1') {
        var audio = new Audio('Notes/FirstOctave/Gs1.mp3');
    }
    else if (id == 'a1'){
        var audio = new Audio('Notes/SecondOctave/A2.mp3');
    }
    else if (id == 'a#1') {
        var audio = new Audio('Notes/SecondOctave/As2.mp3');
    }
    else if (id == 'b1'){
        var audio = new Audio('Notes/SecondOctave/B2.mp3');
    }
    else if (id == 'c1'){
        var audio = new Audio('Notes/SecondOctave/C2.mp3');
    }
    else if (id == 'c#1') {
        var audio = new Audio('Notes/SecondOctave/Cs2.mp3');
    }
    else if (id == 'd1'){
        var audio = new Audio('Notes/SecondOctave/D2.mp3');
    }
    else if (id == 'd#1') {
        var audio = new Audio('Notes/SecondOctave/Ds2.mp3');
    }
    else if (id == 'e1'){
        var audio = new Audio('Notes/SecondOctave/E2.mp3');
    }
    else if (id == 'f2'){
        var audio = new Audio('Notes/SecondOctave/F2.mp3');
    }
    else if (id == 'f#2') {
        var audio = new Audio('Notes/SecondOctave/Fs2.mp3');
    }
    else if (id == 'g2'){
        var audio = new Audio('Notes/SecondOctave/G2.mp3');
    }
    else if (id == 'g#2') {
        var audio = new Audio('Notes/SecondOctave/Gs2.mp3');
    }
    else if (id == 'a2'){
        var audio = new Audio('Notes/ThirdOctave/A3.mp3');
    }
    else if (id == 'a#2') {
        var audio = new Audio('Notes/ThirdOctave/As3.mp3');
    }
    else if (id == 'b2'){
        var audio = new Audio('Notes/ThirdOctave/B3.mp3');
    }
    else if (id == 'c2'){
        var audio = new Audio('Notes/ThirdOctave/C3.mp3');
    }
    else if (id == 'c#2') {
        var audio = new Audio('Notes/ThirdOctave/Cs3.mp3');
    }
    else if (id == 'd2'){
        var audio = new Audio('Notes/ThirdOctave/D3.mp3');
    }
    else if (id == 'd#2') {
        var audio = new Audio('Notes/ThirdOctave/Ds3.mp3');
    }
    else if (id == 'e2'){
        var audio = new Audio('Notes/ThirdOctave/E3.mp3');
    }
    audio.play();
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
 
    if (key == 90) {
        play('f1');
    }
    else if (key == 83) {
        play('f#1');
    }
    else if (key == 88) {
        play('g1');
    }
    else if (key == 68) {
        play('g#1');
    }
    else if (key == 67) {
        play('a1');
    }
    else if (key == 70) {
        play('a#1');
    }
    else if (key == 86) {
        play('b1');
    }
    else if (key == 66) {
        play('c1');
    }
    else if (key == 72) {
        play('c#1');
    }
    else if (key == 78) {
        play('d1');
    }
    else if (key == 74) {
        play('d#1');
    }
    else if (key == 77) {
        play('e1');
    }
    else if (key == 81) {
        play('f2');
    }
    else if (key == 50) {
        play('f#2');
    }
    else if (key == 87) {
        play('g2');
    }
    else if (key == 51) {
        play('g#2');
    }
    else if (key == 69) {
        play('a2');
    }
    else if (key == 52) {
        play('a#2');
    }
    else if (key == 82) {
        play('b2');
    }
    else if (key == 84) {
        play('c2');
    }
    else if (key == 54) {
        play('c#2');
    }
    else if (key == 89) {
        play('d2');
    }
    else if (key == 55) {
        play('d#2');
    }
    else if (key == 85) {
        play('e2');
    }
 }