package com.app.BackEnd.service;

import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.app.BackEnd.dao.UserDao;
import com.app.BackEnd.model.User;



@Service
public class UserServiceImpl implements UserService{
	@Autowired
    UserDao userDao;

	@Override
	public List<User> getAllUser() {
		List<User> ulist= userDao.findAll();
		System.out.println(ulist);
		return ulist;
		
	}
	
	@Override
	public void addUser(User user) {

		userDao.save(user);

	}
	
	@Override
	public void updateUser(User user, String email) {
		
		userDao.save(user);

	}
	
	@Override
	public void deleteUser(String email) {

		userDao.deleteById(email);
	}
	
	
	@SuppressWarnings("deprecation")
	@Override
	public User getUserById(String email) {

		return userDao.getOne(email);
	}

	
	@Override
	public User validateUser(String email, String password) {

		return userDao.validateUser(email, password);
	}
	
}
