import {List} from 'immutable';

const {List} = 'immutable';

export function getListObject(array) {
    return List(array);
};

export function addElementToList(list, element) {
   const newList = List(list).push(element);

   return newList;

}