package com.app.BackEnd.service;

import java.util.List;

import com.app.BackEnd.model.User;



public interface UserService {

	List<User> getAllUser();
	
	User getUserById(String email);

	void addUser(User user);

	void deleteUser(String email);

	void updateUser(User user, String email);

	User validateUser(String email, String password);



}
