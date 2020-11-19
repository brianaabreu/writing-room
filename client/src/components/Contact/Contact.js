import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import HeaderImg from '../../img/headerimg.png';
import '../../styles.css';
import insta from '../../img/IG.svg'
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";
import pinterest from "../../img/pinterest.png";
import { Link } from "react-router-dom";



const Contact = () => {

    return (
        <div>
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
            <div style={{ paddingTop: '50px', paddingBottom: '50px', textAlign: '-webkit-center', width: '50%', fontFamily:'Times New Roman' }}>
                <Form className="contactWrapper" style={{marginBottom:'100px'}} >
                    <h1 style={{ color: 'black' }}>Contact Us</h1>
                    <FormGroup>
                        <Label for="Name">Name</Label>
                        <Input type="name" name="name" id="name" placeholder="Whats your name?" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input type="textarea" name="text" id="exampleText" placeholder="Your message here" />
                    </FormGroup>
                        <Button style={{ marginTop: '25px', width: '50%' }}>Submit</Button>
                    </Form>
            </div>
            </div >
            </div>
    )
}

export default Contact;