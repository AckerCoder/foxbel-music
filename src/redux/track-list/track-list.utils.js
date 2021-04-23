import {Howl} from 'howler';


export const setPlayList = (trackList) => {
    let mp3List = [];
    trackList.map(track => mp3List.push(track.preview))
    return mp3List;
}

export const playTrack = (indexSong, currentPlayList) => {
    console.log("Array of MP3: ", currentPlayList);
    console.log("Index: ", indexSong);

    let sound = new Howl({
        src: [currentPlayList[indexSong]]
    });
    sound.play();
    return Howl;
}
