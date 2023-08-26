package com.app.BackEnd.service;

import java.util.List;

import com.app.BackEnd.model.AdateAvail;
import com.app.BackEnd.model.Artist;

public interface AdateAvailService {
	void addArtistDate(String fromdate,String todate,int fees,String email);

	AdateAvail getAdateAvailById(String email);

	List<AdateAvail> getAdateBycat(String cat);
}
