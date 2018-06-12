const getJson = url => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => { return response.json() })
            .then(jsonParse => { resolve(jsonParse) })
            .catch(err => { reject(err) });
    })
}

export default getJson;