import React, {useState} from 'react';
import {Avatar, Button, Comment, Input, Tooltip} from "antd";
import {useSelector} from "react-redux";

const { TextArea } = Input;

/*
* {
        "id": 3,
        "comment": "This is comment",
        "createdDate": "2021-12-13T23:47:59.159+00:00",
        "updatedDate": "2021-12-13T23:47:59.159+00:00",
        "user": {
            "firstname": "Anish",
            "middlename": "",
            "lastname": "Maharjan",
            "username": "anizz.maharjan@gmail.com"
        },
        "product": {
            "id": 1,
            "name": "Prrreaskdjf",
            "productImages": [
                {
                    "imageUrl": "/images/products/1639351247740_Screenshot_from_2021-08-13_14-21-27.png"
                },
                {
                    "imageUrl": "/images/products/1639351342434_Screenshot_from_2021-11-09_14-49-35.png"
                }
            ]
        }
    }*/
const reviews = [
    {
        "id": 3,
        "comment": "This is comment",
        "createdDate": "12/13/2021 11:47:59",
        "updatedDate": "12/13/2021 11:47:59",
        "user": {
            "firstname": "Anish",
            "middlename": "",
            "lastname": "Maharjan",
            "username": "anizz.maharjan@gmail.com"
        }
    },
    {
        "id": 3,
        "comment": "This is comment",
        "createdDate": "12/13/2021 11:47:59",
        "updatedDate": "12/13/2021 11:47:59",
        "user": {
            "firstname": "Anish",
            "middlename": "",
            "lastname": "Maharjan",
            "username": "anizz.maharjan@gmail.com"
        },
    }
];

const Review = (props) => {
    const showCommentBox = props.authenticate.token!=='' && props.authenticate.roles[0]==='BUYER';

    return (
        <div className="review-div">
            <h2>Review</h2>
            <div className="review-display">
                {
                    reviews.map((rev, ind) =>
                        <Comment
                            className="user-review"
                            author={`${rev.user.firstname} ${rev.user.middlename} ${rev.user.lastname}`}
                            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                            content={
                                <p>
                                    {rev.comment}
                                </p>
                            }
                            datetime={
                                <Tooltip title={rev.createdDate}>
                                    {/*<span>{moment().fromNow()}</span>*/}
                                </Tooltip>
                            }
                        />
                    )
                }
            </div>

            {
                showCommentBox?
                    <div className="review-area">
                        <TextArea className="review-box" rows={7}/>
                        <Button type='primary' size='large'>Post</Button>
                    </div>:<></>
            }
        </div>
    );
}

export default Review;