function getDataByCityName(name) {
    fetch(`https://api.gismeteo.net/v2/search/cities/?query=${name}`, {
        headers: {
            "X-Gismeteo-Token": '56b30cb255.3443075',
        }
    })
    .then(res => JSON.parse(res))
    .then(res => {return res})
    .catch(res => {throw new Error(res)})
}

export {
    getDataByCityName
}