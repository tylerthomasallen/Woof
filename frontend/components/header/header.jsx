import React from 'react';
import SearchBar from '../searchbar/searchbar';
import SessionButtonsContainer from '../session/session_buttons_container';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: 'show'
    };
  }

  render() {
    const { formType } = this.state;
    return (
      <div className="session-form-header">
        <div className="header-logo">
          <Link to="/" className="header-logo-link">
            <img src='https://i.imgur.com/RZ5UvrT.png' />
          </Link>
        </div>
        <SearchBar formType={formType} />
        <SessionButtonsContainer formType={formType}/>
      </div>
    );
  }
}

export default Header;