const initialState = {
  pickups: {
    isPending: false,
    isSettled: false,
    error: null,
    pickupsList: [],
  },
  createPickup: {
    isPending: false,
    isSettled: false,
    error: null,
    pickup: null,
  },
};

export function business(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
