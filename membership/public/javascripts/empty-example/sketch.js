const toggleButton = $('.toggle-btn');
const sidebar = $('.sidebar');
let isOpen = true;

toggleButton.on('click', function () {                      // 사이드바 이동
    if(isOpen) {
        toggleButton.css('left', '280px');
        sidebar.css('left', '0');
        isOpen = false;
    }
    else {
        toggleButton.css('left', '30px');
        sidebar.css('left', '-250px');
        isOpen = true;
    }
});

let ismusicClick = true;
const musicButton = $('#Music');
const musicList = $('.musicList');

musicButton.on('click', function(){                          // Music 버튼 클릭 시, DropDown 및 색깔 변환
    if(ismusicClick){
        musicButton.addClass('click_color');
        musicButton.removeClass('unclick_color');
        musicList.css('height', '240px');
        ismusicClick = false;
    }
    else{
        musicButton.addClass('unclick_color');
        musicButton.removeClass('click_color');
        musicList.css('height', '0');
        ismusicClick = true;
    }
});

let isbackgroundClick = true;
const backgroundButton = $('#Background');
const backgroundList = $('.backgroundList');

backgroundButton.on('click', function(){                     // Background 버튼 클릭 시, DropDown 및 색깔 변
    if(isbackgroundClick){
        backgroundButton.addClass('click_color');
        backgroundButton.removeClass('unclick_color');
        backgroundList.css('height', '96px');
        isbackgroundClick = false;
    }
    else{
        backgroundButton.addClass('unclick_color');
        backgroundButton.removeClass('click_color');
        backgroundList.css('height', '0');
        isbackgroundClick = true;
    }
});

let isdepthClick = true;
const depthButton = $('#Depth');
const depthList = $('.depthList');

depthButton.on('click', function(){
    if(isdepthClick){
        depthButton.addClass('click_color');
        depthButton.removeClass('unclick_color');
        depthList.css('height', '40px');
        isdepthClick = false;
    }
    else{
        depthButton.addClass('unclick_color');
        depthButton.removeClass('click_color');
        depthList.css('height', '0px');
        isdepthClick = true;
    }
});

const depthrateButton = $('#inputtag');

depthrateButton.on('click', function(){
    depthrate = this.value*0.2;
});


const rainBowButton = $('#Rainbow');
const snowButton = $('#Snow');
const fireworkButton = $('#Firework');

rainBowButton.on('click', function(){                       // rainbowButton 눌렀을 시, 이전 화면 클리어 후 Background Rainbow 모드로 전환
    backgroundMode = 0;
    shape.splice(0, shape.length);
    fireworks.splice(0, fireworks.length);
    fireddong.splice(0, fireddong.length);
    rainBowButton.addClass('click_color');
    rainBowButton.removeClass('unclick_color');
    snowButton.addClass('unclick_color');
    snowButton.removeClass('click_color');
    fireworkButton.addClass('unclick_color');
    fireworkButton.removeClass('click_color');
});

snowButton.on('click', function(){                          // snowButton 눌렀을 시, 이전 화면 클리어 후 Background Snow 모드로 전환
    backgroundMode = 1;
    shape.splice(0, shape.length);
    fireworks.splice(0, fireworks.length);
    fireddong.splice(0, fireddong.length);
    rainBowButton.addClass('unclick_color');
    rainBowButton.removeClass('click_color');
    snowButton.addClass('click_color');
    snowButton.removeClass('unclick_color');
    fireworkButton.addClass('unclick_color');
    fireworkButton.removeClass('click_color');
});

fireworkButton.on('click', function(){                      // fireworkButton 눌렀을 시, 이전 화면 클리어 후 Background Firework 모드로 전환
    backgroundMode = 2;
    shape.splice(0, shape.length);
    fireworks.splice(0, fireworks.length);
    fireddong.splice(0, fireddong.length);
    rainBowButton.addClass('unclick_color');
    rainBowButton.removeClass('click_color');
    snowButton.addClass('unclick_color');
    snowButton.removeClass('click_color');
    fireworkButton.addClass('click_color');
    fireworkButton.removeClass('unclick_color');
});

var selectMusic = [];

