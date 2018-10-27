function getTotalNumberOfNewYaersEveSundays(a, b)
{
	if(  ((isNaN(a)) || (isNaN(b))) || ( ((a<1) || (b<1)) )   )
		return 0;
	else
	{
		var sunCount = 0;
		for(var i=a; i <= b; i++)
		{
			 if(new Date(i, 0,1,1).getUTCDay() == 0)
				 sunCount++;
		}
		return sunCount;
	}
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc