<img src="https://miro.medium.com/max/688/1*lBW3KS3I68NnxoB7_maVBA.png" align=right width=40 style="margin-top: 40px">

# Redux & API Calls

## Overview

#### Store

#### Actions

#### Reducers

#### Combine Reducers

#### Modules

#### Connect

#### Dispatch

#### async/await

#### request.js

#### entities

#### API

## Example

<img src="https://miro.medium.com/max/688/1*lBW3KS3I68NnxoB7_maVBA.png" align=right width=40 style="margin-top: 40px">

# Redux Patterns

## Example

**/modules/entities.js**

```javascript
import request from '../utils/request';

class Entity {
    constructor({ path, query }) {
        this.path = path;
        this.query = query;
    }

    list(type, query) {
        query = query || this.query;
        return request(type, this.path, 'GET', null, query);
    }

    create(type, payload, query) {
        query = query || this.query;
        console.log(
            'CREATE REQUEST: ',
            type,
            this.path,
            'POST',
            payload,
            query
        );
        return request(type, this.path, 'POST', payload, query);
    }

    update(type, id, payload, query) {
        const url = `${this.path}/${id}`;
        query = query || this.query;
        return request(type, url, 'PUT', payload, query);
    }

    patch(type, id, payload, query) {
        const url = `${this.path}/${id}`;
        query = query || this.query;
        return request(type, url, 'PATCH', payload, query);
    }

    get(type, id, query) {
        const url = `${this.path}/${id}`;
        query = query || this.query;
        return request(type, url, 'GET', null, query);
    }

    /**
     * @param {string} type - The action
     * @param {string | number} id - The entity identifier
     * @param {string} [code] - An optional code which might be required by the endpoint
     */
    delete(type, id, code = '') {
        const url = `${this.path}/${id}?code=${code}`;
        return request(type, url, 'DELETE');
    }
}

export const user = new Entity({
    path: '/users'
});

export const setting = new Entity({
    path: '/settings'
});

export const editor = new Entity({
    path: '/editors'
});

export const goal = new Entity({
    path: '/goals'
});

export const session = new Entity({
    path: '/sessions'
});

export const summary = new Entity({
    path: '/summary'
});

export const highlights = new Entity({
    path: '/highlights'
});

export const surveys = new Entity({
    path: '/surveys'
});

export const feedback = new Entity({
    path: '/feedback'
});

export const predictions = new Entity({
    path: '/sessions/predictions'
});

export const calendar = new Entity({
    path: '/calendars'
});

export const dashboard = new Entity({
    path: '/dashboard'
});

export const feed = new Entity({
    path: '/feed'
});

export const groups = new Entity({
    path: '/groups'
});

export const projects = new Entity({
    path: '/projects'
});

export const playlist = new Entity({
    path: '/music/playlist'
});
```

**/utils/request.js**

Interseptor &mdash; adds HTTP headers Content-Type and Authorization, mode: 'cors'
adds base-url, adds query string

```javascript
import { invalidateLogin } from '../modules/user';

export default function request(type, path, method, payload, query, options) {
    return async (dispatch, store) => {
        const { user } = store();

        method = method || 'GET';
        const hasBody = method !== 'GET';

        const queryString =
            query &&
            Object.keys(query)
                .map(key => key + '=' + query[key])
                .join('&');
        const suffix = query ? path + '?' + queryString : path;
        const url = `${process.env.REACT_APP_API_SERVER || ''}${suffix}`;
        const body = hasBody ? JSON.stringify(payload) : undefined;

        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };

        if (user && user.auth) {
            headers.Authorization = user.auth;
        }

        dispatch({
            type,
            url,
            payload,
            query,
            isLoading: true,
            ...options
        });

        return window
            .fetch(url, {
                method,
                body,
                headers: new window.Headers(headers),
                mode: 'cors',
                cache: 'default',
                redirect: 'follow'
            })
            .then(res => {
                if (res.status === 401) {
                    dispatch(invalidateLogin()).then(
                        () => (window.location = '/login')
                    );
                }

                return res.json().then(
                    body => {
                        return dispatch({
                            type,
                            body,
                            payload,
                            query,
                            url: res.url,
                            status: res.status,
                            headers: res.headers,
                            ok: res.ok,
                            isLoading: false,
                            ...options
                        });
                    },
                    error => {
                        return dispatch({
                            type,
                            error,
                            payload,
                            query,
                            url: res.url,
                            status: res.status,
                            headers: res.headers,
                            parseError: true,
                            isLoading: false,
                            ...options
                        });
                    }
                );
            })
            .catch(error => {
                return dispatch({
                    type,
                    error,
                    url,
                    payload,
                    query,
                    failed: true,
                    isLoading: false,
                    ...options
                });
            });
    };
}
```

**/modules/music.js**

```javascript
import request from 'utils/request';
import terms from 'glossary/index';

export const actions = {
    fetchRecommendations: 'FETCH_MUSIC_RECOMMENDATIONS',
    fetchAudioFeaturesVsProductivity:
        'FETCH_MUSIC_AUDIO_FEATURES_VS_PRODUCTIVITY',
    setAudioFeature: 'SET_AUDIO_FEATURE'
};

export function fetchRecommendations() {
    return request(
        actions.fetchRecommendations,
        `/music/recommendations`,
        'GET'
    );
}

export function fetchAudioFeaturesVsProductivity(start, end) {
    return request(
        actions.fetchAudioFeaturesVsProductivity,
        `/music/audioFeatures`,
        'GET',
        null,
        { start, end }
    );
}

export function setAudioFeature(audioFeature) {
    return {
        type: actions.setAudioFeature,
        payload: audioFeature
    };
}

const INITIAL_AUDIO_FEATURES = Object.keys(terms)
    .filter(n => n.indexOf('AUDIO_FEATURE_') === 0)
    .reduce((acc, cur) => {
        const key = cur.replace('AUDIO_FEATURE_', '').toLowerCase();
        acc[key] = { ...terms[cur] };
        return acc;
    }, {});

const INITIAL_STATE = {
    recommended: [],
    audioFeaturesVsProductivity: [],
    selectedAudioFeature: 'energy',
    audioFeatures: INITIAL_AUDIO_FEATURES
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.fetchRecommendations:
            return {
                ...state,
                recommended: action.ok ? action.body : INITIAL_STATE.recommended
            };

        case actions.fetchAudioFeaturesVsProductivity:
            return {
                ...state,
                audioFeaturesVsProductivity: action.ok
                    ? action.body
                    : INITIAL_STATE.audioFeaturesVsProductivity
            };

        case actions.setAudioFeature:
            return {
                ...state,
                selectedAudioFeature: action.payload
            };

        default:
            return state;
    }
}
```

music.js Recommendations related code:

```javascript
// action constant
export const actions = {
    fetchRecommendations: 'FETCH_MUSIC_RECOMMENDATIONS'
};

// action creator
export function fetchRecommendations() {
    return request(
        actions.fetchRecommendations,
        `/music/recommendations`,
        'GET'
    );
}

// initial state
const INITIAL_STATE = {
    recommended: []
};

/**
 * reducer
 * @param {object} state || INITIAL_STATE - the empty recommended array
 * @param {} action
 *
 * @returns {object} new state - includes key: recommend
 *
 */
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.fetchRecommendations:
            return {
                ...state,
                recommended: action.ok ? action.body : INITIAL_STATE.recommended
            };

        default:
            return state;
    }
}
```
