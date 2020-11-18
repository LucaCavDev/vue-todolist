var app = new Vue({
  el: "#app",
  data: {
    //creo faccio un array con le cose da fare. Potrei farlo vuoto, ma inizio mettedo 3 cose da fare
    toDoList: ['One million Push Ups and Squats', 'Kill Majin-Bu', 'Bang Bulma'],
    //adesso mi creo un array vuoto con le nuove cose che inserisce l'utente
    thingToDo: '',
    pic: "img/Dragon-Ball-Z-Goku-Workout.gif",
    //oppure se non mi funza provo a fare un unico array con tutte le cose, di default o no che sono da fare e lavoro su un unico array
  },

  methods: {
    //funzione per aggiungere l'input dell'utente  all'array toDoList
    addToList: function () {
      this.toDoList.push(this.thingToDo);//aggiungo la thingToDo all'array toDoList
      this.thingToDo = ''; //dopo aver aggiunto la nuova cosa da fare all'array, se non scrivo questa riga il testo aggiunto rimane nell'input, eguagliando thingToDo a '', lo spazio dell'input torna ad essere vuoto mostrando il placeholder
    },

    removeToList: function (index) {
      this.toDoList.splice(index, 1);
      //splice serve per rimuovere elementi da un array. (index mi dice su quale elemento dell'array stiamo ragionando, se mettessi solo questo rimuoverei tutti gli elementi a partire da quello indicato da index fino alla fine; mettendo anche un secondo argomento, in questo caso 1, indico il numero degli elementi che vado a togliere, quindi toglienddo esclusivamente quello selezionato con index, non toccando i successivi )
      // splice mi permette anche di inserire elementi nell'array. vedi: https://alligator.io/js/slice-vs-splice/
    }
  }
})
