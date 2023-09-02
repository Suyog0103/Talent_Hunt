package com.app.BackEnd.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.BackEnd.model.AdateAvail;
import com.app.BackEnd.model.Artist;



@Repository
public interface AdateAvailDao extends JpaRepository<AdateAvail, Integer>{
	
	@Modifying
    @Query(value = "insert into adate_avail (from_date,to_Date,artistfees,artist_email) VALUES (:fromdate,:todate,:fees,:email)", nativeQuery = true)
    @Transactional
    void addArtistDate(@Param("fromdate") String fromdate, @Param("todate") String todate,@Param("fees") int fees,@Param("email") String email);

	
	 @Query(value = "select * from adate_avail where artist_email=?", nativeQuery = true)
	AdateAvail getOne(String email);


	@Query(value="SELECT t1.artist_email, t1.artist_name, t1.artist_genre, t2.from_date, t2.artistfees, t2.id, t2.to_date FROM artist t1 JOIN adate_avail t2 ON t1.artist_email = t2.artist_email where t1.artist_genre=?", nativeQuery = true)
	List<AdateAvail> getAdateBycat(String cat);


	
	@Modifying
	@Transactional
	@Query(value = "update adate_avail set from_date=:fromdate, artistfees=:fees where artist_email=:email", nativeQuery = true)
	void updateAdate(@Param("fromdate") String fromdate, @Param("fees") double fees, @Param("email") String email);
	

}
