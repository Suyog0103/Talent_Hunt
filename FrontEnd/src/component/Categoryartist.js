import React from 'react'
import img1 from '../list-img3/elizeu-dias-aZ3qiq1eTRk-unsplash.jpg'
import img2 from '../list-img3/ace-1869825_1280.jpg'
import img3 from '../list-img3/caught-in-joy-PukZSAi_K5o-unsplash.jpg'
import img4 from '../list-img3/8282529.jpg'
import img5 from '../list-img3/elizeu-dias-aZ3qiq1eTRk-unsplash.jpg'
import img6 from '../list-img3/pexels-gaby-tenda-2717073.jpg'
import img7 from '../list-img3/ardian-lumi-6Woj_wozqmA-unsplash.jpg'
import img8 from '../list-img3/steve-harrris-aTuAKskNy7Y-unsplash.jpg'
import img9 from '../list-img3/diego-ph-fIq0tET6llw-unsplash.jpg'
import '../css/Categoryartist.css'
import { Link } from 'react-router-dom'

const Categoryartist = () => {
    
    return (
        <>
            
 <div class="container">
   <form>
   
    <div class="row align-center offset-1 ">
      <p class="post-head-title">CATEGORIES</p>
    </div>
   <br></br>
    <div class="row align-center  offset-1 ">
     <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item">
         <div>
         <Link to="/singerlist" >
            <img src={img1}  class="post-img"/></Link>
         </div>

         <div class="post-title">
           <span>SINGER</span>
         </div>
       <div class="post-icon">
         <i class="fas fa-music"></i>
       </div>
     </div>
     <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item">
     
       <div>
       <Link to="/magitianlist" >
            <img src={img2} class="post-img"/></Link>
       </div>
       <div class="post-title">
         <span>MAGICIAN</span>
       </div>
       <div class="post-icon">
         <i class="fas fa-hat-wizard"></i>
       </div>
     </div>
     <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item">
       <div>
       <Link to="/instrumentalist" >
            <img src={img3} class="post-img"/></Link>
       </div>
       <div class="post-title">
           <span>INSTRUMENTALIST</span>
       </div>
       <div class="post-icon">
           <i class="fas fa-guitar"></i>
       </div>
     </div>
   </div>

  

   <div class="row align-center offset-1">
     <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item">
         <div>
         <Link to="/anchor" >
            <img src={img4}  class="post-img"/></Link>
         </div>
         <div class="post-title">
           <span>ANCHOR/EMCC</span>
         </div>
       <div class="post-icon">
         <i class="fas fa-microphone"></i>
       </div>
     </div>
     <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item">
       <div>
          <img src={img6}  onClick="showByCategory()" class="post-img"/>
       </div>
       <div class="post-title">
         <span>DJ</span>
       </div>
       <div class="post-icon">
         <i class="fas fa-headset"></i>
       </div>
     </div>
     <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item">
       <div>
        <img src={img5}  onClick="showByCategory()" class="post-img"/>
       </div>
       <div class="post-title">
           <span>WRITER/POET</span>
       </div>
       <div class="post-icon">
           <i class="fas fa-pen-fancy"></i>
       </div>
     </div>
   </div>
   
  

     <div class="row align-center  offset-1 ">
       <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item" >
           <div >
             <img src={img7}  ngModel="dancer" name="dancer"  value="dancer" onClick="showByCategory(dancer)" class="post-img"/>
           
            </div>
           <div class="post-title">
             <a  >DANCER</a>
           </div>
         <div class="post-icon">
           <i class="fas fa-child"></i>
         </div>
       </div>
       <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item">
         <div>
            <img src={img8} ngModel="comedian" name="comedian"   onClick="showByCategory(comedian)" class="post-img"/>
         </div>
         <div class="post-title">
           <span>COMEDIAN</span>
         </div>
         <div class="post-icon">
           <i class="fas fa-laugh-beam"></i>
         </div>
       </div>
       <div class="col-md-3 col-lg-4 col-xl-3 mb-4 post-item">
         <div>
            <img src={img9} onClick="showByCategory()"  class="post-img"/>
         </div>
         <div class="post-title">
             <span>OTHER</span>
         </div>
         <div class="post-icon">
             <i class="fas fa-angle-right"></i>
         </div>
       </div>
       </div>

</form> 
     </div>
        </>
    )
}

export default Categoryartist
