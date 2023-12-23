import {Component} from "react";
import { CartItem } from "../../../model/CartItem";

interface ModifyCartProps{
    data:any
}

interface ModifyCartState{
    itemCount:number
}

export class ModifyCart extends Component<ModifyCartProps, ModifyCartState> {

    public static ItemsList:CartItem[] = [];

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount:0
        }
    }

    componentDidMount(): void {
        const {itemCount} = this.state;

        if(this.props.data.isAdded){
            if(!ModifyCart.ItemsList.find(item => item.product.id === this.props.data.Product.id)){
            ModifyCart.ItemsList.push({product:this.props.data.Product, itemCount: itemCount})
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any): void {

        let {itemCount} = this.state
        let item = ModifyCart.ItemsList.find(item => item.product.id === this.props.data.product.id)

        //@ts-ignore
        let index = ModifyCart.ItemsList.indexOf(item);
        ModifyCart.ItemsList.splice(index);
        ModifyCart.ItemsList.push({product:this.props.data.Product, itemCount: this.state.itemCount})
    }

    render() {
        const itemCount = this.state.itemCount;

        const onIncreaseItemCount = () => {
            this.setState({itemCount:itemCount+1})
        }

        const onDecreaseItemCount = () => {
            if(itemCount>0){
                this.setState({itemCount:itemCount-1})
            }
            else{
                alert("Item count cannot be less than 0")
            }
        }

        return (
            <div className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] text-center border-gray-500 border-[0.5px] bg-red-400">
                <button className="float-left text-[8px] bg-yellow-400 rounded-lg h-3 w-4" onClick={onDecreaseItemCount}>-</button>
                <small className=" text-[8px]">{itemCount}</small>
                <button className="float-right text-[8px] bg-yellow-400 rounded-lg h-3 w-4" onClick={onIncreaseItemCount}>+</button>
            </div> 
        )
    
    }
}