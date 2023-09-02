package com.app.BackEnd.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.app.BackEnd.model.User;
import com.app.BackEnd.service.UserService;

@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@GetMapping("/users")
	public List<User> displayAllUser() {
		
		List<User> plist=userService.getAllUser();
		return plist;
		
	}
	
	@PostMapping("/userslist")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}
	
	@PutMapping("/userslist/{email}")
	public void updateUser(@RequestBody User user, @PathVariable String email) {
		userService.updateUser(user, email);
	}
	
	@DeleteMapping("/userslist/{email}")
	public void deleteUser(@PathVariable String email) {
		userService.deleteUser(email);
	}
	
	@GetMapping("/userslist/{email}")
	public User getUserById(@PathVariable String email) {
		return userService.getUserById(email);
	}
	
	@PostMapping("/login")
	public ResponseEntity<User> validateUser( @RequestBody User u) {
		System.out.println("in post");
		User u1 = userService.validateUser(u.getEmail(), u.getPassword());
		System.out.println(u1);

		if (u1 != null) {

			return new ResponseEntity<>(u1, HttpStatus.OK);
		} else {
			
			System.out.println("Wrong credentials");

			return new ResponseEntity<>(u1, HttpStatus.OK);
		}
	}
}
