new Vue({
	el: '#desafio',
	data: {
		visualizar: true,
		filmes: ['Star Wars', 'Vingadores', 'Homem de Ferro', 'Liga da Justiça'],
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		usuario: {
			id: 3,
			nome: 'Ana',
			perfil: 'Admin',
			acessos: ['Financeiro', 'Compras', 'Administrativo', 'RH']
		}
	}
});
