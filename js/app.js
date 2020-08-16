var allsongs = [{title: 'Prelude in G', duration: '2:34', audio: 'https://easymath.github.io/download-test/PreludeinG.mp3', web: '/prelude-in-g'}, {title: 'Prelude in C', duration: '2:46', audio: 'https://easymath.github.io/download-test/Prelude_in_C.mp3', web: '/prelude-in-c'}, {title: 'Let\'s Party! (Roaring 20s)', duration: '3:15', audio: 'https://easymath.github.io/download-test/Let\'s_Party!_(Roaring_20\'s).mp3', web: '/lets-party-roaring-20s'}]

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
    var download = document.createElement('A');
    download.className = 'downloadbtn'
    var innerlink = document.createTextNode('View & Download →')
    download.setAttribute('href', allsongs[i].web);
    download.setAttribute('target', '_blank')
    download.appendChild(innerlink);
    document.getElementsByClassName('nameofsong')[i].appendChild(download);
}

for (i = 0; i < 3; i++){
    var listen = document.createElement('A');
    listen.className = 'listenbtn'
    var innerlink = document.createTextNode('Listen');
    listen.setAttribute('href', allsongs[i].audio);
    listen.setAttribute('target', '_blank')
    listen.appendChild(innerlink);
    document.getElementsByClassName('nameofsong')[i].appendChild(listen);
}

for (i = 0; i < 3; i++){
    var duration = document.createElement('span');
    duration.className = 'duration'
    duration.innerHTML = 'Duration: ' + allsongs[i].duration;
    document.getElementsByClassName('nameofsong')[i].appendChild(duration);
}




