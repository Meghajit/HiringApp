import React from "react";
import NewRequest from "./NewRequest"


class LandingPageCard extends React.Component{
  
      render()
      {
          return(
            <div className="col-xs-6">
              <div className="card">
                <div className="card-header">
                  {this.props.headername}
                </div>
                <div className="card-block">
                  <h3 className="card-title">{this.props.cardtitle}</h3>
                  <p className="card-text">{this.props.cardtext}</p>
                  <a href="#">  <button type="button" onClick={this.props.navNewRequest} className="btn btn-primary btn-lg btn-block">{this.props.buttontext}</button></a>
                </div>
              </div>
            </div>
          )}
        }

                    
export default LandingPageCard;