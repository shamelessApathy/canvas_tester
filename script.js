$(function(){


var CanvasTester = function()
{
	this.init = function()
	{
		this.image = document.getElementById('the-image');
		this.canvas = document.getElementById('the-canvas');
		this.button = document.getElementById('make-happen');
	}
	this.listener = function()
	{
		$(this.button).on('click', this.resize)
	}.bind(this)
	this.resize = function()
	{
		ctx = this.canvas.getContext('2d');
		this.drawImageScaled(this.image, ctx);
	}.bind(this)
   this.drawImageScaled = function(img, ctx) 
   {
	   var canvas = ctx.canvas ;
	   var hRatio = canvas.width  / img.width    ;
	   var vRatio =  canvas.height / img.height  ;
	   var ratio  = Math.max ( hRatio, vRatio );
	   var height = img.height*ratio;
	   var width = img.width*ratio;
	   var centerX = canvas.width - (img.width*.5);
	   centerX = centerX / 2;
	   var centerY = canvas.height - (img.height*.5);
	   centerY = centerY / 2;
	   ctx.clearRect(0,0,canvas.width, canvas.height);
	   ctx.drawImage(img,centerX,centerY,img.width * .5, img.height * .5);  
	}
	this.init();
	this.listener();
}

var newTest = new CanvasTester();

})