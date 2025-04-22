<?php
// Inclui o arquivo de conexão
include("conexao.php");

// Captura os dados do formulário enviados via POST
$nome = $_POST['nome_completo'] ?? '';
$email = $_POST['email'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$empresa = $_POST['empresa'] ?? '';
$localizacao = $_POST['localizacao'] ?? '';
$estado = $_POST['estado'] ?? '';
$vaga_procura = $_POST['vaga_procura'] ?? '';
$vaga_procura_outra = $_POST['vaga_procura_outra'] ?? '';
$descricao_vaga = $_POST['descricao_vaga'] ?? '';
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
