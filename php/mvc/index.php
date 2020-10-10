<!-- este ficheiro é o template da página -->

<!doctype html>
<html>

<head>
   <!-- metadados -->
   <title>MVC com PHP</title>
   <meta charset="utf-8">
   <meta name="description" content="Implementar arquitetura MVC com PHP">
   <meta name="keywords" content="MVC, Arquitetura">
   <meta name="author" content="Lara Ribeiro, Luís Pereira, Maria Francisca Costa">
   <meta name="viewport" content="width=device-width, initial-scale=1">

   <!-- CSS -->
   <link rel="stylesheet" type="text/css" href="css/main.css">

   <!-- Font Awesome -->
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
   <script src="https://kit.fontawesome.com/ed5c768cb2.js" crossorigin="anonymous"></script>
</head>

<body>
   <!-- CABEÇALHO -->
   <nav class="header">
      <!-- <img src="images/logo.png"> -->
      <h3>Popcorn</h3>
   </nav>

   <!-- LISTA DE UTILIZADORES -->
   <?php require("./controller/user-controller.php"); ?>

   <!-- RODAPÉ -->
   <footer class="footer">
      <div class="footer-first">
         <a href="https://github.com/luispereira1999/popcorn" target="_blank"><button class="btn btn-github"><i class="fab fa-github"></i></button></a>
      </div>
      <div class="footer-second">
         <p>Luís Pereira © 2020</p>
      </div>
      <div class="footer-third">
         <button class="btn btn-up"><i class="fas fa-chevron-up"></i></button>
      </div>
   </footer>
</body>

</html>