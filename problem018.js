function reverse(a)
{
	return function()
	{
		var tab = [];
		for(var i = 0; i < arguments.length; i++)
		{
			tab[i] = arguments[arguments.length-i-1];
		}
		return a(...tab);
	}
}