import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    modalTitle: {
        fontSize: 24,
        fontWeight: 500
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
    }
});
export default styles;
