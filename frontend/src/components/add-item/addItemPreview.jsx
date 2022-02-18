import React from 'react';
import styles from './addItemPreviewStyles';

export default function AddItemPreview({
    hideItemModal,
    productName = '',
    productDescription = '',
    productPrice = { value: 0, currency: '$' },
    pictures = [],
    submitReview
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
                            <p className={classes.addItemLabel}>Name</p>
                            <p className={classes.addItemInfo}>{productName}</p>
                        </div>
                        <div className="addItem-price">
                            <p className={classes.addItemLabel}>Price</p>
                            <p className={classes.addItemInfo}>{productPrice.value} {productPrice.currency}</p>
                        </div>
                        <div className="addItem-description">
                            <p className={classes.addItemLabel}>Description</p>
                            <p className={classes.addItemInfo}>{productDescription}</p>
                        </div>
                    </div>
                </div>
                <div className={classes.addItemCta}>
                    <button className={classes.addItemGoBack}
                            onClick={hideItemModal}>Go back</button>
                    <button onClick={submitReview}
                        className={classes.addItemSubmit}>Submit for review</button>
                </div>
            </div>
        </div>
    );
}
