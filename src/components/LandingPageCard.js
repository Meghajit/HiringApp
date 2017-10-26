import React from "react";


class LandingPageCard extends React.Component{
    constructor(props) {
        super(props);
      }

      render()
      {
          return(
            <div class="col-xs-6">
              <div class="card">
                <div class="card-header">
                  {this.props.headername}
                </div>
                <div class="card-block">
                  <h3 class="card-title">{this.props.cardtitle}</h3>
                  <p class="card-text">{this.props.cardtext}</p>
                  <a href={this.props.link}>  <button type="button" class="btn btn-primary btn-lg btn-block">{this.props.buttontext}</button></a>
                </div>
              </div>
            </div>
          )}
        }

                    
export default LandingPageCard;