let myApp = new Vue ({

  el:'#root',

  data:{
     mails:[],
  },
  mounted: function(){

    for (i=0; i< 10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((result) =>{
      this.mails.push(result.data.response);

      });
    }
    console.log(this.mails)


  }





});
