var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super.call(this) || this;
    }
    Login.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Login.prototype.childrenCreated = function () {
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
        _super.prototype.childrenCreated.call(this);
    };
    return Login;
}(eui.Component));
__reflect(Login.prototype, "Login", ["eui.UIComponent", "egret.DisplayObject"]);
