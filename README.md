# Alos_act2
Compte rendu du tp2

-Hotel.json :  ce fichier contient la  base de données de notre projet.

-index.js : contient notre code source on a appliquer les routes (Get,Post,Put,Delete) et Middleware.


-Middleware  :est un logiciel tiers qui crée un réseau d'échange d'informations entre différentes applications informatiques, Il joue le rôle de lien entre les applications, les données et les utilisateur.
 
-Express.js est un framework d’application Web très populaire conçu pour créer des applications Web Node.js.
Il fournit un environnement intégré pour faciliter le développement rapide des applications Web basées sur les nœuds
est utilisé pour créer le côté serveur du Web application.
 
Les routes :
Routage fait référence à la définition de points finaux d’application (URI) et à la façon dont ils répondent aux demandes client. Pour une introduction au routage, voir Basic routing.
Les méthodes de routage:

1.Post: La méthode Post vous permet d'envoyer une grande quantité de données car les données sont envoyées dans le corps est sécurisée car les données ne sont pas visibles dans la barre d'URL.
2.	Get:La méthode Get vous permet d'envoyer uniquement une quantité limitée de données car les données sont envoyées dans l'en-tête. Il n'est pas sécurisé car les données sont visibles dans la barre d'URL.

3.	Put:La fonction app.put() achemine les requêtes HTTP PUT vers le chemin spécifié avec les fonctions de rappel spécifiées.
Paramètre:
Chemin : le chemin pour lequel la fonction middleware est invoquée et peut être l'un des suivants :
Une chaîne représentant un chemin.
Un modèle de chemin.
Un modèle d'expression régulière pour faire correspondre les chemins.
Un tableau de combinaisons de l'un des éléments ci-dessus.
Rappel : les fonctions de rappel peuvent être :
Une fonction middleware.
Une série de fonctions middleware (séparées par des virgules).
Un ensemble de fonctions middleware.
Une combinaison de tout ce qui précède.

    4.Delete:La méthode app.delete()              achemine toutes les requêtes HTTP    DELETE vers le chemin spécifié avec les fonctions de rappel spécifiées.
Paramètre :
chemin - Il s'agit du chemin pour lequel la fonction middleware est invoquée. Un chemin peut être une chaîne, un modèle de chemin, une expression régulière ou un tableau de tous ces éléments.
callback - Ce sont les fonctions middleware ou une série de fonctions middleware qui agissent comme un middleware sauf que ces rappels peuvent invoquer next (route).
Test.js:
On à utiliser la bibliothèque supertest
SuperTest: est une bibliothèque Node.js qui aide les développeurs à tester les API. Il étend une autre bibliothèque appelée superagent, un client HTTP JavaScript pour Node.js et le navigateur. Les développeurs peuvent utiliser SuperTest comme une bibliothèque autonome ou avec des frameworks de test JavaScript comme Mocha ou Jest.
On à faire un test pour les 4 méthode de routage (get,post,put,delete)  
Pour get existe un test get route qui affiche le message ok (200) et test get avec id afficher le message ok et test id false affiche le message erreur (404//state note fond)
Et pour post  il existe false data qui envoyer un message d'erreur (400) //l'hôtel n'ai pas ajouté 
Et il existe le vrai data qui envoyer un message ( 200 /ok)
 Pour delete 
 Test delete  id existe qui affiche le message 200 (ok)
 Test delete id bit existe qui affiche un message 404 (state note fonde)
      

