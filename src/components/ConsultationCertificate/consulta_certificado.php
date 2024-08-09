<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include("../../abrir_conexion.php");

if (isset($_POST['CC'])) {
    $CC = $_POST['CC'];
    $vigilante = 'VIGILANTE DE SEGURIDAD';

    $conn = getDbConnection();

    if ($conn) {
        // Consulta para Vigilantes de Seguridad
        $query = "SELECT * FROM $tabla_db1 WHERE CC = :CC AND Alc = :alc";
        $stmt = $conn->prepare($query);
        $stmt->execute([':CC' => $CC, ':alc' => $vigilante]);
        $data_vigilante = $stmt->fetchAll();

        // Consulta para otros Alcances
        $query = "SELECT * FROM $tabla_db1 WHERE CC = :CC AND Alc <> :alc";
        $stmt = $conn->prepare($query);
        $stmt->execute([':CC' => $CC, ':alc' => $vigilante]);
        $data_otros = $stmt->fetchAll();

        // Combinando datos
        $response = [
            'vigilante' => $data_vigilante,
            'otros' => $data_otros
        ];

        echo json_encode($response);
    }
}
?>
