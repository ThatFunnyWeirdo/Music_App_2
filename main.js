music = "";
music_2 = "";

function preload()
{
    music = loadSound("music.mp3");
    music_2 = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(400,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0 , 0 , 600, 500);
}