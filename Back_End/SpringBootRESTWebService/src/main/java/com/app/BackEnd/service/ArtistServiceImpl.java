package com.app.BackEnd.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.BackEnd.dao.ArtistDao;
import com.app.BackEnd.model.AdateAvail;
import com.app.BackEnd.model.Artist;


@Service
public class ArtistServiceImpl implements ArtistService{

	@Autowired
	private ArtistDao adao;

	@Override
	public List<Artist> getAllArtists() {

		return adao.findAll();
	}

	@SuppressWarnings("deprecation")
	@Override
	public Artist getArtistById(String email) {
		
		return adao.getOne(email);
	}

	@Override
	public void addArtist(Artist artist) {
		
		adao.save(artist);
	}

	@Override
	public void deleteArtist(String email) {
		
		adao.deleteById(email);

	}

	
	public void updateArtist(String name, String gender, String genre, String email) {
		adao.updateArtist(name, gender, genre, email);
	}

	@Override
	public String validate(String email, String pwd) {

		List<Artist> artists = adao.login(email, pwd);
		System.out.println(artists);

		if (artists.isEmpty()) {
			return "login failed";
		}

		else
			return email;

	}

	@Override
	public List<AdateAvail> getRelevantArtist(Date date, int fees, String genre, String city) {

		List<AdateAvail> relartists = adao.checkSearch(date, fees, genre, city);

		System.out.println(relartists);

		if (relartists.isEmpty()) {
			System.out.println("No artist found");
			return relartists;
		}

		else
			return relartists;
	}

	@Override
	public List<Artist> getArtistBycat(String cat) {

		List<Artist> artistcat = adao.artistByCat(cat);
		return artistcat;
	}


}
