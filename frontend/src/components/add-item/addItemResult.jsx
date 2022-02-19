import React from 'react';
import styles from './addItemPreviewStyles';

export default function AddItemResult({
    hideItemModal,
    text = ''
}) {
    const classes = styles();
    return (
        <div className={classes.addItemPreview}>
            <div className={classes.addItemModal}>
                <div>
                    <p className={classes.modalTitle}>Your listing has been submitted!</p>
                </div>
                <div className={classes.addItemCta}>
                    <button className={classes.addItemGoBack}
                            onClick={hideItemModal}>ok</button>
                </div>
            </div>
        </div>
    );
}
