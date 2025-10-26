const { createApp } = Vue;

createApp({
  data() {
    return {
     pieces:[
    {
        "id": 1,
        "nom": "Batterie 12V",
        "prix": 200,
        "categorie": "Électricité",
        "image" : "./images2/batterie.webp" ,
        "disponible": true
    },
    {
        "id": 2,
        "nom": "Filtre à huile",
        "prix": 19,
        "categorie": "Filtration",
        "image" : "./images2/filtrehuile.webp" ,
        "disponible": true
    },
    {
        "id": 3,
        "nom": "Bougies d'allumage (x4)",
        "prix": 60,
        "categorie": "Moteur" ,
        "image" : "./images2/Bougieallu.jpg" ,
        "disponible": true
    },
    {
        "id": 4,
        "nom": "Disques de frein (x2)",
        "prix": 80,
        "categorie": "Freinage",
        "image" : " " ,
        "disponible": false
    },
    {
        "id": 5,
        "nom": "Courroie de distribution",
        "prix": 90,
        "categorie": "Moteur",
        "image" : "./images2/courroie.jpg" ,
        "disponible": true
    },
    {
        "id": 6,
        "nom": "Pompe à eau",
        "prix": 70,
        "categorie": "Refroidissement",
        "image" : "./images2/pompe a eau.webp" ,
        "disponible": true
    },
    {
        "id": 7,
        "nom": "Amortisseurs arrière (x2)",
        "prix": 150,
        "categorie": "Suspension",
        "image" : "./images2/amortisseur.webp" ,
        "disponible": true
    },
    {
        "id": 8,
        "nom": "Filtre à air",
        "prix": 20,
        "categorie": "Filtration",
        "image" : "./images2/filter aaire.jpg" ,
        "disponible": true
    },
    {
        "id": 9,
        "nom": "Capteur ABS",
        "prix": 50,
        "categorie": "Sécurité",
        "image" : "./images2/capteurabs.webp" ,
        "disponible": true
    },
    {
        "id": 10,
        "nom": "Radiateur de refroidissement",
        "prix": 130,
        "categorie": "Refroidissement",
        "image" : "./images2/Rasiateur.jpeg" ,
        "disponible": true
    },
    {
        "id": 11,
        "nom": "Alternateur",
        "prix": 200,
        "categorie": "Électricité",
        "image" : "./images2/caralternator.webp" ,
        "disponible": true
    },
    {
        "id": 12,
        "nom": "Démarreur",
        "prix": 180,
        "categorie": "Électricité",
        "image" : "./images2/demarreur.webp" ,
        "disponible": true
    },
    {
        "id": 13,
        "nom": "Kit d'embrayage",
        "prix": 220,
        "categorie": "Transmission",
        "image" : "./images2/kit emarayage.webp" ,
        "disponible": true
    },
    {
        "id": 14,
        "nom": "Injecteur de carburant",
        "prix": 110,
        "categorie": "Moteur",
        "image" : " " ,
        "disponible": false
    },
    {
        "id": 15,
        "nom": "Pompe à carburant",
        "prix": 90,
        "categorie": "Carburant",
        "image" : "./images2/pompe carburant.png" ,
        "disponible": true
    },
    {
        "id": 16,
        "nom": "Capteur de pression des pneus (TPMS)",
        "prix": 45,
        "categorie": "Sécurité",
         "image" : " " ,
        "disponible": false
    },
    {
        "id": 17,
        "nom": "Rétroviseur extérieur",
        "prix": 60,
        "categorie": "Carrosserie",
         "image" : "./images2/retroviseur.webp" ,
        "disponible": true
    },
    {
        "id": 18,
        "nom": "Échappement complet",
        "prix": 250,
        "categorie": "Échappement",
         "image" : "./images2/echappement.webp" ,
        "disponible": true
    },
    {
        "id": 19,
        "nom": "Vanne EGR",
        "prix": 140,
        "categorie": "Moteur",
         "image" : "./images2/vanne.webp" ,
        "disponible": true
    },
    {
        "id": 20,
        "nom": "Turbo",
        "prix": 400,
        "categorie": "Moteur",
         "image" : " " ,
        "disponible": false
    },
    {
        "id": 21,
        "nom": "Joint de culasse",
        "prix": 75,
        "categorie": "Moteur" ,
         "image" : " " ,
        "disponible": false
    },
    {
        "id": 22,
        "nom": "Boîtier de direction",
        "prix": 300,
        "categorie": "Direction",
         "image" : " " ,
        "disponible": false
    },
    {
        "id": 23,
        "nom": "Silent bloc de suspension",
        "prix": 35,
        "categorie": "Suspension",
         "image" : " " ,
        "disponible": false
    },
    {
        "id": 24,
        "nom": "Cardan de transmission",
        "prix": 160,
        "categorie": "Transmission",
         "image" : " " ,
        "disponible": false
    },
    {
        "id": 25,
        "nom": "Capteur de position vilebrequin",
        "prix": 50,
        "categorie": "Moteur",
         "image" : " " ,
        "disponible": false
    }
],

    filtrerecherche: "" ,
    afficheparcategorie: "",
    tri_prix: "Croissant",

    }
  },
  computed:{
      filtrepiece(){
          let result=this.pieces.filter(e=>
            (e.disponible === true &&
             e.nom.toLowerCase().includes(this.filtrerecherche.toLowerCase()) 
             && (e.categorie===this.afficheparcategorie||this.afficheparcategorie === ""))
        
            )
             if (this.tri_prix==="Croissant"){
               result.sort((a,b)=>a.prix-b.prix);
             }else{
               result.sort((a,b)=>b.prix-a.prix);
             }

        return result
      }
     
  }
}).mount("#app");

