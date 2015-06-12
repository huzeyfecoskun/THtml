/// <reference path="NHtmlObject.ts" />
/// <reference path="jquery.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Thtml;
(function (Thtml) {
    var NHTMLObject = Thtml.NHTMLObject;
    var NInput = (function (_super) {
        __extends(NInput, _super);
        function NInput(name, id, _class, _type) {
            _super.call(this, name, id, _class);
            this.otype = "input";
            this.type = _type;
            this.Render();
        }
        NInput.prototype.Render = function () {
            var body;
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
        };
        return NInput;
    })(NHTMLObject);
    Thtml.NInput = NInput;
})(Thtml || (Thtml = {}));
//# sourceMappingURL=NInput.js.map