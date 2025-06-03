<?php
<!-- filepath: d:\pagina profesional\send_email.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $correo = htmlspecialchars($_POST['correo']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $to = "josemanuel281974@gmail.com"; // Tu correo
    $subject = "Nuevo mensaje de contacto";
    $body = "Nombre: $nombre\nCorreo: $correo\nMensaje:\n$mensaje";
    $headers = "From: $correo";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
}
?>