import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormContext, Controller } from "react-hook-form";
 
export default function UserActions (){
    const { control, watch} = useFormContext();    
    const set_flair = watch("set_flair");
    return (
        <section>
            <section>
                <label>Set User Flair? (WIP)</label>
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
        </section>
    )
}