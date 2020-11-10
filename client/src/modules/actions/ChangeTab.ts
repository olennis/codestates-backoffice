export const TAB = "TAB" as const;

export const setTab = (tab: number) => ({ type: TAB, tab });

type TabAction = | ReturnType<typeof setTab>;

type TabState = {
    tab: number
}

const initialState: TabState = {
    tab: 0
}

const changeTabState = (state: TabState = initialState, action: TabAction) => {
    switch (action.type) {
        case TAB:
            return { tab: state.tab }
    }
}

export default changeTabState;