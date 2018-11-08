function deepFindAndCount(a, b)
{
	if(a.length == undefined) //zabezpieczenie
		return undefined;
	
	var count = 0; //licznik
	
	for(var i = 0; i < a.length; i++)
	{
		if(Array.isArray(a[i]) ) //jeśli jest tablica w tablicy, to lecimy rekurencję
			count += deepFindAndCount(a[i], b);
		else if( b === a[i] )
			count++;
			
	}
	return count;
}