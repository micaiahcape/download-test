var allsongs = [{title: 'Prelude in G', duration: '2:34', audio: 'https://easymath.github.io/download-test/PreludeinG.mp3'}, {title: 'Prelude in C', duration: '2:46', audio: 'https://easymath.github.io/download-test/Prelude_in_C.mp3'}, {title: 'Let\'s Party! (Roaring 20s)', duration: '3:15', audio: 'https://easymath.github.io/download-test/Let\'s_Party!_(Roaring_20\'s).mp3'}]

for (i = 0; i < 3; i++){
    var audiofile = document.createElement('audio');
    audiofile.className = 'listen'
    audiofile.setAttribute('src', allsongs[i].audio);
    audiofile.setAttribute('type', 'audio/mpeg')
    document.body.appendChild(audiofile);
}

for (i = 0; i < 3; i++){
    var empty = document.createElement('div');
    empty.className = 'emptycont'
    document.getElementById('popular').appendChild(empty);
}

for (i = 0; i < 3; i++){
    var songtitle = document.createElement('p');
    songtitle.className = 'nameofsong'
    songtitle.innerHTML = allsongs[i].title;
    document.getElementsByClassName('emptycont')[i].appendChild(songtitle);
}

for (i = 0; i < 3; i++){
    var download = document.createElement('span');
    download.className = 'downloadbtn'
    download.innerHTML = 'Download →';
    document.getElementsByClassName('nameofsong')[i].appendChild(download);
}

for (i = 0; i < 3; i++){
    var listen = document.createElement('span');
    listen.className = 'listenbtn'
    listen.innerHTML = ' ▶  Play';
    document.getElementsByClassName('nameofsong')[i].appendChild(listen);
}

for (i = 0; i < 3; i++){
    var duration = document.createElement('span');
    duration.className = 'duration'
    duration.innerHTML = 'Duration: ' + allsongs[i].duration;
    document.getElementsByClassName('nameofsong')[i].appendChild(duration);
}

function playAudio1(){
    if(document.getElementsByClassName('listenbtn')[0].innerHTML === ' ▶  Play'){
        document.getElementsByClassName('listenbtn')[0].innerHTML = '|| Pause';
        document.getElementsByClassName('listen')[1].play();
    }else{
        document.getElementsByClassName('listenbtn')[0].innerHTML = ' ▶  Play';
        document.getElementsByClassName('listen')[1].pause();
    }
}

function playAudio2(){
    if(document.getElementsByClassName('listenbtn')[1].innerHTML === ' ▶  Play'){
        document.getElementsByClassName('listenbtn')[1].innerHTML = '|| Pause';
        document.getElementsByClassName('listen')[2].play();
    }else{
        document.getElementsByClassName('listenbtn')[1].innerHTML = ' ▶  Play';
        document.getElementsByClassName('listen')[2].pause();
    }
}

function playAudio3(){
    if(document.getElementsByClassName('listenbtn')[2].innerHTML === ' ▶  Play'){
        document.getElementsByClassName('listenbtn')[2].innerHTML = '|| Pause';
        document.getElementsByClassName('listen')[3].play();
    }else{
        document.getElementsByClassName('listenbtn')[2].innerHTML = ' ▶  Play';
        document.getElementsByClassName('listen')[3].pause();
    }
}

document.getElementsByClassName('listenbtn')[0].addEventListener('click', playAudio1);
document.getElementsByClassName('listenbtn')[1].addEventListener('click', playAudio2);
document.getElementsByClassName('listenbtn')[2].addEventListener('click', playAudio3);


