<template>
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
</template>

<script>
import axios from 'axios'
  export default {
    name: 'HelloWorld',

    data: () => ({
      contactListData:[],
     
      
    }),
     beforeMount(){
      console.log("oi f,mvfndjh")
      const url = 'https://reqres.in/api/users';
      axios.get(url).then((contacts)=>{
        console.log("data")
        const contactList =  contacts
        console.log(contactList)
        if(contactList.status === 200){
          console.log("all good------------->")
          this.contactListData = contactList.data.data
        }else{
          console.log("sonting went wrong")
        }
        // console.log(data.data)
        // this.apidata = data.data
      })

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
        router.push({path:'/about', query: {otherProp:context}})
        }
    }
  }
</script>
