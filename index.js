function findMatching(array, query) {
    return array.filter((element) => element.toLowerCase() == query.toLowerCase())
}

function fuzzyMatch(array, query) {
    return array.filter((element) => element.toLowerCase().startsWith(query[0].toLowerCase()))
}

function matchName(array, query) {
    return array.filter((element) => element.name.toLowerCase() === query.toLowerCase())
}