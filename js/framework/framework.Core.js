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