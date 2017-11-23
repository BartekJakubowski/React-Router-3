import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import { getCountries } from './actions/actions-countries'

render(
    <div>
        <h1>Works</h1>
        <Provider store={store}>
            <DevTools />
        </Provider>
    </div>,
    document.getElementById('root')
);

store.dispatch(getCountries());
console.log(store.getState());