<?php
// conexão à BD e receber dados do client-side
$connection = new PDO("mysql:host=localhost;dbname=main", "root", "");
$clientSideData = json_decode(file_get_contents("php://input"));


// selecionar todos os utilizadores
if ($clientSideData->action == "fetchAll") {
   $query = "SELECT * FROM user";
   $statement = $connection->prepare($query);
   $statement->execute();

   while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $data[] = $row;
   }

   echo json_encode($data);
}


// selecionar utilizador
if ($clientSideData->action == "fetchSingle") {
   $id = $clientSideData->id;

   $query = "SELECT * FROM user WHERE id = $id";
   $statement = $connection->prepare($query);
   $statement->execute();
   $result = $statement->fetchAll();

   foreach ($result as $row) {
      $data["id"] = $row["id"];
      $data["firstName"] = $row["first_name"];
      $data["lastName"] = $row["last_name"];
   }

   echo json_encode($data);
}


// inserir utilizador
if ($clientSideData->action == "insert") {
   $data = array(
      ":first_name" => $clientSideData->firstName,
      ":last_name" => $clientSideData->lastName
   );

   $query = "INSERT INTO user (first_name, last_name) VALUES (:first_name, :last_name)";
   $statement = $connection->prepare($query);
   $statement->execute($data);

   $output = array(
      "message" => "Utilizador inserido com sucesso!"
   );
   echo json_encode($output);
}


// atualizar utilizador
if ($clientSideData->action == "update") {
   $data = array(
      ":id"   => $clientSideData->id,
      ":first_name" => $clientSideData->firstName,
      ":last_name" => $clientSideData->lastName
   );

   $query = "UPDATE user SET first_name = :first_name, last_name = :last_name WHERE id = :id";
   $statement = $connection->prepare($query);
   $statement->execute($data);

   $output = array(
      "message" => "Utilizador atualizado com sucesso!"
   );
   echo json_encode($output);
}


// apagar utilizador
if ($clientSideData->action == "delete") {
   $query = "DELETE FROM user WHERE id = $clientSideData->id";
   $statement = $connection->prepare($query);
   $statement->execute();

   $output = array(
      "message" => "Utilizador apagado com sucesso!"
   );
   echo json_encode($output);
}
