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
                        <MenuItem value={1}>Comment</MenuItem>
                        <MenuItem value={2}>Submission</MenuItem>
                        <MenuItem value={3}>Text Submission</MenuItem>
                        <MenuItem value={4}>Link Submission</MenuItem>
                        <MenuItem value={5}>X-Post Submission</MenuItem>
                        <MenuItem value={6}>Any</MenuItem>
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