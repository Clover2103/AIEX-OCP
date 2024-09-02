<?php

// Obtener el dominio permitido de las variables de entorno
$allowedOrigin = getenv('CORS_ALLOWED_ORIGIN');

if ($allowedOrigin) {
    header("Access-Control-Allow-Origin: $allowedOrigin");
} else {
    // Configuración por defecto o error
    header("Access-Control-Allow-Origin: *"); // Nota: '*', aunque es inseguro, para ambientes donde el CORS no sea crítico.
}
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Incluir PHPMailer
require '../library/PHPMailer/PHPMailer.php';
require '../library/PHPMailer/SMTP.php';
require '../library/PHPMailer/Exception.php';

// Manejo de solicitudes OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Obtener la carga JSON
$data = json_decode(file_get_contents('php://input'), true);

// Asegurarse de que los datos sean recibidos
if (!$data) {
    echo json_encode(['error' => 'No data received']);
    exit();
}

// Variables
$correo = $data['correo'];
$nombre = $data['nombre'];
$pin = $data['pin'];

try {
    // Instanciar PHPMailer
    $mail = new PHPMailer(true);

    // Desactivar la depuración de PHPMailer
    $mail->SMTPDebug = 0;

    // Configurar el servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'mail.cognoseguridad.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'ingenieria@cognoseguridad.com';
    $mail->Password = 'Admin*3822';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Configurar el remitente y el destinatario
    $mail->setFrom('ingenieria@cognoseguridad.com', 'AIEX-OCP, SAS.');
    $mail->addAddress($correo, $nombre);

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = 'CODIGO VERIFICACION AIEX';
    $mail->Body = 'Candidato: ' . $nombre . ' - su código es: ' . $pin;

    // Enviar el correo
    $mail->send();
    echo json_encode(["status" => "success"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $mail->ErrorInfo]);
}

?>
