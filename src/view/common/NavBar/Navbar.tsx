import {Component} from "react";
import logo from "../../images/download.jpeg";
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <>
                {/*<div className="p-2 bg-blue-950*/}
                {/* b=bg-gradient-to-r from-blue-200">
                <h1 className="text-2xl text-center text-tertiary">This is Nav Bar</h1>
                </div>*/}

                {/*gradiant added ==> <div className="p-4 bg-blue-300 bg-gradient-to-r from-blue-900">*/}
                {/*gradiant added ==> <div className="p-4 bg-blue-300 bg-gradient-to-r from-blue-90 to-red-500">*/}
                {/*gradiant added ==> <div className="p-4 bg-blue-300 bg-gradient-to-br from-green-300 to-yellow-300">*/}
                {/*Opacity added ==> <div className="bg-blue-300/20">*/}
                {/*height width added ==> <div className="h-20 w-20">*/}
                {/*height width comparing with screen size ==> <div className="h-20 w-1/3">*/}
                {/*shadow added ==> <div className="rotate-12 shadow-gray-900 shadow-xl hover:shadow-red-500">*/}
                {/*hover with cursor pointer ==> <"cursor-pointer">*/}
                {/*min max height added ==> <"min-h-screen max-h-screen">*/}
                {/*mx auto added ==> <"mx-auto">*/}
                {/*via added ==> <"bg-blue-300 bg-gradient-to-br from-green-300 via-blue-700 to-yellow-300">*/}

                <div className="p-2 bg-[#444544] flex justify-between">

                    <Link to="/">
                        <div className="flex">
                            <h1 className="text-1xl text-secondary">
                                Organic Shop</h1>
                            <img className="h-5 w-5 ml-1 pt-1" src={logo}
                                 alt=""/>
                        </div>
                    </Link>

                    <ul className="list-none flex mt-1">
                        <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>

                    <button className="text-[8px] text-[#e6f0e6]
                                   bg-green-400 pl-3 pr-3
                                   hover:text-tertiary"
                            onClick={this.onButtonClick}>
                        Sign In
                    </button>
                </div>
            </>
        );
    }

    private onButtonClick = () => {
        alert("Button Clicked!")
    }
}