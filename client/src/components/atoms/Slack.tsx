// @flow 
import * as React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
type Props = {
    slackCheck: any
    setSlackCheck: any
    data: any
    setData: any
};
export const Slack = (props: Props) => {

    const slmoji = (event: any) => {
        props.setSlackCheck(event.target.checked)
        props.setData(props.data.map((student: any) => {
            if (student.checkValue && event.target.checked) {
                student.slackcheck = true
            }
            else {
                student.gitcheck = false
            }
            return student
        }))

    }
    return (
        <th>
            Slack <Checkbox color='primary' onClick={(event: any) => slmoji(event)} />
        </th>
    );
};


