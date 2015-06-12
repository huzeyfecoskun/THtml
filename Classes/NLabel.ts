module Thtml {
	import NHTMLObject = Thtml.NHTMLObject;
	export class NLabel extends NHTMLObject {
		_obj: Object;
		text: string;
		constructor(displayText: string, _name: string, _id: string, _class: string) {
			super(_name, _id, _class);
			this.text = displayText;
			this.Render();
		}
		Render() {
			var body = "<div ";
			body += "id = '" + this.id + "' ";
			body += "name = '" + this.name + "' ";
			body += "class ='" + this._class + "' ";
			body += ">" + this.text + "</div>";
			this._obj = $(body);
			return (this._obj);
		}
	}
}