# ECF Médiathèque

## Travail demander

Vous allez récupérer les sources de l'ECF ici :
- [ECF](https://github.com/VivierCyril/ECF.git)

Dans le dossier vous trouverez 3 fichiers :
- index.html
- style.css
- app.js

#### 1. Maquettage

Concevoir la maquette de votre site en mode zoning

#### 2. HTML
---

- Concevoir les pages HTML qui nous permettra de visualiser un tableau avec toutes les informations des films.
- Concevoir un formulaire nous permettant d'ajouter un film dans la liste pour la première page, puis dans la seconde le formulaire nous permettra d'afficher les films trouvés via l'API
- Plus, un champ de sélection afin de filtrer les films par leur titre ou par leur année


#### 3. CSS
---

- Votre site devra avoir l'apparence d'un site (cinéma, vidéoclub ...)
- Pour la mise en forme, vous utiliserez un Framework CSS (Bootstrap, Tailwin, piqueniquecss, bulmaCss)  ou utiliser votre propre CSS. (SASS)
- Votre page devra être responsive en format écran, tablette et smartphone


#### 4. JavaScript
---

Vous allez devoir concevoir 2 script JavaScript sur deux pages différentes. 


### Page Vidéothéque
---

- Dans le fichier *app.js* vous trouverez un tableau d'objets avec 4 valeurs qui sera votre base de données à afficher lors de l'ouverture de votre page HTML.
- Aucun script ou attribut JavaScript dois être présent dans le fichier HTML !
- Tâche à accomplir :
    - [ ] Afficher les films dans un tableau
    - [ ] Créer un bouton *"Ajouter"* qui nous fera apparaître un formulaire
        - Une zone de saisie pour le titre
        - Une zone de saisie pour l'année
        - Une zone de saisie pour l'auteur
        - Un bouton pour sauvegarder
    - [ ] Vérifier les données saisies par l'utilisateur dans le formulaire d'ajout
        - Titre : **minimum 2 caractères**
        - Année : format de l'année 4 chiffres compris entre **1900 et l'année en cours**
        - Auteur : **minimum de 5 caractères**
    - [ ] Si le formulaire est valide ajouter le film dans le tableau
        - On enregistrera le titre et le nom de l'auteur avec la **première lettre en MAJUSCULE**
        - Afficher un message d'alerte pendant 3s : "Film ajouter avec succès"
    - [ ] Sinon on affichera un message d'erreur
        - Afficher un message d'alerte pendant 5s : "Erreur dans le formulaire " + les zones d'erreurs
    - [ ] Pour le filtre :
        - Si l'option filtre par titre est sélection on affichera les films par **ordre alphabétique**
        - Si l'option filtre par année est sélection on affichera les films par **ordre  décroissant**
    - [ ] Enfin, pour chaque film on ajoutera un bouton *"Supprimer"* qui permettra de retirer le film de la liste
        - On demandera une confirmation de suppression :
            - Si la personne confirme la suppression on retirera le film de la liste
            - Sinon on annulera la demande de suppression


### Page Recherche film
---
Dans un nouveau fichier JS, vous ferais des recherches via l'API OMDB 
Aucun script ou attribut JavaScript dois être présent dans le fichier HTML !

- Tâche à accomplir :
  - [ ] Créer un formulaire de Recherche
    - [ ] Une zone de saisie pour le titre
    - [ ] Une zone de saisie pour l'année
    - [ ] Un sélecteur pour le type (film, épisode, séries, saison)
  - [ ] Faire la recherche via OMDB avec les données de l'utilisateur 
  - [ ] Afficher les différents résultats avec :
    - [ ] Le poster du film (si disponible)
      - Sinon afficher une image importé
    - [ ] Le titre film
    - [ ] L'année du film
  - [ ] Affiche une pagination si besoin
    - [ ] Chaque page renverra la suite des résultats attendu 


### Les bibliothèques

Dans l'une de vos pages vous intégrerez une bibliothèque JavaScript de votre choix. 

### 5. Git

Vous travaillerez avec Git tout au long de cette ECF et déposerez votre travail sur votre dépôt (GitHub, GitLab etc..)

### 6. Liens utiles
---
#### API 
- [omdb](https://www.omdbapi.com/)

#### Doc JavaScript
- [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [Create Elements](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Function](https://developer.mozilla.org/en-US/docs/Glossary/Function)
- [Walking the DOM](https://javascript.info/dom-navigation)
- [Methods DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement#See_also)
- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Operator `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Dataset](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)
---#   E C F - M e d i a t h e q u e  
 #   E C F - M e d i a t h e q u e  
 #   E C F - M e d i a t h e q u e  
 