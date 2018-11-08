function parametricSort(a, b)
{
	if(a.length == undefined)
		return false;
	if(b != "asc" && b != "desc")
		return false;
	
	if( b == "asc")
		b = ((x,y) => {return x-y}); //wyjdzie ujemna liczba

	else
		b = ((x,y) => {return y-x}); //wyjdzie dodatnia liczba
	
	return a.sort(b);

}