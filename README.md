SPS-STATS
=========

POC Angularjs + Bootstrap + Dangle + ElasticSearch + MongoDB

Packages requis
---------

* npm install -g grunt-cli
* npm install -g bower
* npm install


Initialisation environnement
---------

* création des instances mongoDB (3 instances en //)
* import des données (depuis un backup de base)
   - installation elasticSearch
   - configuration plugin MongoDB
* lancement elactiSearch + elactiscHead
* création de la rivière

TODO
---------

* récupérer la dernière version d'AngulerJS
* cf ngCookies

* HTML5 : directive détection présence réseau et nature
* bloquer les appels REST si pas de réseau (transformRequest avec $q)
* désactiver les boutons si pas de réseau  (cf ajout propriété isOffline sur formulaire).

* gestion token CSRF
    - obtention d'un cookie portant le nom XSRF-TOKEN positionné par le serveur
    - Angular le reprend et l'injecte sous la forme d'un header HTTP X-XSRF-TOKEN via un Requesttransformer
    - A tester à chaque appel côté serveur
    - token unique par utilisateur

* Mettre en place une parade contre GET JSON array (page 116)

* gestion des habilitations côté client
    - ajout d'un service...pour récupérer les données de l'utilisateur (injecter le token X-XSRF-TOKEN)
        dans l'appel à la méthode config du module principal
    - ctrl avant chaque appel REST (? ... à faire au niveau serveur)
    - ctrl sur l'affichage des données et activation/désactivation des boutons
    - filtrage des données selon le profil utilisateur (oui mais côté serveur avant de renvoyer les données)

* mettre en cache les template
    appModule.run(function($templateCache) {$templateCache.put('helloTemplateCached.html', '<div>Hi there</div>');});

* ajout des traces appels avant/aprés (interceptor + $q)

* gestion du userAgent côté serveur(spring mobility)

* ScreenSplash à mettre en oeuvre avec barre de progression

* gestion des images selon la résolution
    - positionner une variable du type {{ dpi }} selon la résolution
    - prévoir les images côté serveur

* ajout des meta dans la page...BOILERPLATE
   - viewPort, apple-touch-icon-......

* HTML 5 gestion du cache / manifest (bof marche pas bien)

* AngularJS gestion du cache lors des appels ElasticJS


