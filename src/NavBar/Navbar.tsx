import {Component} from "react";
import logo from "../assets/download.jpeg";

export class Navbar extends Component {
    render() {
        return (
            <>
                {/*<div className="p-2 bg-blue-950*/}
                {/* b=bg-gradient-to-r from-blue-200">
                <h1 className="text-2xl text-center text-tertiary">This is Nav Bar</h1>
                </div>*/}

                <div className="p-2 bg-[#4444544] flex">
                    <h1 className="text-1xl text-secondary">Organic shop</h1>
                    <img className='h-10 w-10 ml-1 pt-1' src={logo} alt=''/>
                </div>
            </>
        );
    }
}