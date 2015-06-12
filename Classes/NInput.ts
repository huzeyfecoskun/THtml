/// <reference path="NHtmlObject.ts" />
/// <reference path="jquery.d.ts" />

module Thtml {
	
	import NHTMLObject = Thtml.NHTMLObject;

	export class NInput extends NHTMLObject {
		otype: string = "input";
		type: string;
		_obj: Object;
		constructor(name: string, id: string, _class: string, _type: string) {
			super(name, id, _class);
			this.type = _type;
			this.Render();
		}
		Render() {
			var body: string;
			body = "<input ";
			body += "name = '" + this.name + "' ";
			body += "class = '" + this._class + "' ";
			body += "id = '" + this.id + "' ";
			body += "type = '" + this.type + "' ";
			if (this.attributes != null) {
				for (var i = 0; i < this.attributes.length; i++) {
					body += this.attributes[i].name + "= '" + this.attributes[i].value + "' ";
				}
			}
			body += " />";
			this._obj = $(body);
			return (this._obj);
		}
	}
}
