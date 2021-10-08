import React from 'react';
import http from "../http"

class Admin extends React.Component {


    createUser(e) {
        e.preventDefault();
        const form = document.getElementById("createUser");
        const v = parseInt(form.Validity.value);
        const userName = form.Username.value;
        const password = form.Password.value;
        const today = new Date();
        var Validity = new Date();
        Validity.setDate(today.getDate() + v);
        http.post('/addUser', JSON.stringify({
            userName: userName,
            password: password,
            validity: Validity
        }))
            .then(function (response) {
                if (response.status === 200)
                    alert('User created successfully!')
            })
            .catch(function (error) {
                alert('Username already exists!')
            });
    }

    render() {
        return (
            <div>
                <header className="Admin">
                    <h1>ADMIN PANEL</h1>
                    <div className="card" >
                        <form onSubmit={this.createUser} id="createUser">
                            <div className="mb-3">
                                <label htmlFor="Username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="Username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="Password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Validity" className="form-label">Validity(in days)</label>
                                <input type="text" className="form-control" id="Validity" />
                            </div>
                            <button type="submit" className="btn btn-primary">Create User</button>
                        </form>
                    </div>
                </header>
            </div>
        );
    }

}

export default Admin;