

drop database talentHunt;
create database talentHunt;
use talentHunt;
show tables;
desc user;
desc artist;
desc order1;
desc adate_avail;
insert into user values("suyog@gmail.com", 8668, "male", "suyog", "12345");
insert into user values("tarun@gmail.com", 6666, "male", "tarun", "12345");
insert into user values("tanmay@gmail.com", 7777, "male", "tanmay", "12345");
insert into user values("harshala@gmail.com", 9999, "female", "harshala", "12345");
select * from user;
desc artist;
insert into artist values("suyog1@gmail.com", "abad", "male", "singer","suyog1","12345", 8668);
insert into artist values("tarun@gmail.com", "dehradoon", "male", "singer","tarun","12345", 6969);
insert into artist values("tanmay@gmail.com", "paithan", "male", "singer","tanmay","12345", 6969);
insert into artist values("harshala@gmail.com", "nashik", "female", "singer","harshala","12345", 6969);
insert into artist values("piyush@gmail.com", "xyz", "male", "dancer","piyush","12345", 6969);
select * from artist;

desc adate_avail;
insert into adate_avail values(default, 15000, "1-1-2023",null,"suyog1@gmail.com");
insert into adate_avail values(default, 16000, "2-2-2023",null,"tarun@gmail.com");
insert into adate_avail values(default, 17000, "3-3-2023",null,"tanmay@gmail.com");
insert into adate_avail values(default, 18000, "4-4-2023",null,"harshala@gmail.com");
select * from adate_avail;





desc order1;
insert into order1 values(default, "15/5/2023", "2:00:00", "20/5/2023", "15000", "Pune", "suyog@gmail.com", "suyog@gmail.com");
insert into order1 values(default, "16/6/2023", "2:00:00", "20/5/2023", "16000", "Abad", "tarun@gmail.com", "tarun@gmail.com");
select * from order1;


drop table adate_avail;
drop table user;
drop table artist;
drop table order1;




insert into order1 values(1, "12/4/2023", "12:15:00", "15/4/2023", "25000", "abad", null, null);
insert into order1 values(default, "12/4/2023", "12:15:00", "15/4/2023", "25000", "abad", null, null);
insert into order1 values(2, "15/5/2023", "2:00:00", "20/5/2023", "15000", "Pune", null, null);
insert into order1 values(3, "15/5/2023", "2:00:00", "20/5/2023", "15000", "Pune", "nanu@gmail.com", "rama@gmail.com");
select * from order1;
select * from order1 where artist_email = "nanu@gmail.com";
select * from order1 where email = "rama@gmail.com";
drop table order1;
SELECT t1.artist_email, t1.artist_name, t1.artist_genre, t2.from_date, t2.artistfees FROM artist t1 JOIN adate_avail t2 ON t1.artist_email = t2.artist_email ORDER BY t1.artist_genre;
SELECT t1.artist_email, t1.artist_name, t1.artist_genre, t2.from_date, t2.artistfees FROM artist t1 JOIN adate_avail t2 ON t1.artist_email = t2.artist_email where t1.artist_genre="singer";
SELECT t1.artist_email, t1.artist_name, t1.artist_genre, t2.booked_date, t2.order_price FROM artist t1 JOIN order1 t2 ON t1.artist_email = t2.artist_email where t2.email="nanu@gmail.com";
SELECT c.artist_name, c.artist_genre, c.artist_email, o.booked_date, o.order_price, o.email FROM artist c INNER JOIN Order1 o ON c.artist_email = o.artist_email where o.email="setu@gmail.com" ;






http://localhost:6969/orderslist/12-12-2012/12:12:00/24000/shevgaon/nanu@gmail.com/pp@gmail.com

http://localhost:6969/adatelist/12-12-2012/13-12-2012/6000/lala@gmail.com





