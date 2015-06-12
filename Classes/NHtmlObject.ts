/// <reference path="jquery.d.ts" />
/// <reference path="NHtmlAttribute.ts" />

//Base HTML Object
//Name stores of the name attribute
//id  stores of the id attribute
//_class stores class of the element
//attributes stores all the other attributes of the object

module Thtml
{
	import NHTMLAttribute = Thtml.NHTMLAttribute;
	export class NHTMLObject {
		name: string;
		id: string;
		_class: string;
		attributes: Array<NHTMLAttribute>;
	
		//Basic Constructor 
		constructor(_name: string, _id: string, _class: string) {
			this.name = _name;
			this.id = _id;
			this._class = _class;
			this.attributes = new Array();
		}
	
		//Add Attribute to the object
		AddAttribute(key: string, value: string) {
			var tmp: NHTMLAttribute = new NHTMLAttribute();
			tmp.name = key;
			tmp.value = value;
	
			this.attributes.push(tmp);
		}
	}	
}