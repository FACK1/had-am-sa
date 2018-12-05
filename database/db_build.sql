BEGIN;

DROP TABLE IF EXISTS artists, tracks, track_artist;
CREATE TABLE IF NOT EXISTS artists (
    id          SERIAL     PRIMARY KEY,
    name        TEXT       NOT NULL,
    img_url     TEXT
);

INSERT INTO artists (name,img_url) VALUES ('فيروز','https://haya-online.com/wp-content/uploads/2017/09/Fairouz-Poster.jpg');
INSERT INTO artists (name,img_url) VALUES ('شيرين','https://gdb.radiosawa.us/BB648761-0DAC-4B01-B4E0-0BB8AB0330BE_cx0_cy4_cw0_w1023_r1_s.jpg');
INSERT INTO artists (name,img_url) VALUES ('كاظم الساهر','https://pbs.twimg.com/profile_images/819150417770778624/AOyUx8bj_400x400.jpg');
INSERT INTO artists (name,img_url) VALUES ('أصالة','https://www.lbcgroup.tv/newsimages/News-P-386898-636657059801782235.jpg');
INSERT INTO artists (name,img_url) VALUES ('ناصيف زيتون','http://bisara7a.com/wp-content/uploads/2016/02/11380776_1449166888725952_65524611_n1-300x300.jpg');

-- Table Track
CREATE TABLE IF NOT EXISTS tracks (
    id          SERIAL     PRIMARY KEY,
    title       TEXT       NOT NULL,
    link        TEXT       NOT NULL
);

INSERT INTO tracks (title, link) VALUES ('يا رايح عكفر حالا', 'https://www.youtube.com/watch?v=7n9X5Nx4ncM');
INSERT INTO tracks (title, link) VALUES ('سيد الهوى', 'https://www.youtube.com/watch?v=XtKBGjWnhJk');
INSERT INTO tracks (title, link) VALUES ('زهرة المدائن', 'https://www.youtube.com/watch?v=mu9z-T8Piws');
INSERT INTO tracks (title, link) VALUES ('مشاعر', 'https://www.youtube.com/watch?v=vEfW9sm70tg');
INSERT INTO tracks (title, link) VALUES ('طريقي', 'https://www.youtube.com/watch?v=3UzWptKIwHY');
INSERT INTO tracks (title, link) VALUES ('صح', 'https://www.youtube.com/watch?v=skplkvnvDaQ');
INSERT INTO tracks (title, link) VALUES ('أنا وليلى', 'https://www.youtube.com/watch?v=kx7Go4qRnIw');
INSERT INTO tracks (title, link) VALUES ('يا مستبدة', 'https://www.youtube.com/watch?v=ikbnwmB3N7g');
INSERT INTO tracks (title, link) VALUES ('ممنوعة أنت', 'https://www.youtube.com/watch?v=-rm5uk05dpw');
INSERT INTO tracks (title, link) VALUES ('اغضب', 'https://www.youtube.com/watch?v=htPcHKK7blQ');
INSERT INTO tracks (title, link) VALUES ('أولى القبلتين', 'https://www.youtube.com/watch?v=85rGShDs4wg');
INSERT INTO tracks (title, link) VALUES ('عيش سكر وطن', 'https://www.youtube.com/watch?v=BZ9C9eejSSw');
INSERT INTO tracks (title, link) VALUES ('طول اليوم', 'https://www.youtube.com/watch?v=gk9q1UwGaB8');
INSERT INTO tracks (title, link) VALUES ('عاشقة الورد', 'https://www.youtube.com/watch?v=d98C5PxAMCs');
INSERT INTO tracks (title, link) VALUES ('مجبور', 'https://www.youtube.com/watch?v=EitmSZ488RA');

-- Track Artist Table
CREATE TABLE IF NOT EXISTS track_artist (
    track_id    INTEGER,
    artist_id     INTEGER
);

INSERT INTO track_artist (track_id, artist_id) VALUES (1,1);
INSERT INTO track_artist (track_id, artist_id) VALUES (2,1);
INSERT INTO track_artist (track_id, artist_id) VALUES (3,1);
INSERT INTO track_artist (track_id, artist_id) VALUES (4,2);
INSERT INTO track_artist (track_id, artist_id) VALUES (5,2);
INSERT INTO track_artist (track_id, artist_id) VALUES (6,2);
INSERT INTO track_artist (track_id, artist_id) VALUES (7,3);
INSERT INTO track_artist (track_id, artist_id) VALUES (8,3);
INSERT INTO track_artist (track_id, artist_id) VALUES (9,3);
INSERT INTO track_artist (track_id, artist_id) VALUES (10,4);
INSERT INTO track_artist (track_id, artist_id) VALUES (11,4);
INSERT INTO track_artist (track_id, artist_id) VALUES (12,4);
INSERT INTO track_artist (track_id, artist_id) VALUES (13,5);
INSERT INTO track_artist (track_id, artist_id) VALUES (14,5);
INSERT INTO track_artist (track_id, artist_id) VALUES (15,5);

COMMIT;
