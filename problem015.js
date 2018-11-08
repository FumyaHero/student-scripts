var Stack = 
{
	stos: [],
	push: function(a, b = 1) //przypisywanie domyślnej wartści do b
	{
		for(var i = 0; i < b-1; i++)
			this.stos.push(null);
		this.stos.push(a);
	},
	
	pop(a = 1)
	{
		for(var i = 0; i < a-1; i++)
			this.stos.pop();
		return this.stos.pop()//zwraca ostatni wyciągany argument z listy
	}	
}