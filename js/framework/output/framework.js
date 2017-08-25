/**
 * Created by 韩超 on 2017/8/25.
 */
define('framework.core', ["module", "exports"], function(module, exports){

    window['Me'] = this;
    /**框架名称
     * @name My-home
     * */
    this.name = "Me";

    /**
     * 销毁Me
     * @member Me
     * */
    this.destroy = function(){
        require.undef(module.id)
    };
    /**
     * @name Me.getJSON
     */
    this.getJSON = function(option){
        if(!option) return;
        option.dataType = "json";
        var _method = ( option.type ? option.type : 'GET' ).toUpperCase();
        var _header = {
            "Content-Type": "application/json"
        };
        option.header = _header;
        option.type = _header == "GET" ? "GET" : "POST";
        var sendSuccess = option.success ? option.success : $.noop();
        var sendError = option.error ? option.error : $.noop();
        option.success = function(response){
            sendSuccess(response)
        };
        option.error = function(error){
            sendError(error)
        };
        option.data = option.type == "GET" ? option.data : JSON.stringify(option.data);
        return $.ajax(option);
    }

        /**
         * @name 给组件添加方法接口
         *
         */
        this.extend = function(param, domain){
            if(!param)return;

        }

    /**
     *
     * @param 获取window对象
     * @param obj
     */
    this.root = window;

    this.rewrite=function(target, obj)
    {
    };

    this.register=function(Comp, nickName)
    {
        if(!Comp)return;
        this[nickName] = new Comp();
    };
    return this
})
/**
 * Created by 韩超 on 2017/8/25.
 */
define("framework.loading",["exports","framework.core"],function(exports,Me)
{
    function Loading() {
        this.dom = $('<div style="width: 100%;height:100%;z-index:2147483647;position:fixed;top:0;"> ' +
            '<div class="window-loading" style="width:100%;height:100%;z-index:2147483640;position: absolute;"></div>' +
            '<div style="width: 100%;height:100%;z-index: 2147483641;position: absolute;left:0;top:0;display: table"><span style="display: inline-block;vertical-align: middle;height:100%;display: table-cell;text-align: center;"><i class="loading-img"></i></span></div>' +
            '</div>');
    }
    Loading.isInstance=true;
    /**
     * 显示loading
     */
    Loading.prototype.show = function () {
        $(document.body).append(this.dom);
        this.dom.fadeIn("fast");
    };
    /**
     * 隐藏loading
     */
    Loading.prototype.hide = function () {
        this.dom.fadeOut("fast", function () {
            $(this).hide();
        });

    };
    Me.register(Loading,"loading");
    return Loading;
});
/**
 * Created by 韩超 on 2017/8/25.
 */
define("framework.shell", ["exports", "framework.core"], function (exports, hc) {
    require(["framework.core", "framework.loading"])
})