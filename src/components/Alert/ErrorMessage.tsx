import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

type Props = {
  message: string;
};

const useStyles = makeStyles((theme: Theme) =>
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

const ErrorMessage: React.FC<Props> = ({ message }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">{message}</Alert>
    </div>
  );
};

export default ErrorMessage;
