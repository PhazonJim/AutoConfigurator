import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Input, Select, MenuItem } from "@material-ui/core";
import { FormContext, useForm, useFormContext, Controller } from "react-hook-form";

import DefaultOptions from './DefaultOptions';
import LeaveRemovalComment from './LeaveRemovalComment';
import SendUserMessage from './SendUserMessage';
import SendUserModmail from './SendUserModmail';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 800,
        minWidth: 600,
        marginTop: '10px',
        marginBottom: '10px',
        backgroundColor: '#f2f3ff'
    }
}));

export const ConnectForm = ({ children }) => {
    const methods = useFormContext();
    
    return children({
      ...methods
    });
};

const defaultValues = {
    select: "",
    input: ""
  };

export const NestedComponent = () => {
    return (
    <ConnectForm>
        {
            ({ register , control, reset}) => 
                <div>
                    <Controller
                        as={
                        <Select>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        }
                        control={control}
                        name="select"
                        defaultValue={10}
                    />
                    <Input inputRef={register} name="input" />
                    <button type="button" onClick={() => reset({ defaultValues })}>Reset</button>
                    <input type="submit" />
                </div>
                
        }
    </ConnectForm>
    )
}

export default function NewRule (){
    const classes = useStyles();
    const methods = useForm({ defaultValues });
    const onSubmit = data => {
        console.log(data);
    }


    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <CardContent>
                        <FormContext {...methods} >
                            <form onSubmit={methods.handleSubmit(onSubmit)}>
                                <NestedComponent/>
                            </form>
                        </FormContext>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
      );  
}