<?php
// Incluindo o arquivo de conexão com o banco de dados
include('conexao.php');

// Verificando se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pegando os dados do formulário
    $nome = mysqli_real_escape_string($conn, $_POST['nome']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $telefone = mysqli_real_escape_string($conn, $_POST['telefone']);
    $empresa = mysqli_real_escape_string($conn, $_POST['empresa']);
    $localizacao = mysqli_real_escape_string($conn, $_POST['localizacao']);
    $estado = mysqli_real_escape_string($conn, $_POST['estado']);
    $vaga = mysqli_real_escape_string($conn, $_POST['vaga']);
    $outraVaga = isset($_POST['outraVaga']) ? mysqli_real_escape_string($conn, $_POST['outraVaga']) : null;
    $descricao_vaga = mysqli_real_escape_string($conn, $_POST['desc']);
    $mensagem = mysqli_real_escape_string($conn, $_POST['mensagem']);
    $lgpd = isset($_POST['lgpd']) ? 1 : 0;

    // Preparando a query para inserir os dados
    $sql = "INSERT INTO contatos (nome, email, telefone, empresa, localizacao, estado, vaga, outraVaga, descricao_vaga, mensagem, lgpd)
            VALUES ('$nome', '$email', '$telefone', '$empresa', '$localizacao', '$estado', '$vaga', '$outraVaga', '$descricao_vaga', '$mensagem', '$lgpd')";

    // Executando a query
    if ($conn->query($sql) === TRUE) {
        echo "Dados enviados com sucesso!";
    } else {
        echo "Erro ao enviar dados: " . $conn->error;
    }
}

// Fechando a conexão
$conn->close();
?>
