
function cadastrarRotina(){

    var data = new Date();

    var dia = data.getDate();   // 1-31
    var dia_mais_sete = data.getDate(); 

    var meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'][data.getMonth()];
    var ano = data.getYear(); 

    var data_atual = dia + ' ' + meses  + ' ' + (ano - 100);
    var data_from = (dia_mais_sete + 7) + ' ' + meses  + ' ' + (ano - 100);

    //Procura o select
    var selectSegunda = document.getElementById('exercicio-segunda');
    //Pega o texto que a pessoa clicou no select
    var textSegunda = selectSegunda.options[selectSegunda.selectedIndex].text;

    var selectTerca = document.getElementById('exercicio-terca');
    var textTerca = selectTerca.options[selectTerca.selectedIndex].text;

    var selectQuarta = document.getElementById('exercicio-quarta');
    var textQuarta = selectQuarta.options[selectQuarta.selectedIndex].text;

    var selectQuarta = document.getElementById('exercicio-quarta');
    var textQuarta = selectQuarta.options[selectQuarta.selectedIndex].text;

    var selectQuinta = document.getElementById('exercicio-quinta');
    var textQuinta = selectQuinta.options[selectQuinta.selectedIndex].text;

    var selectSexta = document.getElementById('exercicio-sexta');
    var textSexta = selectSexta.options[selectSexta.selectedIndex].text;

    //Cria o array dos exercicios que vai formar a rotina
    //Coloca os valores de cada text e armazena em uma posição do array
    var arrayExercicios = [];
    arrayExercicios[0] = [textSegunda];
    arrayExercicios[1] = [textTerca];
    arrayExercicios[2] = [textQuarta];
    arrayExercicios[3] = [textQuinta];
    arrayExercicios[4] = [textSexta];

    // localStorage.setItem("arrayExercicios", JSON.stringify(arrayExercicios))

    //Escreva no HTML os valores que foram armazenas no array
    document.getElementById('valor-segunda').innerHTML = textSegunda;
    document.getElementById('valor-terca').innerHTML = textTerca;
    document.getElementById('valor-quarta').innerHTML = textQuarta;
    document.getElementById('valor-quinta').innerHTML = textQuinta;
    document.getElementById('valor-sexta').innerHTML = textSexta;

    document.getElementById('valor-data').innerHTML = data_atual + " - ";
    document.getElementById('valor-data-from').innerHTML = data_from;

    // document.getElementById('valor-array').innerHTML = localStorage = JSON.stringify(arrayExercicios);

}

function clearSelect(){
    document.location.reload(true);
}