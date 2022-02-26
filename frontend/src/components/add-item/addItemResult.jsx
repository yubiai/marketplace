import React from 'react';
import styles from './addItemPreviewStyles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function AddItemResult({
    hideItemModal,
    text = ''
}) {
    const classes = styles();
    return (
        <div className={classes.addItemResult}>
            <div className={classes.addItemModalResult}>
                <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", height:"75%"}}>
                    <CheckCircleIcon className={classes.successIcon} />
                    <p className={classes.modalTitle}>Your listing has been submitted!</p>
                    <p className={classes.modalTextResult}> Our team would review your listing and notify you once your listing is live.</p>
                </div>
                <div className={classes.addItemCta}>
                    <button className={classes.addItemGoBack}
                            onClick={hideItemModal}>ok</button>
                </div>
            </div>
        </div>
    );
}
