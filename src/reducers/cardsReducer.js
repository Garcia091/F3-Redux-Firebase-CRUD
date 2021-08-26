import { types } from '../types/types'

const initialState = {
    card: [],
    active: {
        title: '',
        responsible: '',
        description: '',
        priority: ''
    }
}
export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.cardAddNew:
            return {
                ...state,
                card: [action.payload, ...state.card]
            }

        case types.cardLoad:
            return {
                ...state,
                card: [...action.payload]
            }

        case types.cardActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.cardUpdate:
            console.log(action.payload.id)
            return {
                ...state,
                card: state.card.map(
                    card => card.id === action.payload.id
                        ? action.payload.card
                        : card
                )
            }

        case types.cardLogoutClean:
            return {
                ...state,
                active: {
                    title: '',
                    responsible: '',
                    description: '',
                    priority: ''
                }
            }

        default:
            return state;
    }
}
