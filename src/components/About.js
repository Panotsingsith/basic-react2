import React, { Component } from 'react'
import data from '../data';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
export default class About extends Component {
    render() {
        return (
            <div>
                <h2>เกี่ยวกับเรา</h2>
                {
                    data.products.map(product =>
                        <div>
                            <Row>
                                <Col md={3}>
                                    <Card>
                                    <CardImg src={product.image}/>
                                    <CardBody>
                                        <CardTitle>{product.name}</CardTitle>
                                        <CardSubtitle>{product.price}</CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    )
                }
            </div>
        )
    }
}
