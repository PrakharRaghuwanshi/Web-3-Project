
// Import required modules
const {Web3} = require('web3');
const contractAbi = require("C:\\Users\\yuyu\\OneDrive\\Desktop\\MedicalHistoryDApp\\build\\contracts\\MedicalHistory.json").abi; // Replace with the path to your contract's ABI JSON file
const contractAddress = '0x7f3A60D69737EE8Aeb60AA8e0Be717819f0d6Ac1'; // Replace with the actual contract address
const web3 = new Web3('HTTP://127.0.0.1:7545'); // Replace with your Ganache URL

// Create an instance of the contract
const medicalHistoryContract=  new web3.eth.Contract(contractAbi, contractAddress);



// Replace with the patient information you want to store
var patientName = 'John Doe';
var patientHistory = 'Medical history for John Doe';


async function addPatient(patientName, patientHistory) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.addPatient(patientName, patientHistory).send({ from: accounts[0] });
  }

medicalHistoryContract.addPatient = addPatient;

// Function to add a patient's medical history
async function addPatientMedicalHistory() {
  try {
    // Get the accounts from Ganache (you can choose any account you want to send the transaction from)
    const accounts = await web3.eth.getAccounts();

    // Call the contract's addPatient function to store the medical history
    const result = await medicalHistoryContract.methods.addPatient(patientName, patientHistory)
      .send({ from: accounts[0] }); // Use the first account for this example

    console.log('Transaction Hash:', result.transactionHash);
    console.log('Medical history stored successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
}



// Call the function to add the patient's medical history
addPatientMedicalHistory();
