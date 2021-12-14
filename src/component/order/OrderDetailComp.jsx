import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {SERVER_LOC} from "../../constant/Data";
import {Button, Descriptions, message} from "antd";
import {useSelector} from "react-redux";
import CartItem from "../cart/CartItem";
import './style.css';

const OrderDetailComp = () => {
    const navigate = useNavigate();
    const param = useParams();
    const authenticate = useSelector(state => state.authenticate);
    const [orderDetail, setOrderDetail] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const fetchOrderDetail = () => {
        fetch(SERVER_LOC + "/order/" + param.id, {
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
                else message.error("Error while loading orders.");
            })
            .then(result => {
                setOrderDetail(result);
            });
    };

    const cancelOrder = () => {
        fetch(SERVER_LOC + "/order/" + param.id + "/cancel", {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + authenticate.token,
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res=> res.json())
            .then(result => {
                message.info(result.message);
                navigate('/order-history');
            });
    };

    useEffect(() => {
        fetchOrderDetail();
    }, [])

    return (
        <>
            {
                orderDetail !== null ?
                    <>
                        <>
                            {
                                orderDetail.orderStatus.status === 'NEW' ?
                                    <div className='cancel-btn'>
                                        <Button type="danger" size="large" onClick={cancelOrder}>Cancel Order</Button>
                                    </div> : <></>
                            }

                            <Descriptions title="User Info">
                                <Descriptions.Item label="First Name">{orderDetail.user.firstname}</Descriptions.Item>
                                <Descriptions.Item label="Middle Name">{orderDetail.user.middlename}</Descriptions.Item>
                                <Descriptions.Item label="Last Name">{orderDetail.user.lastname}</Descriptions.Item>
                                <Descriptions.Item label="Username">{orderDetail.user.username}</Descriptions.Item>
                            </Descriptions>

                            <Descriptions title="Billing Address">
                                <Descriptions.Item label="Address">{orderDetail.user.billingAddress.address}</Descriptions.Item>
                                <Descriptions.Item label="City">{orderDetail.user.billingAddress.city}</Descriptions.Item>
                                <Descriptions.Item label="State">{orderDetail.user.billingAddress.state}</Descriptions.Item>
                                <Descriptions.Item label="Contact No">{orderDetail.user.billingAddress.contactNo}</Descriptions.Item>
                            </Descriptions>

                            <Descriptions title="Shipping Address">
                                <Descriptions.Item label="Address">{orderDetail.shippingAddress.address}</Descriptions.Item>
                                <Descriptions.Item label="City">{orderDetail.shippingAddress.city}</Descriptions.Item>
                                <Descriptions.Item label="State">{orderDetail.shippingAddress.state}</Descriptions.Item>
                                <Descriptions.Item label="Contact No">{orderDetail.shippingAddress.contactNo}</Descriptions.Item>
                            </Descriptions>

                            <Descriptions title="Order Status">
                                <Descriptions.Item label="Order Status">{orderDetail.orderStatus.status}</Descriptions.Item>
                            </Descriptions>

                            <Descriptions title="Invoice">
                                <Descriptions.Item label="Invoice Status">{orderDetail.invoice.invoiceStatus.status}</Descriptions.Item>
                                <Descriptions.Item label="Payment Type">{orderDetail.invoice.paymentDetail.paymentType}</Descriptions.Item>
                                <Descriptions.Item label="Card No">{orderDetail.invoice.paymentDetail.cardNo}</Descriptions.Item>
                                <Descriptions.Item label="Invoice Date">{orderDetail.invoice.invoiceDate}</Descriptions.Item>
                            </Descriptions>

                            <h2 style={{fontWeight:800, fontSize:25}}>Items</h2>
                            <div className="cart-list-div">
                                {orderDetail.orderItems.map(item => <CartItem key={item.id} data={item['product']}
                                                                              quantity={item.quantity}
                                                                              showDel={false}/>)}
                            </div>

                        </>
                    </> :
                    <></>
            }
        </>
    );
}

export default OrderDetailComp;