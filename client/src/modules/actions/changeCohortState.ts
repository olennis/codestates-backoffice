export const SETCOHORT = 'SET_COHORT';

export const setCohort = (cohort: string) => ({type:SETCOHORT, cohort : cohort})

const initialState = {cohort : null}

const changeCohortState = (cohortData = initialState, action: any) => {
    //나중에 타입 바꿀것
	switch (action.type) {
		case SETCOHORT:
			return {
				cohort: action.cohortData.cohort,
				
			};
		default:
			return cohortData;
	}
};
export default changeCohortState;