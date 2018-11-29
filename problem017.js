function compose()
{ 	return (x) => 
	{
		for( var i = 1; i <= arguments.length; i++ )
		{
			x = arguments[ arguments.length - i] (x); //wykonuje funkcję z arguments dla x
		}
		return x;
	}
}	
