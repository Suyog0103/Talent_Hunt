package com.app.BackEnd.dao;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.BackEnd.model.AdateAvail;
import com.app.BackEnd.model.Artist;


@Repository
public interface ArtistDao extends JpaRepository<Artist, String> {


	@Query("select  a from Artist a where artistEmail=?1 and artistPassword =?2")
	List<Artist> login(String email, String pwd);

	@Query("select distinct(b) from Artist a ,AdateAvail b where artist_emailid=artist_artist_emailid and ?1 between  from_date and to_Date and artistfees <=?2 and artist_genre=?3 and artist_address=?4")
	List<AdateAvail> checkSearch(Date date,int fees,String genre,String city);
	
	@Query("select a from Artist a where artist_genre=?1")
	List<Artist> artistByCat(String cat);

	@Modifying
	@Transactional
	@Query(value = "update artist set artist_name=:name, artist_gender=:gender, artist_genre=:genre where artist_email=:email", nativeQuery = true)
	void updateArtist( @Param("name") String name, @Param("gender") String gender, @Param("genre") String genre, @Param("email") String email);
	
	

}
