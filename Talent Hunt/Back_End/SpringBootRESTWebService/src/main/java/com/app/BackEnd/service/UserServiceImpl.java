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
	
	
	
	
	
	
	
	

//	@Override
//	public void addProduct(User p) {
//		productDao.save(p);
//		
//	}
//
//	@Override
//	public User getById(int pid) {
//		Optional<User> op=productDao.findById(pid);
//		if(op.isPresent()) {
//			return op.get();
//		}
//		else{
//			return null;
//			//throw new ResourceAccessException("not found");
//		}
//	}

//	@Override
//	public void updateProduct(User p) {
//		Optional<User> op=productDao.findById(p.getPid());
//		if(op.isPresent()) {
//			User p2=op.get();
//			p2.setPname(p.getPname());
//			p2.setQty(p.getQty());
//			p2.setPrice(p.getPrice());
//			productDao.save(p);
//		}
//		
//		
//	}
//
//	@Override
//	public void deleteById(int pid) {
//		productDao.deleteById(pid);
//		
//	}
//
//	@Override
//	public List<User> getByPrice(int lpr, int hpr) {
//		List<User> plist=productDao.getByPrice(lpr,hpr);
//		System.out.println(plist);
//		return plist;
//	}
}
