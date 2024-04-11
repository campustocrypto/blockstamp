import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import FacultyVerifierABI from './contracts/FacultyVerifier.json';

function App() {
  const [verificationResult, setVerificationResult] = useState('');
  const web3 = new Web3('http://127.0.0.1:7545');
  const facultyVerifierContract = new web3.eth.Contract(FacultyVerifierABI.abi, '0xcCb0a6116EB252d6a3d7c2Fb664379Cb9845E8Bb');

  const handleVerification = async (walletId, password) => {
    try {
        const web3 = new Web3('http://127.0.0.1:7545');
        const facultyVerifierContract = new web3.eth.Contract(FacultyVerifierABI, '0xcCb0a6116EB252d6a3d7c2Fb664379Cb9845E8Bb');
        
        // Pass walletId and password as function parameters
        const isVerified = await facultyVerifierContract.methods.verifyPassword(walletId, password).call();

        if (isVerified) {
            setVerificationResult('Success! Faculty verified.');
        } else {
            setVerificationResult('Error: Faculty not verified.');
        }
    } catch (error) {
        console.error("Error occurred:", error);
    }
};


  // Example usage: Trigger verification on component mount
  useEffect(() => {
    handleVerification('0x024c2f1fd94a0d965f3ea0415dacd4f17011d715', 'bka');
  }, []); // Empty dependency array ensures that the effect runs only once, on component mount

  return (
    <div>
      <h1>Faculty Verification</h1>
      <div>{verificationResult}</div>
    </div>
  );
}

export default App;
