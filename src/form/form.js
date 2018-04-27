class Form	{
	constructor({el, onSubmit}) {
		this.el = el;
		this.cb = onSubmit;

		this._initEvents();
	}

	render() {
		this.el.innerHTML = `
			<form class="form">
				<textarea name="message"></textarea>
				<br>
				<input type="submit" value="Send messages">
			</form>
		`;
	}

	_initEvents() {
		this.el.addEventListener('submit', this._onSubmit.bind(this));
	}

	_onSubmit(event) {
		event.preventDefault();
		const el = event.target;

		const message = el.querySelector('[name="message"]').value;

		this.cb(message);
		el.reset();
	}
}