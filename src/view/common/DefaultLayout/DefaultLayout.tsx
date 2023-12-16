import React, {Component} from "react";
import {Navbar} from "../NavBar/Navbar";
import {MainContent} from "../MainContent/MainContent";
import {Footer} from "../Fotter/Footer";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <MainContent></MainContent>
                <Footer></Footer>
            </>
        );
    }
}