import { selectApp, appReducer, actions, State } from './app.store';

describe('App reducer', () => {
  it('action type: setLoggedInState', () => {
    const state: State = {
      loggedInState: false,
    };
    expect(appReducer(state, actions.setLoggedInState())).toEqual({
      loggedInState: true,
    });
  });

  it('action type: resetLoggedInState', () => {
    const state: State = {
      loggedInState: true,
    };
    expect(appReducer(state, actions.resetLoggedInState())).toEqual({
      loggedInState: false,
    });
  });
});
