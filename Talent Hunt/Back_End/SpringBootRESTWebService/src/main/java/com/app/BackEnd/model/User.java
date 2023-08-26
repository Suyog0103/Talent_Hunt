package com.app.BackEnd.model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class User {
  @Id
  	private String email;
	private String password;
	private String name;
	private String gender;
	private int contactNo;
	
	public User() {
		super();
	}

	public User(String email, String password, String name, String gender, int contactNo) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.gender = gender;
		this.contactNo = contactNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getContactNo() {
		return contactNo;
	}

	public void setContactNo(int contactNo) {
		this.contactNo = contactNo;
	}

	@Override
	public String toString() {
		return "User [email=" + email + ", password=" + password + ", name=" + name + ", gender=" + gender
				+ ", contactNo=" + contactNo + "]";
	}
	
	
  
}
