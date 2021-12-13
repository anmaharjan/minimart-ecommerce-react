import React, {useState} from 'react';
import {Button, Col, Descriptions, Spin} from "antd";

const ItemDescription = (props) => {
    const [spin, setSpinning] = useState(false);

    return (
        <Col md={12}>
            <Spin size="large" spinning={spin}>
                <div className="item-descriptions">
                    <Descriptions title="Item Description"
                                  layout="horizontal"
                                  column={{ md: 1 }}
                                  bordered
                                  size='middle'
                    >
                        <Descriptions.Item label="Name">{props.data.name}</Descriptions.Item>
                        <Descriptions.Item label="In Stock">{props.data.stockQuantity>0?"Yes":"No"}</Descriptions.Item>
                        {
                            props.data.onSale?
                                <>
                                    <Descriptions.Item label="Actual Price">${props.data.actualPrice}</Descriptions.Item>
                                    <Descriptions.Item label="Sale Price">${props.data.salePrice}</Descriptions.Item>
                                </> :
                                <>
                                    <Descriptions.Item label="Price">${props.data.actualPrice}</Descriptions.Item>
                                </>
                        }
                        <Descriptions.Item label="Highlights">{props.data.highlights}</Descriptions.Item>
                        <Descriptions.Item label="Description">{props.data.description}</Descriptions.Item>
                    </Descriptions>

                    <div className="rent-it-option-div">
                        <div className="rent-it-button">
                            <Button type="primary"
                                    size={'large'}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </Spin>
        </Col>
    );
}

export default ItemDescription;