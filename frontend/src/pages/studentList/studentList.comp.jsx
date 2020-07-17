import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

import './studentList.style.css';
import { Link } from 'react-router-dom';

function StudentListPage(props) {

    const [name, setName] = useState('')
    const [client, setClient] = useState([])

    const history = useHistory();

      function handleSubmit(event) {
        event.preventDefault();
        history.push('/search/' + name)
      }

    useEffect

    return (
        <div className="student-list">
            <div className="list-container">
                <div className="list">
                    <ul>
                    {
                    data.students.map(student => 
                        <div key={student.id}>
                            <li>
                                <h4>{student.firstName} {student.lastName}</h4>
                            </li>
                        </div>
                        )
                    }
                    </ul>
                </div>
            </div>
            <div>
                <form>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Search by name"></input>
                    <input type="submit" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    )
}

export default StudentListPage;