const music0 = $('#Music0');
const music1 = $('#Music1');
const music2 = $('#Music2');
const music3 = $('#Music3');
const music4 = $('#Music4');
const music5 = $('#Music5');
const music6 = $('#Music6');
const music7 = $('#Music7');
const music8 = $('#Music8');
const music9 = $('#Music9');
const music10 = $('#Music10');
const music11 = $('#Music11');
const music12 = $('#Music12');
const music13 = $('#Music13');
const music14 = $('#Music14');
const music15 = $('#Music15');
const music16 = $('#Music16');

selectMusic.push(music0);
selectMusic.push(music1);
selectMusic.push(music2);
selectMusic.push(music3);
selectMusic.push(music4);
selectMusic.push(music5);
selectMusic.push(music6);
selectMusic.push(music7);
selectMusic.push(music8);
selectMusic.push(music9);
selectMusic.push(music10);
selectMusic.push(music11);
selectMusic.push(music12);
selectMusic.push(music13);
selectMusic.push(music14);
selectMusic.push(music15);
selectMusic.push(music16);

music0.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 0) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});

music1.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 1) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});

music2.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 2) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});

music3.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 3) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});
music4.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 4) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});
music5.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 5) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});
music6.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 6) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});
music7.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 7) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});
music8.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 8) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});
music9.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 9) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});
music10.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 10) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});
music11.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 11) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});
music12.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 12) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});
music13.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 13) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});
music14.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 14) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});
music15.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 15) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});

music16.on('click', function(){
    $(".playButton > i").html(" pause_circle_outline");
    isPlaying = false;
    for(var i = 0; i < musics.length; i++) {
        if (i == 16) {
            musics[i].stop();
            musics[i].play();
            selectMusic[i].addClass('click_color');
            selectMusic[i].removeClass('unclick_color');
        }
        else {
            musics[i].stop();
            selectMusic[i].addClass('unclick_color');
            selectMusic[i].removeClass('click_color');
        }
    }
});

const playButton = $('.playButton');
let isPlaying = true;

playButton.on('click', function() {                                 // Play 버튼 클릭시 Pause 버튼으로 변환 및 재생, 일시정지 동작 구현
    if(isPlaying){
        for(var i = 0; i < musics.length; i++){
            if(musics[i].isPaused())
                musics[i].play();
        }
        $(".playButton > i").html(" pause_circle_outline");
        isPlaying = false;
    }
    else{
        for(var i = 0; i < musics.length; i++){
            if(musics[i].isPlaying())
                musics[i].pause();
        }
        $(".playButton > i").html(" play_circle_outline");
        isPlaying = true;
    }

});

const forwardButton = $('.forwardButton');

forwardButton.on('click', function(){
    for(var i = 0; i < musics.length; i++){
        if(musics[i].isPlaying()) {
            if(musics[i].currentTime() + 10 > musics[i].duration()) {
                musics[i].jump(musics[i].duration() - 1);
                console.log(musics[i].currentTime());
            }

            else
                musics[i].jump(musics[i].currentTime() + 10);
        }
    }
});

const rewindButton = $('.rewindButton');

rewindButton.on('click', function(){
    for(var i = 0; i < musics.length; i++){
        if(musics[i].isPlaying()){
            if(musics[i].currentTime() < 10)
                musics[i].jump(0);
            else
                musics[i].jump(musics[i].currentTime() - 10);
        }
    }
});



var backgroundMode = 0;
var mySound;
var shape = [];
var fireworks = [];
var fireddong = [];
var tik = 0;
var musics = [];
var depthrate = 1;


