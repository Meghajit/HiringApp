import React from "react";
import { Navbar,Nav,hero,NavbarItems, NavItem,NavbarHeader,NavDropdown, MenuItem } from 'react-bootstrap';
class TitlePage extends React.Component {
    constructor(props) {
   super(props);

  
 }



 render(){
     return (
         <div>
            <div className="hero">
                    <div className="hero-content col-md-9">
                        <div className="hero-bg-wrapper">
                            <div className="hero-bg-mask"></div>
                            <div className="hero-bg-gradient-mask"></div>
                            <div className="hero-bg-front-img" style="background-image: url(img/front-bg-1.png)"></div>
                            <div className="hero-bg-video" id="youtube-video" data-video-id="Lh6o_L78a78"></div>
                        </div>
                        <div className="hero-caption">
                            <h1 className="hero-caption-title">Welcome, My Friend</h1>
                            <p className="hero-caption-text">Lighten up, just enjoy life, smile more, laugh more, and don't get so worked up about things.</p>
                        </div>
                        <div className="hero-footer">
                            <div className="hero-footer-nav">
                                <ul className="hero-footer-navbar">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Help Center</a></li>	
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Terms</a></li>	
                                    <li><a href="#">Privacy Policy</a></li>	
                                    <li><a href="#">Cookies</a></li>	
                                    <li><a href="#">Advertise</a></li>	
                                    <li><a href="#">Marketing</a></li>	
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hero-login col-md-3">
                        <div className="hero-login-tabs">
                            <ul className="nav nav-tabs nav-justified" role="tablist">
                                <li role="presentation" className="active">
                                    <a href="#loginTab" aria-controls="loginTab" role="tab" data-toggle="tab">Sign in</a>
                                </li>
                                <li role="presentation">
                                    <a href="#registerTab" aria-controls="registerTab" role="tab" data-toggle="tab">Sign up</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="loginTab">
                                    <form>
                                        <div className="form-group">
                                            <label for="loginInputEmail">Email address</label>
                                            <i className="fa fa-at"></i>
                                            <input type="text" className="form-control" id="loginInputEmail"></input>
                                        </div>
                                        <div className="form-group">
                                            <label for="loginInputPwd">Password</label>
                                            <i className="fa fa-lock"></i>
                                            <input type="password" className="form-control" id="loginInputPwd"></input>
                                        </div>
                                        <button type="submit" className="btn btn-block btn-default hero-btn">Sign in</button>
                                    </form>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="registerTab">
                                    <form>
                                        <div className="form-group">
                                            <label for="registerInputEmail">Email address</label>
                                            <i className="fa fa-at"></i>
                                            <input type="text" className="form-control" id="registerInputEmail"></input>
                                        </div>
                                        <div className="form-group">
                                            <label for="registerInputPwd">Password</label>
                                            <i className="fa fa-lock"></i>
                                            <input type="password" className="form-control" id="registerInputPwd"></input>
                                        </div>
                                        <div className="form-group">
                                            <label for="registerInputPwdComfirm">Comfirm Password</label>
                                            <i className="fa fa-lock"></i>
                                            <input type="password" className="form-control" id="registerInputPwdComfirm"></input>
                                        </div>
                                        <button type="submit" className="btn btn-block btn-default hero-btn">Sign up</button>
                                    </form>
                                </div>
                            </div>
                        

                        </div>

                    </div>
                </div>
  
  </div>
  );
  }
}

export default TitlePage;