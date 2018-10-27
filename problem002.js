function stringRotate(a, b)
{
	var lancuch = "";
	if( (b<0) || (isNaN(b)) )
		return '';
	else
	{	
		for(var i = 0; i < b; i++)
		{
			//kopiuje cały łańcuch znaków poza pierwszą literą do tempa
			temp = a.slice(1);
			//dokleja na koniec tempa pierwszą literę całego łańcucha
			temp += a.charAt(0);
			//podstawia tempa jako nowy oryginał
			a = temp;
		}
		return a;
	}
}