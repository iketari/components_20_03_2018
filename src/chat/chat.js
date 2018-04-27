class Chat {
	constructor({el, data}) {
		this.el = el;
		this.data = data || { messages: [] };
	}

	render() {
		this.el.innerHTML = `
			<div class="chat">
				${this._getMessagesHtml()}
			</div>
		`;
	}

	addMessage(text) {
		this.data.messages = [
			...this.data.messages, 
			{ author: '%DEFAULT%', text }
		];
	}

	_getMessagesHtml() {
		return this.data.messages.map((messagesData) => {
			return `<div class="chat__message">
				${messagesData.author}:${messagesData.text}
			</div>`;
		}).join('');
	}
}