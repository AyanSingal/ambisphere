function renderAmb(game){

    if (game == "skyrim") {
        var btn = document.getElementById("sk-btn");
        playlistGame = '"https://open.spotify.com/embed/album/25r7pEf31viAbsoVHC6bQ4?utm_source=generator"'
        btn.addEventListener("click",function(){
            window.location.href = "skyrimDisp.html";
            
        })
    }

    if(game == "witcher"){
        var btn = document.getElementById("witcher-btn")
        playlistGame = '"https://open.spotify.com/embed/album/6pYNEn4tMc6gdv5fIZf5yn?utm_source=generator"'
        btn.addEventListener("click", function () {
            window.location.href = "witcherDisp.html";
        })
    }

    if(game=="rdr"){
        var btn = document.getElementById("rdr-btn")
        playlistGame = '"https://open.spotify.com/embed/album/5Oli3gQJrHdahY7FDEoofW?utm_source=generator"'
        btn.addEventListener("click", function () {
            window.location.href = "rdrDisp.html";
        })
    }

    if(game=="metro"){
        var btn = document.getElementById("metro-btn")
        playlistGame = '"https://open.spotify.com/embed/album/48skMic15wV2zu4HAOx28s?utm_source=generator"'
        btn.addEventListener("click", function () {
            window.location.href = "metroDisp.html";
        })
    }

    if (game == "tlou") {
        var btn = document.getElementById("tlou-btn")
        playlistGame = '"https://open.spotify.com/embed/album/2GFFxj8aR2XpwIMYanOPjh?utm_source=generator"'
        btn.addEventListener("click", function () {
            window.location.href = "tlouDisp.html";
        })
    }

    if (game == "fallout") {
        var btn = document.getElementById("fallout-btn")
        playlistGame = '"https://open.spotify.com/embed/playlist/2lBKiVt2X6hLmoWLoohufg?utm_source=generator"'
        btn.addEventListener("click", function () {
            window.location.href = "falloutDisp.html";
        })
    }
}
