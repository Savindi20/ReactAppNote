import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import {Home} from "../../pages/Home/Home";

export class MainContent extends Component {
    render() {
        return (
            <div className="pt-28 pb-28 mx-auto bg-green-100">

                {/*<h1 className="text-4xl text-center text-tertiary">*/}
                {/*    This is Main Content!</h1>*/}
                {/*<div className="h-20 w-20 text-center p-1 bg-yellow-400*/}
                {/*                rotate-12 shadow-gray-900 shadow-xl*/}
                {/*                hover:shadow-red-500*/}
                {/*                !cursor-pointer*/}
                {/*                min-h-screen max-h-screen*/}
                {/*                mx-auto">*/}
                {/*    Height <br/>& <br/> Width*/}
                {/*</div>*/}

                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </div>

        );
    }
}