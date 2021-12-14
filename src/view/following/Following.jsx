import React, {useState} from 'react';
import NavBar from "../../component/navbar/NavBar";
import CheckoutIndex from "../../component/checkout/CheckoutIndex";
import FooterInd from "../../component/footer/FooterInd";
import {Layout} from "antd";

const { Content } = Layout;

const Following = () => {
    return (
        <Layout>
            <NavBar/>

            <Content className="main-body">
                <CheckoutIndex/>
            </Content>
            <FooterInd/>
        </Layout>
    );
}

export default Following;