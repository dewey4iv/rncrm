
export const isEmpty = (value) => {
    if (
        value == undefined
        || value == null
        || (typeof value === 'string' && value.trim() == '')
    ) {
        return true
    }

    return false
}

export const isPresent = (value) => {
    return !isEmpty(value)
}
