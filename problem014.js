var Vectors = 
{ 	
	sum: function(a, b)
	{
		if((a.length == undefined) || (b.length == undefined)) //zabezpieczenie
			return false;
			
		if (a.length != b.length) //zabezpieczenie przed różną długością
			return  false;
		var c = [];
		
		for(var i = 0; i < a.length; i++) //dodaje wszystko a do b
			c.push(a[i] + b[i]);  //wstawianie elementów do nowego wektora

		return c;
	},
	
	mulByScalar: function(a, b)
	{
		if((a.length == undefined) || (typeof(b) != "number") ) //zabezpieczenie
			return false;
			
		var c = [];
		
		for(var i = 0; i < a.length; i++)
			c.push(a[i]*b);
		
		return c;
	}
}	
