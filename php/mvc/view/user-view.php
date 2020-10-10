<!-- este ficheiro serve para criar a estrutura da página -->

<?php
$users = $_GET["users"];
?>

<table>
   <tr>
      <th>Id</th>
      <th>Nome</th>
   </tr>
   <?php foreach ($users as $user) { ?>
      <tr>
         <td> <?php echo $user->getId(); ?> </td>
         <td> <?php echo $user->getName(); ?> </td>
      </tr>
   <?php } ?>
</table>