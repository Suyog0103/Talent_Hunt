package com.app.BackEnd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.BackEnd.dao.AdateAvailDao;
import com.app.BackEnd.model.AdateAvail;
import com.app.BackEnd.model.Artist;
import com.app.BackEnd.model.Order1;



@Service
public class AdateAvailServiceImpl implements AdateAvailService{
	@Autowired
	private AdateAvailDao adateDao;

	@Override
	public void addArtistDate(String fromdate, String todate, int fees, String email) {
		adateDao.addArtistDate(fromdate, todate, fees, email);
	}

	
	
	@Override
	public AdateAvail getAdateAvailById(String email) {
		
		return adateDao.getOne(email);
	}



	@Override
	public List<AdateAvail> getAdateBycat(String cat) {
		
		return adateDao.getAdateBycat(cat);
	}



	@Override
	public void updateAdate(String fromdate, double fees, String email) {
		adateDao.updateAdate(fromdate, fees, email);
		
	}
}
