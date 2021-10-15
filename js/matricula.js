var $tdTotalCursos = document.querySelector('.js-total-de-cursos')
var $tdTotalDeHoras = document.querySelector('.js-total-de-horas')
var $btnConfirmar = document.querySelector('.js-botao-matricula')

var totalHoras = 0
var totalCursos = 0

function addCurso(checkbox) {

    if (checkbox.checked) {
        totalCursos ++
        totalHoras += parseInt(checkbox.value)
    }
    else {
        totalCursos --
        totalHoras -= parseInt(checkbox.value)
    }

    $tdTotalDeHoras.textContent = totalHoras + 'h'
    $tdTotalCursos.textContent = totalCursos + " curso(s)"

}

$btnConfirmar.onclick = confirmaMatriculas

function confirmaMatriculas() {
    if(totalCursos == 0) {
        alert('Nenhum curso selecionado')
    } else {
        alert('Matrícula confirmada nos cursos!')
        window.location.href = 'index.html'
    }
}

