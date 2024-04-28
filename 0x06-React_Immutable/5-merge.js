import {List, Map} from 'immutable';



export const concatElements = (page1, page2) => {
    const list1 = List(page1);
    const list2 = List(page2);
    return (list1, list2);

}

export const mergeElements = (page1, page2) => Map(page1).merge(Map(page2));