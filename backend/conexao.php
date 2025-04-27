<?php
// Configurações de conexão com o banco de dados
$servername = "localhost"; // Geralmente 'localhost' para o WAMP
$username = "root"; // Usuário padrão do MySQL no WAMP
$password = ""; // Senha padrão do MySQL no WAMP (vazio por padrão)
$dbname = "form_contato"; // Nome do banco de dados

// Criando a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
