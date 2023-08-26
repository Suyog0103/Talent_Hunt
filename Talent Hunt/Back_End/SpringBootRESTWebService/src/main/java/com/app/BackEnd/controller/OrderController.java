package com.app.BackEnd.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.BackEnd.model.Order1;
import com.app.BackEnd.service.OrderService;



@CrossOrigin("*")
@RestController
public class OrderController {
	@Autowired
	OrderService orderService;

	@RequestMapping("/ordertest")
	public String welcomeorder() {

		return "you are in the testing phase";

	}

	@GetMapping("/orderslist")
	public List<Order1> getallOrders() {

		return orderService.getAllOrders();
	}

	@GetMapping("/orderslist1/{oId}")
	public Order1 getordersById(@PathVariable int oId) {
		return orderService.getOrdersById(oId);
	}

	@PostMapping("/orderslist/{booked_date}/{booked_time}/{order_price}/{venue}/{artist_emailid}/{user_email}")
	public int addOrder(@PathVariable String booked_date, @PathVariable String booked_time,
			@PathVariable int order_price, @PathVariable String venue, @PathVariable String artist_emailid,
			@PathVariable String user_email){
		System.out.println("in addOrder");
//		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd");
//		Date date = formatter.parse(booked_date);
//		System.out.println(artist_emailid);
//		System.out.println(date);
//		List<Order1> list = orderService.checkStatus(artist_emailid, booked_date);
//		 String s1="";
//		System.out.println(list);
//		if (list.isEmpty()) {
		if(true) {
			orderService.addOrders(booked_date, booked_time, order_price, venue, artist_emailid, user_email);

			return 0;
		} else {
			System.out.println("Sorry artist not available");
			// s1="Sorry artist not available";
			return -1;
		}
	}

	@PutMapping("/orderslist/{oId}")
	public void updateOrder(@RequestBody Order1 order, @PathVariable int oId) {
		orderService.updateOrders(order, oId);
	}

	@DeleteMapping("/orderslist/{oId}")
	public void deleteorder(@PathVariable int oId) {
		orderService.deleteOrders(oId);
	}

	@GetMapping("/orderslistbyaemail/{email}")
	public List<Order1> getOrderByartistEmail(@PathVariable String email) {
		return orderService.getOrderbyAemail(email);
	}

	@GetMapping("/Userorderslistbyuemail/{email}")
	public List<Order1> getOrderByUserEmail(@PathVariable String email) {
		System.out.println("in user order list");
		return orderService.getOrderbyUemail(email);
	}

}
