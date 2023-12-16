import {Component} from "react";

export class About extends Component {
    render() {
        return (
            <div className="flex">
                <div className="h-auto pt-5">
                    <h1 className="text-3xl text-green-400 underline decoration-2">
                        This is About Component!
                    </h1>

                    <p className="text-12pxl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aperiam deleniti
                        inventore iusto officia reiciendis. Deleniti exercitationem illum maxime quia velit voluptatem.
                        Atque consectetur explicabo iure libero, nostrum quisquam!
                    </p>
                </div>
            </div>
        );
    }
}