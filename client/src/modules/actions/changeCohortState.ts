export const SETCOHORT = './changeCohortState/SETCOHORT' as const; //액션


export const setCohort = (cohort: string) => ({//액션 객체 생성 함수
    type: SETCOHORT, 
    payload : cohort//'full im 21'
})

type CohortAction = | ReturnType<typeof setCohort>;//공부할 부분
type CohortState = {
    cohort : string
}

const initialState: CohortState = {
    cohort : ''//0 null ''
}

const changeCohortState = (state : CohortState = initialState, action:CohortAction ) => {
	switch (action.type) {
		case SETCOHORT:
			return {
				cohort: action.payload,
				
			};
		default:
			return state;
	}
	
};
export default changeCohortState;