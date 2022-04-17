/* ----------> Animação dos números e letras*/

	 function insert(num)
	 {

	var numero = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = numero + num; 

	}


/* ---------> Função para limpar todos os números do box.*/

	function clean()
	{
		document.getElementById('resultado').innerHTML = "";
	}


/* ---------> Função para apagar um por um dos números do box.*/

	function back()
	{
		var resultado = document.getElementById('resultado').innerHTML;
		document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
	}


/* ---------> Função para calcular os números.*/

	function calcular()
	{
		var resultado = document.getElementById('resultado').innerHTML;
		if(resultado)
		{
			document.getElementById('resultado').innerHTML = eval(resultado);
		}
	}
	

/* ----------> Obs: Usar o nome da função como numero pode prejudicar 
o funcionamento das funções. 
Exemplo: numero + num(Números não aparecem ao lado quando clicado na calculadora).*/
