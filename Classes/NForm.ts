/// <reference path="NHtmlAttribute.ts" />
/// <reference path="NHtmlObject.ts" />
/// <reference path="NInput.ts" />
/// <reference path="NLabel.ts" />

module Thtml {

	import NHTMLObject = Thtml.NHTMLObject;
	import NLabel = Thtml.NLabel;
	import NInput = Thtml.NInput;
	
	export class NForm extends NHTMLObject {

		_obj: Object;
		method: string;
		action: string;
		childs: Array<any>;
		onSubmit: Object;

		constructor(action: string, method: string, name: string, id: string, _class: string) {
			super(name, id, _class);
			this.action = action;
			this.method = method;
			this.childs = new Array();
		}
		AddAttribute(k: string, v: string) {
			this.AddAttribute(k, v);
		}

		AddLabel(text: string, _name: string, _id: string, _class: string) {
			var tmp: NLabel = new NLabel(text, _name, _id, _class);
			this.childs.push(tmp);
		}

		AddInput(name: string, id: string, _class: string, _type: string) {
			var tmp: NInput = new NInput(name, id, _class, _type);
			if (_type == "submit") {
				tmp.AddAttribute("value", name);
				tmp.Render();
			}
			this.childs.push(tmp);
		}

		CreateFormFromArray(array: Array<string>) {
			for (var i = 0; i < array.length; i += 2) {
				if (array[i].indexOf("password") > -1) {
					this.AddLabel(array[i], "lbl", "lbl", "class");
					this.AddInput(array[i + 1], array[i + 1], "form-control", "password");
				} else if (array[i].indexOf("submit") > -1) {
					this.AddInput(array[i + 1], array[i + 1], "btn btn-primary", "submit");
				} else {
					this.AddLabel(array[i], "lbl", "lbl", "class");
					this.AddInput(array[i + 1], array[i + 1], "form-control", "text");
				}
			}
		}

		CreateFormFromJSON(json: string) {
			var o = $.parseJSON(json);
			for (var i = 0; i < o.length; i++) {
				this.AddLabel(o[i].text, o[i].name, o[i].id, o[i]._class);
				this.AddInput(o[i].name, o[i].id, o[i]._class, o[i].type);
			}
		}

		Render() {
			var body: string;
			body = "<form action = '" + this.action + "' method = '" + this.method + "' ";
			body += "name = '" + this.name + "' ";
			body += "id = '" + this.id + "' ";
			body += "class = '" + this._class + "'>";
			body += "</form>";
			this._obj = $(body);

			for (var i = 0; i < this.childs.length; i++) {
				$(this._obj).append(this.childs[i]._obj);
			}
			return (this._obj);
		}

	}
}
