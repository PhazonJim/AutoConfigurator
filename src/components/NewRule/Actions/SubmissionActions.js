import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormContext, Controller } from "react-hook-form";
 
export default function SubmissionActions (){
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
                <label>Log Action Reason?</label>
                <Controller as={<TextField />} name="action_reason" control={control}/>
            </section>
            <section>
                <label>Set Submission Flair?</label>
                <Controller as={<TextField />} name="set_flair" control={control}/>
            </section>
            <section>
                <label>Overwrite Existing Flair?</label>
                <Controller
                    as={<Checkbox />}
                    name="overwrite_flair"
                    type="checkbox"
                    control={control}
                />
            </section>
            <section>
                <label>Sticky Submission?</label>
                <Controller
                    as={<Checkbox />}
                    name="set_sticky"
                    type="checkbox"
                    control={control}
                />
            </section>
            <section>
                <label>Mark NSFW?</label>
                <Controller
                    as={<Checkbox />}
                    name="set_nsfw"
                    type="checkbox"
                    control={control}
                />
            </section>
            <section>
                <label>Mark Spoiler?</label>
                <Controller
                    as={<Checkbox />}
                    name="set_spoiler"
                    type="checkbox"
                    control={control}
                />
            </section>
            <section>
                <label>Mark OC?</label>
                <Controller
                    as={<Checkbox />}
                    name="set_original_content"
                    type="checkbox"
                    control={control}
                />
            </section>
            <section>
                <label>Set Contest Mode?</label>
                <Controller
                    as={<Checkbox />}
                    name="set_contest_mode"
                    type="checkbox"
                    control={control}
                />
            </section>
            <section>
                <label>Set Sort?</label>
                <Controller
                    as={
                        <Select>
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={"best"}>Best</MenuItem>
                        <MenuItem value={"new"}>New</MenuItem>
                        <MenuItem value={"qa"}>QA</MenuItem>
                        <MenuItem value={"top"}>Top</MenuItem>
                        <MenuItem value={"controversial"}>Controversial</MenuItem>
                        <MenuItem value={"hot"}>Hot</MenuItem>
                        <MenuItem value={"old"}>Old</MenuItem>
                        <MenuItem value={"blank"}>Blank</MenuItem>
                        </Select>
                    }
                    name="set_suggested_sort"
                    control={control}
                />
            </section>
            <section>
                <label>Set Locked?</label>
                <Controller
                    as={<Checkbox />}
                    name="set_locked"
                    type="checkbox"
                    control={control}
                />
            </section>
        </section>
    )
}