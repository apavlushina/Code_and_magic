var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 120;
var CLOUD_Y = 10;
var GAP = 50;
var BAR_WIDTH = 40;

var max_bar_height = CLOUD_HEIGHT - GAP * 2;

var render_cloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var get_max_element = function(array) {
  var max_element = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > max_element) {
      max_element = array[i];
    }
  }
  return max_element;
};

window.renderStatistics = function(ctx, names, times) {
  render_cloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, "rgba(0, 0, 0, 0.7)");
  render_cloud(ctx, CLOUD_X, CLOUD_Y, "#ffffff");

  ctx.font = "16px PT Mono";

  ctx.fillStyle = "#000000";
  ctx.fillText("Hurra! You have won the game!", CLOUD_X + GAP, CLOUD_Y + GAP * 0.5);

  ctx.fillStyle = "#000000";
  ctx.fillText("The list of the results:", CLOUD_X + GAP, CLOUD_Y + GAP);



  for (var i = 0; i < names.length; i++) {

    if (names[i] == 'Вы') {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      ctx.fillStyle = "rgba(38, 0, 252, 0.9)";
    }

    var max_time = get_max_element(times);
    var personal_bar_height = max_bar_height * times[i] / max_time;

    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP * 0.25);

    ctx.beginPath();
      ctx.moveTo(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,CLOUD_HEIGHT - GAP);
      ctx.lineTo(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - personal_bar_height);
      ctx.lineTo(CLOUD_X + GAP + BAR_WIDTH + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - personal_bar_height);
      ctx.lineTo(CLOUD_X + GAP + BAR_WIDTH + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP);
      ctx.fill();
    ctx.closePath();

  }


  }
