import React from 'react';
import styles from './addItemPreviewStyles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useTranslation } from "react-i18next";

export default function AddItemResult({
    hideItemModal,
    text = ''
}) {
    const classes = styles();
    const { t, i18n } = useTranslation("AddItemResult");
    return (
        <div className={classes.addItemResult}>
            <div className={classes.addItemModalResult}>
                <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", height:"75%"}}>
                    <CheckCircleIcon className={classes.successIcon} />
                    <p className={classes.modalTitle}>{t("Your listing has been submitted!")}</p>
                    <p className={classes.modalTextResult}> {t("Our team would review your listing and notify you once your listing is live.")}</p>
                </div>
                <div className={classes.addItemCta}>
                    <button className={classes.addItemGoBack}
                            onClick={hideItemModal}>{t("Finalize")}</button>
                </div>
            </div>
        </div>
    );
}
