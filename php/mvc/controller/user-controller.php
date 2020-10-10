<!-- este ficheiro serve para abstrair a BD -->

<?php
require("./model/user.php");

class Controller
{
   function select()
   {
      $user = new User();
      $users = new $user->selectAll();

      $_GET["users"] = $users;

      require("./view/user-view.php");
   }
}
?>