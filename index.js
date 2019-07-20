function draw() {
    let canvas = document.getElementById('rss');
    if (canvas.getContext) {

        let ctx = canvas.getContext('2d');

        //defining the rect-color
        ctx.fillStyle = 'rgb(236,138,68)';

        //applying the color to the rect
        ctx.fillRect(0, 0, 24, 24);

        //defining the stroke color
        ctx.strokeStyle = "#ffffff";

        //defining the lineWidth
        ctx.lineWidth = 3;

        //starting the path of the draw-line
        ctx.beginPath();

        //The arc() method creates an arc/curve (used to create circles, or parts of circles).
        ctx.arc(4, 21, 15, Math.PI * 3 / 2, 0, false);

        //When the current path is empty, such as immediately after calling beginPath(), or on a newly created canvas, 
        // the first path construction command is always treated as a moveTo(), regardless of what it actually is. 
        // For that reason, you will almost always want to specifically set your starting position after resetting a path.
        ctx.moveTo(4, 11);

        //The arc() method creates an arc/curve (used to create circles, or parts of circles).
        ctx.arc(4, 21, 10, Math.PI * 3 / 2, 0, false);

        ctx.moveTo(8, 18);
        ctx.arc(7, 18, 1, Math.PI * 2, 0, false);
        ctx.stroke();
    }
}

draw()