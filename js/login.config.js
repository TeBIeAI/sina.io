/**
 * Created by 韩超 on 2017/8/25.
 */
require.config(
    {
        baseUrl:"js",
        paths:{
            "jquery":["./libs/jquery/jquery.min"],
            "underscore":"./libs/underscore/underscore-1.8.2",
            "framework.shell":"./framework/output/framework",
            "framework.core":"./framework/framework.core",
            "login": "./login"
        },
        waitSeconds:90,
        shim:{
            "login": {
                deps: ["framework.shell"]
            },
            "framework.shell": {
                deps: ["jquery", "underscore"]
            }
        }
    }
)(["login"]);