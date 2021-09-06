import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link }  from 'react-router-dom';


export default function BreadcrumbA (props) {
    let component = (
        <Breadcrumbs style={{marginLeft:'1.9rem', marginTop: '0.45rem', marginBottom:'0.5rem'}} separator="›" aria-label="breadcrumb">
            <Link  className={props.classes.link} to="/sales"  onClick={props.handleClick}>
                Sales
            </Link>
            <Link className={props.classes.link} to="/salescomplete" onClick={props.handleClick}>
                Complete
            </Link>
            <Link className={props.classes.link} to="/salescompletedetails" onClick={props.handleClick}>
                Details
            </Link>
            <Link className={props.classes.link} to="/salescompletedetails/messagesbox">
                Sales messages
            </Link>
        </Breadcrumbs>
    );
    console.log('Location is::: ', props.location)
    if (props.location.pathname === '/checkorders/messagesbox') {
        component = (
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link className={props.classes.link} to="/orders"  onClick={props.handleClick}>
                    Orders
                </Link>
                <Link className={props.classes.link} to="/checkorders" onClick={props.handleClick}>
                    Order details
                </Link>
                <Link className={props.classes.link} to="/checkorders/messagesbox">
                    Messages of the order
                </Link>
            </Breadcrumbs>
        );
    }
    return component;
};