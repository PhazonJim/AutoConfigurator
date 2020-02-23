import React from 'react';
import { useFormContext, Controller } from "react-hook-form";
import Checkbox from '@material-ui/core/Checkbox';
import SubmissionActions from './SubmissionActions';
import CommentActions from './CommentActions';

export default function Actions (){
    const { control, watch} = useFormContext();
    const type = watch("type");
    const perform_action = watch("perform_action")
    const suboptions = ['submission', 'text_submission', 'link_submission']
    return (
        <section>
            <section>
                <label>Perform Action?</label>
                <Controller
                    as={<Checkbox />}
                    name="perform_action"
                    type="checkbox"
                    control={control}
                />
            </section>
            {
                suboptions.indexOf(type) !== -1 && (
                    <section>
                    {
                        perform_action === true && (
                            <SubmissionActions/>
                        )
                    }
                    </section>
                )
            }
            {
                type === 'comment' && (
                    <section>
                    {
                        perform_action === true && (
                            <CommentActions/>
                        )
                    }
                    </section>
                )
            }
        </section>
    )
}