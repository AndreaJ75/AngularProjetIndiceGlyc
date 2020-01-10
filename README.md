# Calculateur de charge glycémique

## Etape 0 : Création de l'application

Il vous suffit de cloner mon repository :wink:

Prérequis : [Installation de l'environnement Angular](https://angular.io/guide/setup-local) ==> jusqu'à l'étape 1 (incluse).

## Etape 1 : Liste des aliments

### Affichage de la liste des aliments

- Créez un composant responsable de l'affichage de la liste des aliments et affichez le dans le composant racine
- Créer une interface `Aliment` avec les propriétés suivantes : `name`, `ig` et `carbs`
- Créez un service contenant une liste avec trois aliment pour tester
- Affichez les aliments dans le composant grâce à un tableau
- Importez la [vraie liste des aliments](./aliments.json) dans votre service

### Modification de la liste des aliments

- Créez un formulaire qui permet d'ajouter un aliment à la liste
- Ajouter une colonne au tableau permettant de supprimer un aliment

## Etape 2 : Le calculateur

### Gérer le routing

- Créez un menu permettant d'afficher le calculateur ou la liste des aliments (grâce au router)
- Dans le composant racine, remplacez l'appel à la liste des aliments par le `router-outlet`
- Créez un composant responsable de l'affichage du calculateur

### Créer le calculateur

- Créez un formulaire permettant de choisir un aliment et sa portion pour l'ajour au calculateur
- Affichez le calcul de la charge glycémique avec les portions
- Affichez la liste des portions ajoutées
- Ajoutez un bouton permettant de supprimer une portion de la liste

## Etapes bonus

### Bonus 1 : Une application plus sympa à utiliser

- Ajoutez des validateurs sur le formulaire aliment (un IG est compris entre 0 et 200, une proportion de glucide entre 0 et 100)
- Ajoutez des validateurs sur le formulaire de calcul
- Formattez proprement les chiffres à virgule avec des `pipes`
- Triez la liste de sélection d'aliment par ordre alphabétique
- Proposez des tris du tableau sur chaque colonne

### Bonus 2 : Une application qui garde la mémoire

- Proposez d'enregistrer le résultat de votre calcul sous forme de repas
- Sauvegardez toutes les données dans le local storage
- Créez un composant pour affichez la liste des repas enregistrés
# AngularProjetIndiceGlyc
