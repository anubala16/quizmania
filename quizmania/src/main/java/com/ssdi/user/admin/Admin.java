package com.ssdi.user.admin;

import javax.persistence.Entity;

import com.ssdi.user.User;
import com.ssdi.user.UserType;

@Entity
public class Admin extends User{
	private String passcode;
	
	public Admin() {
		super();
	}
	
	public Admin(String email, String password) {
		super(email,password);
	}
	
	public Admin(String userFirstName, String userLastName, String email, String password, String passcode) {
		super(userFirstName, userLastName,email,password,String.valueOf(UserType.ADMIN));
		this.passcode = passcode;
	}

	public String getPasscode() {
		return passcode;
	}

	public void setPasscode(String passcode) {
		this.passcode = passcode;
	}
	
}
