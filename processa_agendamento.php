<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['name']);
    $data = htmlspecialchars($_POST['date']);
    $hora = htmlspecialchars($_POST['time']);
    $servico = htmlspecialchars($_POST['service']);

    // Destinatário
    $to = "karinecarvalhol116@gmail.com"; // Coloque seu e-mail aqui
    $subject = "Novo Agendamento de Unhas de $nome";

    // Corpo do e-mail
    $body = "Nome da Cliente: $nome\n";
    $body .= "Data: $data\n";
    $body .= "Horário: $hora\n";
    $body .= "Serviço: $servico\n";

    // Cabeçalhos
    $headers = "From: karinecarvalhol116@gmail.com"; // Coloque um e-mail válido

    // Enviar o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Agendamento enviado com sucesso!";
    } else {
        echo "Erro ao enviar o agendamento. Tente novamente.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>