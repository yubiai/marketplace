import React, { useEffect, useState } from "react";

import { alpha, makeStyles } from '@material-ui/core/styles';
import { ethers } from "ethers";

import _products from "./fixtures/product.demo.json";
import _reviews from "./fixtures/review.demo.json";
import demoPicts from "./fixtures/profile.pictures";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer"
import starEmptyIcon from "../../media/star-empty.svg";
import starFullIcon from "../../media/star-full.svg";
import backIcon from "../../media/play.svg";
import klerosIcon from "../../media/logo_kleros.png";
//import { Card, Button } from "react-bootstrap";
// import {Button} from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
      profileView: {
        padding: '1rem',
      },

      /*
        Header
      */

      profilHeader: {
        display: 'flex',
      },

      profileOverview: {
        alignItems: 'center',
        display: 'flex',
        
      },

      profilePhoto: {
        borderRadius: '50%',
        height: '50px',
        marginRight: '1.5rem',
        width: '50px',
        
      },

      profilePhoto  : {
        width: '100%',
        borderRadius: '50%',
        right: '2rem',
      },

      profileWallet: {
        marginLeft: 'auto',
      },
  
      profileWalletAddress: {
        border: '1px solid #314ACE',
        borderRadius: '4px',
        padding: '0.5rem',
        textAlign: 'center',
      },

      /*
        Body section
      */

      
      profileReviewList: {
        fontWeight: '300',
      },

      
      profileReviewContainer: {
        display: 'flex',
        margin: '1.2rem',
      },

     
      profileReviewItem: {
        cursor: 'pointer',
        margin: '0 2rem',
      },

      profileProductActions: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      },

      
      profileProductActions: {
        color: '#000',
        margin: '1rem 0',
      },
    })); 
      
        Product section
      

      profile-product-list {
        margin: 48px 0;
      }

      profile-product-pict {
        width: 250px;
        height: 250px;
      }

      profile-product-pict img {
        width: 100%;
        height: 100%;
      }
      card-img-top{
        max-height: 250px;
        height: 245px;
      }
      /*
        Review section
      */
      /*
      profile-review-pict {
        border-radius: 50%;
        height: 50px;
        width: 50px;
      }

      profile-review-pict img {
        width: 100%;
        height: 100%;
      }

      /*
        Back icon
      */
    /*
      profile-back-action {
        display: flex;
        align-items: center;
        position: fixed;
        top: 7.25rem;
        left: 1.25rem;
        z-index: 999;
      }

      profile-back-action img {
        transform: rotate(180deg) scale(0.6);
      }

      profile-back-action a,
      profile-back-action a:hover,
      profile-back-action a:focus,
      profile-back-action a:active {
       color: #000;
        text-decoration: none;
      }
      
      /*
        kleros icon
      */
    /*
      profile-dispute-action {
        display: flex;
        align-items: right;
        position: fixed;
        bottom: 0.0rem;
        right: 1.25rem;
        
      }

      profile-dispute-action img {
        transform:  scale(0.5);
      }

      profile-dispute-action a,
      profile-dispute-action a:hover,
      profile-dispute-action a:focus,
      profile-dispute-action a:active {
        color: #000;
        text-decoration: none;
      }
      



const DECIMAL_BALANCE_CONST = 1000000000000000000;

const ProfileView = () => {
  const classes = useStyles();
  const _Provider = new ethers.providers.Web3Provider(window.ethereum);
  const _Signer = _Provider.getSigner();
  const [walletAddress, setWalletAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState("");
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  let name = "Nombre de Usuario";
  let bio = "Aca va algo";
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    async function fetchWalletAddress() {
      const address = await _Signer.getAddress();
      setWalletAddress(address.substring(0, 7));
    }
    async function fetchWalletBalance() {
      const balance = await _Signer.getBalance();
      const balanceAmount =
        parseFloat(balance.toString()) / DECIMAL_BALANCE_CONST;
      setWalletBalance(balanceAmount);
    }
    fetchWalletAddress();
    fetchWalletBalance();
    setProducts(_products);
    setReviews(_reviews);
  }, []);

  return (
    <div className={classes.profileView}>
      {/* <NavBar></NavBar>   */}
      <div className={classes.profileHeader}>
        <div className="profileOverview">
          <div className="profilePhoto">
            <img src={demoPicts["a3"].default} alt="Profile" />
          </div>
          <div className="profileName">
            <div className="profile-fullname">{name}</div>
            <div className="profile-bio">{bio}</div>
          </div>
        </div>
        <div className="profile-wallet">
          <div className="profile-wallet-address">{walletAddress}</div>
          <div className="profile-bio">{walletBalance} ETH</div>
        </div>
      </div>
      <div className="profile-back-action">
        {/* <Link to={"/"}>
          <img src={backIcon} alt="Back" />
          <span>Back</span>
        </Link> */}
      </div>
      <div className="profile-body">
        <div className="profile-product-list">
          <h3>Products</h3>
          <div className="profile-product-container">
            {products.slice(0, 3).map((product) => {
              return (
                <div
                  className="profile-product-item"
                  key={`product-${product.productId}`}
                >
                  <div style={{ width: "18rem" }}>
                    <img
                      //variant="top"
                      src={product.img}
                      alt={product.productId}
                      style={{ padding: "2.5rem" }}
                    />
                    <div>
                      <span>{product.name}</span>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <button>
                        {product.price}
                        {product.currency}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="profile-product-actions">
              <a href="#">See all products</a>
              <a href="#">Create new product</a>
            </div>
          </div>
        </div>
        <div className="profile-review-list">
          <h3>Reviews</h3>
          <div className="profile-review-container">
            {reviews.map((review) => {
              let stars = new Array(5);
              const profileImgSrc = demoPicts[review.img].default;
              stars = [...stars].map((_, index) => {
                if (index + 1 <= review.stars) {
                  return true;
                }
                return false;
              });

              return (
                <div
                  className="profile-review-item"
                  key={`review-${review.reviewId}`}
                >
                  <div className="profile-review-pict">
                    <img src={profileImgSrc} alt={review.img} />
                  </div>
                  <div className="profile-review-name">{review.user}</div>
                  <div className="profile-review-stars">
                    {stars.map((star, index) => {
                      if (star) {
                        return (
                          <img
                            key={`star-${index}`}
                            src={starFullIcon}
                            alt="Star"
                            style={{ width: "1.5rem" }}
                          />
                        );
                      }
                      return (
                        <img
                          key={`star-${index}`}
                          src={starEmptyIcon}
                          alt="Empty star"
                          style={{ width: "1.5rem" }}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="profile-review-actions">
              <a href="#">See all reviews</a>
            </div>
          </div>
          {/* <Footer />  */}
        </div>

        <div
          className="profile-dispute-action"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <a href={"https://resolve.kleros.io/create/"} target="_blank">
            <img src={klerosIcon} alt="Create Dispute Kleros" />
            {isShown && (
              <span style={{ fontWeight: "bold" }}>Create Dispute</span>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;