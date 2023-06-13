<?php
// cria uma conexão com o banco de dados
$conn = new mysqli('localhost', 'admin', 'admin', '');

// verifica se ocorreu um erro na conexão
if ($conn->connect_error) {
  die("Erro na conexão: " . $conn->connect_error);
}

// executa uma consulta SQL para obter os dados do banco de dados
$sql = "SELECT tituloLivro FROM Livros";
$resultado = $conn->query($sql);

// cria um array para armazenar os dados
$dados = array();

// percorre os resultados e adiciona-os ao array
if ($resultado->num_rows > 0) {
  while ($row = $resultado->fetch_assoc()) {
    $dados[] = $row;
  }
}

// converte o array para JSON e o retorna
echo json_encode($dados);

// fecha a conexão com o banco de dados
$conn->close();
?>