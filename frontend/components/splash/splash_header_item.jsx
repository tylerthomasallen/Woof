import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../searchbar/searchbar_container';
import SessionButtonsContainer from '../session/session_buttons_container';

class SplashHeaderItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formType: "splash"
    };
  }

  render() {
    const { formType } = this.state;

    return (

        <div className="splash-header-container">

          <div className="splash-body">

            <div className="splash-top-nav">
              <div className="splash-top-nav-left">
                <Link to="/" className="nav-items not-signup">Write a Review</Link>
                <Link to="/" className="nav-items not-signup">Events</Link>
                <Link to="/" className="nav-items not-signup">Talk</Link>
              </div>

              <SessionButtonsContainer formType={formType}/>
            </div>

            <div className="splash-header-logo">
              <Link to="/" >
                <img src='https://i.imgur.com/RZ5UvrT.png' />
              </Link>
            </div>

            <SearchBarContainer formType={formType}/>

            <div className="splash-bottom-nav">
              <Link to="/dog/2" className="nav-items ">
                <i className="fas fa-paw black-lab"></i>
                <span>Black Lab</span>
              </Link>
              <Link to="/dog/1" className="nav-items ">
                <i className="fas fa-paw yellow-lab"></i>
                <span>Yellow Lab</span>
              </Link>
              <Link to="/dog/3" className="nav-items siberian-item">
                <i className="fas fa-paw choc-lab"></i>
                <span>Siberian Husky</span>
              </Link>
              <Link to="/dog/4" className="nav-items golden-item">
                <i className="fas fa-paw golden"></i>
                <span>Golden Retriever</span>
              </Link>
            </div>

          </div>
        </div>
    );
  }
}

export default SplashHeaderItem;
