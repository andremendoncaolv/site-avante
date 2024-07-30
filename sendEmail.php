<?php
header('Content-Type: application/json');

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

if (!empty($data['name']) && !empty($data['email']) && !empty($data['message'])) {
    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    $to = 'andremendoncaolv@gmail.com'; // Substitua pelo seu e-mail
    $subject = 'Nova mensagem de contato';
    $body = "Nome: $name\nEmail: $email\nMensagem:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} else {
    echo json_encode(['success' => false]);
}
?>
