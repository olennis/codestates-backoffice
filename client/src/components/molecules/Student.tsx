// @flow 
import * as React from 'react';
import styled from 'styled-components';
import {Name} from '../atoms/Name'
import {Email} from '../atoms/Email'
import {GitId} from '../atoms/GitId'
import {Before} from '../atoms/Before'
import {Present} from '../atoms/Present'
import {StudentCheck} from '../atoms/StudentCheck'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

type Props = {
    student: any,
    index: any,
    data: any,
    setData: any
    gitCheck: any,
    slackCheck: any,
    calendar: any,
    
};
export const Student = (props: Props) => {

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
        <div >
            <StudentCheck student={props.student} index={props.index} setData={props.setData} data={props.data}></StudentCheck>
            <Name student={props.student}></Name>
            <Email student={props.student}></Email>
            <GitId student={props.student}></GitId>
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

// const Container = styled.div`
// 	display: block;
// 	position: fixed;
// 	z-index: 1;
// 	left: 0;
// 	top: 0;
// 	width: 100%;
// 	height: 100vh;
// 	background-color: red
	
// `;