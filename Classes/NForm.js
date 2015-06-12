
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Thtml;
(function (Thtml) {
    var NHTMLObject = Thtml.NHTMLObject;
    var NLabel = Thtml.NLabel;
    var NInput = Thtml.NInput;
    var NForm = (function (_super) {
        __extends(NForm, _super);
        function NForm(action, method, name, id, _class) {
            _super.call(this, name, id, _class);
            this.action = action;
            this.method = method;
            this.childs = new Array();
        }
        NForm.prototype.AddAttribute = function (k, v) {
            this.AddAttribute(k, v);
        };
        NForm.prototype.AddLabel = function (text, _name, _id, _class) {
            var tmp = new NLabel(text, _name, _id, _class);
            this.childs.push(tmp);
        };
        NForm.prototype.AddInput = function (name, id, _class, _type) {
            var tmp = new NInput(name, id, _class, _type);
            if (_type == "submit") {
                tmp.AddAttribute("value", name);
                tmp.Render();
            }
            this.childs.push(tmp);
        };
        NForm.prototype.CreateFormFromArray = function (array) {
            for (var i = 0; i < array.length; i += 2) {
                if (array[i].indexOf("password") > -1) {
                    this.AddLabel(array[i], "lbl", "lbl", "class");
                    this.AddInput(array[i + 1], array[i + 1], "form-control", "password");
                }
                else if (array[i].indexOf("submit") > -1) {
                    this.AddInput(array[i + 1], array[i + 1], "btn btn-primary", "submit");
                }
                else {
                    this.AddLabel(array[i], "lbl", "lbl", "class");
                    this.AddInput(array[i + 1], array[i + 1], "form-control", "text");
                }
            }
        };
        NForm.prototype.CreateFormFromJSON = function (json) {
            var o = $.parseJSON(json);
            for (var i = 0; i < o.length; i++) {
                this.AddLabel(o[i].text, o[i].name, o[i].id, o[i]._class);
                this.AddInput(o[i].name, o[i].id, o[i]._class, o[i].type);
            }
        };
        NForm.prototype.Render = function () {
            var body;
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
        };
        return NForm;
    })(NHTMLObject);
    Thtml.NForm = NForm;
})(Thtml || (Thtml = {}));
//# sourceMappingURL=NForm.js.map