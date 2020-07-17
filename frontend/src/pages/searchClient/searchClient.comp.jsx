import React from 'react';
import data from '../../Data/data'

function SearchPage(props) {
    console.log(props.match.params.name)
    const name = data.students.find(x => x.firstName == props.match.params.name || x.lastName == props.match.params.name);
    
    return (
        <div>
            <ul>
                <div>
                    <li>
                        {name.firstName} {name.lastName}
                    </li>
                </div>
            </ul>
        </div>
    )
} 

export default SearchPage;