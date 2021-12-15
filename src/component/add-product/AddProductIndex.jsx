import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Form, Input, message} from "antd";
import './style.css';
import {SERVER_LOC} from "../../constant/Data";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const { TextArea } = Input;

const AddProductIndex = () => {
    const navigate = useNavigate();
    const authenticate = useSelector(state => state.authenticate);
    const [onSale, setOnSale] = useState(true);

    const onCheckboxChange = (e) => {
        setOnSale(e.target.checked);
    }

    const onSaveProduct = (values) => {
        let product = values;
        product['onSale'] = onSale;

        product['userId'] = authenticate.userId;

        fetch(SERVER_LOC + '/product', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + authenticate.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => {
                return res.json();
            })
            .then(result=>{
                message.info(result.message);
                navigate('/');
            })
    }

    useEffect(() => {
        if(authenticate.token === '' || authenticate.roles[0] !== 'SELLER')
            navigate('/');
    });

    return (
        <div className="product-div">
            <h1>Add Product</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onSaveProduct}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Must not be empty',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="onSale"
                    label="On Sale"
                >
                    <Checkbox checked={onSale} onChange={onCheckboxChange}/>
                </Form.Item>

                <Form.Item
                    name="actualPrice"
                    label="Actual Price"
                    rules={[
                        {
                            required: true,
                            message: 'Must not be empty',
                        },
                    ]}
                >
                    <Input type="number"/>
                </Form.Item>

                <Form.Item
                    name="salePrice"
                    label="Sale Price"
                    rules={[
                        {
                            required: true,
                            message: 'Must not be empty',
                        },
                    ]}
                >
                    <Input type="number"/>
                </Form.Item>

                <Form.Item
                    name="stockQuantity"
                    label="Stock"
                    rules={[
                        {
                            required: true,
                            message: 'Must not be empty',
                        },
                    ]}
                >
                    <Input type="number"/>
                </Form.Item>

                <Form.Item
                    name="highlights"
                    label="Highlights"
                >
                    <TextArea
                        placeholder="Highlights"
                        autoSize={{ minRows: 4 }}
                    />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                >
                    <TextArea
                        placeholder="Description"
                        autoSize={{ minRows: 4 }}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddProductIndex;