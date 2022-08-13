import React, { useEffect, useState } from "react";
import CreateProduct from "../components/CreateProduct";
import HeadComponent from '../components/Head';
import Product from "../components/Product";

// import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const BUILDSPACE_HANDLE = 'Lesley';
const BUILDSPACE_LINK = `https://buildspace.so/${BUILDSPACE_HANDLE}`;

const App = () => {
  // This will fetch the users' public key (wallet address) from any wallet we support
  const { publicKey } = useWallet();
  const isOwner = (publicKey ? publicKey.toString() === process.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY : false);
  const [creating, setCreating] = useState(false);
  const [products, setProducts] = useState([]);

  const renderNotConnectedContainer = () => (
    <div>
      <img src="https://res.cloudinary.com/lesley-z/image/upload/w_250/l_text:Sacramento_38_center:&copy; Mythic Market,co_rgb:ffffff/fl_layer_apply,g_south/v1659346388/Projects/medusa.gif" alt="medusa gif" width="25%" />
      <div className="overlay">MYTHIC MARKET</div>

      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
          console.log("Products", data);
        });
    }
  }, [publicKey]);

  const renderItemBuyContainer = () => (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );

  return (
    <div className="App">
      <HeadComponent />
      <div className="container">
        <header className="header-container">
          <p className="header">Mythic Market</p>
          <p className="sub-text">Get mythical merchandise with Solana Pay</p>

          {isOwner && ( // 
            <button className="create-product-button" onClick={() => setCreating(!creating)}>
              {creating ? "Close" : "Create Product"}
            </button>
          )}
        </header>

        <main>
          {creating && <CreateProduct />}
          {/* We only render the connect button if public key doesn't exist */}
          {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>

        <div className="footer-container2">
          <img alt="Builder Badge" className="builder-badge" src="https://res.cloudinary.com/lesley-z/image/upload/v1658874955/Projects/unicorn6.png" />
          <a
            className="footer-text"
            href={BUILDSPACE_LINK}
            target="_blank"
            rel="noreferrer"
          >{`by @${BUILDSPACE_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
