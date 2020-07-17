import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

import data from '../../Data/data';

import './studentList.style.css';
import { Link } from 'react-router-dom';



function StudentListPage(props) {

    const [name, setName] = useState('')

    const history = useHistory();

    /* this.state = {value: ''}; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); */

    /* function handleChange(event) {
        this.setState({value: event.target.value});
      } */
    
      function handleSubmit(event) {
        event.preventDefault();
        history.push('/search/' + name)
      }

    /* async function handleClick(event) {
        return(
        <Link to={"search/"}></Link>
        )
    } */

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