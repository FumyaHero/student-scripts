function objectsDiff(a, b)
{
	var propertiesA = Object.getOwnPropertyNames(a);
	var propertiesB = Object.getOwnPropertyNames(b);
	var differences = [];
	var found = false;
	
	for(var i = 0; i < propertiesA.length; i++) //przechodzi przez wszystkie elementy A i szuka ich w Boolean
	{
		found = false;
		for(var j = 0; j < propertiesB.length; j++)//przechodzi przez całe B i szuka w nich konkretnego A
		{
			if(propertiesA[i] == propertiesB[j])
			{
				found = true;
				break; //jeśli znajdzie, to wychodzi
			}
		}
		if(found == false)
			differences.push(propertiesA[i]);
	}
	
	//szukanie w B unikalnych properties
	
	for(var i = 0; i < propertiesB.length; i++) //przechodzi przez wszystkie elementy B i szuka ich w Boolean
	{
		found = false;
		for(var j = 0; j < propertiesA.length; j++)//przechodzi przez całe A i szuka w nich konkretnego B
		{
			if(propertiesB[i] == propertiesA[j])
			{
				found = true;
				break; //jeśli znajdzie, to wychodzi
			}
		}
		if(found == false)
			differences.push(propertiesB[i]);
	}
	
	return differences;
}