// @flow 
import React, { useEffect } from 'react';
import { LeftButton } from '../atoms/LeftButton';
import { PageNum } from '../atoms/PageNum';
import { RightButton } from '../atoms/RightButton';
import { View } from '../atoms/View'


type Props = {
    pageNum: any
    setPageNum: any
    data: any
    view: any
    setSplitData: any
    setView: any
    checkNum: any
}
export const PageButton = (props: Props) => {
    useEffect(() => { // props.data 이 들어오는데 view 만큼 배열을 짤라

        let arr: any = [];
        let arr2: any = []
        console.log(props.view, '프롭스쩜뷰')
        if (props.view === '1') {
            return props.data
        } else if (props.view === '5') {
            for (let i = 0; i < props.data.length; i += 5) {
                arr.push(props.data.slice(i, i + 5))
            }
        } else if (props.view === '10') {
            for (let i = 0; i < props.data.length; i += 10) {
                arr.push(props.data.slice(i, i + 10))
            }
        } else if (props.view === '30') {
            for (let i = 0; i < props.data.length; i += 30) {
                arr.push(props.data.slice(i, i + 30))
                console.log(arr[12])
            }
        }
        arr2.push(arr)
        props.setSplitData(arr2)
    }, [props.view])


    return (
        <div>
            <View
                view={props.view}
                setView={props.setView}
            />
            <LeftButton pageNum={props.pageNum} setPageNum={props.setPageNum} />
            {
                props.view === '1' ?
                    <PageNum setPageNum={props.setPageNum} count={1} />
                    :
                    [...Array(Math.ceil(props.data.length / props.view))].map((n: any, idx: number) => {
                        return <PageNum setPageNum={props.setPageNum} count={idx + 1} ></PageNum>
                    })
            }
            <RightButton pageNum={props.pageNum} setPageNum={props.setPageNum} view={props.view} data={props.data} />

            {/* 아래부분은 아톰까지 내리기 귀찮아서...걍 여기 만들었어요..프롭스 너무 귀찮...나아아아중에 수정할게유 */}
            {<div>{`${props.checkNum} / ${props.data.length} ----------데이터 현황`}</div>}
            {props.view === '1' ?
                <span>1/1 ----------페이지 현황</span> :
                <span>{`${props.pageNum} / ${Math.ceil(props.data.length / props.view)} ----------페이지 현황`}</span>

            }
            {/* 아톰까지 내리기 귀찮아서...걍 여기 만들었어요..프롭스 너무 귀찮... */}
        </div>
    );
};