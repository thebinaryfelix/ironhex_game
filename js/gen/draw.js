function drawHex(ctx, x, y, side, radius, color) {
  
  //Draw Circle
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, radius, 0, 2*Math.PI);
  ctx.stroke();
  ctx.closePath();

  //Draw Hexagon
  ctx.beginPath();
  ctx.moveTo(x, y - radius);
  ctx.lineTo(x + side, y - radius / 2);
  ctx.lineTo(x + side, y + radius / 2);
  ctx.lineTo(x, y + radius);
  ctx.lineTo(x - side, y + radius / 2);
  ctx.lineTo(x - side, y - radius / 2);
  ctx.lineTo(x, y - radius);
  ctx.moveTo(x, y);
  ctx.fill();
  ctx.closePath();
}
