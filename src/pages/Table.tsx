import React from 'react';
import { Container, Row, Col, Tabs, Tab, Form, InputGroup } from 'react-bootstrap';


// importing Table components styles
import '../styles/table.scss';


// importing Table components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/navigation/Breadcrumbs';


// setting News parameters
type tableProps = {
    tableCatalog: string,
    tableModel: string,
	tableDescription: string,
    tableDate: string,
    tableManufactury: string
}

export const TableBlock = ({ tableCatalog, tableModel, tableDescription, tableDate, tableManufactury }: tableProps) =>
    <tr>
        <td>{tableCatalog}</td>
        <td>{tableModel}</td>
        <td>{tableDescription}</td>
        <td>{tableDate}</td>
        <td>{tableManufactury}</td>
    </tr>


function Table() {
	return(
		<body>
			<Header />
            <Breadcrumbs />
                <Container className="margin-bottom-70">
                    <Row className="margin-bottom-20">
                        <h2>Подбор запчастей по оригинальным каталогам</h2>
                    </Row>
                    <Row className="margin-bottom-40">
                        <Form.Row>
                            <Form.Group as={Col}>
                               <InputGroup>
                                   <Form.Control
                                       className="search-input align-self-center search-input-custom"
                                       type="text"
                                       placeholder="Поиск по VIN.."
                                   />
                                   <InputGroup.Prepend>
                                       <InputGroup.Text>
                                           НАЙТИ
                                       </InputGroup.Text>
                                   </InputGroup.Prepend>
                               </InputGroup>
                            </Form.Group>
                        </Form.Row>
                    </Row>
                    <Tabs defaultActiveKey="europe" id="uncontrolled-tab-example">
                        <Tab eventKey="europe" title="Европа">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Каталог</th>
                                        <th scope="col">Модель</th>
                                        <th scope="col">Описание</th>
                                        <th scope="col">Дата производства</th>
                                        <th scope="col">Производство</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableBlock tableCatalog="A1" tableModel="Audi A1" tableDescription="" tableDate="2011 - …" tableManufactury="B" />
                                    <TableBlock tableCatalog="A100" tableModel="Audi 100/Avant" tableDescription="" tableDate="1977 - 1994" tableManufactury="A;N" />
                                    <TableBlock tableCatalog="A10Q" tableModel="Audi 100/Avant Quattro" tableDescription="" tableDate="1985 - 1994" tableManufactury="A;N" />
                                    <TableBlock tableCatalog="A2" tableModel="Audi A2" tableDescription="" tableDate="2000 - 2005" tableManufactury="N" />
                                    <TableBlock tableCatalog="A200" tableModel="Audi 200" tableDescription="" tableDate="1980 - 1991" tableManufactury="A;N" />
                                    <TableBlock tableCatalog="A20Q" tableModel="Audi 200/Avant quattro" tableDescription="" tableDate="1985 - 1991" tableManufactury="A;N" />
                                    <TableBlock tableCatalog="A3" tableModel="Audi A3/S3/Sportb./Lim./qu." tableDescription="" tableDate="1997 - …" tableManufactury="A;B;Y;1;7;9" />
                                    <TableBlock tableCatalog="A3CA" tableModel="Audi A3 Cabriolet" tableDescription="" tableDate="2008 - …" tableManufactury="1" />
                                    <TableBlock tableCatalog="A1" tableModel="Audi A1" tableDescription="" tableDate="2011 - …" tableManufactury="B" />
                                    <TableBlock tableCatalog="A100" tableModel="Audi 100/Avant" tableDescription="" tableDate="1977 - 1994" tableManufactury="A;N" />
                                    <TableBlock tableCatalog="A10Q" tableModel="Audi 100/Avant Quattro" tableDescription="" tableDate="1985 - 1994" tableManufactury="A;N" />
                                    <TableBlock tableCatalog="A2" tableModel="Audi A2" tableDescription="" tableDate="2000 - 2005" tableManufactury="N" />
                                    <TableBlock tableCatalog="A200" tableModel="Audi 200" tableDescription="" tableDate="1980 - 1991" tableManufactury="A;N" />
                                    <TableBlock tableCatalog="A20Q" tableModel="Audi 200/Avant quattro" tableDescription="" tableDate="1985 - 1991" tableManufactury="A;N" />
                                    <TableBlock tableCatalog="A3" tableModel="Audi A3/S3/Sportb./Lim./qu." tableDescription="" tableDate="1997 - …" tableManufactury="A;B;Y;1;7;9" />
                                    <TableBlock tableCatalog="A3CA" tableModel="Audi A3 Cabriolet" tableDescription="" tableDate="2008 - …" tableManufactury="1" />
                                </tbody>
                            </table>
                        </Tab>
                        <Tab eventKey="china" title="Китай">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Каталог</th>
                                        <th scope="col">Модель</th>
                                        <th scope="col">Описание</th>
                                        <th scope="col">Дата производства</th>
                                        <th scope="col">Производство</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableBlock tableCatalog="A1" tableModel="Audi A1" tableDescription="" tableDate="2011 - …" tableManufactury="B" />
                                    <TableBlock tableCatalog="A100" tableModel="Audi 100/Avant" tableDescription="" tableDate="1977 - 1994" tableManufactury="A;N" />
                                    <TableBlock tableCatalog="A10Q" tableModel="Audi 100/Avant Quattro" tableDescription="" tableDate="1985 - 1994" tableManufactury="A;N" />
                                    <TableBlock tableCatalog="A2" tableModel="Audi A2" tableDescription="" tableDate="2000 - 2005" tableManufactury="N" />
                                    <TableBlock tableCatalog="A200" tableModel="Audi 200" tableDescription="" tableDate="1980 - 1991" tableManufactury="A;N" />
                                    <TableBlock tableCatalog="A20Q" tableModel="Audi 200/Avant quattro" tableDescription="" tableDate="1985 - 1991" tableManufactury="A;N" />
                                    <TableBlock tableCatalog="A3" tableModel="Audi A3/S3/Sportb./Lim./qu." tableDescription="" tableDate="1997 - …" tableManufactury="A;B;Y;1;7;9" />
                                    <TableBlock tableCatalog="A3CA" tableModel="Audi A3 Cabriolet" tableDescription="" tableDate="2008 - …" tableManufactury="1" />
                                </tbody>
                            </table>
                        </Tab>
                    </Tabs>
                </Container>
			<Footer />
		</body>
	);
}

export default Table;
