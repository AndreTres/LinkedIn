<?php
include("conexao.php");

$response = array(); // Para armazenar a resposta

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebendo os dados do formulário
    $nome = $_POST['nome'] ?? '';  
    $email = $_POST['email'] ?? '';
    $telefone = $_POST['telefone'] ?? '';
    $empresa = $_POST['empresa'] ?? '';
    $localizacao = $_POST['localizacao'] ?? '';
    $estado = $_POST['estado'] ?? '';
    $vaga_procura = $_POST['vaga'] ?? '';  
    $vaga_procura_outra = $_POST['outraVaga'] ?? '';  
    $descricao_vaga = $_POST['desc'] ?? '';  
    $mensagem_contato = $_POST['mensagem'] ?? '';

    // Prepara a query de inserção no banco
    $stmt = $conn->prepare("INSERT INTO contatos 
    (nome_completo, email, telefone, empresa, localizacao, estado, vaga_procura, vaga_procura_outra, descricao_vaga, mensagem) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    if (!$stmt) {
        $response['status'] = 'error';
        $response['message'] = 'Erro ao preparar a query: ' . $conn->error;
        echo json_encode($response);
        exit;
    }

    $stmt->bind_param("ssssssssss", 
        $nome, $email, $telefone, $empresa, $localizacao, $estado, 
        $vaga_procura, $vaga_procura_outra, $descricao_vaga, $mensagem_contato
    );

    // Executa e verifica
    if ($stmt->execute()) {
        $response['status'] = 'success';
        $response['message'] = 'Dados inseridos com sucesso!';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Erro ao executar a query: ' . $stmt->error;
    }

    $stmt->close();
    $conn->close();

    echo json_encode($response); // Envia a resposta para o JavaScript
}
?>
