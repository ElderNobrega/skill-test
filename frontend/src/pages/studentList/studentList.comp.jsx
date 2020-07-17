import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import './studentList.style.css';

function StudentListPage(props) {

    const [name, setName] = useState('')
    const [clients, setClient] = useState([])

    const history = useHistory();

      function handleSubmit(event) {
        event.preventDefault();
        history.push('/search/' + name)
      }

    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get('/api/clients');
            setClient(data);
        }
        getData()
        return () => {

        }
    }, [])

    return (
        <div className="student-list">
            <div className="list-container">
                <div className="list">
                    <ul>
                    {
                    clients.map(client => 
                        <div key={client.id}>
                            <li>
                                <h4>{client.firstName} {client.lastName}</h4>
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