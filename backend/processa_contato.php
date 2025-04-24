<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include("conexao.php");

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

    // DEBUG: Exibe os dados recebidos
    echo "<pre>";
    echo "Dados recebidos do formulário:\n";
    echo "Nome: $nome\n";
    echo "Email: $email\n";
    echo "Telefone: $telefone\n";
    echo "Empresa: $empresa\n";
    echo "Localização: $localizacao\n";
    echo "Estado: $estado\n";
    echo "Vaga: $vaga_procura\n";
    echo "Outra Vaga: $vaga_procura_outra\n";
    echo "Descrição: $descricao_vaga\n";
    echo "Mensagem: $mensagem_contato\n";
    echo "</pre>";

    // Prepara a query de inserção no banco
    $stmt = $conn->prepare("INSERT INTO contatos 
    (nome_completo, email, telefone, empresa, localizacao, estado, vaga_procura, vaga_procura_outra, descricao_vaga, mensagem) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    if (!$stmt) {
        die("Erro ao preparar a query: " . $conn->error);
    }

    $stmt->bind_param("ssssssssss", 
        $nome, $email, $telefone, $empresa, $localizacao, $estado, 
        $vaga_procura, $vaga_procura_outra, $descricao_vaga, $mensagem_contato
    );

    // Executa e verifica
    if ($stmt->execute()) {
        echo "<p style='color: green;'>Dados inseridos com sucesso!</p>";
    } else {
        echo "<p style='color: red;'>Erro ao executar a query: " . $stmt->error . "</p>";
    }

    $stmt->close();
    $conn->close();
}

}
?>



