<?php
// Configurações de conexão com o banco de dados
$host = "localhost";
$usuario = "root";
$senha = "palestra2709"; // Troque pela senha que você definiu no MySQL
$banco = "linkedin"; // Troque pelo nome exato do seu banco, ex: meu_portfolio

// Cria a conexão
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}
?>
