new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert("Botão clicado!")
        },
        atualizarValor(event){
            this.valor = event.target.value;
        }
    }
})