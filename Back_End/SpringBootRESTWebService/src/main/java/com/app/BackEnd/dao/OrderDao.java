package com.app.BackEnd.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.BackEnd.model.Order1;

@Repository
public interface OrderDao extends JpaRepository<Order1, Integer> {

	@Modifying
    @Query(value = "insert into order1 (order_id,booked_date,booked_time,order_price,venue,artist_email, email, book) VALUES (default, :booked_date,:booked_time,:order_price,:venue,:artist_emailid,:user_email, default)", nativeQuery = true)
    @Transactional
    void addOrder(@Param("booked_date") String booked_date, @Param("booked_time") String booked_time,@Param("order_price") int order_price,@Param("venue") String venue
    		,@Param("artist_emailid") String artist_emailid,@Param("user_email") String user_email);
	


//	@Query("select b from Artist a ,Order1 b where artist_emailid=artist_artist_emailid and artist_artist_emailid=?1")  //not working
	@Query(value="select * from Order1 where artist_email=? && book=0", nativeQuery = true)
	List<Order1> getOrderbyAemail(String email);
	
//	@Query("select b from User a ,Order1 b where user_email=user_user_email and user_user_email=?1") //not working
//	@Query(value="select * from Order1 where email=?", nativeQuery = true)
	@Query(value="select c.artist_name, c.artist_genre, c.artist_email, o.booked_date, o.order_price, o.email, o.order_id, o.booked_time, o.order_date, o.venue, o.book FROM artist c INNER JOIN Order1 o ON c.artist_email = o.artist_email where o.email=? && o.book = 0", nativeQuery = true)
	List<Order1> getOrderbyUemail(String email);
	
//	@Query("select a from Order1 a where artist_artist_emailid=?1 and booked_date=?2")  //not working
	@Query(value="select * from Order1 where artist_email=? , booked_date=?", nativeQuery = true)
	List<Order1>checkStatus(String artist_email,String date);

	@Modifying
	@Transactional
	@Query(value="UPDATE order1 SET book = 1 WHERE artist_email =?", nativeQuery = true)
	void confirmbooking(String artistemail);


	@Query(value="select c.artist_name, c.artist_genre, c.artist_email, o.booked_date, o.order_price, o.email, o.order_id, o.booked_time, o.order_date, o.venue, o.book FROM artist c INNER JOIN Order1 o ON c.artist_email = o.artist_email where o.email=? && o.book = 1", nativeQuery = true)
	List<Order1> getbookedartistByUserEmail(String email);
}
