const {Map } = require("immutable");
export const mergeDeeplyElements = (page1, page2) => {

    return Map(page1).mergeDeep(Map(page2));


}