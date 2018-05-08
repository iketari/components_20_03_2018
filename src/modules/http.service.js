export class HttpService {
    constructor(baseUrl = '') {
        this.baseUrl = baseUrl;
    }

    get(path, cb) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.baseUrl + path, true);

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState !== 4) {
                return;
            }

            cb(JSON.parse(xhr.responseText));
        });

        xhr.send();
    }

    post(path, data, cb) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', this.baseUrl + path, true);

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState !== 4) {
                return;
            }

            cb(JSON.parse(xhr.responseText));
        });

        xhr.send(JSON.stringify(data));
    }
}
