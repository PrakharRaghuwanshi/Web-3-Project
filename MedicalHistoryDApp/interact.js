// Web3.js setup
const Web3 = require('web3');
const web3 = new Web3('http://localhost:7545'); // Replace with your Ganache URL
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const abi = [/* Contract ABI */];

const contract = new web3.eth.Contract(abi, contractAddress);

// Add a patient record
async function addPatient(name, history) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.addPatient(name, history).send({ from: accounts[0] });
}

// Get patient information by ID
async function getPatientInfo(patientId) {
  return await contract.methods.patients(patientId).call();
}
