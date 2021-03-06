import React from 'react';
import { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { FormContext, useForm } from "react-hook-form";

import DefaultOptions from './DefaultOptions';
import LeaveRemovalComment from './LeaveRemovalComment';
import SendUserMessage from './SendUserMessage';
import SendModmail from './SendModmail';
import Actions from './Actions/Actions';
import SearchFields from './SearchField/SearchFields'
import ToDo from '../../ToDo';
import YAML from 'yaml';
import { filterRuleObject } from '../../utils/yamlUtils'
import { defaultValues } from '../../constants';

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

export default function NewRule (){
    const classes = useStyles();
    const methods = useForm({ defaultValues });
    const { handleSubmit, reset } = methods;
    const [data, setData] = useState(null);

    return (
        <Grid container spacing={3}>
        <Grid item xs={6}>
        <Card className={classes.card}>
            <CardContent>
                <FormContext {...methods}>
                <form onSubmit={handleSubmit(data => setData(data))}>
                    <h3>Create New Rule</h3>
                    <div>
                        <DefaultOptions/>
                        <SearchFields/>
                        <LeaveRemovalComment/>
                        <SendUserMessage/>
                        <SendModmail/>
                        <Actions/>
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
                </FormContext>
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardContent>
                <h3> Output </h3>
                {data && (
                    <pre style={{ textAlign: "left", color: "black" }}>
                        ---<br/>
                        {YAML.stringify(filterRuleObject(data), null, 2)}
                        ---
                    </pre>
                )}
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <h3> Upcoming Support </h3>
                    <ToDo/>
                </CardContent>
            </Card>
        </Grid>
        </Grid>
      );  
}