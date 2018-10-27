function isLeapYear(a)
{	
	if(isNaN(a))
		return false;
	else
	{
		a = parseInt(a);
		if(a%4 == 0) //sprawdzamy, czy a jest podzielne przez 4
		{
			if(a%100 == 0) //jeśli a jest podzielne przez 100, sprawdź czy jest też podzielne przez 400
			{
				if( a%400 == 0)
					return true;
				else
					return false;
			}
			else 
				return true;
		}
		else
			return false;	
	}
}