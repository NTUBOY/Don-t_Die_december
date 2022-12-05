import sound from "./sound";


const play = ()=>{
    const {C4Audio, D4Audio, E4Audio, F4Audio, G4Audio} = sound();
    const group = [C4Audio, D4Audio, E4Audio, F4Audio, G4Audio];
    let fired = [];
    for (let index = 0; index < 223; index++) {
        fired[index] = false;
    }
    const playMusic = (e)=>{
        if(fired[e.keyCode]){return;}
        switch(e.keyCode){
            case 67:
                group[0].play();
                break;
            case 86:
                group[1].play();
                break;
            case 66:
                group[2].play();
                break;
            case 78:
                group[3].play();
                break;
            case 77: 
                group[4].play();
                break;
            default: 
                break;
        };
        fired[e.keyCode] = true;
    }
    const stopMusic = (e)=>{
        switch(e.keyCode){
            case 67:
                group[0].stop();
                break;
            case 86:
                group[1].stop();
                break;
            case 66:
                group[2].stop();
                break;
            case 78:
                group[3].stop();
                break;
            case 77: 
                group[4].stop();
                break;
            default: 
                break;
        };
        fired[e.keyCode] = false;
    }

    document.onkeydown = playMusic;
    document.onkeyup = stopMusic;
}

export default play;
