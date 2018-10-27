function strangeSum(a, b)
{
	if( (isNaN(a)) || (isNaN(b)) ) //sprawdzenie, czy argumenty są liczbami
		return null;
	else
	{
		if( Number.isInteger(a) && Number.isInteger(b) ) //sprawdzenie, czy argumenty to liczby całkowite
		{
			//porównanie liczb
			if(a == b)
				return (a+b)*3;
			else
				return a+b;
		}
		else 
			return null;
	}
}