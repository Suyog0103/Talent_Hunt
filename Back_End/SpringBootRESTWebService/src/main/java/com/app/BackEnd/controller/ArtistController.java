package com.app.BackEnd.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.app.BackEnd.model.AdateAvail;
import com.app.BackEnd.model.Artist;
import com.app.BackEnd.service.AdateAvailService;
import com.app.BackEnd.service.ArtistService;



@CrossOrigin("*")
@RestController
public class ArtistController {
	@Autowired
	ArtistService artistService;

	@Autowired
	AdateAvailService adateService;


	@GetMapping("/artistslist")
	public List<Artist> getallArtists() {

		return artistService.getAllArtists();
	}

	@GetMapping("/artistslist/{email}")
	public Artist getArtistById(@PathVariable String email) {
		return artistService.getArtistById(email);
	}

	@PostMapping(value = "/artistslist")
	public void addArtist(@RequestBody Artist artist) {
		artistService.addArtist(artist);
		addDate("1-1-2023", "1-1-2023",10000,artist.getArtistEmail());
	}

	@PutMapping("/artistslist/{name}/{gender}/{genre}/{fromdate}/{fees}/{email}")
	public void updateArtist(@PathVariable String name, @PathVariable String gender, @PathVariable String genre, @PathVariable String fromdate,
			@PathVariable double fees, @PathVariable String email) {
		artistService.updateArtist(name, gender, genre, email);
		adateService.updateAdate(fromdate, fees, email);
	}

	@DeleteMapping("/artistslist/{email}")
	public void deleteArtist(@PathVariable String email) {
		artistService.deleteArtist(email);
	}

	@PostMapping("/adatelist/{fromdate}/{todate}/{fees}/{email}")
	public void addDate(@PathVariable String fromdate, @PathVariable String todate, @PathVariable int fees,
			@PathVariable String email) {
//		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
//		Date date = formatter.parse(todate);
//		Date date2 = formatter.parse(fromdate);
//		System.out.println(date2);
//		System.out.println(date);
//		if (fromdate.equals(todate)) {
//			System.out.println("Invalid to-date,must be after from-date!!!");
//		} else
		// System.out.println(date1);
//		{
			// System.out.println(fees);
			adateService.addArtistDate(fromdate, todate, fees, email);
//		}
	}
	
	@GetMapping("/getadatebyemail/{email}")
	public AdateAvail getAdateAvailById(@PathVariable String email) {

		return adateService.getAdateAvailById(email);
		
	}

	@PostMapping("/Alogin")
	public String login(@RequestBody Artist a) {
		
		return artistService.validate(a.getArtistEmail(), a.getArtistPassword());

	}

//	@GetMapping("/searchArtistsBydate")
//	public List<AdateAvail> getRelArtists(@RequestBody AdateAvail dateobject) {
//		JSONObject json = (JSONObject) JSONSerializer.toJSON(dateobject);
//		String date1 = json.getString("date");
//		String fees1 = json.getString("fees");
//		String genre = json.getString("genre");
//		String city = json.getString("city");
//		int fees = Integer.parseInt(fees1);
//
//		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd");
//		Date date = formatter.parse(date1);
//		System.out.println(date);
//		System.out.println(date1);
//		System.out.println(fees);
//		return artistService.getRelevantArtist(date, fees, genre, city);
//	}

	@RequestMapping("/artistscategory/{cat}")                     //use get while retrieval
	public List<Artist> getArtistBycategory(@PathVariable String cat) {

		return artistService.getArtistBycat(cat);
	}
	
	@RequestMapping("/artistsAdateBycategory/{cat}")                     //use get while retrieval
	public List<AdateAvail> getArtistAdateBycategory(@PathVariable String cat) {

		return adateService.getAdateBycat(cat);
	}

}
