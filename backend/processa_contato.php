<?php
include("conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
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

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (empty($nome) || empty($email)) {
        echo "Nome e email são obrigatórios.";
        exit;
    }

    // Prepara a query
    $stmt = $conn->prepare("INSERT INTO contatos 
        (nome_completo, email, telefone, empresa, localizacao, estado, vaga_procura, vaga_procura_outra, descricao_vaga, mensagem) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    if (!$stmt) {
        echo "Erro ao preparar a query: " . $conn->error;
        exit;
    }

    $stmt->bind_param("ssssssssss", 
        $nome, $email, $telefone, $empresa, $localizacao, $estado, 
        $vaga_procura, $vaga_procura_outra, $descricao_vaga, $mensagem_contato
    );

    if ($stmt->execute()) {
        echo "Dados inseridos com sucesso!";
    } else {
        echo "Erro ao executar: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>



