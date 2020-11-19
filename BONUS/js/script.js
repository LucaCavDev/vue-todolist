var app = new Vue({
  el: "#app",
  data: {
    //mi faccio un array di cose da fare di default che sono gia li visibili al caricamento pagina
    toDoList: ['One million Push Ups and Squats', 'Kill Majin-Bu', 'Bang Bulma'],
    //adesso mi creo un array vuoto con le nuove cose che inserisce l'utente
    thingToDo: '',
    trainingGoku: "img/Dragon-Ball-Z-Goku-Workout.gif",
    relaxingGoku: "img/relax.jpg",
    //metto che l'audio di default è spento
    audioInPlay: false
  },

  methods: {
    //funzione per aggiungere l'input dell'utente  all'array toDoList
    addToList: function () {
      if (this.thingToDo !== '')/*metto la condizione che la cosa che sto cercando di aggiungere alla lista sia diversa da uno spazio vuoto*/ {
        this.toDoList.push(this.thingToDo);//aggiungo la thingToDo all'array toDoList
        this.thingToDo = '';//dopo aver aggiunto la nuova cosa da fare all'array, se non scrivo questa riga il testo aggiunto rimane nell'input, eguagliando thingToDo a '', lo spazio dell'input torna ad essere vuoto mostrando il placeholder
      }
    },

    removeToList: function (index) {
      this.toDoList.splice(index, 1);
      //splice serve per rimuovere elementi da un array. (index mi dice su quale elemento dell'array stiamo ragionando, se mettessi solo questo rimuoverei tutti gli elementi a partire da quello indicato da index fino alla fine; mettendo anche un secondo argomento, in questo caso 1, indico il numero degli elementi che vado a togliere, quindi toglienddo esclusivamente quello selezionato con index, non toccando i successivi )
      // splice mi permette anche di inserire elementi nell'array. vedi: https://alligator.io/js/slice-vs-splice/

    },

    //funzione che si attiva al click sl bottone della motivazione e fa partire la canzone myTrack, che ho messo nella var qua sotto
    startMusic(){
      myTrack.play()
      this.audioInPlay = true
    }
  }
})

var myTrack = new Audio('audio/pushIt.mp3')
