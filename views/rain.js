var sketchProc = function(processingInstance) {
  with(processingInstance) {
    size(400, 400);
    frameRate(30);

    //A Sparkly, Snowy Night for the KA Avatar "spunky-sam" ... wait for it!
    var xPositions = [random(0)];
    var yPositions = [random(0)];

    draw = function() {
      background(0, 0, 72);

      //sam's snowman body
      strokeWeight(1);
      stroke(10, 130, 180);
      fill(15, 140, 200);
      ellipse(200, 330, 128, 128 - 10);
      ellipse(200, 246, 108, 108 - 10);
      textAlign(CENTER, BASELINE);
      text("His head was a Khan\nAcademy avatar --\nand it was stopping\nthe script.", 200, 144);
      //var samSnowman = getImage("avatars/spunky-sam");
      //imageMode(CENTER);
      //image(samSnowman, 200, 156, 108, 108);

      //sam's bow tie. quads - with twists
      fill(75, 0, 155);
      quad(182, 205, 182, 225, 217, 205, 217, 225);
      fill(105, 0, 185);
      quad(185, 205, 185, 225, 215, 205, 215, 225);
      rectMode(CENTER);
      rect(200, 215, 8, 6);
      stroke(32, 32, 64);
      line(196, 213, 196, 217);
      line(204, 213, 204, 217);

      //snow on the ground
      noStroke();
      fill(240);

      for (var snow = 0; snow < 425; snow += 40) {
        ellipse(snow, 384, 64, 38);
      }

      //starts random snow & pushes flakes to the arrays
      for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(255);
        ellipse(xPositions[i], yPositions[i], 2, 2);
        yPositions[i] += random(1, 3);

        //resets fallen snow to random constrained off-screen, top
        if (yPositions[i] > height) {
          yPositions[i] = random(-256);
          xPositions.push(random(400));
          yPositions.push(1);

          //array length stops & juggles around 500, stopping snow saturation.
          //sparkling snowfall starts. author has no clue why
          //the sparkles happen, but it's a cool effect to discover

          if (xPositions.length > 500) {
            xPositions.length = xPositions.length - 8;
          }
        }
      }

      //sketch border
      stroke(0, 128, 0);
      strokeWeight(2);
      line(1, 1, 399, 1);
      line(1, 399, 399, 399);
      line(399, 1, 399, 399);
      line(1, 1, 1, 399);

    }
  }
};
