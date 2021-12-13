import React, {useEffect, useState} from "react";
import './style.css';
import ItemCard from "./ItemCard.jsx";
import {SERVER_LOC} from "../../constant/Data";
import axios from "axios";
import {message} from "antd";

const ItemList = (props) => {
    const [items, setItems] = useState([]);

    const fetchItems = () => {
        axios.get(SERVER_LOC + "/product")
            .then(res => {
                if(res.status === 200){
                    setItems(res.data);
                }
                else{
                    message.error("Error while loading items");
                }
            })
    };

    useEffect(() => {
        fetchItems();
    }, [])

    return (
        <div className="item-list-div">
            {items.map(item => <ItemCard key={item.id} data={item}/>)}
        </div>
    )
};

export default ItemList;