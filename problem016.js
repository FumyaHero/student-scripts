function maybe(a,b,c)
{
	var check = a(c); //sprawdzic, czy jest to juz predykat

	if(check)
		return b(c);
	else
		return c;
}
