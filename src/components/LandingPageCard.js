import React from "react";
import NewRequest from "./NewRequest"
import CardCss from "../customCss/CardCss.css";


class LandingPageCard extends React.Component{
  
      render()
      {
          return(
            <div className="col-xs-6" >
              <div className="card">
                <div className="card-header">
                  {this.props.headername}
                </div>
                <div className="card-block">
                  <h3 className="card-title">{this.props.cardtitle}</h3>
                  <p className="card-text">{this.props.cardtext}</p>
                  <a href={this.props.link}>  <button type="button" className="btn btn-primary btn-lg btn-block">{this.props.buttontext}</button></a>
                </div>
              </div>
            </div>
          )}
        }

                    
export default LandingPageCard;