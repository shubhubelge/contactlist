<template>
  <v-container>
    <v-btn depressed @click="sortedArray">
      <span v-if="shortDicider">A to Z</span> 
      <span v-if="!shortDicider">Z to A</span> 
    </v-btn>
   <v-list three-line>
      <template>
         <v-list-item
        v-for="(item, index) in contactListData"
          :key="index"  @click="goSinglePage(item)"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="item.first_name +' '+item.last_name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    </v-container>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'Home',

    data: () => ({
      contactListData:[],
      shortDicider:true,
      
    }),
     beforeMount(){
      console.log("oi f,mvfndjh")
      const url = 'https://reqres.in/api/users';
      axios.get(url).then((contacts)=>{
        console.log("data")
        const contactList =  contacts
        console.log(contactList)
        if(contactList.status === 200){
          console.log("all good")
          this.contactListData = contactList.data.data
          this.tempArray = contactList.data.data
        }else{
          console.log("sonting went wrong")
        }
        // console.log(data.data)
        // this.apidata = data.data
      })

    },
    computed: {
      // sortedArray: function() {
      //   function compare(a, b) {
      //     if (a.name < b.name)
      //       return -1;
      //     if (a.name > b.name)
      //       return 1;
      //     return 0;
      //   }

      //   return this.contactListData.sort(compare);
      // }
},
     methods:{
      goSinglePage(singleUser){
        console.log("singleUser=============>>>")
        console.log(singleUser)
        console.log(this)
        const router = this.$router;
        console.log(router)
        let context = singleUser
        console.log("context")
        console.log(context)
        // { path: '/user/:id', component: User }
        router.push({path:'/singlepage', query: {otherProp:context}})
        },

        sortedArray(){
          this.contactListData =[]
          // let filterdlist = _.orderBy(this.contactListData, 'first_name', 'asc');
          if(this.shortDicider){
            this.shortDicider = ! this.shortDicider
            const filterdlistAtoZ = this.tempArray.sort(function(a, b){
              if(a.first_name < b.first_name) { return -1; }
              if(a.first_name > b.first_name) { return 1; }
              return 0;
            })
            this.contactListData = filterdlistAtoZ
          }else{
            this.shortDicider = ! this.shortDicider
            const filterdlistZtoA = this.tempArray.sort(function(a, b){
              if(a.first_name > b.first_name) { return -1; }
              if(a.first_name < b.first_name) { return 1; }
              return 0;
            })
            this.contactListData = filterdlistZtoA
          }
          
          //  console.log( this.contactListData  )
          //  this.contactListData = filterdlist
          //  console.log(filterdlist)
        }
    }
  }
</script>
