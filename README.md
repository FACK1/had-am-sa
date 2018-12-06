# Music DB
App to search about songs and artists, seraching by name of song or artist . 
# User journey :
  - As a user I want to search for a artist name, the user will see the name of artist, his img and albums.
  - As a user I want to search for a song name, the user will see the name of artist,img for the artist, link to the song and     album.
  - As a user I want to search for an album name, the user will see the name of album, artist name and img artist.
  - As a user I want to add a song with artist name and the related album and recive a message with Done .
 

# Website Link:[Music DB](https://music-dbapp.herokuapp.com/)
# Architecture :
- App Architecture 
- file Structure 
  - public 
    - index.html 
    - style.css 
    - assets folder for images
  - src 
    - server.js
    - router.js
    - handler.js
   - tests
     - test.js
   - database
     - db_build.sql
     - db_connection.js
     - db_build.js
   - queries
     - getData.js
     - setData.js
  - package.json
  
 
# How to run our site on your machine?
- git clone this repo **(https://github.com/FACK1/had-am-sa.git)**
- Open your **command line**.
- Put in terminal : **npm install** .
- create database **CREATE DATABASE <database name here>; **
- create uesrname and password **CREATE USER <desired username to connect to database>;**
- grant prinileges **GRANT ALL PRIVILEGES ON DATABASE <database name here> TO <desired username entered previously>;**
- make config.env file and put **DATABASE_URL= postgres://uesrname:password@localhost:5432/dbname**
- Put in terminal : **node database/db_build.js**.
- Then put in terminal : **npm run dev**  to run the server.
- Open your browser and put in terminal: **localhost:3003**.

# Test coverage


# CI Test

# Team_Member:
  - Hadeel Slamin
  - Aman Shawar
  - Sama' Amro 
