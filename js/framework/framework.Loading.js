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