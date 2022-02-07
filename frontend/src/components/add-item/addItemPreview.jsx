import React from 'react';
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
        height: '50vh',
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
    addItemContent: {
        display: 'flex'
    },
    mainPicture: {
        maxWidth: '100%'
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
        justifyContent: 'space-between'
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

export default function AddItemPreview({
    hideItemModal,
    productName = '',
    productDescription = '',
    productPrice = { value: 0, currency: '$' },
    pictures = []
}) {
    const classes = styles();

    return (
        <div className={classes.addItemPreview}>
            <div className={classes.addItemModal}>
                <div>
                    <p className={classes.modalTitle}>Review your listing</p>
                </div>
                <div className={classes.addItemContent}>
                    {
                        pictures.length && (
                            <div className={classes.addItemPictures}>
                                <figure className={classes.mainPicture}>
                                    <img src={pictures[0].url} alt={pictures[0].alt} />
                                </figure>
                                <div className={classes.addItemPicturesList}>
                                    {
                                        pictures.slice(1, pictures.length)
                                            .map(picture => {
                                                return (
                                                    <figure className={classes.pictureItem}
                                                            key={`pict-${picture.url}`}>
                                                        <img style={{width: '100%'}}
                                                            src={picture.url}
                                                            alt={picture.alt} />
                                                    </figure>
                                                );
                                            })
                                    }
                                </div>
                            </div>
                        )
                    }
                    <div className={classes.addItemText}>
                        <div className="addItem-name">
                            <p className="addItem-label">Name</p>
                            <p>{productName}</p>
                        </div>
                        <div className="addItem-price">
                            <p className="addItem-label">Price</p>
                            <p>{productPrice.value} {productPrice.currency}</p>
                        </div>
                        <div className="addItem-description">
                            <p className="addItem-label">Description</p>
                            <p>{productDescription}</p>
                        </div>
                    </div>
                </div>
                <div className={classes.addItemCta}>
                    <button className={classes.addItemGoBack}
                            onClick={hideItemModal}>Go back</button>
                    <button className={classes.addItemSubmit}>Submit for review</button>
                </div>
            </div>
        </div>
    );
}
