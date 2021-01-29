<template>
  <v-card
    class="mx-auto"
    width="256"
    tile
  >


      <v-list>
        <v-list-item>
          <v-row justify="center">
          <v-list-item-avatar style="text-align:center;">
            <v-img :src="singleUserData.avatar" width="256"></v-img>
          </v-list-item-avatar>
          </v-row>
        </v-list-item>
        <p class="contant-center">{{singleUserData.first_name}}  {{singleUserData.last_name}}</p>
      </v-list>
      <v-divider></v-divider>
     <v-btn block depressed color="primary" @click="addToFav">
     Add to favourites
    </v-btn>
    
  </v-card>
</template>

<script>
  export default {
    name: 'SinglePage',
    data: () => ({
      singleUserData:{},
      contactListData:[],
    }),
    beforeMount(){
      console.log("oi f,mvfndjh")
      console.log("in about")
      console.log(this.$route.query.otherProp)
      this.singleUserData = this.$route.query.otherProp
    },
     methods:{
       addToFav(){
          if(Array.isArray(this.$store.state.allfavourites)){
          this.contactListData = this.$store.state.allfavourites
        }else{
          this.contactListData.push(this.$store.state.allfavourites)
        }
         console.log("in favrate")
         console.log(this.$store.state.allfavourites)
        //  var myFavrate = this.$store.state.allfavourites
         this.contactListData.push(this.singleUserData)
         this.$store.dispatch('setFav',this.contactListData);
       }
    }
  }
</script>
<style scoped>
.contant-center{
  text-align: center;
  margin-top: 12px;
}
</style>