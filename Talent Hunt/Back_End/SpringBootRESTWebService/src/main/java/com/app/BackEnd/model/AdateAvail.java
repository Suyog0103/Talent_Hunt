package com.app.BackEnd.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;


@Entity
public class AdateAvail {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	private String fromDate;
	private String toDate;
	private double artistfees;
	
	@OneToOne
	@JoinColumn(name="artistEmail")
	private Artist artist;
	

	public AdateAvail() {
		super();
	}

	public AdateAvail(int id, String fromDate, String toDate, double artistfees, Artist artist) {
		super();
		this.id = id;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.artistfees = artistfees;
		this.artist = artist;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
	}

	public double getArtistfees() {
		return artistfees;
	}

	public void setArtistfees(double artistfees) {
		this.artistfees = artistfees;
	}

	public Artist getArtist() {
		return artist;
	}

	public void setArtist(Artist artist) {
		this.artist = artist;
	}

	@Override
	public String toString() {
		return "AdateAvail [id=" + id + ", fromDate=" + fromDate + ", toDate=" + toDate + ", artistfees=" + artistfees
				+ ", artist=" + artist + "]";
	}

}
