package com.app.BackEnd.service;

import java.util.Date;
import java.util.List;

import com.app.BackEnd.model.Order1;



public interface OrderService {

	List<Order1> getAllOrders();

	Order1 getOrdersById(int oId);

	void addOrders(String booked_date, String booked_time, int order_price, String venue, String artist_emailid,
			String user_email);

	void deleteOrders(int oId);

	void updateOrders(Order1 order, int oId);

	List<Order1> getOrderbyAemail(String email);

	List<Order1> getOrderbyUemail(String email);

	List<Order1> checkStatus(String artist_email, String date);
}