function preload(){                                          // 노래 로드해옴
    soundFormats('mp3', 'ogg');

    musics.push(mySound0 = loadSound('/002 숀 (SHAUN) - Way Back Home.mp3'));
    musics.push(mySound1 = loadSound('/004 지코 (ZICO) -  SoulMate (Feat. 아이유).mp3'));
    musics.push(mySound2 = loadSound('/009 폴킴 - 모든 날, 모든 순간 (Every day, Every Moment).mp3'));
    musics.push(mySound3 = loadSound('/006 마마무(Mamamoo) - 너나 해 (Egotistic).mp3'));
    musics.push(mySound4 = loadSound('/007 Apink (에이핑크) - 1도 없어.mp3'));
    musics.push(mySound5 = loadSound('/008 볼빨간사춘기 - 여행.mp3'));
    musics.push(mySound6 = loadSound('/015 청하 - Love U.mp3'));
    musics.push(mySound7 = loadSound('/023 iKON - 사랑을 했다 (LOVE SCENARIO).mp3'));
    musics.push(mySound8 = loadSound('/027 방탄소년단 - Anpanman.mp3'));
    musics.push(mySound9 = loadSound('/031 벤 - 열애중'));
    musics.push(mySound10 = loadSound('/033 방탄소년단 - Airplane pt.2.mp3'));
    musics.push(mySound11 = loadSound('/038 Fitz & The Tantrums - HandClap'));
    musics.push(mySound12 = loadSound('/043 Camila Cabello - Havana (Feat. Young Thug).mp3'));
    musics.push(mySound13 = loadSound('/052 마마무(Mamamoo) - 장마.mp3'));
    musics.push(mySound14 = loadSound('/053 장덕철 - 그날처럼.mp3'));
    musics.push(mySound15 = loadSound('/054 닐로 (Nilo) - 넋두리.mp3'));
    musics.push(mySound16 = loadSound('/001 Red Velvet (레드벨벳) - Power Up.mp3'));
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    for(var i = 0; i < musics.length; i++)
        musics[i].setVolume(0.2);

    amplitude = new p5.Amplitude();
}

function draw() {

    var level = amplitude.getLevel();
    var musicSound = Math.floor(map(level, 0, 1, 0, 85));
    strokeWeight(0);


    tik++;

    if(backgroundMode == 0) {                                 // 가운데서 무지개로 퍼지는 배경
        colorMode(RGB);
        blendMode(BLEND);
        background(0, 0, 0, 30);
        blendMode(ADD);
        colorMode(HSB);
        if(tik % 2 ==0) {
            for (var i = 0; i < musicSound*depthrate; i++)
                shape.push(new rainbowFlake(musicSound));
        }

        // for (var i = 0; i < musicSound*0.3; i++)
        //     shape.push(new rainbowFlake(musicSound));
    }

    if(backgroundMode == 1){                                   // 눈 떨어지는 배경
        background(0);
        blendMode("normal");

        if(tik % 8 == 0){
            for(var i = 0; i < musicSound*depthrate; i++)
                shape.push(new snowFlake());
        }
    }

    if(backgroundMode == 2){                                   // 불꽃놀이 배
        colorMode(RGB);
        blendMode(BLEND);
        background(0, 0, 0, 30);
        blendMode(ADD);
        colorMode(HSB);

        if(tik % 24 == 0) {
            for (var i = 0; i < musicSound*depthrate; i++)
                fireworks.push(new fireworkFlake(musicSound));
        }
    }

    for(firework of fireworks){                                                                                         // 불꽃놀이 그림 그려주기
        firework.render();
        firework.update();
    }



    for(var i = 0; i < fireworks.length; i++){                                                                          // 불꽃놀이 폭죽이 터지는 순간 주변 불꽃들 생성
        if(fireworks[i].isExplode()){
            for(var j = 0; j < 70; j++)
                fireddong.push(new fire(fireworks[i].x, fireworks[i].y, fireworks[i].color));
            fireworks.splice(i, 1);                                                                                     // 터진 불꽃 배열에서 제거
        }
    }

    for(var i = 0; i < fireddong.length; i++){                                                                          // 폭죽 주변 불꽃들 그려주기
        fireddong[i].update();
        fireddong[i].render();

        if(fireddong[i].islifetime())                                                                                   // 수명이 끝난 주변 불꽃들 배열에서 제거
            fireddong.splice(i, 1);
    }

    for(shapes of shape){                                      // 도형을 그려주고 업데이트
        shapes.update();
        shapes.render();
    }

    for (var i = 0; i < shape.length; i++) {                   // 화면 밖으로 나간 도형 배열에서 삭제
        if (shape[i].offScreen())
            shape.splice(i, 1);
    }

}