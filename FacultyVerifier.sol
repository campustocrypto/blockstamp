// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./FacultyRegistry.sol";

contract FacultyVerifier {
    FacultyRegistry public facultyRegistry;

    constructor(FacultyRegistry _facultyRegistry) {
        facultyRegistry = _facultyRegistry;
    }

    function verifyPassword(address _walletId, string memory _password) public view returns (bool) {
        // Remove the unused local variable declaration and assignment
        (string memory name, address walletId, bytes32 passwordHash) = facultyRegistry.faculties(_walletId);
        // console.log();
        if (walletId == address(0)) {
            return false; // Faculty with given walletId not found
        }

        bytes32 hashedPassword = keccak256(abi.encodePacked(_password));
        return hashedPassword == passwordHash;
    }
}
