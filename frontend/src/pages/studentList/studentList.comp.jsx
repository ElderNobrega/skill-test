import React from 'react';

import data from '../../Data/data';

import './studentList.style.css';

function StudentListPage(props) {
    return (
        <div className="student-list">
            <div className="list-container">
                <div className="list">
                    <ul>
                    {
                    data.students.map(student => 
                        <li>
                            <h4>{student.firstName} {student.lastName}</h4>
                        </li>
                        )
                }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StudentListPage;