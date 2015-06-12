/// <reference path="jquery.d.ts" />
/// <reference path="NHtmlAttribute.ts" />
//Base HTML Object
//Name stores of the name attribute
//id  stores of the id attribute
//_class stores class of the element
//attributes stores all the other attributes of the object
var Thtml;
(function (Thtml) {
    var NHTMLAttribute = Thtml.NHTMLAttribute;
    var NHTMLObject = (function () {
        //Basic Constructor 
        function NHTMLObject(_name, _id, _class) {
            this.name = _name;
            this.id = _id;
            this._class = _class;
            this.attributes = new Array();
        }
        //Add Attribute to the object
        NHTMLObject.prototype.AddAttribute = function (key, value) {
            var tmp = new NHTMLAttribute();
            tmp.name = key;
            tmp.value = value;
            this.attributes.push(tmp);
        };
        return NHTMLObject;
    })();
    Thtml.NHTMLObject = NHTMLObject;
})(Thtml || (Thtml = {}));
//# sourceMappingURL=NHtmlObject.js.map