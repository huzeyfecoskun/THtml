var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Thtml;
(function (Thtml) {
    var NHTMLObject = Thtml.NHTMLObject;
    var NLabel = (function (_super) {
        __extends(NLabel, _super);
        function NLabel(displayText, _name, _id, _class) {
            _super.call(this, _name, _id, _class);
            this.text = displayText;
            this.Render();
        }
        NLabel.prototype.Render = function () {
            var body = "<div ";
            body += "id = '" + this.id + "' ";
            body += "name = '" + this.name + "' ";
            body += "class ='" + this._class + "' ";
            body += ">" + this.text + "</div>";
            this._obj = $(body);
            return (this._obj);
        };
        return NLabel;
    })(NHTMLObject);
    Thtml.NLabel = NLabel;
})(Thtml || (Thtml = {}));
//# sourceMappingURL=NLabel.js.map