'use strict';

window.drawCloud = function (ctx, x, y, width, heigth) {
  var offset = 5;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + offset, y + heigth / 2);
  ctx.lineTo(x, y + heigth);
  ctx.lineTo(x + width / 2, y + heigth - offset);
  ctx.lineTo(x + width, y + heigth);
  ctx.lineTo(x + width - offset, y + heigth / 2);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x + width / 2, y + offset);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(ctx, 110, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  drawCloud(ctx, 100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];

    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (var i = 0; i < times.length; i ++) {
    var name = names[i];
    var time = times[i];

    var height = step * time;

    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, (histoHeight - height) + 90);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(0, 0,', ((Math.random() * 5) * 50).toFixed(0), ',', (Math.random() + 0.1).toFixed(1), ')'].join('');
    }

    ctx.fillRect(histoX + columnIndent * i, 250, 40, height * -1);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);


  }
};

var canvas = document.querySelector('canvas');


renderStatistics(
  canvas.getContext('2d'),
  ['Вы', 'Вася', 'Лена', 'Слава'],
  ['2000.40', '3500.50', '7000.23', '4200.11']
);
