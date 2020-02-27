import React  from "react";
import { useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircle';

let id = 0;

const SearchField = (props) => {
    
    return (
        <section>

        </section>
    )
}

export default function SearchFields (){
    const [value, setValue] = useState({
        searchFields: []
    });

    const  handleAddSearch = () => {
        let searchFields = value['searchFields'];
        searchFields.push({id: id, key: '', mods: '', values: []})
        setValue({...value, 'searchFields': searchFields})
        id += 1;
        console.log(value['searchFields'])
    }

    return (
        <section>
            <section>
                <label>Add Search Criteria?</label>
                <IconButton onClick={handleAddSearch}>
                    <AddIcon/>
                </IconButton>
            </section>
            <section>
                {
                    Object.keys(value['searchFields']).map( index => {
                        return (
                            <SearchField values={value['searchFields'][index]}/>
                        )
                    })
                }
            </section>
        </section>
    )
}