// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./FacultyTimetable.sol";

contract RecordAttendanceOfStudent {
    struct Student {
        bool isPresent;
    }

    mapping(string => mapping(string => mapping(string => Student))) attendance;

    FacultyTimetable facultyTimetable;

    // Predefined student lists for each section
    string[] sectionA = ["Bharath", "Ajay", "Manoj"];
    string[] sectionB = ["Swetha", "Pavan", "Lokesh"];
    string[] sectionC = ["Simon", "Murali", "Sekhar"];
    string[] sectionD = ["Chaithu", "Hemanth", "Satheesh"];

    constructor(address _facultyTimetableAddress) {
        facultyTimetable = FacultyTimetable(_facultyTimetableAddress);
    }

    function markStudentAttendance(string memory _day, string memory _period, string memory _studentName, bool _isPresent) public {
        (string memory subject, string memory section, , ) = facultyTimetable.getTimetableEntry(_day, _period);

        require(bytes(subject).length > 0, "No class scheduled at this time");

        string[] memory studentList;

        if (compareStrings(section, "Section A")) {
            studentList = sectionA;
        } else if (compareStrings(section, "Section B")) {
            studentList = sectionB;
        } else if (compareStrings(section, "Section C")) {
            studentList = sectionC;
        } else if (compareStrings(section, "Section D")) {
            studentList = sectionD;
        } else {
            revert("Invalid section");
        }

        bool isValidStudent = false;
        for (uint256 i = 0; i < studentList.length; i++) {
            if (compareStrings(studentList[i], _studentName)) {
                isValidStudent = true;
                break;
            }
        }

        require(isValidStudent, "Invalid student for this class");

        attendance[_day][_period][_studentName].isPresent = _isPresent;
    }

    function isStudentPresent(string memory _day, string memory _period, string memory _studentName) public view returns (bool) {
        return attendance[_day][_period][_studentName].isPresent;
    }

    // Function to compare two strings
    function compareStrings(string memory a, string memory b) private pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
}
