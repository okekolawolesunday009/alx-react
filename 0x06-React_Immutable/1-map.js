import {fromJS} from 'immutable';

export const getImmutableObject = (object) => {
    return Map(object)

}

console.log(getImmutableObject({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
}));