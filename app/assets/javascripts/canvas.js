var canvas = document.getElementById('canvas');
function Canvas(canvas) {
  this.canvas = canvas;
  this.width = window.innerWidth;
  this.height = window.innerHeight;
  this.ctx = canvas.getContext('2d');
  
}
