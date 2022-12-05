import C4Sound from './waves/C4.mp3';
import D4Sound from './waves/D4.mp3';
import E4Sound from './waves/E4.mp3';
import F4Sound from './waves/F4.mp3';
import G4Sound from './waves/G4.mp3';
import {Howl} from 'howler';
const sound = ()=>{
    const C4Audio = new Howl({src:[C4Sound], loop: false, volumn: 1});
    const D4Audio = new Howl({src:[D4Sound], loop: false, volumn: 1});
    const E4Audio = new Howl({src:[E4Sound], loop: false, volumn: 1});
    const F4Audio = new Howl({src:[F4Sound], loop: false, volumn: 1});
    const G4Audio = new Howl({src:[G4Sound], loop: false, volumn: 1});
    return {C4Audio, D4Audio, E4Audio, F4Audio, G4Audio};
}

export default sound;