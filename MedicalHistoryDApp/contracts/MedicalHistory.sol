// contracts/MedicalHistory.sol
pragma solidity ^0.8.0;

contract MedicalHistory {
    struct Patient {
        uint256 id;
        string name;
        string history;
    }

    mapping(uint256 => Patient) public patients;
    uint256 public patientCount;

    function addPatient(string memory _name, string memory _history) public {
        patientCount++;
        patients[patientCount] = Patient(patientCount, _name, _history);
    }
}
