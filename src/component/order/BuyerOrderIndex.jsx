import React, {useEffect, useState} from 'react';
import OrderList from "./OrderList";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {SERVER_LOC} from "../../constant/Data";
import {message} from "antd";

const BuyerOrderIndex = () => {
    const navigate = useNavigate();
    const authenticate = useSelector((state) => state.authenticate);

    const [orders, setOrders] = useState([]);

    const fetchOrders = () => {
        fetch(SERVER_LOC + "/order/user/" + authenticate.userId, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + authenticate.token,
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res=> {
                if(res.status === 200)
                    return res.json();
                else message.error("Error while loading carts.");
            })
            .then(result => {
                setOrders(result);
            });
    };

    useEffect(() => {
        if(authenticate.userId !== 0)
            fetchOrders();

        if(authenticate.token === '' || authenticate.roles[0] !== 'BUYER')
            navigate('/');
    }, [])

    return (
        <>
            <OrderList orders={orders}/>
        </>
    );
}

export default BuyerOrderIndex;