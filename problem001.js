function triangleArea(a, b, c)
{
	parseInt(a);
	parseInt(b);
	parseInt(c);
	if( (isNaN(a)) || (isNaN(b))  || (isNaN(c)) ) //sprawdzanie, czy dane nie są liczbami
		return -1;	
	else //jeśli WSZYSTKIE dane są liczbami, to sprawdza, czy wszystkie są większe niż 0
	{
		if( (a>0) && (b>0) && (c>0) )
		{
			//przygotowanie pozostałych zmiennych
			var pole = 0, fixedPole = 0;
			var p = (a+b+c)/2;
			//obliczanie pola trójkąta          
			pole = Math.sqrt( p*(p-a)*(p-b)*(p-c) );
			//sprawdzanie poprawności pola i p
			if( (isNaN(pole)) || (isNaN(p)) )
              return -1;
            fixedPole = Math.round(pole*100)/100; //zaokrąglanie liczby
			return fixedPole;			
		}
		else //jeśli któraś z nich jest mniejsza lub równa 0
			return -1;
	}
}