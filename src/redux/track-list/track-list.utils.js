import {Howl} from 'howler'; 

export const setPlayList = (trackList) => {
    if(trackList){
        let mp3List = [];
        trackList.map(track => mp3List.push(track.preview))
        return mp3List;
    }
}

export const playTrack = (indexSong, currentPlayList, mediaPlayer) => {
    console.log(indexSong);
    window.Howler.stop();
    mediaPlayer = new Howl({
        src: currentPlayList[indexSong]
    })
    mediaPlayer.play();

    return indexSong;
}
