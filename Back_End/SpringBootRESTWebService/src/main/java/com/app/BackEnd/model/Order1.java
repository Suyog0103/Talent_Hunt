package com.app.BackEnd.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
public class Order1{
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int orderId;

	private String orderDate;
	private double orderPrice;
	private String bookedDate;
	private String bookedTime;
	private String venue;

	@ManyToOne
	@JoinColumn(name="email")
	private User user;

	@ManyToOne
	@JoinColumn(name="artistEmail")
	private Artist artist;
	
	@Column(name = "book", nullable = false, columnDefinition = "int default 0")
	private int book;

	public Order1() {
		super();
	}

	public Order1(int orderId, String orderDate, double orderPrice, String bookedDate, String bookedTime, String venue,
			User user, Artist artist, int book) {
		super();
		this.orderId = orderId;
		this.orderDate = orderDate;
		this.orderPrice = orderPrice;
		this.bookedDate = bookedDate;
		this.bookedTime = bookedTime;
		this.venue = venue;
		this.user = user;
		this.artist = artist;
		this.book = book;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public double getOrderPrice() {
		return orderPrice;
	}

	public void setOrderPrice(double orderPrice) {
		this.orderPrice = orderPrice;
	}

	public String getBookedDate() {
		return bookedDate;
	}

	public void setBookedDate(String bookedDate) {
		this.bookedDate = bookedDate;
	}

	public String getBookedTime() {
		return bookedTime;
	}

	public void setBookedTime(String bookedTime) {
		this.bookedTime = bookedTime;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Artist getArtist() {
		return artist;
	}

	public void setArtist(Artist artist) {
		this.artist = artist;
	}

	public int getBook() {
		return book;
	}

	public void setBook(int book) {
		this.book = book;
	}

	@Override
	public String toString() {
		return "Order1 [orderId=" + orderId + ", orderDate=" + orderDate + ", orderPrice=" + orderPrice
				+ ", bookedDate=" + bookedDate + ", bookedTime=" + bookedTime + ", venue=" + venue + ", user=" + user
				+ ", artist=" + artist + ", book=" + book + "]";
	}


}
