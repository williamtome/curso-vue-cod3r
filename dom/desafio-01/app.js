new Vue({
    el: '#desafio',
    data: {
        nome: "William Weirich Tomé",
        idade: 32,
        imagem: "https://www.infoescola.com/wp-content/uploads/2019/10/paisagem-ouro-preto-1008049370.jpg"
    },
    methods: {
        mostrarNumero: function(){
            return Math.random(0, 1);
        }
    }
})