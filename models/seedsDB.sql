CREATE DATABASE roadrunner_db; 
USE roadrunner_db; 

SELECT * FROM roadrunner_db.Eventdbs;

INSERT INTO Eventdbs (id, name, description, date, image, createdAt, updatedAt )
VALUES (0, "Puppy Play", "Socialize your little pupper at our weekly meetup!", current_date(), "https://media.giphy.com/media/wdQwRVyHGV8ic/source.gif", current_time(), current_time() ); 

INSERT INTO Eventdbs (id, name, description, date, image, createdAt, updatedAt )
VALUES (1, "Chess Wars", "The Battle Royale continues this Saturday!", current_date(), "https://media.giphy.com/media/WwbmjTK5TS87e/source.gif", current_time(), current_time() )
