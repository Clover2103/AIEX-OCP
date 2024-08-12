<?php
// Configuración de conexión a la base de datos
$host = "localhost";
$dbname = "certificados";
$username = "certificados";
$password = "Admin*3822";

// Nombre de las tablas
$tabla_db1 = "aiex"; // Tabla de usuarios

// Función para obtener la conexión a la base de datos usando PDO
function getDbConnection() {
    global $host, $dbname, $username, $password;

    try {
        $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        $pdo = new PDO($dsn, $username, $password, $options);
        return $pdo;
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
        exit();
    }
}
?>