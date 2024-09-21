import { useState, useEffect } from 'react';
import TonConnect from '@tonconnect/sdk';  // Import TON SDK
import rerLogo from './assets/RER-black.svg';
import './App.css';

function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const tonConnect = new TonConnect();

  useEffect(() => {
    // Check if the wallet is already connected when the app loads
    if (tonConnect.connected) {
      setWalletConnected(true);
      const userWallet = tonConnect.getUserAddress();  // Fetch the connected wallet address
      setWalletAddress(userWallet);
    }
  }, [tonConnect]);

  const connectWallet = async () => {
    try {
      await tonConnect.connect();
      setWalletConnected(true);
      const userWallet = tonConnect.getUserAddress();
      setWalletAddress(userWallet);
    } catch (error) {
      console.error('Error connecting to TON Wallet:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://rerdao.xyz" target="_blank" rel="noopener noreferrer">
          <img src={rerLogo} className="logo" alt="RER Logo" />
        </a>
        <h1>Welcome!</h1>

        {!walletConnected ? (
          <button onClick={connectWallet}>Connect TON Wallet</button>
        ) : (
          <div>
            <p>Wallet Connected: {walletAddress}</p>
            <button>
              <a href="/swap" style={{ textDecoration: 'none', color: 'inherit' }}>
                Go to Swap or Stake
              </a>
            </button>
            <button>
              <a href="/voting" style={{ textDecoration: 'none', color: 'inherit' }}>
                Go to Voting
              </a>
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
