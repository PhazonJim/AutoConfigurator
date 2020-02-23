import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormContext, Controller } from "react-hook-form";
 
export default function SubmissionActions (){
    const { control } = useFormContext();
    return (
        <section>
            <section>
                <label>Perform Moderator Action?</label>
                <Controller
                    as={<Checkbox />}
                    name="action"
                    type="checkbox"
                    control={control}
                />
            </section>
            <section>
                <label>Log Action Reason?</label>
                <Controller
                    as={<Checkbox />}
                    name="action_reason"
                    type="checkbox"
                    control={control}
                />
            </section>
            <section>
                <label>Set Submission Flair?</label>
                <Controller
                    as={<Checkbox />}
                    name="set_flair"
                    type="checkbox"
                    control={control}
                />
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
                    as={<Checkbox />}
                    name="set_suggested_sort"
                    type="checkbox"
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