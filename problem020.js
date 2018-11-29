var Square = function (a)
	{
		var obj = 
		{
			getArea: function ()
			{
				return a*a;
			},
			getPerimeter: function () 
			{
				return a*4;
			}
		};
		return obj;
	}
