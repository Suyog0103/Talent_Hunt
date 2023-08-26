package com.app.BackEnd.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.BackEnd.dao.OrderDao;
import com.app.BackEnd.model.Order1;



@Service
public class OrderServiceImpl implements OrderService {
	@Autowired
	private OrderDao oDao;
	
	@Override
	public List<Order1> getAllOrders() {
		
		return oDao.findAll();
	}

	@SuppressWarnings("deprecation")
	@Override
	public Order1 getOrdersById(int oId) {
		
		return oDao.getOne(oId);
	}

	@Override
	public void addOrders(String booked_date,String booked_time, int order_price,String venue,String artist_emailid, String user_email) {
		
		oDao.addOrder(booked_date, booked_time, order_price, venue, artist_emailid, user_email);
	}

	@Override
	public void deleteOrders(int oId) {
		
		oDao.deleteById(oId);
	}

	@Override
	public void updateOrders(Order1 order, int oId) {
		
		oDao.save(order);
		
	}

	@Override
	public List<Order1> getOrderbyAemail(String email) {
		
		return oDao.getOrderbyAemail(email);
	}

	@Override
	public List<Order1> getOrderbyUemail(String email) {
		
		return oDao.getOrderbyUemail(email);
	}

	@Override
	public List<Order1> checkStatus(String artist_email, String date) {
		
		return oDao.checkStatus(artist_email, date);
	}

}
