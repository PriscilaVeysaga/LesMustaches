//ações específicas e locais de aramazenamento
//para os dados de usuário

export const initialState = {
    avatar: '',
    favorites: [],
    appointments: []
};

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar };
        break;
        default:
            return state;
    }
}