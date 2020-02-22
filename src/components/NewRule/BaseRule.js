import React from 'react';
import { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Input, InputLabel, FormControl, Select, MenuItem, Checkbox, TextField, Switch} from "@material-ui/core";
import { FormContext, useForm, useFormContext, Controller } from "react-hook-form";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 800,
        minWidth: 600,
        marginTop: '10px',
        marginBottom: '10px',
        backgroundColor: '#f2f3ff'
    },
    root: {
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    }
}));

const defaultValues = {
    type: "",
    priority: "",
    moderators_exempt: false,
    send_comment: false,
    comment_stickied: false,
    comment_locked: false,
    comment: "",
    send_message: false,
    message_subject: "",
    message: "",
    send_modmail: false,
    modmail_subject: "",
    modmail: "",
    Select: "",
    ReactSelect: "",
    RadioGroup: ""
  };

export default function NewRule (){
    const classes = useStyles();
    const { handleSubmit, register, reset, control, watch } = useForm({ defaultValues });
    const [data, setData] = useState(null);
    const send_comment = watch("send_comment");
    const send_message = watch("send_message");
    const send_modmail = watch("send_modmail");

    return (
        <Grid container spacing={3}>
        <Grid item xs={6}>
        <Card className={classes.card}>
            <CardContent>
                <form onSubmit={handleSubmit(data => setData(data))}>
                    <h1>Create New Rule</h1>
                    <div>
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
                        <Controller as={<TextField />} name="priority" control={control} />
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
                                <label>Stick Removal Comment?</label>
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
                                        
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            reset(defaultValues);
                        }}
                        >
                        Reset Form
                    </button>
                    <button>submit</button>
                </form>
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6}>
            <Card className={classes.card}>
            <label> Output </label>
            {data && (
                        <pre style={{ textAlign: "left", color: "black" }}>
                            {JSON.stringify(data, null, 2)}
                        </pre>
                    )}
            </Card>
        </Grid>
        </Grid>
      );  
}