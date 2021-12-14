import React from 'react';
import NavBar from "../../component/navbar/NavBar";
import FooterInd from "../../component/footer/FooterInd";
import {Layout} from "antd";
import BuyerOrderIndex from "../../component/order/BuyerOrderIndex";

const { Content } = Layout;

const OrderHistory = () => {
    return (
        <Layout>
            <NavBar/>

            <Content className="main-body">
                <BuyerOrderIndex/>
            </Content>
            <FooterInd/>
        </Layout>
    );
};

export default OrderHistory;