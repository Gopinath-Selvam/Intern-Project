import React from 'react';
import './styles.css';
import http from '../http';

class User extends React.Component {

  checkValidity(event) {
    event.preventDefault();
    const form = document.getElementById("user");
    const userName = form.Username.value;
    const password = form.Password.value;
    http.post('/user', JSON.stringify({
      userName: userName,
      password: password
    }))
      .then(function (response) {
        if (response.status === 200) {
          alert(response.data.validity);
        }
      })
      .catch(function (error) {
        alert(error)
      });
  }

  render() {
    return (
      <div>
        <header className="User">
          <h1>USER LOGIN</h1>
          <form onSubmit={this.checkValidity} id="user">
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">Username</label>
              <input type="text" className="form-control" id="Username" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">Password</label>
              <input type="password" className="form-control" id="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </header>
      </div>
    );
  }

}

export default User;