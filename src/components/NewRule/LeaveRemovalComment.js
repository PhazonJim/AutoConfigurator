import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormContext, Controller } from "react-hook-form";
 
export default function LeaveRemovalComment (){
    const { control, watch} = useFormContext();
    const send_comment = watch("send_comment");
    return (
        <section>
            {/* Removal Comment Section */}
            <section>
                <label>Leave Removal Comment?</label>
                <Controller
                    as={<Checkbox />}
                    name="send_comment"
                    type="checkbox"
                    control={control}
                />
            </section>
            { 
                send_comment === true && (
                    <section>
                    <section>
                        <label>Lock Removal Comment?</label>
                        <Controller
                            as={<Checkbox />}
                            name="comment_locked"
                            type="checkbox"
                            control={control}
                        />
                    </section>
                    <section>
                        <label>Sticky Removal Comment?</label>
                        <Controller
                            as={<Checkbox />}
                            name="comment_stickied"
                            type="checkbox"
                            control={control}
                        />
                    </section>
                    <section>
                        <label>Removal Comment Content</label>
                        <Controller as={<TextField />} name="comment" control={control} />
                    </section>
                    </section>
                )
            } 
        </section>
    )
}