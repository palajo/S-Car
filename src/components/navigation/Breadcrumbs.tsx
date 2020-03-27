import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

// importing Breadcrumbs component styles
import '../../styles/navigation/breadcrumbs.scss';


const Breadcrumbs = withBreadcrumbs()(({ breadcrumbs }) => (
    <Container>
        <Row>
            <div className="Breadcrumbs margin-bottom-20">
                { breadcrumbs.map( ({ match, breadcrumb }) => (
                        <span key={match.url}>
                            <NavLink to={match.url}>{breadcrumb}</NavLink>
                        </span>
                    ))}
            </div>
        </Row>
    </Container>
));


export default Breadcrumbs;
