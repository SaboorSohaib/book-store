const initialState = [];

const CHECKSTATUS = 'CHECKSTATUS';


export default function CategoriesReducer(state = initialState, action = {}){
    switch(action.type){
        case CHECKSTATUS:
            return 'Under Building';
        default:
            return state
    };
};

export function CheckStatus(){
    return {
        type: CHECKSTATUS,
    };
};