import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormContext, Controller } from "react-hook-form";
 
export default function SendUserMessage (){
    const { control, watch} = useFormContext();
    const send_message = watch("send_message");
    return (
        <section>
            {/* Send User Message */}
            <section>
                <label>Send User Private Message?</label>
                <Controller
                    as={<Checkbox />}
                    name="send_message"
                    type="checkbox"
                    control={control}
                />
            </section>
            {
                send_message && (
                    <section>
                    <section>
                        <label>Private Message Subject</label>
                        <Controller as={<TextField />} name="message_subject" control={control} />
                    </section>
                    <section>
                        <label>Private Message Body</label>
                        <Controller as={<TextField />} name="message" control={control} />
                    </section>
                    </section>
                )
            }
        </section>
    )
}