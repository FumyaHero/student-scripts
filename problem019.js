function carry(a, ...argss)
{
	if(argss.length < a.length)
		return (...nextArgs) => carry(a, ...argss, ...nextArgs);
	else
		return a(...argss);
}