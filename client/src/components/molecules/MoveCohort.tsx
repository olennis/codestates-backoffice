// @flow 
import * as React from 'react';

import {Name} from '../atoms/Name'
import {Before} from '../atoms/Before'
import {Present} from '../atoms/Present'
import {StudentCheck} from '../atoms/StudentCheck'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

type Props = {
    student : any,
    index : any,
    data : any,
    setData : any,
    gitCheck: any,
    slackCheck: any,
    calendar: any,

};
export const MoveCohort = (props: Props) => {
    const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '20%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);
    return (
        <div>
            <StudentCheck student={props.student} index={props.index} setData={props.setData} data={props.data}></StudentCheck>
            <Name student={props.student}></Name>
            <Before student={props.student}></Before>
            <Present student={props.student}></Present>
            {
                props.student.checkValue && props.gitCheck?
                    <span>🙆🏻‍♂️</span>:
                    <span>🙅🏻‍♀️</span>
            }
            {
                props.student.checkValue && props.slackCheck?
                    <span>🙆🏻‍♂️</span>:
                    <span>🙅🏻‍♀️</span>
            }
            {
                props.student.checkValue && props.calendar?
                    <span>🙆🏻‍♂️</span>:
                    <span>🙅🏻‍♀️</span>
            }
            {
                props.student.successValue === true?
                <span><Alert severity="success">성공!</Alert></span>:
                props.student.successValue === false?
                <span><Alert severity="error">실패!</Alert></span>:
                <span></span>
            }

        </div>
    );
};