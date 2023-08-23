
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import UserService from '../Service/UserService'
import UserService from '../services/UserService';
class SingersList extends Component {
constructor(props){
    super(props);
    this.state={
        singerarr:[]
        // searcharr:[],
        // searchtext:""
    }

}
//initialize array 
componentDidMount(){
    this.fetchdata()
}

fetchdata(){
  let u = "singer"
    UserService.getAllsingers(u)
    .then((response)=>{
        this.setState({...this.state,singerarr:[...response.data]})
    }).catch()
}
booked(booked_date,artistfees,artist_email){
  const uemail = localStorage.getItem("userEmail");
  console.log("in singerlist printing userEmail"+uemail)
   UserService.addOrder(booked_date, artistfees,artist_email, uemail)
   .then((response)=>{
        this.fetchdata()
   })
   .catch()
}

  render() {
    return (
      <div>
      
  {/* <input type="text" name="search" id="search"></input>&nbsp;&nbsp;&nbsp;
  <Link to='/form'>
     <button type="button" name="btn" id="btn" className="btn btn-success">Add new product</button>  
  </Link>  */}
  <table className="table table-striped">
    <thead>
      <tr>
      <th scope="col">index</th>
        <th scope="col">singer Id</th>
        <th scope="col">Singer name</th>
        <th scope="col">Date</th>
        <th scope="col">Price</th>
        {/* <th scope="col">action</th> */}
      </tr>
    </thead>
    <tbody>
    {
        this.state.singerarr.map(( singer, index)=>
            <tr key={singer.id}>
                <th>{index+1}</th>
                <th scope="row">{singer.id}</th>
                <td>{singer.artist.artistName}</td>
                <td>{singer.fromDate}</td>
                <td>{singer.artistfees}</td>
                <td>

                <button type="button" name="btn" id="btn" className="btn btn-danger" onClick={()=>this.booked(singer.fromdate, singer.artistfees,singer.artist.artistEmail)}>book</button> &nbsp;&nbsp;&nbsp; 
                {/* <Link to={`/edit/${product.pid}`}>
                <button type="button" name="btn" id="btn" className="btn btn-primary">edit</button> &nbsp;&nbsp;&nbsp; 
                </Link>
                <button type="button" name="btn" id="btn" className="btn btn-info">view</button>  */}
                </td>
            </tr>
        )
    }
      
      
    </tbody>
  </table>
</div>
    )
  }
}

export default SingersList;