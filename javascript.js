$(document).ready(function() {
  $('#submitNoite').click(function() {
      submitInput("#tarefaNoite", "#listaNoite")
  })

  $('#submitDia').click(function() {
      submitInput("#tarefaDia", "#listaDia")
  })

  $("#tarefaNoite").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      submitInput("#tarefaNoite", "#listaNoite")
    }
  })

  $("#tarefaDia").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      submitInput("#tarefaDia", "#listaDia")
    }
  });
})

$(document).on('click', '#remove', function() {
  $(this).parent().remove()
})

function submitInput(source, target) {
  data = $(source).val()

  if (data !== '') {
    $(target).append('<li class="list-group-item d-flex justify-content-between"><div class="px-2 flex-grow-1">' + data + '</div><button class="btn btn-outline-secondary btn-sm" id="remove"><i class="fa-solid fa-x pt-1"></i></button></li>')
    $(source).val('')
  }
}