<?php 
include("conexao.php");

$mensagem = ""; // Variável para exibir mensagens de sucesso ou erro

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

    // Se a vaga selecionada não for "Outra", o campo vaga_procura_outra será NULL
    if ($vaga_procura !== 'Outra') {
        $vaga_procura_outra = NULL;
    }

    // Prepara a query de inserção no banco
    $stmt = $conn->prepare("INSERT INTO contatos 
    (nome_completo, email, telefone, empresa, localizacao, estado, vaga_procura, vaga_procura_outra, descricao_vaga, mensagem) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // Fazendo o bind dos parâmetros
    $stmt->bind_param("ssssssssss", 
        $nome, $email, $telefone, $empresa, $localizacao, $estado, 
        $vaga_procura, $vaga_procura_outra, $descricao_vaga, $mensagem_contato
    );

    // Executa a query e verifica se foi bem-sucedido
    if ($stmt->execute()) {
        // Mensagem de sucesso
        $mensagem = "Sua mensagem foi enviada com sucesso!";
    } else {
        // Mensagem de erro
        $mensagem = "Erro ao enviar. Tente novamente mais tarde.";
    }

    // Fecha a conexão
    $stmt->close();
    $conn->close();

    // Retorna a mensagem para o frontend
    echo $mensagem;
}
?>

