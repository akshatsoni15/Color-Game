var squares=document.querySelectorAll(".square");
for(var i=0;i<squares.length;i++)
{
	var c1=Math.floor(Math.random()*256);
    var c2=Math.floor(Math.random()*256);
    var c3=Math.floor(Math.random()*256);
	squares[i].style.backgroundColor= "rgb("+c1+", "+c2+", "+c3+")";
}

var picked=Math.floor(Math.random()*6);
var pickedColor=squares[picked].style.backgroundColor;
document.querySelector("#pick").textContent= "Guess this color: "+pickedColor.toUpperCase();
for(var i=0;i<squares.length;i++)
{
	squares[i].addEventListener("click",function()
	{
		if(this.style.backgroundColor===pickedColor)
			{
				for(var i=0;i<squares.length;i++)
				{
					squares[i].style.backgroundColor=pickedColor;
					document.getElementById("top").style.backgroundColor=pickedColor;
					document.getElementById("result").textContent="CORRECT!";
					document.querySelector("button").textContent="PLAY AGAIN?";
				}
				
			}
		else
		{
			this.style.backgroundColor="#232323";
			document.getElementById("result").textContent="TRY AGAIN";
		}
	});
}
document.querySelector("button").addEventListener("click",function()
{
	document.getElementById("result").textContent="";
	document.querySelector("button").textContent="NEW COLORS";
	document.querySelector("#top").style.backgroundColor="rgb(73, 94, 94)";
 for(var i=0;i<squares.length;i++)
{
	var c1=Math.floor(Math.random()*256);
    var c2=Math.floor(Math.random()*256);
    var c3=Math.floor(Math.random()*256);
	squares[i].style.backgroundColor= "rgb("+c1+", "+c2+", "+c3+")";
}
picked=Math.floor(Math.random()*6);
pickedColor=squares[picked].style.backgroundColor;
document.querySelector("#pick").textContent= "Guess this color: "+pickedColor.toUpperCase();
for(var i=0;i<squares.length;i++)
{
	squares[i].addEventListener("click",function()
	{
		if(this.style.backgroundColor===pickedColor)
			{
				for(var i=0;i<squares.length;i++)
				{
					squares[i].style.backgroundColor=pickedColor;
					document.getElementById("top").style.backgroundColor=pickedColor;
					document.getElementById("result").textContent="CORRECT!";
					document.querySelector("button").textContent="PLAY AGAIN?";
				}
			}
		else
		{
			this.style.backgroundColor="#232323";
			document.getElementById("result").textContent="TRY AGAIN";
		}
	});
}
});

