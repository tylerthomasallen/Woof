import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    const { errors } = this.props;
    return (
      <ul className="session-form-errors">
        {errors.map((error, idx) => (
          <li key={`${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  name() {
    const { formType } = this.props;
    if (formType === 'Sign Up') {
      return (
      <div>

        <div className="session-form-input-names">
          <input type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            placeholder="First Name"
            className="first-name"
          />

          <input type="text"
            value={this.state.last_name}
            onChange={this.update('last_name')}
            placeholder="Last Name"
           />
         </div>
        </div>
      );
    }
  }

  zipCode() {
    const { formType } = this.props;
    if (formType === 'Sign Up') {
      return (
        <input type="text"
          value={this.state.zipcode}
          onChange={this.update('zipcode')}
          placeholder="ZIP Code"
          className="zip-code"

        />
      );
    }
  }

  forgotPassword() {
    const { formType } = this.props;
    if (formType === 'Log In') {
      return (
        <a className="forgot-password">Forgot Password?</a>
      );
    }
  }

  month() {
    const months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
    return (
      <select>
        <option value="" selected disabled hidden>Month</option>
        {months.map((month, idx) => (
          <option key={idx} value={idx + 1}>{month}</option>
        ))}
      </select>
    );
  }

  day() {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return (
      <select className="birthday-select-middle">
        <option value="" selected disabled hidden>Day</option>
        {days.map((day, idx) => (
          <option key={idx} value={day}>{day}</option>
        ))}
      </select>
    );
  }

  year() {
    const years = [];
    for (let i = 1901; i <= 2018; i++) {
      years.push(i);
    }
    return (
      <select>
        <option value="" selected disabled hidden>Year</option>
        {years.map((year, idx) => (
          <option key={idx} value={year}>{year}</option>
        ))}
      </select>
    );
  }

  birthday() {
    const { formType } = this.props;
    if (formType === 'Sign Up') {
      return (
        <div>
          <div className="birthday-text">
            <p>Birthday</p>
            <p className="optional">Optional</p>
          </div>

            <div className="birthday-dropdown">
              {this.month()}
              {this.day()}
              {this.year()}
            </div>
        </div>
      );
    }
  }

  topMessage() {
    const { navLink, navLinkMessage, formType } = this.props;
    if (formType === 'Sign Up') {
      return (
        <div className="session-form-left-text">
          <p>{navLinkMessage}</p>
        </div>
      );
    } else {
      return (
        <div className="session-form-left-text">
          <p>{navLinkMessage}</p>
          <p className="session-form-left-button">{navLink}</p>
        </div>
      );
    }
  }

  render() {
    const { formType, navLink, navLinkMessage } = this.props;
    let legalMessage;
    formType === "Sign Up" ? legalMessage = "signing up" : legalMessage = "logging in";
      return (
        <div className="session-form">
          <header>
            <img
              src="https://cdn.merchantmaverick.com/wp-content/uploads/2018/05/yelp-logo-transparent-background-4.png">
            </img>
          </header>

          {this.renderErrors()}

          <div className="session-form-body">

            <div className="session-form-left">
              <h3>{formType} to Woof</h3>

              {this.topMessage()}

              <div className="legal-copy">
                <p className="legal-copy-p">By {legalMessage}, you agree to Woof’s</p>
                <a> Terms of Service </a>
                <p className="legal-copy-p">and</p>
                <a> Privacy Policy</a>
              </div>


              <div className="session-form-left-facebook session-form-social">
                <p className="fa fa-facebook"></p>
                <p>{formType} with Facebook</p>
              </div>

              <div className="session-form-left-google session-form-social">
                <img src="https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/cae242fd3929/assets/img/structural/24x24_google_rainbow.png">
                </img>
                <p>{formType} with Google</p>
              </div>

              <div className="login-seperator">
                  <span className="or-line"></span>
                  <span className="or-text">OR</span>
                  <span className="or-line"></span>
              </div>

              <form onSubmit={this.handleSubmit}>
                {this.name()}
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />

                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />

                {this.zipCode()}
                {this.birthday()}
                {this.forgotPassword()}

                <input type="submit" value={formType} />

              </form>

              <div className="session-form-left-text bottom">
                <p>{navLinkMessage}</p>
                <p className="session-form-left-button bottom">{navLink}</p>
              </div>

            </div>


            <div className="session-form-right">
              <img
                src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png">
              </img>
            </div>


            </div>


          </div>
      );
    }
  }

  export default SessionForm;
