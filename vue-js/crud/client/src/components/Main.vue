<template>
   <v-container>
      <v-row class="text-center" align="center" justify="center">
         <v-col>
            <h1 class="display-1 font-weight-bold float-left">Gestão de Utilizadores</h1>
         </v-col>
         <v-col>
            <v-btn class="primary float-right" color="success" @click="openPopup">Adicionar</v-btn>
         </v-col>
      </v-row>

      <v-simple-table dark>
         <template v-slot:default>
            <thead>
               <tr>
                  <th class="text-center">Primeiro Nome</th>
                  <th class="text-center">Último Nome</th>
                  <th class="text-center">Editar</th>
                  <th class="text-center">Remover</th>
               </tr>
            </thead>
            <tbody>
               <tr v-for="item in allData" :key="item.id">
                  <td class="text-center">{{ item.first_name }}</td>
                  <td class="text-center">{{ item.last_name }}</td>
                  <th class="text-center">
                     <v-btn color="warning" @click="fetchData(item.id)">Editar</v-btn>
                  </th>
                  <th class="text-center">
                     <v-btn color="error" @click="deleteData(item.id)">Remover</v-btn>
                  </th>
               </tr>
            </tbody>
         </template>
      </v-simple-table>

      <v-dialog v-model="popupIsActive" max-width="400px">
         <v-card>
            <v-card-title>
               <span class="headline">{{ popupTitle }}</span>
            </v-card-title>
            <v-card-text>
               <v-container>
                  <v-row>
                     <v-col cols="6">
                        <v-text-field label="Primeiro Nome*" v-model="currentFirstName" required></v-text-field>
                     </v-col>
                     <v-col cols="6">
                        <v-text-field label="Último Nome*" v-model="currentLastName" required></v-text-field>
                     </v-col>
                  </v-row>
               </v-container>
            </v-card-text>
            <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn color="blue darken-1" text @click="popupIsActive = false">Cancelar</v-btn>
               <v-btn
                  color="blue darken-1"
                  text
                  @click="submitData"
                  v-model="buttonAction"
               >Confirmar</v-btn>
            </v-card-actions>
         </v-card>
      </v-dialog>
   </v-container>
</template>



<script>
export default {
   name: "Main",

   data: () => ({
      allData: "",
      currentFirstName: "",
      currentLastName: "",
      buttonAction: "Insert",
      popupTitle: "Novo Utilizador",
      popupIsActive: false,
   }),

   methods: {
      openPopup: function () {
         this.currentId = 0;
         this.currentFirstName = "";
         this.currentLastName = "";
         this.buttonAction = "Insert";
         this.popupIsActive = true;
         this.popupTitle = "Adicionar Utilizador";
      },
      fetchAllData: function () {
         this.axios
            .post("http://api.pt/index.php", {
               action: "fetchAll",
            })
            .then((response) => {
               this.allData = response.data;
            })
            .catch((error) => {
               alert("Erro: algo deu errado com o servidor: ", error);
            });
      },
      submitData: function () {
         if (this.currentFirstName != "" && this.currentLastName != "") {
            if (this.buttonAction == "Insert") {
               this.axios
                  .post("http://api.pt/index.php", {
                     action: "insert",
                     firstName: this.currentFirstName,
                     lastName: this.currentLastName,
                  })
                  .then((response) => {
                     this.popupIsActive = false;
                     this.fetchAllData();
                     this.currentFirstName = 0;
                     this.currentFirstName = "";
                     this.currentLastName = "";
                     alert(response.data.message);
                  })
                  .catch((error) => {
                     alert("Erro: algo deu errado com o servidor: ", error);
                  });
            }
            if (this.buttonAction == "Update") {
               this.axios
                  .post("http://api.pt/index.php", {
                     action: "update",
                     id: this.currentId,
                     firstName: this.currentFirstName,
                     lastName: this.currentLastName,
                  })
                  .then((response) => {
                     this.popupIsActive = false;
                     this.fetchAllData();
                     this.currentId = 0;
                     this.currentFirstName = "";
                     this.currentLastName = "";
                     alert(response.data.message);
                  })
                  .catch((error) => {
                     alert("Erro: algo deu errado com o servidor: ", error);
                  });
            }
         } else {
            alert("Os campos devem ser preenchidos!");
         }
      },
      fetchData: function (id) {
         this.axios
            .post("http://api.pt/index.php", {
               action: "fetchSingle",
               id: id,
            })
            .then((response) => {
               this.currentId = id;
               this.currentFirstName = response.data.firstName;
               this.currentLastName = response.data.lastName;
               this.popupIsActive = true;
               this.buttonAction = "Update";
               this.popupTitle = "Editar Utilizador";
            })
            .catch((error) => {
               alert("Erro: algo deu errado com o servidor: ", error);
            });
      },
      deleteData: function (id) {
         this.axios
            .post("http://api.pt/index.php", {
               action: "delete",
               id: id,
            })
            .then((response) => {
               this.fetchAllData();
               alert(response.data.message);
            })
            .catch((error) => {
               alert("Erro: algo deu errado com o servidor: ", error);
            });
      },
   },

   created: function () {
      this.fetchAllData();
   },
};
</script>