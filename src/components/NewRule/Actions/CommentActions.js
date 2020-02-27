import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { useFormContext, Controller } from "react-hook-form";
 
export default function CommentActions (){
    const { control } = useFormContext();    
    return (
        <section>
            <section>
                <label>Perform Moderator Action?</label>
                <Controller
                    as={
                        <Select>
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"remove"}>Remove</MenuItem>
                        <MenuItem value={"filter"}>Filter</MenuItem>
                        <MenuItem value={"spam"}>Spam</MenuItem>
                        <MenuItem value={"report"}>Report</MenuItem>
                        </Select>
                    }
                    name="action"
                    control={control}
                />
            </section>
            <section>
                <label>Log Report Reason?</label>
                <Controller as={<TextField />} name="report_reason" control={control}/>
            </section>
        </section>
    )
}