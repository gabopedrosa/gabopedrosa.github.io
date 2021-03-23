function formatarAbnt() {
    var nome = document.forms["mix"]["nomeUser"].value;
     if (nome == "") {
         alert("Escreva algum nome");
         return false;  } 
      var nome = nome.split(" "); 
      var Abnt = nome.pop().toUpperCase() + ", " + nome.shift()+ " ";   
    for (let index = 0; index < nome.length; index++){
            if (nome[index].length > 2){
                Abnt += nome[index].charAt(0) + " ";        } }
        document.forms["mix"]["Abnt"].value = Abnt;   }