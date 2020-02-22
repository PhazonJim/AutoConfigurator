import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormContext, Controller } from "react-hook-form";
 
export default function SendModmail (){
    const { control, watch} = useFormContext();
    const send_modmail = watch("send_modmail");
    return (
        <section>
            {/* Send User Message */}
            <section>
                <label>Send Modmail?</label>
                <Controller
                    as={<Checkbox />}
                    name="send_modmail"
                    type="checkbox"
                    control={control}
                />
            </section>
            {
                send_modmail && (
                    <section>
                    <section>
                        <label>Modmail Subject</label>
                        <Controller as={<TextField />} name="modmail_subject" control={control} />
                    </section>
                    <section>
                        <label>Message Body</label>
                        <Controller as={<TextField />} name="modmail" control={control} />
                    </section>
                    </section>
                )
            }
        </section>
    )
}