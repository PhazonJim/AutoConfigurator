import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormContext, Controller } from "react-hook-form";
 
export default function DefaultOptions (){
    const { control } = useFormContext();

    return (
        <section>
            <section>
                <label>Rule Type </label>
                <Controller
                    as={
                        <Select>
                        <MenuItem value={"comment"}>Comment</MenuItem>
                        <MenuItem value={"submission"}>Submission</MenuItem>
                        <MenuItem value={"text_submission"}>Text Submission</MenuItem>
                        <MenuItem value={"link_submission"}>Link Submission</MenuItem>
                        <MenuItem value={"crosspost_submission"}>X-Post Submission</MenuItem>
                        <MenuItem value={"any"}>Any</MenuItem>
                        </Select>
                    }
                    name="type"
                    control={control}
                />
            </section>

            <section>
                <label>Priority </label>
                <Controller as={<TextField />} name="priority" control={control}/>
            </section>

            <section>
                <label>Mod Exempt?</label>
                <Controller
                    as={<Checkbox />}
                    name="moderators_exempt"
                    type="checkbox"
                    control={control}
                />
            </section>
        </section>
    )
}