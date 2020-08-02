import React from "react";
import "./index.css";

export default function Header(){


    return (
        <header>
            <nav>
                <div className="nav-wrapper cus-nav-style">
                    <a href="/home" className="brand-logo">ParTrac Admin</a>
                </div>
            </nav>
        </header>
    );
}