package com.app.BackEnd.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Artist {
	
	@Id
	private String artistEmail;
	private String artistPassword;
	private String artistName;
	private String artistGender;
	private long artistPhoneNumber;
	private String artistGenre;
	private String artistAddress;
	
	public Artist() {
		super();
	}

	public Artist(String artistEmail, String artistPassword, String artistName, String artistGender,
			long artistPhoneNumber, String artistGenre, String artistAddress) {
		super();
		this.artistEmail = artistEmail;
		this.artistPassword = artistPassword;
		this.artistName = artistName;
		this.artistGender = artistGender;
		this.artistPhoneNumber = artistPhoneNumber;
		this.artistGenre = artistGenre;
		this.artistAddress = artistAddress;
	}

	public String getArtistEmail() {
		return artistEmail;
	}

	public void setArtistEmail(String artistEmail) {
		this.artistEmail = artistEmail;
	}

	public String getArtistPassword() {
		return artistPassword;
	}

	public void setArtistPassword(String artistPassword) {
		this.artistPassword = artistPassword;
	}

	public String getArtistName() {
		return artistName;
	}

	public void setArtistName(String artistName) {
		this.artistName = artistName;
	}

	public String getArtistGender() {
		return artistGender;
	}

	public void setArtistGender(String artistGender) {
		this.artistGender = artistGender;
	}

	public long getArtistPhoneNumber() {
		return artistPhoneNumber;
	}

	public void setArtistPhoneNumber(long artistPhoneNumber) {
		this.artistPhoneNumber = artistPhoneNumber;
	}

	public String getArtistGenre() {
		return artistGenre;
	}

	public void setArtistGenre(String artistGenre) {
		this.artistGenre = artistGenre;
	}

	public String getArtistAddress() {
		return artistAddress;
	}

	public void setArtistAddress(String artistAddress) {
		this.artistAddress = artistAddress;
	}

	@Override
	public String toString() {
		return "Artist [artistEmail=" + artistEmail + ", artistPassword=" + artistPassword + ", artistName="
				+ artistName + ", artistGender=" + artistGender + ", artistPhoneNumber=" + artistPhoneNumber
				+ ", artistGenre=" + artistGenre + ", artistAddress=" + artistAddress + "]";
	}
	
	
	

}
