<?php

include("conexao.php");

$nome = $_POST['nome'] ?? '';  
$email = $_POST['email'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$empresa = $_POST['empresa'] ?? '';
$localizacao = $_POST['localizacao'] ?? '';
$estado = $_POST['estado'] ?? '';
$vaga_procura = $_POST['vaga'] ?? '';  
$vaga_procura_outra = $_POST['outraVaga'] ?? '';  
$descricao_vaga = $_POST['desc'] ?? '';  
$mensagem = $_POST['mensagem'] ?? '';

// Prepara a query de inserção
$stmt = $conn->prepare("INSERT INTO contatos 
(nome_completo, email, telefone, empresa, localizacao, estado, vaga_procura, vaga_procura_outra, descricao_vaga, mensagem) 
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

// Faz o bind dos parâmetros
$stmt->bind_param("ssssssssss", 
    $nome, $email, $telefone, $empresa, $localizacao, $estado, 
    $vaga_procura, $vaga_procura_outra, $descricao_vaga, $mensagem
);

// Executa e verifica
if ($stmt->execute()) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro ao enviar: " . $stmt->error;
}

// Fecha a conexão
$stmt->close();
$conn->close();
?>
