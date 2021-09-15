import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link }  from 'react-router-dom';


export default function BreadcrumbB (props) {
    let componentb = (
        <Breadcrumbs style={{marginLeft:'1.9rem', marginTop: '0.45rem', marginBottom:'0.5rem'}} separator="›" aria-label="breadcrumb">
                        <Link className={props.classes.link} to="/mailbox"  onClick={props.handleClick}>
                            Mailbox
                        </Link>
                        <Link className={props.classes.link} to="/chat" onClick={props.handleClick}>
                            "USERNAME"
                        </Link>
                        
                </Breadcrumbs> 
    );
    
    return componentb;
};