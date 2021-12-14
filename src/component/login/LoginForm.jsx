import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import './style.css';
import {Button, Form, Input, message} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {useDispatch} from "react-redux";
import axios from "axios";

import {saveToken} from "../../redux/AuthenticateReducer";
import {SERVER_LOC} from "../../constant/Data";

const LoginForm = () => {
    const dispatch= useDispatch();
    const navigate= useNavigate();

    const onFinish = (values) => {
        let userD = {username: values.username, password: values.password};
        login(userD);
    };

    const login =(user)=>{
        axios.post(SERVER_LOC + "/auth",user)
            .then(res =>{
                if(res.status===200){
                    dispatch(saveToken(res.data));
                    navigate('/');
                }
                else{
                    message.error( "Username or password is not correct.");
                }
            }).catch(e => console.log('error'));
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                       placeholder="Username"  />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={login}>
                    Log in
                </Button>
                Or <Link to="/register">register now!</Link>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;