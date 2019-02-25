import {
  configureStore,
  combineReducers,
  createSlice
} from 'redux-starter-kit';

const date = createSlice({
  slice: 'date',
  initialState: Date.now(),
  reducers: {
    setDate: (state, action) => action.payload
  }
});

type Date = {
  title: string;
  startTime: Date;
  endTime: Date;
};

const initialEventsState: Date[] = JSON.parse(
  localStorage.getItem('events') || '[]'
);

const events = createSlice({
  slice: 'events',
  initialState: initialEventsState,
  reducers: {
    addEvent: (state: Date[], action) => {
      return [...state, action.payload];
    }
  }
});

const reducer = combineReducers({
  events: events.reducer,
  date: date.reducer
});

export const store = configureStore({
  reducer: reducer
});

export const addEvent = events.actions.addEvent;
