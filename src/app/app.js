'use strict';

// Dependencies:
	// Chat
	// Form


class App {
	constructor(el) {
		this.el = el;
		
		this.chat = new Chat({
			el: document.createElement('div'),
			data: {
				messages: [
					{ text: 'Привет! Я онлайн', author: 'Tim' },
					{ text: 'Привет! Я тоже', author: 'Eugeny' }
				]
			}
		});
		this.form = new Form({
			el: document.createElement('div'),
			onSubmit: (message) => {
				this.chat.addMessage(message);
				this.chat.render();
			}
		});

		this.el.append(this.chat.el, this.form.el);

		this.render();
	}

	render() {
		this.chat.render();
		this.form.render();
	}
}
