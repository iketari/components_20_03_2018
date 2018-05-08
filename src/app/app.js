import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';
import {HttpService} from './../modules/http.service.js';

const USER_NAME = 'Artsiom';


export class App {
    constructor({el}) {
        this.el = el;
        this.http = new HttpService('https://positivebooks-db9f7.firebaseio.com/');

        this.chat = new Chat({
            el: document.createElement('div'),
            data: {
                messages: [],
                user: USER_NAME
            }
        });
        this.form = new Form({
            el: document.createElement('div'),
            onSubmit: this._onFormSubmit.bind(this)
        });

        this.el.append(this.chat.el, this.form.el);

        this._initEvents();
        this.http.get('/chat.json', (data) => {
            this.chat.add(Object.values(data));
            this.render();
        });
    }

    render() {
        this.chat.render();
        this.form.render();
    }

    _initEvents() {

    }

    _onFormSubmit({text}) {
        this.http.post('/chat.json', {
            text,
            name: USER_NAME
        }, (data) => {
            this.chat.addOne({
                text,
                name: USER_NAME
            });
            this.render();
        });
    }
}
