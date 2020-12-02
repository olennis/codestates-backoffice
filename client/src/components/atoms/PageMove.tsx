// @flow 
import React, { useEffect } from 'react'
import { Pagination } from '@material-ui/lab';

type Props = {
    currentPage: any
    setCurrentPage: any
    data: any
};

export const PageMove = (props: Props) => {
    useEffect(() => {

    })

    return (
        <Pagination count={props.data.length} />
    );
};

/**
 * * useEffect
 * 전체로 보기를 수정
 *
 * 데이터를 몇개 씩 뿌려줄지 모르니
 * 5명씩을 선택했을 때,
 */