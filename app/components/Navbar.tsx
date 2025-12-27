import React from 'react';
import {Link} from "react-router";

function Navbar() {
    return (
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
            <Link className="navbar-brand" to="/">
                <p className={"text-2xl font-bold text-gradient"}>Resulyzer</p>
            </Link>
            <Link className={"primary-button w-fit"} to={"/upload"}>Upload Resume</Link>
        </nav>
    );
}

export default Navbar;