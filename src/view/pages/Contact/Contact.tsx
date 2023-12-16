import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <div className="flex">
                <div className="h-auto pt-5 pl-10 mx-auto">
                    <div className="p-2">
                        <h1 className="text-4xl text-green-400 underline decoration-2">
                            This is Contact Component!</h1>
                        <p className="pb-3 text-[4px]">
                            lorem
                        </p>
                    </div>
                    <form className="h-auto p-2 justify-center">
                        <div className="pb-2">
                            <label className="text-[20px]">Your Email</label>
                            <input className="float-right border-[1px] border-green-200" type="email"/>
                        </div>
                        <div className="pb-2">
                            <label className="text-[20px]">Your Subject</label>
                            <input className="float-right border-[1px] border-green-200" type="text"/>
                        </div>
                        <div className="pb-2">
                            <label className="text-[20px]">Your Message</label>
                            <textarea className="float-right border-[1px] border-green-200" />
                        </div>
                        <div className="mt-2">
                            <button className="mt-5 p-5 bg-green-600 text-[20px]" type="button">
                                send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}