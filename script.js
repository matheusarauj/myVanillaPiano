const audios = {
    'f1':{
        pathNote:'FirstOctave/F1.mp3',
        key:90
    },
    'f#1':{
        pathNote:'FirstOctave/Fs1.mp3',
        key:83
    },
    'g1':{
        pathNote:'FirstOctave/G1.mp3',
        key:88
    },
    'g#1':{
        pathNote:'FirstOctave/Gs1.mp3',
        key:68
    },
    'a1':{
        pathNote:'SecondOctave/A2.mp3',
        key:67
    },
    'a#1':{
        pathNote:'SecondOctave/As2.mp3',
        key:70
    },
    'b1':{
        pathNote:'SecondOctave/B2.mp3',
        key:86
    },
    'c1':{
        pathNote:'SecondOctave/C2.mp3',
        key:66
    },
    'c#1':{
        pathNote:'SecondOctave/Cs2.mp3',
        key:72
    },
    'd1':{
        pathNote:'SecondOctave/D2.mp3',
        key:78
    },
    'd#1':{
        pathNote:'SecondOctave/Ds2.mp3',
        key:74
    },
    'e1':{
        pathNote:'SecondOctave/E2.mp3',
        key:77
    },
    'f2':{
        pathNote:'SecondOctave/F2.mp3',
        key:81
    },
    'f#2':{
        pathNote:'SecondOctave/Fs2.mp3',
        key:50
    },
    'g2':{
        pathNote:'SecondOctave/G2.mp3',
        key:87
    },
    'g#2':{
        pathNote:'SecondOctave/Gs2.mp3',
        key:51
    },
    'a2':{
        pathNote:'ThirdOctave/A3.mp3',
        key:69
    },
    'a#2':{
        pathNote:'ThirdOctave/A3.mp3',
        key:52
    },
    'b2':{
        pathNote:'ThirdOctave/B3.mp3',
        key:82
    },
    'c2':{
        pathNote:'ThirdOctave/C3.mp3',
        key:84
    },
    'c#2':{
        pathNote:'ThirdOctave/Cs3.mp3',
        key:54
    },
    'd2':{
        pathNote:'ThirdOctave/D3.mp3',
        key:89
    },
    'd#2':{
        pathNote:'ThirdOctave/Ds3.mp3',
        key:55
    },
    'e2':{
        pathNote:'ThirdOctave/E3.mp3',
        key:85
    },
} 

function play(id){   
    var audio = new Audio('Notes/' + audios[id].pathNote)
    audio.play();
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    var notes = Object.keys(audios)

    var note = notes.filter(note => {
        return audios[note].key == key
    })[0]

    if(note)
        play(note)
}