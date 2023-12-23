import {Component} from "react";
import { CartItem } from "../../../model/CartItem";

interface ShoppingCartProps{
    itemList: CartItem[];
}

export class ShoppingCart extends Component<ShoppingCartProps> {

    render() {

        return (
           <>
          <div className="flex justify-center items-center min-h-screen">
            <table className="w-full m-6">
                <tr className="bg-gray-400">
                    <th className="text-[9px] font-normal border-black border-[0.5px] px-1">Id</th>
                    <th className="text-[9px] font-normal border-black border-[0.5px] px-1">Name</th>
                    <th className="text-[9px] font-normal border-black border-[0.5px] px-1">UnitPrice</th>
                    <th className="text-[9px] font-normal border-black border-[0.5px] px-1">Quantity</th>
                    <th className="text-[9px] font-normal border-black border-[0.5px] px-1">TotalPrice</th>
                </tr>
            </table>
          </div>
           </>
        );
    }
}