import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormContext, Controller } from "react-hook-form";
 
export default function CommentActions (){
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
                <label>Log Report Reason?</label>
                <Controller
                    as={<Checkbox />}
                    name="report_reason"
                    type="checkbox"
                    control={control}
                />
            </section>
        </section>
    )
}