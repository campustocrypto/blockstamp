const Web3 = require('web3');
const { abi: FacultyVerifierABI } = require('/Users/bharaths_mac/facultymana/mange/src/contracts/FacultyVerifier.json');

// Connect to a local Ethereum node (e.g., Ganache)
const web3 = new Web3('http://127.0.0.1:7545');
const contractAddress = '0xcCb0a6116EB252d6a3d7c2Fb664379Cb9845E8Bb'
// Create an instance of the contract using its ABI and address
// const facultyVerifierContract = new web3.eth.Contract(FacultyVerifierABI.abi, '0xcCb0a6116EB252d6a3d7c2Fb664379Cb9845E8Bb');
const facultyVerifierContract = new web3.eth.Contract(FacultyVerifierABI, contractAddress);
// Function to verify a faculty member
// async function verifyFaculty(walletId, password) {
//   try {
//     // Call the smart contract function to verify the faculty member
//     const isVerified = await facultyVerifierContract.methods.verifyPassword(walletId, password).call();

//     if (isVerified) {
//       console.log('Success! Faculty verified.');
//     } else {
//       console.log('Error: Faculty not verified.');
//     }
//   } catch (error) {
//     console.error('Error occurred:', error);
//   }
// }

// // Example usage: Verify a faculty member
// verifyFaculty('0x024c2f1fd94a0d965f3ea0415dacd4f17011d715', 'bka');
async function verifyPassword(walletId, password) {
    try {
        const result = await facultyVerifierContract.methods.verifyPassword(walletId, password).call();
        return result;
    } catch (error) {
        console.error('Error verifying password:', error);
        return false;
    }
}

// Example usage
const walletId = '0x024c2f1fd94a0d965f3ea0415dacd4f17011d715'; // Update with the walletId you want to verify
const password = 'bka'; // Update with the password you want to verify

verifyPassword(walletId, password)
    .then(isValid => {
        if (isValid) {
            console.log('Password is valid.');
        } else {
            console.log('Password is not valid.');
        }
    });