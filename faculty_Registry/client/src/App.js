import Web3 from "web3";
import FacultyRegistry from "./contracts/FacultyRegistry.json";
import { useState, useEffect, useRef } from "react";
import './App.css';

// function App() {
//   const [state, setState] = useState({ web3: null, contract: null });
//   const [data, setData] = useState("nil");
//   const [successMessage, setSuccessMessage] = useState("");
//   const ref1 = useRef();
// const ref2 = useRef();
// const ref3 = useRef();
//   useEffect(() => {
//     const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");

//     async function template() {
//       const web3Instance = new Web3(provider);
//       const networkId = await web3Instance.eth.net.getId();
//       const deployedNetwork = FacultyRegistry.networks[networkId];
//       // console.log(deployedNetwork)
//       const contract = new web3Instance.eth.Contract(
//         FacultyRegistry.abi,
//         deployedNetwork.address
//       );
//       // console.log(contract)
//       // contract.methods.registerFaculty("sekhar","0xd4bE964fB6c048bC5726e762B1DD87eE34D55C53","0x526b611c042b1f1d48bb0f114ba815db5a0506894b2920dc52665bf1a8b5c6bd").send({from: "0xE47618d520b849F99976a53F1D68b18b5ac7B944"});
//       setState({ web3: web3Instance, contract: contract });
//     }
// console.log(state)
//     provider && template();
//   }, []);

//   // useEffect(()=>{
//   //   async function writeData(){
//   //     await FacultyRegistry.methods.registerFaculty(10,20,30).send();
//   //   }
//   // })

//   // useEffect(() => {
//   //   const { contract } = state;
//   // async function writeData() {
//   //   const { contract } = state;
//   //   const adminAddress = "0x8BE8FA42b1A918EbA07831f1E8B4fb51fCb84397"; // Example admin address
//   //   await contract.methods.addAdmin(adminAddress).send({ from: adminAddress })
//   //     .on('receipt', function(receipt){
//   //       setSuccessMessage("Admin added successfully!");
//   //     })
//   //     .on('error', function(error) {
//   //       console.error("Error adding admin:", error);
//   //       setSuccessMessage("Failed to add admin.");
//   //     });
//   //   // window.location.reload();
//   // }

  
//      function writeData(){
//       const name = ref1.current.value;
//       const address = ref2.current.value;
//       const password = ref3.current.value;
// console.log(name);

// //       const {contract} = state;
// //       console.log(contract)
// //     //  await  contract.methods.registerFaculty().send(name,address,password);
    
//     }
  
//   return (
//     <div className="App">
//       <form>
//         <br/>
//         <br/>
//         <label>Name :  </label>
//         <input ref={ref1}/>
// <br/>
// <br/>
// <br/>
//         <label>Address : </label>
//         <input ref={ref2}/>
//         <br/>
//         <br/>
//         <br/>

//         <label>password : </label>
//         <input ref={ref3}/>

//         <button onClick={writeDataz̄} >Add Faculty </button>
//       </form>
//     </div>
//   );
// }

// export default App;

function App() {
  const [state, setState] = useState({ web3: null, contract: null });
  const [data, setData] = useState("nil");
  const [successMessage, setSuccessMessage] = useState("");
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  useEffect(() => {
    const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");

    async function template() {
      const web3Instance = new Web3(provider);
      const networkId = await web3Instance.eth.net.getId();
      const deployedNetwork = FacultyRegistry.networks[networkId];
      const contract = new web3Instance.eth.Contract(
        FacultyRegistry.abi,
        deployedNetwork.address
      );
      console.log(contract)
      setState({ web3: web3Instance, contract: contract });
    }

    provider && template();
  }, []);

  function writeData(event) {
    try{
    event.preventDefault(); 
    console.log("Clieckd the Button ")
    const name = ref1.current.value;
    const address = ref2.current.value;
    const password = ref3.current.value;

    const { contract } = state; // Destructure contract from the current state
console.log("Contract Added ")
    // Check if contract exists
    // if (contract) {
      // Call the contract method to register faculty
      // contract.methods.registerFaculty(name, address, password)
      //   .send({ from: "0xE47618d520b849F99976a53F1D68b18b5ac7B944" }) // Replace "your_account_address" with the appropriate account address
      //   console.log("Entered Into !")
    // }
   const SorF =  contract.methods.registerFaculty(name, address, password)
  .send({ from: "0xE9c18f4aF65A4860F27843b2e688904a2E78d2f6",gas:5000000}) // Increase the gas limit as needed
console.log(SorF)
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div className="App">
      <form>
        <br/>
        <br/>
        <label>Name :  </label>
        <input ref={ref1}/>
        <br/>
        <br/>
        <br/>
        <label>Address : </label>
        <input ref={ref2}/>
        <br/>
        <br/>
        <br/>
        <label>Password : </label>
        <input ref={ref3}/>
        <button onClick={writeData}>Add Faculty</button> {/* Corrected onClick handler */}
      </form>
    </div>
  );
}

export default App;
