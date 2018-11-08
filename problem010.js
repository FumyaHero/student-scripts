function deepCopy(a)
{
	if( a.length == undefined)
		return undefined; //sprawdza, czy to jest tablica główna jest tablicą
	
	var b = []; //tworzy nową tablicę, do której będziemy kopiować
	
	for(var i = 0; i < a.length; i++) //przechodzi przez wszystkie elementy tablicy i przepisuje je do b
	{
		if( a[i].length != undefined) //jeśli w tabeli jest kolejna tabela, to przechodzimy do niej przez rekurencję
			b[i] = deepCopy(a[i]);
		else
			b[i] = a[i]; //jeśli jest to zwykła liczba, to kopiujemy normalnie
	}
	return b; //na sam koniec zwraca skopiowaną tablicę i wraca do kopiowania tablic z "wyżej", jeśli jeszcze jakieś są
}
