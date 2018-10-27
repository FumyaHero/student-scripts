function divisible(a)
{
	if(isNaN(a))
		return false
	else
	{
		for(var i = 1; i < arguments.length; i++)
		{
			if(a%arguments[i] != 0)
				return false;
		}
		return true;		
	}
}