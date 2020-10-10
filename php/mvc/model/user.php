<!-- este ficheiro serve para abstrair a BD -->

<?php
class User
{
   private $id;
   private $name;

   function __construct()
   {
      
   }

   function setId($id)
   {
      $this->id = $id;
   }
   function getId()
   {
      return $this->id;
   }

   function setName($name)
   {
      $this->name = $name;
   }
   function getName()
   {
      return $this->name;
   }


   function selectAll()
   {

   }

   function selectOne()
   {

   }

   function insert()
   {

   }

   function update()
   {

   }

   function delete()
   {

   }
}
?>