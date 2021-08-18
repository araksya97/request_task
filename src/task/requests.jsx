export  function  requests(url) {
    return fetch(url)
        .then((response) => response.json())
        .then(data => this.setState({
            data: data
        }));

}