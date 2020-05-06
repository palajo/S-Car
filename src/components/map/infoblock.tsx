import React from 'react';
import { Col, Row } from 'react-bootstrap';

type InfoProps = {
    data: any
}

export const InfoBlock = ({data}: InfoProps) => {
    return (
        <>
            <div className={data.show} id={data.id}>
                <Row className="margin-bottom-20">
                    <h2 className="text-uppercase">{data.city}</h2>
                </Row>
                <Row className="margin-bottom-10">
                    <p><b>{data.phone}</b></p>
                </Row>
                <Row className="ContactInfo">
                    <Col xs={12} md={12} lg={6}>
                        <Row>
                            <div className="span">
                                <div className="contacticon" id="iconMessage"></div>
                            </div>
                            <div className="span margin-left-15 align-self-center">
                                <p className="gray-12px">Ask a question:</p>
                                <p>{data.questionMail}</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="span">
                                <div className="contacticon" id="iconMessage"></div>
                            </div>
                            <div className="span margin-left-15 align-self-center">
                                <p className="gray-12px">For partners:</p>
                                <p>{data.partnersMail}</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="span">
                                <div className="contacticon" id="iconLocation"></div>
                            </div>
                            <div className="span margin-left-15 align-self-center">
                                <p className="gray-12px">Address:</p>
                                <p>{data.officeAdress}</p>
                            </div>
                        </Row>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <Row>
                            <div className="span">
                                <div className="contacticon" id="iconClock"></div>
                            </div>
                            <div className="span margin-left-15 align-self-center">
                                <p className="gray-12px">Warehouse:</p>
                                <p>{data.warehouseWorkingTime}</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="span">
                                <div className="contacticon" id="iconClock"></div>
                            </div>
                            <div className="span margin-left-15 align-self-center">
                                <p className="gray-12px">Ask a question:</p>
                                <p>{data.officeWorkingTime}</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="span">
                                <div className="contacticon" id="iconSkype"></div>
                            </div>
                            <div className="span margin-left-15 align-self-center">
                                <p className="gray-12px">Skype:</p>
                                <p>{data.managerSkype}</p>
                            </div>
                        </Row>
					</Col>
                </Row>
            </div>
        </>
    );
};

export default InfoBlock;
