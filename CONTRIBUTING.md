### Projet MAGIC-KABAB 

### Architecture De projet 

ce REPO c'est la partie Front-End Qui contient :

 #### Librery :

*fortawesome 
*react-router-dom
*react-router
*styled-components

#### Dossiers & Fichiers
* public 
* src:
   * asset :contient les images utiliser dans le projet . 
   * component :contient les composants de l'APP .
       * Home.js   : page d'acceulle (choix  Pain)
       * Etape2.js :2 eme page (choix de Viande)
       * Etape3.js :3 eme page (choix Salades)
       * Etape4.js :4 eme page (choix Sauces)
       * Recapitulatif.js : Page Recaputilatif
       * CommandValide.js : CommandValide
       * style.js : Contient le style de app (styled-components)
   * data.js : base de donner utiliser dans l'APP .
   * App.js : contient les routes (naviger enter les component)

#### Comment Naviger Entre les pages (component)

nous avons utilisé l'API React-router-dom ( Router , Switch ,Roote ).
Chaque Component à un role , pour faciliter les taches  :(ce n'est pas une def excate et juste mais on peut le définir comme un role principal )
Router : pour specifier l'emplacement ou on veut afficher les component 
Switch : pour dire a React , tu peux switcher entre les component et ne les affichent pas  en meme temps 
Roote  : pour donner a chaque component un roote ( url exemple :"/" .. )

#### Comment Passer le data entre les Components

nous avons utilisé les fonctions predefinies dans React **useHistory** et  **useLocation** chacun à un role
-useHistory: pour naviger depuis un button et envoyer des param
-useLocation : pour recuperer les param 

plus **localStorage**

#### les Fonctionalités realiser 

* Proposer le choix du pain: pain, galette ou baguette.

* Proposer le choix de la viande: viande ou tofu.

* Proposer d’ajouter de la salade et / ou des tomates et / ou des oignons.

* Proposer d’ajouter une ou deux sauces (mais pas trois) parmi une sélection de 6 sauces
(au choix).

* Une fois qu’un kébab est dans le panier, on affiche celui-ci avec un bouton commander

* L’utilisateur peut supprimer un kébab du panier


