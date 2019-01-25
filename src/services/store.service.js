import { Subject } from 'rxjs';

// create a Subject instance
let store = new Subject();
let copyStore = {};

export function setStore(key, value) {
    copyStore[key] = value;
    store.next(copyStore);
}

function getCopy(value) {
    return JSON.parse(JSON.stringify(value));
}

export default store;