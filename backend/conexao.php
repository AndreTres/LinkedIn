<?php
// Configurações de conexão com o banco de dados
$host = "localhost";
$usuario = "root";
$senha = "palestra2709"; // Troque pela senha que você definiu no MySQL
$banco = "linkedin"; // Troque pelo nome exato do seu banco, ex: meu_portfolio

// Cria a conexão com o MySQL
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verifica se a conexão foi bem-sucedida
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

// Define o conjunto de caracteres para garantir que a comunicação seja feita em UTF-8
if (!$conn->set_charset("utf8")) {
    die("Erro ao definir o charset UTF-8: " . $conn->error);
}
?>
