<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include("../conectionBDOpen.php"); // Asegúrate de que esta ruta es correcta

if (isset($_POST['CC'])) {
    $CC = $_POST['CC'];
    $vigilante = 'VIGILANTE DE SEGURIDAD';

    $conn = getDbConnection();

    if ($conn) {
        // Consulta para todos los registros y luego separarlos en dos grupos
        $query = "SELECT * FROM aiex WHERE CC = :CC";
        $stmt = $conn->prepare($query);
        $stmt->execute([':CC' => $CC]);
        $data = $stmt->fetchAll();

        // Separar datos según el valor de 'Alc'
        $data_vigilante = [];
        $data_otros = [];

        foreach ($data as $row) {
            if ($row['Alc'] === $vigilante) {
                $data_vigilante[] = $row;
            } else {
                $data_otros[] = $row;
            }
        }

        // Combinando datos en un solo array para la respuesta
        $response = [
            'vigilante' => $data_vigilante,
            'otros' => $data_otros
        ];

        echo json_encode($response);
    } else {
        // Manejo del error de conexión
        echo json_encode(['error' => 'No se pudo conectar a la base de datos']);
    }
} else {
    // Manejo del error de solicitud sin parámetro 'CC'
    echo json_encode(['error' => 'No se proporcionó el parámetro CC']);
}
?>
