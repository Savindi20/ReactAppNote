import {Component} from "react";

export class Login extends Component {
    render() {
        return (
            <div className="flex h-screen bg-black">
                <div className="h-auto mt-4 mb-4 pl-9 mx-auto border-gray-400 border-[0.5px] bg-white">
                    <h2 className="text-3xl underline decoration-2 pt-2 pb-2">Sign In</h2>
                    <form className="h-auto p-2 justify-center">
                        <div className="pb-2">
                            <label className="text-[20px]">Your Email</label>
                            <input className="float-right border-[1px] border-black" type="email"/>
                        </div>
                        <div className="pb-2">
                            <label className="text-[20px]">Password</label>
                            <input className="float-right border-[1px] border-black" type="text"/>
                        </div>
                        <div className="mt-2">
                            <button className="mt-5 p-5 bg-green-600 text-[20px] w-full" type="button">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}