$(document).ready(function () {

    const urlAudio = "./assets/audio/";
    const urlImgCover = "./assets/cover/";
    const tbPlaylist = [
        {
            mp3: "booba-mona-lisa-feat-jsx-clip-officiel.mp3",
            cover : "Booba-Ultra.jpg",
            artiste : "Booba",
            genre : "RAP",
            annee : 2021,
            titre : "Mona Lisa ( ft JSX)"
        },
        {
            mp3 : "benab-la-night-clip-officiel.mp3",
            cover : "benab-2021-album-au-clair-de-la-rue.jpg",
            artiste : "Benab",
            genre : "RAP",
            annee : 2021,
            titre : "La night"
        },
        {
            mp3 : "freeze-corleone-667-feat-ashe-22-scelle-part2.mp3",
            cover : "81lEy1ilCJL._SL1500_.jpg",
            artiste : "Freeze Corleone",
            genre : "RAP",
            annee : 2020,
            titre : "Scelle Part 2 (ft ASHE22)"
        }
    ];
    let currentTrack = 0;
    let audioObj = new Audio(urlAudio+tbPlaylist[currentTrack].mp3);
    let imgCover = $("#cover img").attr("src",urlImgCover+tbPlaylist[currentTrack].cover)

    
    
    let totalTrack = tbPlaylist.length;
    let playPause = false;
    function playTrack(){
        console.log("lecture");
        audioObj.play()
    }
    function pauseTrack(){
        console.log("pause");
        audioObj.pause()
    }
    function nextTrack(){
        console.log("Next track");
        // stopper la music en cours
        pauseTrack();
        // determiner ou je suis dans mon tableau
        if(currentTrack === (totalTrack-1)){
            currentTrack = 0;
            console.log(urlAudio+tbPlaylist[currentTrack].mp3);
            audioObj = new Audio(urlAudio+tbPlaylist[currentTrack].mp3);
        }else{
            currentTrack++;
            audioObj = new Audio(urlAudio+tbPlaylist[currentTrack].mp3);
        }
        playPause = true;
        $("#cover img").attr("src",urlImgCover+tbPlaylist[currentTrack].cover); 
        $("#playPause img").attr("src","./assets/img/pause-circle-regular.svg"); 
        playTrack();
    }
    function prevTrack(){
        console.log("Previous track");
        // stopper la music en cours
        pauseTrack();
        // determiner ou je suis dans mon tableau
        if(currentTrack === 0){
            currentTrack = totalTrack-1;
            console.log(urlAudio+tbPlaylist[currentTrack].mp3);
            audioObj = new Audio(urlAudio+tbPlaylist[currentTrack].mp3);
        }else{
            currentTrack--;
            audioObj = new Audio(urlAudio+tbPlaylist[currentTrack].mp3);
        }
        playPause = true;
        $("#cover img").attr("src",urlImgCover+tbPlaylist[currentTrack].cover);
        $("#playPause img").attr("src","./assets/img/pause-circle-regular.svg"); 
        playTrack();
    }
    function volumeUp(){}
    function volumeDown(){}
    
    
    $("#playPause").click(()=>{
        if(!playPause){
            $("#playPause img").attr("src","./assets/img/pause-circle-regular.svg");
            playTrack();
            playPause = true;
        } else {
            $("#playPause img").attr("src","./assets/img/play-circle-solid.svg");
            pauseTrack();
            playPause = false;
        }
        
    })
    $("#prev").click(()=>{
            prevTrack()
    })
    $("#next").click(()=>{
            nextTrack()
    })

    // part anime
    $("#playPause").click(function () { 
        $("#playPause").animate({"width":"2rem","height":"2rem"},200)
        .animate({"width":"3rem","height":"3rem"},100)
    })


});


