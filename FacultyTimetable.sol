// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FacultyTimetable {
    struct TimetableEntry {
        string subject;
        string section; // Changed back to string
        bool isLunch;
        bool isLeisure;
    }

    mapping(string => mapping(string => TimetableEntry)) timetable;

    constructor() {
        // Monday
        timetable["Monday"]["9:00 AM - 10:00 AM"] = TimetableEntry("Block Chain", "Section A", false, false);
        timetable["Monday"]["10:00 AM - 11:00 AM"] = TimetableEntry("Block Chain", "Section A", false, false);
        timetable["Monday"]["1:00 PM - 2:00 PM"] = TimetableEntry("Block Chain", "Section D", false, false);
        timetable["Monday"]["2:00 PM - 3:00 PM"] = TimetableEntry("Block Chain", "Section D", false, false);
        
        // Tuesday
        timetable["Tuesday"]["9:00 AM - 10:00 AM"] = TimetableEntry("Block Chain", "Section B", false, false);
        timetable["Tuesday"]["10:00 AM - 11:00 AM"] = TimetableEntry("Block Chain", "Section B", false, false);
        timetable["Tuesday"]["11:00 AM - 12:00 PM"] = TimetableEntry("Block Chain", "Section B", false, false);
        timetable["Tuesday"]["1:00 PM - 2:00 PM"] = TimetableEntry("Block Chain", "Section A", false, false);

        // Wednesday
        timetable["Wednesday"]["9:00 AM - 10:00 AM"] = TimetableEntry("Block Chain", "Section C", false, false);
        timetable["Wednesday"]["10:00 AM - 11:00 AM"] = TimetableEntry("Block Chain", "Section C", false, false);
        timetable["Wednesday"]["11:00 AM - 12:00 PM"] = TimetableEntry("meeting", "", false, false);
        timetable["Wednesday"]["1:00 PM - 2:00 PM"] = TimetableEntry("", "", true, false);
        timetable["Wednesday"]["2:00 PM - 3:00 PM"] = TimetableEntry("", "", false, true);
        timetable["Wednesday"]["3:00 PM - 4:00 PM"] = TimetableEntry("Block Chain", "Section D", false, false);

        // Thursday
        timetable["Thursday"]["9:00 AM - 10:00 AM"] = TimetableEntry("Lecture", "", false, false);
        timetable["Thursday"]["10:00 AM - 11:00 AM"] = TimetableEntry("Block Chain", "Section B", false, false);
        timetable["Thursday"]["11:00 AM - 12:00 PM"] = TimetableEntry("Block Chain", "Section B", false, false);
        timetable["Thursday"]["1:00 PM - 2:00 PM"] = TimetableEntry("", "", true, false);
        timetable["Thursday"]["2:00 PM - 3:00 PM"] = TimetableEntry("", "", false, true);
        timetable["Thursday"]["3:00 PM - 4:00 PM"] = TimetableEntry("", "", false, true);

        // Friday
        timetable["Friday"]["9:00 AM - 10:00 AM"] = TimetableEntry("Block Chain", "Section A", false, false);
        timetable["Friday"]["10:00 AM - 11:00 AM"] = TimetableEntry("Block Chain", "Section A", false, false);
        timetable["Friday"]["11:00 AM - 12:00 PM"] = TimetableEntry("Block Chain", "Section A", false, false);
        timetable["Friday"]["1:00 PM - 2:00 PM"] = TimetableEntry("", "", true, false);
        timetable["Friday"]["2:00 PM - 3:00 PM"] = TimetableEntry("", "", false, true);
        timetable["Friday"]["3:00 PM - 4:00 PM"] = TimetableEntry("", "", false, true);

        // Saturday
        timetable["Saturday"]["9:00 AM - 10:00 AM"] = TimetableEntry("Block Chain", "Section B", false, false);
        timetable["Saturday"]["10:00 AM - 11:00 AM"] = TimetableEntry("Block Chain", "Section B", false, false);
        timetable["Saturday"]["11:00 AM - 12:00 PM"] = TimetableEntry("", "", false, true);
        timetable["Saturday"]["1:00 PM - 2:00 PM"] = TimetableEntry("", "", true, false);
        timetable["Saturday"]["2:00 PM - 3:00 PM"] = TimetableEntry("", "", false, true);
        timetable["Saturday"]["3:00 PM - 4:00 PM"] = TimetableEntry("Block Chain", "Section B", false, false);
    }

    function getTimetableEntry(string memory _day, string memory _period) public view returns (string memory, string memory, bool, bool) {
        TimetableEntry memory entry = timetable[_day][_period];
        return (entry.subject, entry.section, entry.isLunch, entry.isLeisure);
    }
}
