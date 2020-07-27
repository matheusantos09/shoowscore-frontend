import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

type Props = {
  message: string;
}

const useStyles = makeStyles(( theme: Theme ) =>
  createStyles({
    root: {
      marginTop: 20,
      display: 'flex',
      justifyContent: 'center',
      flexGrow: 1,
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

function ErrorMessage ( { message }: Props ) {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <Alert severity="error">{ message }</Alert>
    </div>
  )
}

export default ErrorMessage
