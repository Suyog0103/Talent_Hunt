package com.app.BackEnd.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.BackEnd.model.User;



@Repository
public interface UserDao extends JpaRepository<User, String>{
    
//	@Query(value="select * from product  where price between :lpr and :hpr",nativeQuery = true)
//	//@Query(value="select p from Product p where price between :lpr and :hpr")
//	List<User> getByPrice(int lpr, int hpr);
//	
//	@Procedure(procedureName="getNumproducts")
//	public int getCount();
	
	@Query(value = "select * from user where email=? and password=?", nativeQuery = true)
	User validateUser(String email, String password);

	
	@Modifying
	@Query("DELETE FROM User u WHERE u.email = :email")
	void deleteById(@Param("email") String email);
	
	
//	@Modifying
//	@Query(value = "delete from user where email=?", nativeQuery = true)
//	void deleteById(String email);
	
	@Query(value = "select * from user where email=?", nativeQuery = true)
	User getUserById(String email);

}
