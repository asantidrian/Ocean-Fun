import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header className="flex-row align-center head">
            <div className="container flex-row justify-space-between-lg  align-center">
                <div>
                    <Link to="/">
                        <h1>OCEAN FUN</h1>
                    </Link>

                </div>
                <div>
                    {Auth.loggedIn() ? (
                        <>
                            <span className="logged">
                                {Auth.getProfile().data.username} is logged in
                            </span>
                            <span className="btn btn-lg btn-light m-2" onClick={logout}>
                                Logout
                            </span>
                        </>
                    ) : (
                        <>
                            <Link className="btn btn-lg btn-info m-2" to="/login">
                                Login
                            </Link>
                            <Link className="btn btn-lg btn-light m-2" to="/signup">
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
