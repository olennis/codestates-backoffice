// @flow 
import React, { useEffect } from 'react'
import { Pagination } from '@material-ui/lab';


type Props = {
    currentPage: any
    setCurrentPage: any
    data: any
    setData: any
    view: any
    setPageNum: any
    splitData: any
    setSplitData: any
};

export const PageMove = (props: Props) => {
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
        props.view === '1'
            ? <Pagination count={props.data.length / props.data.length} variant="outlined" shape="rounded" />
            : <Pagination onClick={(event: any) => props.setPageNum(event.target.innerText)} count={Math.ceil(props.data.length / props.view)} variant="outlined" shape="rounded" />
    )

};

/**
 * ! Pagination 고려할 부분
 * * 토글인원 선택 --> 랜더되는 수강생이 토글인원 수
 * ? useEffect
 */
/**
 * * useEffect
 * 전체로 보기를 수정
 *
 * 데이터를 몇개 씩 뿌려줄지 모르니
 * 5명씩을 선택했을 때,
 */