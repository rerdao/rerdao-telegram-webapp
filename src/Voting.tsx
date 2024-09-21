import { useState, useEffect } from 'react'
import TonConnect from '@tonconnect/sdk'

function VotingPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [voteSubmitted, setVoteSubmitted] = useState(false)

  const tonConnect = new TonConnect()

  useEffect(() => {
    // Check if wallet is already connected
    if (tonConnect.connected) {
      setWalletConnected(true)
    }
  }, [tonConnect]);

  const connectWallet = async () => {
    try {
      await tonConnect.connect()
      setWalletConnected(true)
    } catch (error) {
      console.error('Error connecting to wallet:', error)
    }
  };

  const handleVoteSubmit = () => {
    if (!walletConnected) {
      alert('Please connect your wallet to vote.')
      return
    }

    if (!selectedOption) {
      alert('Please select an option to vote.')
      return
    }

    // Submit the vote logic (e.g., send the vote transaction to the blockchain)
    console.log(`Submitting vote for: ${selectedOption}`)
    setVoteSubmitted(true)
  };

  return (
    <div className="voting-page">
      <h1>Voting Page</h1>

      {!walletConnected ? (
        <button onClick={connectWallet}>
          Connect Wallet to Vote
        </button>
      ) : (
        <>
          <div className="voting-options">
            <h2>Select an Option to Vote</h2>
            <label>
              <input
                type="radio"
                name="vote"
                value="Option 1"
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              Option 1
            </label>
            <label>
              <input
                type="radio"
                name="vote"
                value="Option 2"
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              Option 2
            </label>
            <label>
              <input
                type="radio"
                name="vote"
                value="Option 3"
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              Option 3
            </label>
          </div>

          <button onClick={handleVoteSubmit}>
            Submit Vote
          </button>

          {voteSubmitted && (
            <div className="vote-confirmation">
              <h3>Thank you for voting!</h3>
              <p>Your vote for "{selectedOption}" has been submitted.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default VotingPage
