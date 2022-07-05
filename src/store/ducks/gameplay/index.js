import Store from '../index';

export const Types = {
  INIT_SCENARY: 'gameplay/INIT_SCENERY'
};


const initialState = {
  scenary_manifest: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_STATE_MODAL:
      return { ...state, stateModal: action.payload.modal };

    default:
      return state;
  }
}

export const Dispatchers = {
  initScenary: (scenary) => Store.dispatch({
    type: Types.INIT_SCENARY,
    payload: {
      scenary_manifest: scenary,
    }
  })

};
