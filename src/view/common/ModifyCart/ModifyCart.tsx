import {Component} from "react";

interface ModifyCartProps{
    data:any
}

interface ModifyCartState{
    itemCount:number
}

export class ModifyCart extends Component<ModifyCartProps, ModifyCartState> {

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount:0
        }
    }

    render() {
        const itemCount = this.state.itemCount;
        
        return (
            <div className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] text-center border-gray-500 border-[0.5px] bg-red-400">
                <button className="float-left text-[8px] bg-yellow-400 rounded-lg h-3 w-4">-</button>
                <small className=" text-[8px]">{itemCount}</small>
                <button className="float-right text-[8px] bg-yellow-400 rounded-lg h-3 w-4">+</button>
            </div> 
        )
    
    }
}