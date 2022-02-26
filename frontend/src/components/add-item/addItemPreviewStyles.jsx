import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    modalTitle: {
        fontSize: "36px",
        fontWeight: "600",
         color: "#1c548b",
    },
    addItemPreview: {
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'rgba(0, 0, 0, .5)',
        width: '100vw',
        height: '100vh',
        zIndex: 100000
    },
    addItemModal: {
        width: '50vw',
        height: '80vh',
        background: '#fff',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px 30px',
        borderRadius: '4px'
    },
    addItemText: {
        flex: 1
    },
    addItemLabel: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.5)'
    },
    addItemInfo: {
        
        
    },
    addItemInfoDescription: {
        width: "100%",
        maxWidth: "500px",
        minWidth: "500px",
        height: "100%",
        maxHeight: "276px",
        minHeight: "276px",
        display: "flex",
        textAlign: "justify",
        wordBreak: "break-all",
    },
    addItemContent: {
        display: 'flex'
    },
    mainPicture: {
        margin: '0 auto 20px',
        maxWidth: '150px',
        '& img': {
            width: '100%'
        }
    },
    addItemPictures: {
        flex: 1
    },
    addItemPicturesList: {
        display: 'flex'
    },
    pictureItem: {
        maxWidth: '75px',
        marginRight: '10px'
    },
    addItemCta: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        left: 0,
        padding: '2rem',
        bottom: 0,
        boxShadow: '0 -10px 34px 0 rgba(0, 0, 0, 0.1)'
    },
    addItemGoBack: {
        border: '1px solid #00abd1',
        borderRadius: 4,
        color: '#00abd1',
        background: '#fff',
        padding: '20px'
    },
    addItemSubmit: {
        border: 0,
        borderRadius: 4,
        background: '#00abd1',
        color: '#fff',
        padding: '20px'
    },
    successIcon: {
        color: "#25AE88",
        width: "120px",
        height: "120px",
    },
    addItemResult: {
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'rgba(0, 0, 0, .5)',
        width: '100vw',
        height: '100vh',
        // margin: "4px 410px 279px 40px",
        // padding: "26px 0 47px",
        borderRadius: "8px",
        // backgroundColor: "#fff",
        zIndex: 100000
    },
    addItemModalResult: {
        width: '38vw',
        height: '60vh',
        background: '#fff',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px 30px',
        borderRadius: '8px'
    },
    modalTextResult: {
        fontSize: "14px",
        color: "#979797",
    },            
});
export default styles;
