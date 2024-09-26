// @flow strict

import * as React from 'react';
import '../Computer/Computer.css'
import { Link } from 'react-router-dom';

function Computer() {
    return (
        <div id='CSTADD'>
            <h3 style={{textAlign: "center"}}>This is Computer Department</h3>
            <div id='linkSemester'>
                <Link to={'/1stSemester'}> For First Semester Stuedents. </Link>
                <Link to={'/2ndSemester'}> For Second Semester Stuedents. </Link>
                <Link to={'/3rdSemester'}> For Third Semester Stuedents. </Link>
                <Link to={'/4thSemester'}> For Fourth Semester Stuedents. </Link>
                <Link to={'/5thSemester'}> For Fifth Semester Stuedents. </Link>
                <Link to={'/6thSemester'}> For Sixth Semester Stuedents. </Link>
                <Link to={'/7thSemester'}> For Seventh Semester Stuedents. </Link>
            </div>
        </div>
    );
};

export default Computer;