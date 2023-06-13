$(document).ready(function() {
    $.ajax({
      url: 'pesquisa.php',
      dataType: 'json',
      success: function(data) {
        $.each(data, function(i, item) {
          var tr = $('<tr>').append(
            $('<td>').text(item.coluna1),
            $('<td>').text(item.coluna2),
            $('<td>').text(item.coluna3)
          );
          $('#tabela tbody').append(tr);
        });
      }
    });
  });