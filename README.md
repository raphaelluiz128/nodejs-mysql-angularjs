# nodejs-mysql-angularjs

## Start project
Use gitclone with the github url
Use npm install to install all node_modules
Use npm start to start the api server
## Front-end
https://github.com/raphaelluiz128/nodejs-mysql-angularjs-front

## example video
https://www.loom.com/share/50a14fb333424df4af99f59e103ba43a
https://www.loom.com/share/72f3c96e11754b75bf07003684e5413f
## MYSQL SCHEMA


DATABASE tasks-saipos

CREATE TABLE `tasks` (
  `id` mediumint NOT NULL AUTO_INCREMENT,
  `responsible` char(40) NOT NULL,
  `responsibleEmail` char(40) NOT NULL,
  `description` char(40) NOT NULL,
  `comeToPending` int DEFAULT NULL,
  `status` char(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci