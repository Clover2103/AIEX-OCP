<?php


  // Obtener la carga JSON
  $data = json_decode(file_get_contents('php://input'), true);

  if (!$data) {
      echo json_encode(['status' => 'error', 'message' => 'No se recibieron datos']);
      exit;
  }

  // URL de tu Moodle y el token de servicio web generado
  $domainname = 'https://tu-moodle.com';
  $token = 'tu-token-generado';

  // Función de la API de Moodle para crear usuarios
  $functionname = 'core_user_create_users';

  // Aquí procesas los datos
  $apellidos = $data['apellidos'];
  $nombres = $data['nombres'];
  $tipodocumento = $data['tipodocumento'];
  $documento = $data['documento'];,
  $expedicion = $data['expedicion'];,
  $nacionalidad = $data['nacionalidad'];,
  $direccion = $data['direccion'];,
  $ciudad = $data['ciudad'];,
  $edad = $data['edad'];,
  $genero = $data['genero'];,
  $fijo = $data['fijo'];,
  $celular = $data['celular'];,
  $correo = $data['correo'];,
  $correo1 = $data['correo1'];,
  $estudios = $data['estudios'];,
  $empresa = $data['empresa'];,
  $cargo = $data['cargo'];,
  $experiencia = $data['experiencia'];,
  $certificacion = $data['certificacion'];,
  $especial = $data['especial'];

  // Datos del usuario a crear
  $userdata = [
      [
          'username' => $data['documento'], // Ejemplo usando el documento como username
          'password' => $data['documento'],
          'firstname' => $data['nombres'],
          'lastname' => $data['apellidos'],
          'email' => $data['correo'],
          'city' => $data['ciudad'],
          'country' => 'CO', // Código de país
          'auth' => 'manual', // Método de autenticación manual
      ]
  ];

  // Convertir los datos a JSON
  $postdata = http_build_query(
      array(
          'wstoken' => $token,
          'wsfunction' => $functionname,
          'moodlewsrestformat' => 'json',
          'users' => $userdata
      )
  );

  // Configuración de la solicitud cURL
  $curl = curl_init();
  curl_setopt($curl, CURLOPT_URL, $domainname . '/webservice/rest/server.php');
  curl_setopt($curl, CURLOPT_POST, 1);
  curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

  // Ejecutar y capturar la respuesta
  $response = curl_exec($curl);
  curl_close($curl);

  // Manejar la respuesta
  $responseData = json_decode($response, true);

  if (isset($responseData['exception'])) {
      echo json_encode(['status' => 'error', 'message' => $responseData['message']]);
  } else {
      echo json_encode(['status' => 'success', 'message' => 'Usuario registrado correctamente']);
  }


  // Lógica de registro en Moodle aquí

  echo json_encode(['status' => 'success', 'message' => 'Usuario registrado correctamente']);


?>