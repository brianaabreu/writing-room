import React, {useState} from 'react';
import HeaderImg from '../../img/headerimg.png';
import '../../styles.css';
import insta from '../../img/IG.svg'
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";
import pinterest from "../../img/pinterest.png";
import AllPosts from './AllPosts';
import { Link } from "react-router-dom";

const AllPostsTemp = () => {
  
  return (
      <div style={{textAlign:'center', marginTop:'-25px', marginRight:'-7px', marginLeft:'-7px', textAlign: '-webkit-center'}} >
            <img style={{width:'100%', alignItems:'center', marginBottom: '25px'}} src={HeaderImg} />
                <div className="navDiv"  style={{marginBottom: '50px'}}>
                    <nav className="navBar">
                        <nav style={{textAlign:'left', marginBottom: '-30px',marginTop: '15px', marginLeft: '20px'}} className="linkButtons">
                            <a className="navButton"><img src={insta} alt="" style={{width:'13px'}} /> </a>
                            <a className="navButton"><img src={facebook} alt="" style={{width:'13px'}}  /> </a>
                            <a className="navButton"><img src={twitter} alt="" style={{width:'13px'}} /> </a>
                            <a className="navButton"><img src={pinterest} alt="" style={{width:'13px'}} /> </a>
                        </nav>
                        <Link to="/"><button style={{backgroundColor:'none', outline:'none', border:'none'}} className="navButton">Home</button></Link> 
                        <Link to="/contact"><button className="navButton">Contact</button></Link> 
                        <Link to ="/allposts"><button className="navButton">All Posts</button></Link> 
                    </nav>
        </div>
        <AllPosts />
        </div>
    
    )
  
};

export default AllPostsTemp;