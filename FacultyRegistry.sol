// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FacultyRegistry {
    struct Faculty {
        string name;
        address walletId;
        bytes32 passwordHash;
    }

    mapping(address => Faculty) public faculties;

    function registerFaculty(string memory _name, address _walletId, bytes32 _passwordHash) public {
        require(faculties[_walletId].walletId != _walletId, "Faculty already registered");
        
        faculties[_walletId] = Faculty(_name, _walletId, _passwordHash);
    }

}
