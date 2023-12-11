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

                {/*gradiant added ==> <div className="p-4 bg-blue-300 bg-gradient-to-r from-blue-900">*/}
                {/*gradiant added ==> <div className="p-4 bg-blue-300 bg-gradient-to-r from-blue-90 to-red-500">*/}
                {/*gradiant added ==> <div className="p-4 bg-blue-300 bg-gradient-to-br from-green-300 to-yellow-300">*/}

                <div className="p-4 bg-blue-300
                            bg-gradient-to-br
                            from-green-300
                            to-yellow-300">
                    <h1 className="text-4xl text-center text-tertiary">
                        This is Navbar!</h1>
                </div>
            </>
        );
    }
}