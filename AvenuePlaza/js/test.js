function ClickTaleOnReady() {
    window.optimizely = window.optimizely || [];
    window.optimizely.push(['clickTaleRecord'])
};

(function () {

    geolocation = {};
    geolocation.requestGeo = function (b, a, e) {
        geolocation.requested = +new Date;
        if (e) {
            var d = {};
            document.cookie.replace(/([^\s;]*)=([^;]*)/ig, function (a, b, c) {
                100 >= c.length && 0 !== b.indexOf("optimizely") && (d["c_" + b] = unescape(c))
            });
            d.project = a;
            var a = [],
                c;
            for (c in d) d.hasOwnProperty(c) && a.push(encodeURIComponent(c) + "=" + encodeURIComponent(d[c]));
            b += "?" + a.join("&")
        }
        c = b;
        b = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
        a = document.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = c;
        b.insertBefore(a, b.firstChild)
    };


})();

optimizelyCode = function () {
    var DATA = {
        "log_host": "log.optimizely.com",
        "goal_expressions": {
            "2582200193": ["^fiddler2\\_cta\\_new$"],
            "2602460130": ["^fiddler4\\_new$"],
            "2584630179": ["^download\\_fiddler4\\_original$"],
            "2336863237": ["^engagement$"],
            "2429390854": ["^click\\_on\\_dl\\_button$"],
            "2372580232": ["^(https?://)?(www\\.)?telerik\\.com\\/download\\/devcraft/?(\\?.*)?(#.*)?$"],
            "2605030122": ["^(https?://)?(www\\.)?telerik\\.com\\/download\\/fiddler\\/fiddler4/?$"],
            "2326070795": ["^(https?://)?(www\\.)?telerik\\.com\\/download\\-trial\\-file/?(\\?.*)?(#.*)?$"],
            "2577930188": ["^download\\_fiddler\\_\\-\\_new$"],
            "2615480013": ["^fiddler2\\_new$"],
            "2571260623": ["^download\\_fiddler2\\_original$"],
            "2586680145": ["^fiddler4\\_cta\\_new$"],
            "2576910197": ["^fiddler2\\_cta$"],
            "2609770178": ["^(https?://)?(www\\.)?telerik\\.com\\/download\\/fiddler\\/fiddler2/?(\\?.*)?(#.*)?$"],
            "2572550329": ["^fiddler4\\_cta$"],
            "2345630749": ["^(https?://)?(www\\.)?telerik\\.com\\/download\\/kendo\\-ui/?(\\?.*)?(#.*)?$"],
            "2360951006": ["^(https?://)?(www\\.)?telerik\\.com\\/download\\-trial\\-file/?(\\?.*)?(#.*)?$"]
        },
        "experiments": {
            "2677390384": {
                "crazyegg": true,
                "clicktale": true,
                "variation_weights": {
                    "2665980142": 5000,
                    "2686550141": 5000
                },
                "name": "00011-KUI-noDemo-head-banner",
                "enabled": true,
                "urls": [{
                    "match": "simple",
                    "value": "http://www.telerik.com/kendo-ui"
                }],
                "enabled_variation_ids": ["2665980142", "2686550141"],
                "variation_ids": ["2665980142", "2686550141"]
            },
            "2569100045": {
                "name": "00007-FID-DL-email-newLayout",
                "urls": [{
                    "match": "simple",
                    "value": "http://www.telerik.com/download/fiddler"
                }],
                "enabled_variation_ids": ["2563560034", "2560760805"],
                "variation_ids": ["2563560034", "2560760805"]
            },
            "2689590029": {
                "crazyegg": true,
                "clicktale": true,
                "name": "00010-FID-emailSurvey-ghost",
                "urls": [{
                    "match": "simple",
                    "value": "http://www.telerik.com/download/fiddler"
                }],
                "enabled_variation_ids": ["2653410207", "2672190169"],
                "variation_ids": ["2653410207", "2672190169"]
            },
            "2649050192": {
                "crazyegg": true,
                "clicktale": true,
                "name": "00009-TP-reg-vs-social",
                "urls": [{
                    "match": "simple",
                    "value": "https://www.telerik.com/login/v2/platform?ReturnUrl=https%3A%2F%2Fplatform.telerik.com"
                }],
                "enabled_variation_ids": ["2667200294", "2669490143"],
                "variation_ids": ["2667200294", "2669490143"]
            },
            "2381620947": {
                "crazyegg": true,
                "clicktale": true,
                "name": "00005-DC-.NET-eBook-Form",
                "urls": [{
                    "match": "simple",
                    "value": "http://www.telerik.com/campaigns/devcraft/developers-guide-dotnet"
                }],
                "enabled_variation_ids": ["2368501689", "2368471268"],
                "variation_ids": ["2368501689", "2368471268"]
            },
            "2344011092": {
                "name": "00002-DC-LP2-No-DLinstaller",
                "urls": [{
                    "match": "simple",
                    "value": "http://www.telerik.com/campaigns/devcraft/free-trial-2"
                }],
                "enabled_variation_ids": ["2364050216", "2327081392"],
                "variation_ids": ["2364050216", "2327081392"]
            },
            "2414190238": {
                "variation_weights": {
                    "2433420500": 5000,
                    "2446690039": 5000
                },
                "name": "00004-MKTO-form-load-time",
                "enabled": true,
                "urls": [{
                    "match": "simple",
                    "value": "http://www.telerik.com/campaigns/platform/gartner-magic-quadrant-report"
                }, {
                    "match": "simple",
                    "value": "http://www.telerik.com/campaigns/platform/gartner-magic-quadrant-report1"
                }],
                "enabled_variation_ids": ["2433420500", "2446690039"],
                "variation_ids": ["2433420500", "2446690039"]
            },
            "2745600089": {
                "crazyegg": true,
                "clicktale": true,
                "variation_weights": {
                    "2768160041": 5000,
                    "2766380023": 5000
                },
                "name": "00012-KUI-AW-copy",
                "enabled": true,
                "urls": [{
                    "match": "simple",
                    "value": "http://www.telerik.com/campaigns/kendo-ui/free-trial-1"
                }],
                "enabled_variation_ids": ["2768160041", "2766380023"],
                "variation_ids": ["2768160041", "2766380023"]
            },
            "2350970334": {
                "name": "00003-KUI-demoUP-CTA-down",
                "urls": [{
                    "match": "simple",
                    "value": "http://www.telerik.com/kendo-ui"
                }],
                "enabled_variation_ids": ["2315041275", "2381170025"],
                "variation_ids": ["2315041275", "2381170025"]
            }
        },
        "www_host": "www.optimizely.com",
        "summary_revenue_goal_id": 2371021307,
        "public_suffixes": {
            "telerik.com": ["www.telerik.com"]
        },
        "version": "master-1928.383489629121214240",
        "admin_account_id": 240828791,
        "blacklisted_experiments": [2606351400, 2366020764, 2516660476, 2588480070, 2327700311],
        "project_id": 2380340583,
        "revision": 154,
        "installation_verified": true,
        "preview_host": "//optimizely.s3.amazonaws.com",
        "token_hash": "7ee9e183401de7e7b7fa598eea96011c47cc535701eb52f75220487ce1458234",
        "api_host": "api.optimizely.com",
        "variations": {
            "2563560034": {
                "name": "00007-FID-Original"
            },
            "2768160041": {
                "name": "00012-KUI-Original"
            },
            "2368471268": {
                "code": "$(\".u-pt3\").replaceWith(\"<h3 class=\\\"u-pt3 u-pr3 u-pl3 u-mb0 u-mt3  u-ff-slab2 Text--xxl Section--white\\\" style=\\\"color: #000000;\\\">\\n  \\n  What's in store for .NET in 2015?\\n\\n  \\n  <span>Download your free eBook and find out\\n</span>\\n  \\n</h3>\");\n$(\".u-pt3 > span\").replaceWith(\"<span class=\\\"u-db\\\" style=\\\"font-size:20px\\\">Download your free eBook and find out\\n</span>\");\n$(\"span.u-db\").replaceWith(\"<span class=\\\"u-db u-mt2\\\" style=\\\"font-size:16px;letter-spacing: normal;\\\">Download your free eBook and find out\\n</span>\");\n$(\".u-mt2\").replaceWith(\"<span class=\\\"u-db u-mt2 u-pb1\\\" style=\\\"font-size:16px;letter-spacing: normal;\\\">Download your free eBook and find out.\\n</span>\");\n$(\"#GeneralContent_C098_ctl00_ctl00_C002\").val(\"Get My Free\u00a0eBook\u00a0Now\");\n$(\"#GeneralContent_C098_ctl00_ctl00_C002\").replaceWith(\"<input type=\\\"submit\\\" name=\\\"ctl00$GeneralContent$C098$ctl00$ctl00$C002\\\" value=\\\"Get My Free&nbsp;eBook&nbsp;Now\\\" id=\\\"GeneralContent_C098_ctl00_ctl00_C002\\\" class=\\\"Btn Btn--l Btn--prim3 u-db u-mt3\\\" style=\\\"font-size: 24px\\\">\");",
                "name": "00005-New form copy"
            },
            "2560760805": {
                "code": "/* _optimizely_redirect=http://www.telerik.com/download/fiddler1 */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http://www.telerik.com/download/fiddler1\";\n_optly.cur=window.location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.location.replace(_optly.redir.href);",
                "name": "00007-FID-email + layout"
            },
            "2667200294": {
                "name": "00009-TP-Original"
            },
            "2364050216": {
                "name": "00002-Original LP2"
            },
            "2381170025": {
                "code": "$(\".banner-cta\").css({\"display\":\"none\",\"visibility\":\"\"});\n$(\"a[href='#demo-grid']\").html(\"Grid Demo\");\n$(\"a[href='#demo-scheduler']\").html(\"Scheduler Demo\");\n$(\"a[href='#demo-charts']\").html(\"Charts Demo\");\n$(\"a[href='#demo-editor']\").html(\"Editor Demo\");\n$(\".NavAlt2.Justify\").css({\"max-width\": \"870px\"});\n$(\".hgroup--banner-v2\").removeClass(\"u-pt5\").addClass(\"u-pt1\");\n$(\"#js-Bar + .Section-banner\").attr(\"style\",\"height:440px!important\");\n$(\".NavAlt2Tabs-item\").not(\".NavAlt2Tabs-item4\").find(\"h2\").text(\"Get Right to It: Test-Drive Demos Here\");",
                "name": "00003-demo up CTA down"
            },
            "2446690039": {
                "code": "/* _optimizely_redirect=http://www.telerik.com/campaigns/platform/gartner-magic-quadrant-report1 */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http://www.telerik.com/campaigns/platform/gartner-magic-quadrant-report1\";\n_optly.cur=window.location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.location.replace(_optly.redir.href);",
                "name": "00004-MKTO form"
            },
            "2665980142": {
                "name": "00011-KUI-Original"
            },
            "2686550141": {
                "code": "$(\".Btn--transparent\").css({\"display\":\"none\", \"visibility\":\"\"});",
                "name": "00011-KUI-no demo CTA"
            },
            "2327081392": {
                "code": "$(\"#GeneralContent_C072_Col00 .Btn\").attr({\"href\":\"https://www.telerik.com/download-trial-file?pid=ULTC&lict=1\"});\n$(\"#GeneralContent_C006_Col00 .Btn\").attr({\"href\":\"https://www.telerik.com/download-trial-file?pid=ULTC&lict=1\"});\n$(\"#GeneralContent_C019_Col00 .Btn\").attr({\"href\":\"https://www.telerik.com/download-trial-file?pid=ULTC&lict=1\"});",
                "name": "00002-remove DLinstaller page"
            },
            "2433420500": {
                "name": "00004-Original"
            },
            "2672190169": {
                "code": "$(\".js-forms-2\").removeClass(\"u-dn\");\n$(\".js-forms-1\").addClass(\"u-dn\");",
                "name": "00010-FID-survey ghost CTA"
            },
            "2368501689": {
                "name": "00005-Original"
            },
            "2766380023": {
                "code": "$(\"h1\").html(\"Develop Modern HTML5 and jQuery Apps\");\n$(\"h1\").css({\"font-size\":\"70px\"});\n$(\".u-tac > .SubTitle\").replaceWith(\"<p class=\\\"SubTitle\\\">\\nKendo UI offers over 70 responsive widgets to help you\\n<br>\\nbuild sites and apps with pure JavaScript & HTML5\\n</p>\");\n$(\".u-ma\").html(\"Start Your Free Trial Now\");\n$(\".js-ab-features-1 > div:nth-child(1) h3\").html(\"Mobile Support and Responsivenes\");\n$(\".js-ab-features-1 > div:nth-child(1) p\").html(\"\\n    Touch support, easy mobile rendering, responsive capabilities and integration with Bootstrap.\");\n$(\".js-ab-features-1 > div:nth-child(2) h3\").html(\"Built-In, Customizable Themes\");\n$(\".js-ab-features-1 > div:nth-child(2) p\").html(\"\\n    Apply one of the 11 built-in themes or create a customized theme in seconds using the ThemeBuilder tool.\");\n$(\".js-ab-features-1 > div:nth-child(3) p\").html(\"Fast and light. Every Kendo UI widget is rendered with the fastest possilbe mark-up to deliver ultimate JavaScript performance. \");\n$(\".js-ab-features-2 > div:nth-child(1) h3\").html(\"Complete Set of Widgets and Features\");\n$(\".js-ab-features-2 > div:nth-child(1) p\").html(\"\\n    Rich UI widgets, a powerful data source, exceptionally fast micro-templates, and pixel-perfect themes.\");\n$(\".js-ab-features-2 > div:nth-child(2) p\").html(\"\\n    Manage complex HTML and JavaScript UI with a high-performance Model-View-ViewModel (MVVM) framework.\");\n$(\".js-ab-features-2 > div:nth-child(3) p\").html(\"With guaranteed response time, Kendo UI customers have access to premium support forums and getting answers from the very same engineers who built it.\\n    \");\n$(\"#key-features\").html(\"Get more control over your app with Kendo UI\");\n$(\"a.u-mb2\").html(\"Start Your Free Trial Now\");\n$(\".Btn--plain\").html(\"Check out more demos here\");\n$(\".js-ab-testimonials > div:nth-child(1) p\").html(\"&nbsp;After being in the industry for over 20 years I have seen a lot of frameworks come and go, but Kendo UI is by far the best for hybrid/mobile/native apps. Not only for its ease of use but it plays well with others.\");\n$(\".js-ab-testimonials > div:nth-child(1) strong\").html(\"Geovanni Hudson\");\n$(\".js-ab-testimonials > div:nth-child(1) cite\").html(\"\\n              <strong>Geovanni Hudson</strong>SR. Web/UI Application Engineer&nbsp;<br>PCYC\");\n$(\".js-ab-testimonials > div:nth-child(2) p\").html(\"As a developer working for the DOD we were able to rapidly integrate Kendo UI into a pre-existing C# application providing functionality to the client they were not even aware they wanted. This cut down majorly on cost saving roughly 1+ million. I would recommend Kendo UI to anyone who wants to impress their client with amazing UI.<br>Thanks Telerik Team!&nbsp;\");\n$(\".js-ab-testimonials > div:nth-child(2) cite\").html(\"\\n              <strong>Gerald Hirsch</strong>Front End Developer &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>U.S. Government\");",
                "name": "00012-KUI-new copy"
            },
            "2315041275": {
                "name": "00003-Original"
            },
            "2653410207": {
                "name": "00010-FID-Original"
            },
            "2669490143": {
                "code": "// change heading and subheading\n$(\"h1.u-mb0\").addClass(\"u-ff-slab1\").html(\"Start Your Free 30 Day Trial\").find(\" + .SubTitle\").addClass(\"u-ff-sans0\").html(\"And build your first cross-platform app in 15 minutes\");\n\n\n// change reg button\n$(\".js-reg-btn\").removeClass(\"Btn--prim2\").addClass(\"Btn--prim3\").attr(\"value\", \"Start coding now\");\n\n\n// change bottom text\n$(\".Text--s.Text--b5\").removeClass(\"Text--s u-pb7\").addClass(\"u-ff-sans1 u-fs20\");\n\n\n// change login provider buttons\n$('head').append('<style>.LoginBox .Btn[class*=icon-]:before{vertical-align:-0.25em}</style>');\n\nvar changeButtons = [\n  \"telerik\",\n  \"facebook\",\n  \"liveid\",\n  \"google\",\n  \"yahoo\"\n];\n\n$.each(changeButtons, function() {\n  $(\".Btn--\" + this)\n    .removeClass(\"icon-\" + this + \" icon-\" + this).addClass(\"icon-\" + this + \"-cless\")\n    .removeClass(\"Btn--\" + this).addClass(\"Btn--\" + this + \"-rev u-ff-sans1\")\n    .find(\"span\").css(\"font-size\", \"1.366em\");\n});",
                "name": "00009-TP-new copy and ghost social"
            }
        },
        "segments": {
            "2375811128": {
                "segment_value_type": "mobile",
                "api_name": "optimizely_mobile",
                "id": 2375811128,
                "name": "Mobile Visitors"
            },
            "2372151524": {
                "segment_value_type": "campaign",
                "api_name": "optimizely_campaign",
                "id": 2372151524,
                "name": "Campaign"
            },
            "2325621325": {
                "segment_value_type": "source_type",
                "api_name": "optimizely_source_type",
                "id": 2325621325,
                "name": "Source Type"
            },
            "2335711366": {
                "segment_value_type": "browser",
                "api_name": "optimizely_browser",
                "id": 2335711366,
                "name": "Browser"
            }
        },
        "click_goals": [{
            "event_name": "click_on_dl_button",
            "experiments": {
                "2381620947": true
            },
            "selector": "#GeneralContent_C098_ctl00_ctl00_C002"
        }, {
            "event_name": "download_fiddler2_original",
            "experiments": {
                "2588480070": true
            },
            "selector": ".Btn--plain"
        }, {
            "event_name": "download_fiddler4_original",
            "experiments": {
                "2588480070": true
            },
            "selector": ".Btn--prim"
        }]
    };

    var optly = {
        nativity: {}
    };
    optly.nativity.getNativeGetElementsByClassName = function () {
        var a = document.getElementsByClassName;
        if (!optly.nativity.isNativeFunction(a)) var a = (window.optimizely || {}).getElementsByClassName,
            b = (window.optly || {}).getElementsByClassName,
            a = optly.nativity.isNativeFunction(a) ? a : optly.nativity.isNativeFunction(b) ? b : null;
        return a
    };
    optly.nativity.isNativeFunction = function (a) {
        return a && -1 !== String(a).indexOf("[native code]")
    };
    optly.Cleanse = {};
    optly.Cleanse.each = function (a, b, d) {
        var h = !!Object.prototype.__lookupGetter__,
            e = !!Object.prototype.__lookupSetter__,
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var f = h ? a.__lookupGetter__(c) : null,
                    g = e ? a.__lookupSetter__(c) : null;
                try {
                    b.call(d, c, !f ? a[c] : null, f, g)
                } catch (i) {}
            }
    };
    optly.Cleanse.finish = function () {
        if (optly.Cleanse.running) {
            optly.Cleanse.running = !1;
            optly.Cleanse.each(optly.Cleanse.types, function (a, d) {
                Object.prototype.__defineGetter__ && optly.Cleanse.each(optly.Cleanse.getters[a], function (c, b) {
                    d.prototype.__defineGetter__(c, b);
                    optly.Cleanse.log("restored getter", a, c)
                });
                Object.prototype.__defineSetter__ && optly.Cleanse.each(optly.Cleanse.setters[a], function (c, b) {
                    d.prototype.__defineSetter__(c, b);
                    optly.Cleanse.log("restored setter", a, c)
                });
                optly.Cleanse.each(optly.Cleanse.properties[a],
                    function (b, f) {
                        d.prototype[b] = f;
                        optly.Cleanse.log("restored property", a, b)
                    })
            });
            optly.Cleanse.unfixGetElementsByClassName();
            optly.Cleanse.log("finish");
            var a = window.console;
            if ((-1 !== window.location.hash.indexOf("optimizely_log=true") || -1 !== window.location.search.indexOf("optimizely_log=true")) && a && a.log)
                for (var b = optly.Cleanse.logs, d = 0; d < b.length; d++) a.log(b[d])
        }
    };
    optly.Cleanse.log = function (a, b, d) {
        b ? (b = b.replace(/_/g, ""), optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a + ": " + b + "." + d)) : optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a)
    };
    optly.Cleanse.start = function () {
        var a = window.location.hostname;
        if (!(-1 !== a.indexOf("optimizely") && -1 === a.indexOf("edit") && -1 === a.indexOf("preview") && -1 === a.indexOf("test")))
            if (optly.Cleanse.running) optly.Cleanse.log("already running so didn't start");
            else {
                optly.Cleanse.log("start");
                optly.Cleanse.running = !0;
                for (var b in optly.Cleanse.types) optly.Cleanse.types[b] || delete optly.Cleanse.types[b];
                optly.Cleanse.each(optly.Cleanse.types, function (a, b) {
                    optly.Cleanse.getters[a] = {};
                    optly.Cleanse.properties[a] = {};
                    optly.Cleanse.setters[a] = {};
                    optly.Cleanse.each(b.prototype, function (e, c, f, g) {
                        optly.nativity.isNativeFunction(c) || optly.nativity.isNativeFunction(f) || optly.nativity.isNativeFunction(g) ? optly.Cleanse.log("ignore native code", a, e) : (f ? (optly.Cleanse.getters[a][e] = f, optly.Cleanse.log("cleansed getter", a, e)) : (optly.Cleanse.properties[a][e] = c, optly.Cleanse.log("cleansed property", a, e)), g && (optly.Cleanse.setters[a][e] = g, optly.Cleanse.log("cleansed setter", a, e)), delete b.prototype[e])
                    })
                });
                optly.Cleanse.fixGetElementsByClassName();
                optly.Cleanse.hasRunStart = !0
            }
    };
    optly.Cleanse.fixGetElementsByClassName = function () {
        if (!optly.nativity.isNativeFunction(document.getElementsByClassName)) {
            var a = optly.nativity.getNativeGetElementsByClassName();
            a ? (optly.Cleanse.getElementsByClassName = document.getElementsByClassName, document.getElementsByClassName = a) : optly.Cleanse.log("Error: native HTMLElement.prototype.getElementsByClassName missing")
        }
    };
    optly.Cleanse.unfixGetElementsByClassName = function () {
        optly.Cleanse.getElementsByClassName && (document.getElementsByClassName = optly.Cleanse.getElementsByClassName, optly.Cleanse.getElementsByClassName = null)
    };
    optly.Cleanse.getElementsByClassName = null;
    optly.Cleanse.getters = {};
    optly.Cleanse.logs = [];
    optly.Cleanse.properties = {};
    optly.Cleanse.setters = {};
    optly.Cleanse.types = {
        Object_: Object
    };
    window.optly = window.optly || {};
    window.optly.Cleanse = {
        finish: optly.Cleanse.finish,
        logs: optly.Cleanse.logs,
        start: optly.Cleanse.start
    };
    optly.Cleanse.start();
    var $ = function (r, m) {
        function ya(a, b, c) {
            if (c === m && 1 === a.nodeType)
                if (c = "data-" + b.replace(kb, "-$1").toLowerCase(), c = a.getAttribute(c), "string" === typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : !d.isNaN(c) ? parseFloat(c) : lb.test(c) ? d.parseJSON(c) : c
                    } catch (g) {}
                    d.data(a, b, c)
                } else c = m;
            return c
        }

        function ha(a) {
            for (var b in a)
                if ("toJSON" !== b) return !1;
            return !0
        }

        function za(a, b, c) {
            var g = b + "defer",
                e = b + "queue",
                f = b + "mark",
                h = d.data(a, g, m, !0);
            h && (("queue" === c || !d.data(a, e, m, !0)) && ("mark" === c || !d.data(a,
                f, m, !0))) && setTimeout(function () {
                !d.data(a, e, m, !0) && !d.data(a, f, m, !0) && (d.removeData(a, g, !0), h.resolve())
            }, 0)
        }

        function w() {
            return !1
        }

        function O() {
            return !0
        }

        function Aa(a, b, c) {
            var g = d.extend({}, c[0]);
            g.type = a;
            g.originalEvent = {};
            g.liveFired = m;
            d.event.handle.call(b, g);
            g.isDefaultPrevented() && c[0].preventDefault()
        }

        function mb(a) {
            var b, c, g, e, f, h, i, j, k, m, l, q = [];
            e = [];
            f = d._data(this, "events");
            if (!(a.liveFired === this || !f || !f.live || a.target.disabled || a.button && "click" === a.type)) {
                a.namespace && (l = RegExp("(^|\\.)" +
                    a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
                a.liveFired = this;
                var n = f.live.slice(0);
                for (i = 0; i < n.length; i++) f = n[i], f.origType.replace(ia, "") === a.type ? e.push(f.selector) : n.splice(i--, 1);
                e = d(a.target).closest(e, a.currentTarget);
                j = 0;
                for (k = e.length; j < k; j++) {
                    m = e[j];
                    for (i = 0; i < n.length; i++)
                        if (f = n[i], m.selector === f.selector && (!l || l.test(f.namespace)) && !m.elem.disabled) {
                            h = m.elem;
                            g = null;
                            if ("mouseenter" === f.preType || "mouseleave" === f.preType) a.type = f.preType, (g = d(a.relatedTarget).closest(f.selector)[0]) &&
                                d.contains(h, g) && (g = h);
                            (!g || g !== h) && q.push({
                                elem: h,
                                handleObj: f,
                                level: m.level
                            })
                        }
                }
                j = 0;
                for (k = q.length; j < k; j++) {
                    e = q[j];
                    if (c && e.level > c) break;
                    a.currentTarget = e.elem;
                    a.data = e.handleObj.data;
                    a.handleObj = e.handleObj;
                    l = e.handleObj.origHandler.apply(e.elem, arguments);
                    if (!1 === l || a.isPropagationStopped())
                        if (c = e.level, !1 === l && (b = !1), a.isImmediatePropagationStopped()) break
                }
                return b
            }
        }

        function P(a, b) {
            return (a && "*" !== a ? a + "." : "") + b.replace(nb, "`").replace(ob, "&")
        }

        function Ba(a, b, c) {
            b = b || 0;
            if (d.isFunction(b)) return d.grep(a,
                function (a, g) {
                    return !!b.call(a, g, a) === c
                });
            if (b.nodeType) return d.grep(a, function (a) {
                return a === b === c
            });
            if ("string" === typeof b) {
                var g = d.grep(a, function (a) {
                    return 1 === a.nodeType
                });
                if (pb.test(b)) return d.filter(b, g, !c);
                b = d.filter(b, g)
            }
            return d.grep(a, function (a) {
                return 0 <= d.inArray(a, b) === c
            })
        }

        function Ca(a, b) {
            if (1 === b.nodeType && d.hasData(a)) {
                var c = d.expando,
                    g = d.data(a),
                    e = d.data(b, g);
                if (g = g[c]) {
                    var f = g.events,
                        e = e[c] = d.extend({}, g);
                    if (f) {
                        delete e.handle;
                        e.events = {};
                        for (var h in f) {
                            c = 0;
                            for (g = f[h].length; c <
                                g; c++) d.event.add(b, h + (f[h][c].namespace ? "." : "") + f[h][c].namespace, f[h][c], f[h][c].data)
                        }
                    }
                }
            }
        }

        function Da(a, b) {
            var c;
            if (1 === b.nodeType) {
                b.clearAttributes && b.clearAttributes();
                b.mergeAttributes && b.mergeAttributes(a);
                c = b.nodeName.toLowerCase();
                if ("object" === c) b.outerHTML = a.outerHTML;
                else if ("input" === c && ("checkbox" === a.type || "radio" === a.type)) {
                    if (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value) b.value = a.value
                } else if ("option" === c) b.selected = a.defaultSelected;
                else if ("input" === c ||
                    "textarea" === c) b.defaultValue = a.defaultValue;
                b.removeAttribute(d.expando)
            }
        }

        function Q(a) {
            return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
        }

        function Ea(a) {
            if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
        }

        function Fa(a) {
            d.nodeName(a, "input") ? Ea(a) : "getElementsByTagName" in a && d.grep(a.getElementsByTagName("input"), Ea)
        }

        function qb(a, b) {
            b.src ? d.ajax({
                url: b.src,
                async: !1,
                dataType: "script"
            }) : d.globalEval((b.text || b.textContent ||
                b.innerHTML || "").replace(rb, "/*$0*/"));
            b.parentNode && b.parentNode.removeChild(b)
        }

        function Ga(a, b, c) {
            var g = "width" === b ? a.offsetWidth : a.offsetHeight,
                e = "width" === b ? sb : tb;
            if (0 < g) return "border" !== c && d.each(e, function () {
                c || (g -= parseFloat(d.css(a, "padding" + this)) || 0);
                g = "margin" === c ? g + (parseFloat(d.css(a, c + this)) || 0) : g - (parseFloat(d.css(a, "border" + this + "Width")) || 0)
            }), g + "px";
            g = A(a, b, b);
            if (0 > g || null == g) g = a.style[b] || 0;
            g = parseFloat(g) || 0;
            c && d.each(e, function () {
                g += parseFloat(d.css(a, "padding" + this)) || 0;
                "padding" !==
                c && (g += parseFloat(d.css(a, "border" + this + "Width")) || 0);
                "margin" === c && (g += parseFloat(d.css(a, c + this)) || 0)
            });
            return g + "px"
        }
        var l = r.document,
            d, Ha = function () {
                if (!k.isReady) {
                    try {
                        l.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(Ha, 1);
                        return
                    }
                    k.ready()
                }
            },
            k = function (a, b) {
                return new k.fn.init(a, b, Ia)
            },
            ub = r.jQuery,
            vb = r.$,
            Ia, wb = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            Ja = /\S/,
            Ka = /^\s+/,
            La = /\s+$/,
            xb = /\d/,
            yb = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
            zb = /^[\],:{}\s]*$/,
            Ab = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            Bb = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            Cb = /(?:^|:|,)(?:\s*\[)+/g,
            Db = /(webkit)[ \/]([\w.]+)/,
            Eb = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            Fb = /(msie) ([\w.]+)/,
            Gb = /(mozilla)(?:.*? rv:([\w.]+))?/,
            Hb = /-([a-z]|[0-9])/ig,
            Ib = /^-ms-/,
            Jb = function (a, b) {
                return (b + "").toUpperCase()
            },
            Kb = r.navigator.userAgent,
            R, S, B, Lb = Object.prototype.toString,
            ja = Object.prototype.hasOwnProperty,
            ka = Array.prototype.push,
            I = Array.prototype.slice,
            Ma = String.prototype.trim,
            Na = Array.prototype.indexOf,
            Oa = {};
        k.fn = k.prototype = {
            constructor: k,
            init: function (a, b, c) {
                var g;
                if (!a) return this;
                if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                if ("body" === a && !b && l.body) return this.context = l, this[0] = l.body, this.selector = a, this.length = 1, this;
                if ("string" === typeof a) {
                    if ((g = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : wb.exec(a)) && (g[1] || !b)) {
                        if (g[1]) return c = (b = b instanceof k ? b[0] : b) ? b.ownerDocument || b : l, (a = yb.exec(a)) ? k.isPlainObject(b) ? (a = [l.createElement(a[1])], k.fn.attr.call(a, b, !0)) : a = [c.createElement(a[1])] : (a = k.buildFragment([g[1]], [c]), a = (a.cacheable ?
                            k.clone(a.fragment) : a.fragment).childNodes), k.merge(this, a);
                        if ((b = l.getElementById(g[2])) && b.parentNode) {
                            if (b.id !== g[2]) return c.find(a);
                            this.length = 1;
                            this[0] = b
                        }
                        this.context = l;
                        this.selector = a;
                        return this
                    }
                    return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
                }
                if (k.isFunction(a)) return c.ready(a);
                a.selector !== m && (this.selector = a.selector, this.context = a.context);
                return k.makeArray(a, this)
            },
            selector: "",
            jquery: "1.6.4",
            length: 0,
            size: function () {
                return this.length
            },
            toArray: function () {
                return I.call(this,
                    0)
            },
            get: function (a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function (a, b, c) {
                var g = this.constructor();
                k.isArray(a) ? ka.apply(g, a) : k.merge(g, a);
                g.prevObject = this;
                g.context = this.context;
                "find" === b ? g.selector = this.selector + (this.selector ? " " : "") + c : b && (g.selector = this.selector + "." + b + "(" + c + ")");
                return g
            },
            each: function (a, b) {
                return k.each(this, a, b)
            },
            ready: function (a) {
                k.bindReady();
                S.done(a);
                return this
            },
            eq: function (a) {
                return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            slice: function () {
                return this.pushStack(I.apply(this, arguments), "slice", I.call(arguments).join(","))
            },
            map: function (a) {
                return this.pushStack(k.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: ka,
            sort: [].sort,
            splice: [].splice
        };
        k.fn.init.prototype = k.fn;
        k.extend = k.fn.extend = function () {
            var a, b, c, g, d, f = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            "boolean" === typeof f && (j = f, f = arguments[1] || {}, h = 2);
            "object" !==
            typeof f && !k.isFunction(f) && (f = {});
            i === h && (f = this, --h);
            for (; h < i; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = f[b], g = a[b], f !== g && (j && g && (k.isPlainObject(g) || (d = k.isArray(g))) ? (d ? (d = !1, c = c && k.isArray(c) ? c : []) : c = c && k.isPlainObject(c) ? c : {}, f[b] = k.extend(j, c, g)) : g !== m && (f[b] = g));
            return f
        };
        k.extend({
            noConflict: function (a) {
                r.$ === k && (r.$ = vb);
                a && r.jQuery === k && (r.jQuery = ub);
                return k
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
                a ? k.readyWait++ : k.ready(!0)
            },
            ready: function (a) {
                if (!0 === a && !--k.readyWait || !0 !== a &&
                    !k.isReady) {
                    if (!l.body) return setTimeout(k.ready, 1);
                    k.isReady = !0;
                    !0 !== a && 0 < --k.readyWait || (S.resolveWith(l, [k]), k.fn.trigger && k(l).trigger("ready").unbind("ready"))
                }
            },
            bindReady: function () {
                if (!S) {
                    S = k._Deferred();
                    if ("complete" === l.readyState) return setTimeout(k.ready, 1);
                    if (l.addEventListener) l.addEventListener("DOMContentLoaded", B, !1), r.addEventListener("load", k.ready, !1);
                    else if (l.attachEvent) {
                        l.attachEvent("onreadystatechange", B);
                        r.attachEvent("onload", k.ready);
                        var a = !1;
                        try {
                            a = null == r.frameElement
                        } catch (b) {}
                        l.documentElement.doScroll &&
                            a && Ha()
                    }
                }
            },
            isFunction: function (a) {
                return "function" === k.type(a)
            },
            isArray: Array.isArray || function (a) {
                return "array" === k.type(a)
            },
            isWindow: function (a) {
                return a && "object" === typeof a && "setInterval" in a
            },
            isNaN: function (a) {
                return null == a || !xb.test(a) || isNaN(a)
            },
            type: function (a) {
                return null == a ? String(a) : Oa[Lb.call(a)] || "object"
            },
            isPlainObject: function (a) {
                if (!a || "object" !== k.type(a) || a.nodeType || k.isWindow(a)) return !1;
                try {
                    if (a.constructor && !ja.call(a, "constructor") && !ja.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (b) {
                    return !1
                }
                for (var c in a);
                return c === m || ja.call(a, c)
            },
            isEmptyObject: function (a) {
                for (var b in a) return !1;
                return !0
            },
            error: function (a) {
                throw a;
            },
            parseJSON: function (a) {
                if ("string" !== typeof a || !a) return null;
                a = k.trim(a);
                if (r.JSON && r.JSON.parse) return r.JSON.parse(a);
                if (zb.test(a.replace(Ab, "@").replace(Bb, "]").replace(Cb, ""))) return (new Function("return " + a))();
                k.error("Invalid JSON: " + a)
            },
            parseXML: function (a) {
                var b, c;
                try {
                    r.DOMParser ? (c = new DOMParser, b = c.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async =
                        "false", b.loadXML(a))
                } catch (g) {
                    b = m
                }(!b || !b.documentElement || b.getElementsByTagName("parsererror").length) && k.error("Invalid XML: " + a);
                return b
            },
            noop: function () {},
            globalEval: function (a) {
                a && Ja.test(a) && (r.execScript || function (a) {
                    r.eval.call(r, a)
                })(a)
            },
            camelCase: function (a) {
                return a.replace(Ib, "ms-").replace(Hb, Jb)
            },
            nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function (a, b, c) {
                var g, d = 0,
                    f = a.length,
                    h = f === m || k.isFunction(a);
                if (c)
                    if (h)
                        for (g in a) {
                            if (!1 === b.apply(a[g],
                                    c)) break
                        } else
                            for (; d < f && !1 !== b.apply(a[d++], c););
                    else if (h)
                    for (g in a) {
                        if (!1 === b.call(a[g], g, a[g])) break
                    } else
                        for (; d < f && !1 !== b.call(a[d], d, a[d++]););
                return a
            },
            trim: Ma ? function (a) {
                return null == a ? "" : Ma.call(a)
            } : function (a) {
                return null == a ? "" : a.toString().replace(Ka, "").replace(La, "")
            },
            makeArray: function (a, b) {
                var c = b || [];
                if (null != a) {
                    var g = k.type(a);
                    null == a.length || "string" === g || "function" === g || "regexp" === g || k.isWindow(a) ? ka.call(c, a) : k.merge(c, a)
                }
                return c
            },
            inArray: function (a, b) {
                if (!b) return -1;
                if (Na) return Na.call(b,
                    a);
                for (var c = 0, g = b.length; c < g; c++)
                    if (b[c] === a) return c;
                return -1
            },
            merge: function (a, b) {
                var c = a.length,
                    g = 0;
                if ("number" === typeof b.length)
                    for (var d = b.length; g < d; g++) a[c++] = b[g];
                else
                    for (; b[g] !== m;) a[c++] = b[g++];
                a.length = c;
                return a
            },
            grep: function (a, b, c) {
                for (var g = [], d, c = !!c, f = 0, h = a.length; f < h; f++) d = !!b(a[f], f), c !== d && g.push(a[f]);
                return g
            },
            map: function (a, b, c) {
                var g, d, f = [],
                    h = 0,
                    i = a.length;
                if (a instanceof k || i !== m && "number" === typeof i && (0 < i && a[0] && a[i - 1] || 0 === i || k.isArray(a)))
                    for (; h < i; h++) g = b(a[h], h, c), null !=
                        g && (f[f.length] = g);
                else
                    for (d in a) g = b(a[d], d, c), null != g && (f[f.length] = g);
                return f.concat.apply([], f)
            },
            guid: 1,
            proxy: function (a, b) {
                if ("string" === typeof b) var c = a[b],
                    b = a,
                    a = c;
                if (!k.isFunction(a)) return m;
                var d = I.call(arguments, 2),
                    c = function () {
                        return a.apply(b, d.concat(I.call(arguments)))
                    };
                c.guid = a.guid = a.guid || c.guid || k.guid++;
                return c
            },
            access: function (a, b, c, d, e, f) {
                var h = a.length;
                if ("object" === typeof b) {
                    for (var i in b) k.access(a, i, b[i], d, e, c);
                    return a
                }
                if (c !== m) {
                    d = !f && d && k.isFunction(c);
                    for (i = 0; i < h; i++) e(a[i],
                        b, d ? c.call(a[i], i, e(a[i], b)) : c, f);
                    return a
                }
                return h ? e(a[0], b) : m
            },
            now: function () {
                return (new Date).getTime()
            },
            uaMatch: function (a) {
                a = a.toLowerCase();
                a = Db.exec(a) || Eb.exec(a) || Fb.exec(a) || 0 > a.indexOf("compatible") && Gb.exec(a) || [];
                return {
                    browser: a[1] || "",
                    version: a[2] || "0"
                }
            },
            sub: function () {
                function a(b, d) {
                    return new a.fn.init(b, d)
                }
                k.extend(!0, a, this);
                a.superclass = this;
                a.fn = a.prototype = this();
                a.fn.constructor = a;
                a.sub = this.sub;
                a.fn.init = function (c, d) {
                    d && (d instanceof k && !(d instanceof a)) && (d = a(d));
                    return k.fn.init.call(this,
                        c, d, b)
                };
                a.fn.init.prototype = a.fn;
                var b = a(l);
                return a
            },
            browser: {}
        });
        k.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            Oa["[object " + b + "]"] = b.toLowerCase()
        });
        R = k.uaMatch(Kb);
        R.browser && (k.browser[R.browser] = !0, k.browser.version = R.version);
        k.browser.webkit && (k.browser.safari = !0);
        Ja.test("\u00a0") && (Ka = /^[\s\xA0]+/, La = /[\s\xA0]+$/);
        Ia = k(l);
        l.addEventListener ? B = function () {
            l.removeEventListener("DOMContentLoaded", B, false);
            k.ready()
        } : l.attachEvent && (B = function () {
            if (l.readyState ===
                "complete") {
                l.detachEvent("onreadystatechange", B);
                k.ready()
            }
        });
        d = k;
        var la = "done fail isResolved isRejected promise then always pipe".split(" "),
            Pa = [].slice;
        d.extend({
            _Deferred: function () {
                var a = [],
                    b, c, g, e = {
                        done: function () {
                            if (!g) {
                                var c = arguments,
                                    h, i, j, k, m;
                                if (b) {
                                    m = b;
                                    b = 0
                                }
                                h = 0;
                                for (i = c.length; h < i; h++) {
                                    j = c[h];
                                    k = d.type(j);
                                    k === "array" ? e.done.apply(e, j) : k === "function" && a.push(j)
                                }
                                m && e.resolveWith(m[0], m[1])
                            }
                            return this
                        },
                        resolveWith: function (d, e) {
                            if (!g && !b && !c) {
                                e = e || [];
                                c = 1;
                                try {
                                    for (; a[0];) a.shift().apply(d, e)
                                } finally {
                                    b = [d, e];
                                    c = 0
                                }
                            }
                            return this
                        },
                        resolve: function () {
                            e.resolveWith(this, arguments);
                            return this
                        },
                        isResolved: function () {
                            return !(!c && !b)
                        },
                        cancel: function () {
                            g = 1;
                            a = [];
                            return this
                        }
                    };
                return e
            },
            Deferred: function (a) {
                var b = d._Deferred(),
                    c = d._Deferred(),
                    g;
                d.extend(b, {
                    then: function (a, c) {
                        b.done(a).fail(c);
                        return this
                    },
                    always: function () {
                        return b.done.apply(b, arguments).fail.apply(this, arguments)
                    },
                    fail: c.done,
                    rejectWith: c.resolveWith,
                    reject: c.resolve,
                    isRejected: c.isResolved,
                    pipe: function (a, c) {
                        return d.Deferred(function (g) {
                            d.each({
                                done: [a,
"resolve"],
                                fail: [c, "reject"]
                            }, function (a, c) {
                                var f = c[0],
                                    e = c[1],
                                    k;
                                if (d.isFunction(f)) b[a](function () {
                                    if ((k = f.apply(this, arguments)) && d.isFunction(k.promise)) k.promise().then(g.resolve, g.reject);
                                    else g[e + "With"](this === b ? g : this, [k])
                                });
                                else b[a](g[e])
                            })
                        }).promise()
                    },
                    promise: function (a) {
                        if (a == null) {
                            if (g) return g;
                            g = a = {}
                        }
                        for (var c = la.length; c--;) a[la[c]] = b[la[c]];
                        return a
                    }
                });
                b.done(c.cancel).fail(b.cancel);
                delete b.cancel;
                a && a.call(b, b);
                return b
            },
            when: function (a) {
                function b(a) {
                    return function (b) {
                        c[a] = arguments.length >
                            1 ? Pa.call(arguments, 0) : b;
                        --f || h.resolveWith(h, Pa.call(c, 0))
                    }
                }
                var c = arguments,
                    g = 0,
                    e = c.length,
                    f = e,
                    h = e <= 1 && a && d.isFunction(a.promise) ? a : d.Deferred();
                if (e > 1) {
                    for (; g < e; g++) c[g] && d.isFunction(c[g].promise) ? c[g].promise().then(b(g), h.reject) : --f;
                    f || h.resolveWith(h, c)
                } else h !== a && h.resolveWith(h, e ? [a] : []);
                return h.promise()
            }
        });
        var Mb = d,
            ma;
        var o = l.createElement("div"),
            Nb = l.documentElement,
            na, C, T, U, u, D, s, V, J, W, x, X, K, Y, E, F;
        o.setAttribute("className", "t");
        o.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        na = o.getElementsByTagName("*");
        C = o.getElementsByTagName("a")[0];
        if (!na || !na.length || !C) ma = {};
        else {
            T = l.createElement("select");
            U = T.appendChild(l.createElement("option"));
            u = o.getElementsByTagName("input")[0];
            s = {
                leadingWhitespace: 3 === o.firstChild.nodeType,
                tbody: !o.getElementsByTagName("tbody").length,
                htmlSerialize: !!o.getElementsByTagName("link").length,
                style: /top/.test(C.getAttribute("style")),
                hrefNormalized: "/a" === C.getAttribute("href"),
                opacity: /^0.55$/.test(C.style.opacity),
                cssFloat: !!C.style.cssFloat,
                checkOn: "on" === u.value,
                optSelected: U.selected,
                getSetAttribute: "t" !== o.className,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0
            };
            u.checked = !0;
            s.noCloneChecked = u.cloneNode(!0).checked;
            T.disabled = !0;
            s.optDisabled = !U.disabled;
            try {
                delete o.test
            } catch (jc) {
                s.deleteExpando = !1
            }!o.addEventListener && (o.attachEvent && o.fireEvent) && (o.attachEvent("onclick", function () {
                s.noCloneEvent = false
            }), o.cloneNode(!0).fireEvent("onclick"));
            u = l.createElement("input");
            u.value = "t";
            u.setAttribute("type", "radio");
            s.radioValue = "t" === u.value;
            u.setAttribute("checked", "checked");
            o.appendChild(u);
            V = l.createDocumentFragment();
            V.appendChild(o.firstChild);
            s.checkClone = V.cloneNode(!0).cloneNode(!0).lastChild.checked;
            o.innerHTML = "";
            o.style.width = o.style.paddingLeft = "1px";
            J = l.getElementsByTagName("body")[0];
            x = l.createElement(J ? "div" : "body");
            X = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            J && d.extend(X, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (E in X) x.style[E] = X[E];
            x.appendChild(o);
            W = J || Nb;
            W.insertBefore(x, W.firstChild);
            s.appendChecked = u.checked;
            s.boxModel = 2 === o.offsetWidth;
            "zoom" in o.style && (o.style.display = "inline", o.style.zoom = 1, s.inlineBlockNeedsLayout = 2 === o.offsetWidth, o.style.display = "", o.innerHTML = "<div style='width:4px;'></div>", s.shrinkWrapBlocks = 2 !== o.offsetWidth);
            o.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
            K = o.getElementsByTagName("td");
            F = 0 === K[0].offsetHeight;
            K[0].style.display = "";
            K[1].style.display = "none";
            s.reliableHiddenOffsets = F && 0 === K[0].offsetHeight;
            o.innerHTML = "";
            l.defaultView && l.defaultView.getComputedStyle && (D = l.createElement("div"), D.style.width = "0", D.style.marginRight = "0", o.appendChild(D), s.reliableMarginRight = 0 === (parseInt((l.defaultView.getComputedStyle(D, null) || {
                marginRight: 0
            }).marginRight, 10) || 0));
            x.innerHTML = "";
            W.removeChild(x);
            if (o.attachEvent)
                for (E in {
                        submit: 1,
                        change: 1,
                        focusin: 1
                    }) Y = "on" + E, F = Y in o, F || (o.setAttribute(Y,
                    "return;"), F = "function" === typeof o[Y]), s[E + "Bubbles"] = F;
            x = V = T = U = J = D = o = u = null;
            ma = s
        }
        Mb.support = ma;
        d.boxModel = d.support.boxModel;
        var lb = /^(?:\{.*\}|\[.*\])$/,
            kb = /([A-Z])/g;
        d.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function (a) {
                a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando];
                return !!a && !ha(a)
            },
            data: function (a, b, c, g) {
                if (d.acceptData(a)) {
                    var e = d.expando,
                        f = typeof b === "string",
                        h = a.nodeType,
                        i = h ? d.cache : a,
                        j = h ? a[d.expando] : a[d.expando] && d.expando;
                    if (j && (!g || !j || !i[j] || i[j][e]) || !(f && c === m)) {
                        if (!j) h ? a[d.expando] = j = ++d.uuid : j = d.expando;
                        if (!i[j]) {
                            i[j] = {};
                            if (!h) i[j].toJSON = d.noop
                        }
                        if (typeof b === "object" || typeof b === "function") g ? i[j][e] = d.extend(i[j][e], b) : i[j] = d.extend(i[j], b);
                        a = i[j];
                        if (g) {
                            a[e] || (a[e] = {});
                            a = a[e]
                        }
                        c !== m && (a[d.camelCase(b)] = c);
                        if (b === "events" && !a[b]) return a[e] && a[e].events;
                        if (f) {
                            c = a[b];
                            c == null && (c = a[d.camelCase(b)])
                        } else c = a;
                        return c
                    }
                }
            },
            removeData: function (a, b, c) {
                if (d.acceptData(a)) {
                    var g,
                        e = d.expando,
                        f = a.nodeType,
                        h = f ? d.cache : a,
                        i = f ? a[d.expando] : d.expando;
                    if (h[i]) {
                        if (b)
                            if (g = c ? h[i][e] : h[i]) {
                                g[b] || (b = d.camelCase(b));
                                delete g[b];
                                if (!ha(g)) return
                            }
                        if (c) {
                            delete h[i][e];
                            if (!ha(h[i])) return
                        }
                        b = h[i][e];
                        d.support.deleteExpando || !h.setInterval ? delete h[i] : h[i] = null;
                        if (b) {
                            h[i] = {};
                            if (!f) h[i].toJSON = d.noop;
                            h[i][e] = b
                        } else f && (d.support.deleteExpando ? delete a[d.expando] : a.removeAttribute ? a.removeAttribute(d.expando) : a[d.expando] = null)
                    }
                }
            },
            _data: function (a, b, c) {
                return d.data(a, b, c, true)
            },
            acceptData: function (a) {
                if (a.nodeName) {
                    var b =
                        d.noData[a.nodeName.toLowerCase()];
                    if (b) return !(b === true || a.getAttribute("classid") !== b)
                }
                return true
            }
        });
        d.fn.extend({
            data: function (a, b) {
                var c = null;
                if (typeof a === "undefined") {
                    if (this.length) {
                        c = d.data(this[0]);
                        if (this[0].nodeType === 1)
                            for (var g = this[0].attributes, e, f = 0, h = g.length; f < h; f++) {
                                e = g[f].name;
                                if (e.indexOf("data-") === 0) {
                                    e = d.camelCase(e.substring(5));
                                    ya(this[0], e, c[e])
                                }
                            }
                    }
                    return c
                }
                if (typeof a === "object") return this.each(function () {
                    d.data(this, a)
                });
                var i = a.split(".");
                i[1] = i[1] ? "." + i[1] : "";
                if (b ===
                    m) {
                    c = this.triggerHandler("getData" + i[1] + "!", [i[0]]);
                    if (c === m && this.length) {
                        c = d.data(this[0], a);
                        c = ya(this[0], a, c)
                    }
                    return c === m && i[1] ? this.data(i[0]) : c
                }
                return this.each(function () {
                    var c = d(this),
                        g = [i[0], b];
                    c.triggerHandler("setData" + i[1] + "!", g);
                    d.data(this, a, b);
                    c.triggerHandler("changeData" + i[1] + "!", g)
                })
            },
            removeData: function (a) {
                return this.each(function () {
                    d.removeData(this, a)
                })
            }
        });
        d.extend({
            _mark: function (a, b) {
                if (a) {
                    b = (b || "fx") + "mark";
                    d.data(a, b, (d.data(a, b, m, true) || 0) + 1, true)
                }
            },
            _unmark: function (a, b,
                c) {
                if (a !== true) {
                    c = b;
                    b = a;
                    a = false
                }
                if (b) {
                    var c = c || "fx",
                        g = c + "mark";
                    if (a = a ? 0 : (d.data(b, g, m, true) || 1) - 1) d.data(b, g, a, true);
                    else {
                        d.removeData(b, g, true);
                        za(b, c, "mark")
                    }
                }
            },
            queue: function (a, b, c) {
                if (a) {
                    var b = (b || "fx") + "queue",
                        g = d.data(a, b, m, true);
                    c && (!g || d.isArray(c) ? g = d.data(a, b, d.makeArray(c), true) : g.push(c));
                    return g || []
                }
            },
            dequeue: function (a, b) {
                var b = b || "fx",
                    c = d.queue(a, b),
                    g = c.shift();
                g === "inprogress" && (g = c.shift());
                if (g) {
                    b === "fx" && c.unshift("inprogress");
                    g.call(a, function () {
                        d.dequeue(a, b)
                    })
                }
                if (!c.length) {
                    d.removeData(a,
                        b + "queue", true);
                    za(a, b, "queue")
                }
            }
        });
        d.fn.extend({
            queue: function (a, b) {
                if (typeof a !== "string") {
                    b = a;
                    a = "fx"
                }
                return b === m ? d.queue(this[0], a) : this.each(function () {
                    var c = d.queue(this, a, b);
                    a === "fx" && c[0] !== "inprogress" && d.dequeue(this, a)
                })
            },
            dequeue: function (a) {
                return this.each(function () {
                    d.dequeue(this, a)
                })
            },
            delay: function (a, b) {
                a = d.fx ? d.fx.speeds[a] || a : a;
                b = b || "fx";
                return this.queue(b, function () {
                    var c = this;
                    setTimeout(function () {
                        d.dequeue(c, b)
                    }, a)
                })
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", [])
            },
            promise: function (a) {
                function b() {
                    --f ||
                        c.resolveWith(g, [g])
                }
                typeof a !== "string" && (a = m);
                for (var a = a || "fx", c = d.Deferred(), g = this, e = g.length, f = 1, h = a + "defer", i = a + "queue", a = a + "mark", j; e--;)
                    if (j = d.data(g[e], h, m, true) || (d.data(g[e], i, m, true) || d.data(g[e], a, m, true)) && d.data(g[e], h, d._Deferred(), true)) {
                        f++;
                        j.done(b)
                    }
                b();
                return c.promise()
            }
        });
        var Qa = /[\n\t\r]/g,
            oa = /\s+/,
            Ob = /\r/g,
            Pb = /^(?:button|input)$/i,
            Qb = /^(?:button|input|object|select|textarea)$/i,
            Rb = /^a(?:rea)?$/i,
            Ra = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            y, Sa;
        d.fn.extend({
            attr: function (a, b) {
                return d.access(this, a, b, true, d.attr)
            },
            removeAttr: function (a) {
                return this.each(function () {
                    d.removeAttr(this, a)
                })
            },
            prop: function (a, b) {
                return d.access(this, a, b, true, d.prop)
            },
            removeProp: function (a) {
                a = d.propFix[a] || a;
                return this.each(function () {
                    try {
                        this[a] = m;
                        delete this[a]
                    } catch (b) {}
                })
            },
            addClass: function (a) {
                var b, c, g, e, f, h, i;
                if (d.isFunction(a)) return this.each(function (b) {
                    d(this).addClass(a.call(this, b, this.className))
                });
                if (a && typeof a === "string") {
                    b = a.split(oa);
                    c =
                        0;
                    for (g = this.length; c < g; c++) {
                        e = this[c];
                        if (e.nodeType === 1)
                            if (!e.className && b.length === 1) e.className = a;
                            else {
                                f = " " + e.className + " ";
                                h = 0;
                                for (i = b.length; h < i; h++) ~f.indexOf(" " + b[h] + " ") || (f = f + (b[h] + " "));
                                e.className = d.trim(f)
                            }
                    }
                }
                return this
            },
            removeClass: function (a) {
                var b, c, g, e, f, h, i;
                if (d.isFunction(a)) return this.each(function (b) {
                    d(this).removeClass(a.call(this, b, this.className))
                });
                if (a && typeof a === "string" || a === m) {
                    b = (a || "").split(oa);
                    c = 0;
                    for (g = this.length; c < g; c++) {
                        e = this[c];
                        if (e.nodeType === 1 && e.className)
                            if (a) {
                                f =
                                    (" " + e.className + " ").replace(Qa, " ");
                                h = 0;
                                for (i = b.length; h < i; h++) f = f.replace(" " + b[h] + " ", " ");
                                e.className = d.trim(f)
                            } else e.className = ""
                    }
                }
                return this
            },
            toggleClass: function (a, b) {
                var c = typeof a,
                    g = typeof b === "boolean";
                return d.isFunction(a) ? this.each(function (c) {
                    d(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function () {
                    if (c === "string")
                        for (var e, f = 0, h = d(this), i = b, j = a.split(oa); e = j[f++];) {
                            i = g ? i : !h.hasClass(e);
                            h[i ? "addClass" : "removeClass"](e)
                        } else if (c === "undefined" || c === "boolean") {
                            this.className &&
                                d._data(this, "__className__", this.className);
                            this.className = this.className || a === false ? "" : d._data(this, "__className__") || ""
                        }
                })
            },
            hasClass: function (a) {
                for (var a = " " + a + " ", b = 0, c = this.length; b < c; b++)
                    if (this[b].nodeType === 1 && (" " + this[b].className + " ").replace(Qa, " ").indexOf(a) > -1) return true;
                return false
            },
            val: function (a) {
                var b, c, g = this[0];
                if (!arguments.length) {
                    if (g) {
                        if ((b = d.valHooks[g.nodeName.toLowerCase()] || d.valHooks[g.type]) && "get" in b && (c = b.get(g, "value")) !== m) return c;
                        c = g.value;
                        return typeof c ===
                            "string" ? c.replace(Ob, "") : c == null ? "" : c
                    }
                    return m
                }
                var e = d.isFunction(a);
                return this.each(function (c) {
                    var g = d(this);
                    if (this.nodeType === 1) {
                        c = e ? a.call(this, c, g.val()) : a;
                        c == null ? c = "" : typeof c === "number" ? c = c + "" : d.isArray(c) && (c = d.map(c, function (a) {
                            return a == null ? "" : a + ""
                        }));
                        b = d.valHooks[this.nodeName.toLowerCase()] || d.valHooks[this.type];
                        if (!b || !("set" in b) || b.set(this, c, "value") === m) this.value = c
                    }
                })
            }
        });
        d.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function (a) {
                        var b, c = a.selectedIndex,
                            g = [],
                            e = a.options,
                            a = a.type === "select-one";
                        if (c < 0) return null;
                        for (var f = a ? c : 0, h = a ? c + 1 : e.length; f < h; f++) {
                            b = e[f];
                            if (b.selected && (d.support.optDisabled ? !b.disabled : b.getAttribute("disabled") === null) && (!b.parentNode.disabled || !d.nodeName(b.parentNode, "optgroup"))) {
                                b = d(b).val();
                                if (a) return b;
                                g.push(b)
                            }
                        }
                        return a && !g.length && e.length ? d(e[c]).val() : g
                    },
                    set: function (a, b) {
                        var c = d.makeArray(b);
                        d(a).find("option").each(function () {
                            this.selected = d.inArray(d(this).val(),
                                c) >= 0
                        });
                        if (!c.length) a.selectedIndex = -1;
                        return c
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attrFix: {
                tabindex: "tabIndex"
            },
            attr: function (a, b, c, g) {
                var e = a.nodeType;
                if (!a || e === 3 || e === 8 || e === 2) return m;
                if (g && b in d.attrFn) return d(a)[b](c);
                if (!("getAttribute" in a)) return d.prop(a, b, c);
                var f, h;
                if (g = e !== 1 || !d.isXMLDoc(a)) {
                    b = d.attrFix[b] || b;
                    (h = d.attrHooks[b]) || (Ra.test(b) ? h = Sa : y && (h = y))
                }
                if (c !== m) {
                    if (c === null) {
                        d.removeAttr(a, b);
                        return m
                    }
                    if (h && "set" in h && g && (f = h.set(a, c,
                            b)) !== m) return f;
                    a.setAttribute(b, "" + c);
                    return c
                }
                if (h && "get" in h && g && (f = h.get(a, b)) !== null) return f;
                f = a.getAttribute(b);
                return f === null ? m : f
            },
            removeAttr: function (a, b) {
                var c;
                if (a.nodeType === 1) {
                    b = d.attrFix[b] || b;
                    d.attr(a, b, "");
                    a.removeAttribute(b);
                    if (Ra.test(b) && (c = d.propFix[b] || b) in a) a[c] = false
                }
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (Pb.test(a.nodeName) && a.parentNode) d.error("type property can't be changed");
                        else if (!d.support.radioValue && b === "radio" && d.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type",
                                b);
                            if (c) a.value = c;
                            return b
                        }
                    }
                },
                value: {
                    get: function (a, b) {
                        return y && d.nodeName(a, "button") ? y.get(a, b) : b in a ? a.value : null
                    },
                    set: function (a, b, c) {
                        if (y && d.nodeName(a, "button")) return y.set(a, b, c);
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function (a, b, c) {
                var g =
                    a.nodeType;
                if (!a || g === 3 || g === 8 || g === 2) return m;
                var e, f;
                if (g !== 1 || !d.isXMLDoc(a)) {
                    b = d.propFix[b] || b;
                    f = d.propHooks[b]
                }
                return c !== m ? f && "set" in f && (e = f.set(a, c, b)) !== m ? e : a[b] = c : f && "get" in f && (e = f.get(a, b)) !== null ? e : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = a.getAttributeNode("tabindex");
                        return b && b.specified ? parseInt(b.value, 10) : Qb.test(a.nodeName) || Rb.test(a.nodeName) && a.href ? 0 : m
                    }
                }
            }
        });
        d.attrHooks.tabIndex = d.propHooks.tabIndex;
        Sa = {
            get: function (a, b) {
                var c;
                return d.prop(a, b) === true || (c = a.getAttributeNode(b)) &&
                    c.nodeValue !== false ? b.toLowerCase() : m
            },
            set: function (a, b, c) {
                if (b === false) d.removeAttr(a, c);
                else {
                    b = d.propFix[c] || c;
                    b in a && (a[b] = true);
                    a.setAttribute(c, c.toLowerCase())
                }
                return c
            }
        };
        d.support.getSetAttribute || (y = d.valHooks.button = {
            get: function (a, b) {
                var c;
                return (c = a.getAttributeNode(b)) && c.nodeValue !== "" ? c.nodeValue : m
            },
            set: function (a, b, c) {
                var d = a.getAttributeNode(c);
                if (!d) {
                    d = l.createAttribute(c);
                    a.setAttributeNode(d)
                }
                return d.nodeValue = b + ""
            }
        }, d.each(["width", "height"], function (a, b) {
            d.attrHooks[b] = d.extend(d.attrHooks[b], {
                set: function (a, d) {
                    if (d === "") {
                        a.setAttribute(b, "auto");
                        return d
                    }
                }
            })
        }));
        d.support.hrefNormalized || d.each(["href", "src", "width", "height"], function (a, b) {
            d.attrHooks[b] = d.extend(d.attrHooks[b], {
                get: function (a) {
                    a = a.getAttribute(b, 2);
                    return a === null ? m : a
                }
            })
        });
        d.support.style || (d.attrHooks.style = {
            get: function (a) {
                return a.style.cssText.toLowerCase() || m
            },
            set: function (a, b) {
                return a.style.cssText = "" + b
            }
        });
        d.support.optSelected || (d.propHooks.selected = d.extend(d.propHooks.selected, {
            get: function (a) {
                if (a = a.parentNode) {
                    a.selectedIndex;
                    a.parentNode && a.parentNode.selectedIndex
                }
                return null
            }
        }));
        d.support.checkOn || d.each(["radio", "checkbox"], function () {
            d.valHooks[this] = {
                get: function (a) {
                    return a.getAttribute("value") === null ? "on" : a.value
                }
            }
        });
        d.each(["radio", "checkbox"], function () {
            d.valHooks[this] = d.extend(d.valHooks[this], {
                set: function (a, b) {
                    if (d.isArray(b)) return a.checked = d.inArray(d(a).val(), b) >= 0
                }
            })
        });
        var ia = /\.(.*)$/,
            pa = /^(?:textarea|input|select)$/i,
            nb = /\./g,
            ob = / /g,
            Sb = /[^\w\s.|`]/g,
            Tb = function (a) {
                return a.replace(Sb, "\\$&")
            };
        d.event = {
            add: function (a, b, c, g) {
                if (!(a.nodeType === 3 || a.nodeType === 8)) {
                    if (c === false) c = w;
                    else if (!c) return;
                    var e, f;
                    if (c.handler) {
                        e = c;
                        c = e.handler
                    }
                    if (!c.guid) c.guid = d.guid++;
                    if (f = d._data(a)) {
                        var h = f.events,
                            i = f.handle;
                        if (!h) f.events = h = {};
                        if (!i) f.handle = i = function (a) {
                            return typeof d !== "undefined" && (!a || d.event.triggered !== a.type) ? d.event.handle.apply(i.elem, arguments) : m
                        };
                        i.elem = a;
                        for (var b = b.split(" "), j, k = 0, l; j = b[k++];) {
                            f = e ? d.extend({}, e) : {
                                handler: c,
                                data: g
                            };
                            if (j.indexOf(".") > -1) {
                                l = j.split(".");
                                j = l.shift();
                                f.namespace =
                                    l.slice(0).sort().join(".")
                            } else {
                                l = [];
                                f.namespace = ""
                            }
                            f.type = j;
                            if (!f.guid) f.guid = c.guid;
                            var n = h[j],
                                q = d.event.special[j] || {};
                            if (!n) {
                                n = h[j] = [];
                                if (!q.setup || q.setup.call(a, g, l, i) === false) a.addEventListener ? a.addEventListener(j, i, false) : a.attachEvent && a.attachEvent("on" + j, i)
                            }
                            if (q.add) {
                                q.add.call(a, f);
                                if (!f.handler.guid) f.handler.guid = c.guid
                            }
                            n.push(f);
                            d.event.global[j] = true
                        }
                        a = null
                    }
                }
            },
            global: {},
            remove: function (a, b, c, g) {
                if (!(a.nodeType === 3 || a.nodeType === 8)) {
                    c === false && (c = w);
                    var e, f, h = 0,
                        i, j, k, l, n, q, p = d.hasData(a) &&
                        d._data(a),
                        o = p && p.events;
                    if (p && o) {
                        if (b && b.type) {
                            c = b.handler;
                            b = b.type
                        }
                        if (!b || typeof b === "string" && b.charAt(0) === ".") {
                            b = b || "";
                            for (e in o) d.event.remove(a, e + b)
                        } else {
                            for (b = b.split(" "); e = b[h++];) {
                                l = e;
                                i = e.indexOf(".") < 0;
                                j = [];
                                if (!i) {
                                    j = e.split(".");
                                    e = j.shift();
                                    k = RegExp("(^|\\.)" + d.map(j.slice(0).sort(), Tb).join("\\.(?:.*\\.)?") + "(\\.|$)")
                                }
                                if (n = o[e])
                                    if (c) {
                                        l = d.event.special[e] || {};
                                        for (f = g || 0; f < n.length; f++) {
                                            q = n[f];
                                            if (c.guid === q.guid) {
                                                if (i || k.test(q.namespace)) {
                                                    g == null && n.splice(f--, 1);
                                                    l.remove && l.remove.call(a,
                                                        q)
                                                }
                                                if (g != null) break
                                            }
                                        }
                                        if (n.length === 0 || g != null && n.length === 1) {
                                            (!l.teardown || l.teardown.call(a, j) === false) && d.removeEvent(a, e, p.handle);
                                            delete o[e]
                                        }
                                    } else
                                        for (f = 0; f < n.length; f++) {
                                            q = n[f];
                                            if (i || k.test(q.namespace)) {
                                                d.event.remove(a, l, q.handler, f);
                                                n.splice(f--, 1)
                                            }
                                        }
                            }
                            if (d.isEmptyObject(o)) {
                                if (b = p.handle) b.elem = null;
                                delete p.events;
                                delete p.handle;
                                d.isEmptyObject(p) && d.removeData(a, m, true)
                            }
                        }
                    }
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function (a, b, c, g) {
                var e = a.type || a,
                    f = [],
                    h;
                if (e.indexOf("!") >=
                    0) {
                    e = e.slice(0, -1);
                    h = true
                }
                if (e.indexOf(".") >= 0) {
                    f = e.split(".");
                    e = f.shift();
                    f.sort()
                }
                if (c && !d.event.customEvent[e] || d.event.global[e]) {
                    a = typeof a === "object" ? a[d.expando] ? a : new d.Event(e, a) : new d.Event(e);
                    a.type = e;
                    a.exclusive = h;
                    a.namespace = f.join(".");
                    a.namespace_re = RegExp("(^|\\.)" + f.join("\\.(?:.*\\.)?") + "(\\.|$)");
                    if (g || !c) {
                        a.preventDefault();
                        a.stopPropagation()
                    }
                    if (c) {
                        if (!(c.nodeType === 3 || c.nodeType === 8)) {
                            a.result = m;
                            a.target = c;
                            b = b != null ? d.makeArray(b) : [];
                            b.unshift(a);
                            f = c;
                            g = e.indexOf(":") < 0 ? "on" +
                                e : "";
                            do {
                                h = d._data(f, "handle");
                                a.currentTarget = f;
                                h && h.apply(f, b);
                                if (g && d.acceptData(f) && f[g] && f[g].apply(f, b) === false) {
                                    a.result = false;
                                    a.preventDefault()
                                }
                                f = f.parentNode || f.ownerDocument || f === a.target.ownerDocument && r
                            } while (f && !a.isPropagationStopped());
                            if (!a.isDefaultPrevented()) {
                                var i, f = d.event.special[e] || {};
                                if ((!f._default || f._default.call(c.ownerDocument, a) === false) && !(e === "click" && d.nodeName(c, "a")) && d.acceptData(c)) {
                                    try {
                                        if (g && c[e]) {
                                            (i = c[g]) && (c[g] = null);
                                            d.event.triggered = e;
                                            c[e]()
                                        }
                                    } catch (j) {}
                                    i &&
                                        (c[g] = i);
                                    d.event.triggered = m
                                }
                            }
                            return a.result
                        }
                    } else d.each(d.cache, function () {
                        var c = this[d.expando];
                        c && (c.events && c.events[e]) && d.event.trigger(a, b, c.handle.elem)
                    })
                }
            },
            handle: function (a) {
                var a = d.event.fix(a || r.event),
                    b = ((d._data(this, "events") || {})[a.type] || []).slice(0),
                    c = !a.exclusive && !a.namespace,
                    g = Array.prototype.slice.call(arguments, 0);
                g[0] = a;
                a.currentTarget = this;
                for (var e = 0, f = b.length; e < f; e++) {
                    var h = b[e];
                    if (c || a.namespace_re.test(h.namespace)) {
                        a.handler = h.handler;
                        a.data = h.data;
                        a.handleObj = h;
                        h =
                            h.handler.apply(this, g);
                        if (h !== m) {
                            a.result = h;
                            if (h === false) {
                                a.preventDefault();
                                a.stopPropagation()
                            }
                        }
                        if (a.isImmediatePropagationStopped()) break
                    }
                }
                return a.result
            },
            props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
            fix: function (a) {
                if (a[d.expando]) return a;
                for (var b = a, a = d.Event(b), c = this.props.length, g; c;) {
                    g = this.props[--c];
                    a[g] = b[g]
                }
                if (!a.target) a.target = a.srcElement || l;
                if (a.target.nodeType === 3) a.target = a.target.parentNode;
                if (!a.relatedTarget && a.fromElement) a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
                if (a.pageX == null && a.clientX != null) {
                    c = a.target.ownerDocument || l;
                    b = c.documentElement;
                    c = c.body;
                    a.pageX = a.clientX + (b && b.scrollLeft || c && c.scrollLeft || 0) - (b && b.clientLeft || c && c.clientLeft || 0);
                    a.pageY = a.clientY + (b && b.scrollTop || c && c.scrollTop ||
                        0) - (b && b.clientTop || c && c.clientTop || 0)
                }
                if (a.which == null && (a.charCode != null || a.keyCode != null)) a.which = a.charCode != null ? a.charCode : a.keyCode;
                if (!a.metaKey && a.ctrlKey) a.metaKey = a.ctrlKey;
                if (!a.which && a.button !== m) a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
                return a
            },
            guid: 1E8,
            proxy: d.proxy,
            special: {
                ready: {
                    setup: d.bindReady,
                    teardown: d.noop
                },
                live: {
                    add: function (a) {
                        d.event.add(this, P(a.origType, a.selector), d.extend({}, a, {
                            handler: mb,
                            guid: a.handler.guid
                        }))
                    },
                    remove: function (a) {
                        d.event.remove(this, P(a.origType,
                            a.selector), a)
                    }
                },
                beforeunload: {
                    setup: function (a, b, c) {
                        if (d.isWindow(this)) this.onbeforeunload = c
                    },
                    teardown: function (a, b) {
                        if (this.onbeforeunload === b) this.onbeforeunload = null
                    }
                }
            }
        };
        d.removeEvent = l.removeEventListener ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, false)
        } : function (a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        };
        d.Event = function (a, b) {
            if (!this.preventDefault) return new d.Event(a, b);
            if (a && a.type) {
                this.originalEvent = a;
                this.type = a.type;
                this.isDefaultPrevented = a.defaultPrevented ||
                    a.returnValue === false || a.getPreventDefault && a.getPreventDefault() ? O : w
            } else this.type = a;
            b && d.extend(this, b);
            this.timeStamp = d.now();
            this[d.expando] = true
        };
        d.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = O;
                var a = this.originalEvent;
                if (a) a.preventDefault ? a.preventDefault() : a.returnValue = false
            },
            stopPropagation: function () {
                this.isPropagationStopped = O;
                var a = this.originalEvent;
                if (a) {
                    a.stopPropagation && a.stopPropagation();
                    a.cancelBubble = true
                }
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped =
                    O;
                this.stopPropagation()
            },
            isDefaultPrevented: w,
            isPropagationStopped: w,
            isImmediatePropagationStopped: w
        };
        var Ta = function (a) {
                var b = a.relatedTarget,
                    c = false,
                    g = a.type;
                a.type = a.data;
                if (b !== this) {
                    b && (c = d.contains(this, b));
                    if (!c) {
                        d.event.handle.apply(this, arguments);
                        a.type = g
                    }
                }
            },
            Ua = function (a) {
                a.type = a.data;
                d.event.handle.apply(this, arguments)
            };
        d.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (a, b) {
            d.event.special[a] = {
                setup: function (c) {
                    d.event.add(this, b, c && c.selector ? Ua : Ta, a)
                },
                teardown: function (a) {
                    d.event.remove(this,
                        b, a && a.selector ? Ua : Ta)
                }
            }
        });
        d.support.submitBubbles || (d.event.special.submit = {
            setup: function () {
                if (d.nodeName(this, "form")) return false;
                d.event.add(this, "click.specialSubmit", function (a) {
                    var b = a.target,
                        c = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.type : "";
                    (c === "submit" || c === "image") && d(b).closest("form").length && Aa("submit", this, arguments)
                });
                d.event.add(this, "keypress.specialSubmit", function (a) {
                    var b = a.target,
                        c = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.type : "";
                    (c === "text" || c === "password") &&
                    (d(b).closest("form").length && a.keyCode === 13) && Aa("submit", this, arguments)
                })
            },
            teardown: function () {
                d.event.remove(this, ".specialSubmit")
            }
        });
        if (!d.support.changeBubbles) {
            var L, Va = function (a) {
                    var b = d.nodeName(a, "input") ? a.type : "",
                        c = a.value;
                    if (b === "radio" || b === "checkbox") c = a.checked;
                    else if (b === "select-multiple") c = a.selectedIndex > -1 ? d.map(a.options, function (a) {
                        return a.selected
                    }).join("-") : "";
                    else if (d.nodeName(a, "select")) c = a.selectedIndex;
                    return c
                },
                Z = function (a, b) {
                    var c = a.target,
                        g, e;
                    if (pa.test(c.nodeName) &&
                        !c.readOnly) {
                        g = d._data(c, "_change_data");
                        e = Va(c);
                        (a.type !== "focusout" || c.type !== "radio") && d._data(c, "_change_data", e);
                        if (!(g === m || e === g))
                            if (g != null || e) {
                                a.type = "change";
                                a.liveFired = m;
                                d.event.trigger(a, b, c)
                            }
                    }
                };
            d.event.special.change = {
                filters: {
                    focusout: Z,
                    beforedeactivate: Z,
                    click: function (a) {
                        var b = a.target,
                            c = d.nodeName(b, "input") ? b.type : "";
                        (c === "radio" || c === "checkbox" || d.nodeName(b, "select")) && Z.call(this, a)
                    },
                    keydown: function (a) {
                        var b = a.target,
                            c = d.nodeName(b, "input") ? b.type : "";
                        (a.keyCode === 13 && !d.nodeName(b,
                            "textarea") || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && Z.call(this, a)
                    },
                    beforeactivate: function (a) {
                        a = a.target;
                        d._data(a, "_change_data", Va(a))
                    }
                },
                setup: function () {
                    if (this.type === "file") return false;
                    for (var a in L) d.event.add(this, a + ".specialChange", L[a]);
                    return pa.test(this.nodeName)
                },
                teardown: function () {
                    d.event.remove(this, ".specialChange");
                    return pa.test(this.nodeName)
                }
            };
            L = d.event.special.change.filters;
            L.focus = L.beforeactivate
        }
        d.support.focusinBubbles || d.each({
            focus: "focusin",
            blur: "focusout"
        }, function (a, b) {
            function c(a) {
                var c = d.event.fix(a);
                c.type = b;
                c.originalEvent = {};
                d.event.trigger(c, null, c.target);
                c.isDefaultPrevented() && a.preventDefault()
            }
            var g = 0;
            d.event.special[b] = {
                setup: function () {
                    g++ === 0 && l.addEventListener(a, c, true)
                },
                teardown: function () {
                    --g === 0 && l.removeEventListener(a, c, true)
                }
            }
        });
        d.each(["bind", "one"], function (a, b) {
            d.fn[b] = function (a, g, e) {
                var f;
                if (typeof a === "object") {
                    for (var h in a) this[b](h, g, a[h], e);
                    return this
                }
                if (arguments.length === 2 || g === false) {
                    e = g;
                    g = m
                }
                if (b ===
                    "one") {
                    f = function (a) {
                        d(this).unbind(a, f);
                        return e.apply(this, arguments)
                    };
                    f.guid = e.guid || d.guid++
                } else f = e;
                if (a === "unload" && b !== "one") this.one(a, g, e);
                else {
                    h = 0;
                    for (var i = this.length; h < i; h++) d.event.add(this[h], a, f, g)
                }
                return this
            }
        });
        d.fn.extend({
            unbind: function (a, b) {
                if (typeof a === "object" && !a.preventDefault)
                    for (var c in a) this.unbind(c, a[c]);
                else {
                    c = 0;
                    for (var g = this.length; c < g; c++) d.event.remove(this[c], a, b)
                }
                return this
            },
            delegate: function (a, b, c, d) {
                return this.live(b, c, d, a)
            },
            undelegate: function (a, b, c) {
                return arguments.length ===
                    0 ? this.unbind("live") : this.die(b, null, c, a)
            },
            trigger: function (a, b) {
                return this.each(function () {
                    d.event.trigger(a, b, this)
                })
            },
            triggerHandler: function (a, b) {
                if (this[0]) return d.event.trigger(a, b, this[0], true)
            },
            toggle: function (a) {
                var b = arguments,
                    c = a.guid || d.guid++,
                    g = 0,
                    e = function (c) {
                        var e = (d.data(this, "lastToggle" + a.guid) || 0) % g;
                        d.data(this, "lastToggle" + a.guid, e + 1);
                        c.preventDefault();
                        return b[e].apply(this, arguments) || false
                    };
                for (e.guid = c; g < b.length;) b[g++].guid = c;
                return this.click(e)
            },
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b ||
                    a)
            }
        });
        var qa = {
            focus: "focusin",
            blur: "focusout",
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        d.each(["live", "die"], function (a, b) {
            d.fn[b] = function (a, g, e, f) {
                var h = 0,
                    i, j, k = f || this.selector,
                    l = f ? this : d(this.context);
                if (typeof a === "object" && !a.preventDefault) {
                    for (i in a) l[b](i, g, a[i], k);
                    return this
                }
                if (b === "die" && !a && f && f.charAt(0) === ".") {
                    l.unbind(f);
                    return this
                }
                if (g === false || d.isFunction(g)) {
                    e = g || w;
                    g = m
                }
                for (a = (a || "").split(" ");
                    (f = a[h++]) != null;) {
                    i = ia.exec(f);
                    j = "";
                    if (i) {
                        j = i[0];
                        f = f.replace(ia, "")
                    }
                    if (f === "hover") a.push("mouseenter" +
                        j, "mouseleave" + j);
                    else {
                        i = f;
                        if (qa[f]) {
                            a.push(qa[f] + j);
                            f = f + j
                        } else f = (qa[f] || f) + j;
                        if (b === "live") {
                            j = 0;
                            for (var n = l.length; j < n; j++) d.event.add(l[j], "live." + P(f, k), {
                                data: g,
                                selector: k,
                                handler: e,
                                origType: f,
                                origHandler: e,
                                preType: i
                            })
                        } else l.unbind("live." + P(f, k), e)
                    }
                }
                return this
            }
        });
        d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
            d.fn[b] =
                function (a, d) {
                    if (d == null) {
                        d = a;
                        a = null
                    }
                    return arguments.length > 0 ? this.bind(b, a, d) : this.trigger(b)
                };
            d.attrFn && (d.attrFn[b] = true)
        });
        var Wa = function (a, b, c, d, e, f) {
                for (var e = 0, h = d.length; e < h; e++) {
                    var i = d[e];
                    if (i) {
                        for (var j = false, i = i[a]; i;) {
                            if (i.sizcache === c) {
                                j = d[i.sizset];
                                break
                            }
                            if (i.nodeType === 1 && !f) {
                                i.sizcache = c;
                                i.sizset = e
                            }
                            if (i.nodeName.toLowerCase() === b) {
                                j = i;
                                break
                            }
                            i = i[a]
                        }
                        d[e] = j
                    }
                }
            },
            Xa = function (a, b, c, d, e, f) {
                for (var e = 0, h = d.length; e < h; e++) {
                    var i = d[e];
                    if (i) {
                        for (var j = false, i = i[a]; i;) {
                            if (i.sizcache === c) {
                                j =
                                    d[i.sizset];
                                break
                            }
                            if (i.nodeType === 1) {
                                if (!f) {
                                    i.sizcache = c;
                                    i.sizset = e
                                }
                                if (typeof b !== "string") {
                                    if (i === b) {
                                        j = true;
                                        break
                                    }
                                } else if (n.filter(b, [i]).length > 0) {
                                    j = i;
                                    break
                                }
                            }
                            i = i[a]
                        }
                        d[e] = j
                    }
                }
            },
            ra = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            sa = 0,
            Ya = Object.prototype.toString,
            aa = !1,
            Za = !0,
            G = /\\/g,
            ba = /\W/;
        [0, 0].sort(function () {
            Za = false;
            return 0
        });
        var n = function (a, b, c, d) {
            var c = c || [],
                e = b = b || l;
            if (b.nodeType !== 1 && b.nodeType !== 9) return [];
            if (!a || typeof a !== "string") return c;
            var f, h, i, j, k, m = true,
                o = n.isXML(b),
                q = [],
                r = a;
            do {
                ra.exec("");
                if (f = ra.exec(r)) {
                    r = f[3];
                    q.push(f[1]);
                    if (f[2]) {
                        j = f[3];
                        break
                    }
                }
            } while (f);
            if (q.length > 1 && Ub.exec(a))
                if (q.length === 2 && p.relative[q[0]]) h = $a(q[0] + q[1], b);
                else
                    for (h = p.relative[q[0]] ? [b] : n(q.shift(), b); q.length;) {
                        a = q.shift();
                        p.relative[a] && (a = a + q.shift());
                        h = $a(a, h)
                    } else {
                        if (!d && q.length > 1 && b.nodeType === 9 && !o && p.match.ID.test(q[0]) && !p.match.ID.test(q[q.length - 1])) {
                            f = n.find(q.shift(), b, o);
                            b = f.expr ? n.filter(f.expr,
                                f.set)[0] : f.set[0]
                        }
                        if (b) {
                            f = d ? {
                                expr: q.pop(),
                                set: v(d)
                            } : n.find(q.pop(), q.length === 1 && (q[0] === "~" || q[0] === "+") && b.parentNode ? b.parentNode : b, o);
                            h = f.expr ? n.filter(f.expr, f.set) : f.set;
                            for (q.length > 0 ? i = v(h) : m = false; q.length;) {
                                f = k = q.pop();
                                p.relative[k] ? f = q.pop() : k = "";
                                f == null && (f = b);
                                p.relative[k](i, f, o)
                            }
                        } else i = []
                    }
                i || (i = h);
            i || n.error(k || a);
            if (Ya.call(i) === "[object Array]")
                if (m)
                    if (b && b.nodeType === 1)
                        for (a = 0; i[a] != null; a++) i[a] && (i[a] === true || i[a].nodeType === 1 && n.contains(b, i[a])) && c.push(h[a]);
                    else
                        for (a = 0; i[a] !=
                            null; a++) i[a] && i[a].nodeType === 1 && c.push(h[a]);
            else c.push.apply(c, i);
            else v(i, c);
            if (j) {
                n(j, e, c, d);
                n.uniqueSort(c)
            }
            return c
        };
        n.uniqueSort = function (a) {
            if (ca) {
                aa = Za;
                a.sort(ca);
                if (aa)
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        };
        n.matches = function (a, b) {
            return n(a, null, null, b)
        };
        n.matchesSelector = function (a, b) {
            return n(b, null, null, [a]).length > 0
        };
        n.find = function (a, b, c) {
            var d;
            if (!a) return [];
            for (var e = 0, f = p.order.length; e < f; e++) {
                var h, i = p.order[e];
                if (h = p.leftMatch[i].exec(a)) {
                    var j =
                        h[1];
                    h.splice(1, 1);
                    if (j.substr(j.length - 1) !== "\\") {
                        h[1] = (h[1] || "").replace(G, "");
                        d = p.find[i](h, b, c);
                        if (d != null) {
                            a = a.replace(p.match[i], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        };
        n.filter = function (a, b, c, d) {
            for (var e, f, h = a, i = [], j = b, k = b && b[0] && n.isXML(b[0]); a && b.length;) {
                for (var l in p.filter)
                    if ((e = p.leftMatch[l].exec(a)) != null && e[2]) {
                        var o, q, r = p.filter[l];
                        q = e[1];
                        f = false;
                        e.splice(1, 1);
                        if (q.substr(q.length - 1) !== "\\") {
                            j === i && (i = []);
                            if (p.preFilter[l])
                                if (e = p.preFilter[l](e, j, c, i, d, k)) {
                                    if (e === true) continue
                                } else f = o = true;
                            if (e)
                                for (var s = 0;
                                    (q = j[s]) != null; s++)
                                    if (q) {
                                        o = r(q, e, s, j);
                                        var t = d ^ !!o;
                                        if (c && o != null) t ? f = true : j[s] = false;
                                        else if (t) {
                                            i.push(q);
                                            f = true
                                        }
                                    }
                            if (o !== m) {
                                c || (j = i);
                                a = a.replace(p.match[l], "");
                                if (!f) return [];
                                break
                            }
                        }
                    }
                if (a === h)
                    if (f == null) n.error(a);
                    else break;
                h = a
            }
            return j
        };
        n.error = function (a) {
            throw "Syntax error, unrecognized expression: " + a;
        };
        var p = n.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (a) {
                        return a.getAttribute("href")
                    },
                    type: function (a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (a, b) {
                        var c = typeof b === "string",
                            d = c && !ba.test(b),
                            c = c && !d;
                        d && (b = b.toLowerCase());
                        for (var d = 0, e = a.length, f; d < e; d++)
                            if (f = a[d]) {
                                for (;
                                    (f = f.previousSibling) && f.nodeType !== 1;);
                                a[d] = c || f && f.nodeName.toLowerCase() === b ? f || false : f === b
                            }
                        c && n.filter(b, a, true)
                    },
                    ">": function (a, b) {
                        var c, d = typeof b === "string",
                            e = 0,
                            f = a.length;
                        if (d &&
                            !ba.test(b))
                            for (b = b.toLowerCase(); e < f; e++) {
                                if (c = a[e]) {
                                    c = c.parentNode;
                                    a[e] = c.nodeName.toLowerCase() === b ? c : false
                                }
                            } else {
                                for (; e < f; e++)(c = a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && n.filter(b, a, true)
                            }
                    },
                    "": function (a, b, c) {
                        var d, e = sa++,
                            f = Xa;
                        if (typeof b === "string" && !ba.test(b)) {
                            d = b = b.toLowerCase();
                            f = Wa
                        }
                        f("parentNode", b, e, a, d, c)
                    },
                    "~": function (a, b, c) {
                        var d, e = sa++,
                            f = Xa;
                        if (typeof b === "string" && !ba.test(b)) {
                            d = b = b.toLowerCase();
                            f = Wa
                        }
                        f("previousSibling", b, e, a, d, c)
                    }
                },
                find: {
                    ID: function (a, b, c) {
                        if (typeof b.getElementById !==
                            "undefined" && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
                    },
                    NAME: function (a, b) {
                        if (typeof b.getElementsByName !== "undefined") {
                            for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function (a, b) {
                        if (typeof b.getElementsByTagName !== "undefined") return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function (a, b, c, d, e, f) {
                        a = " " + a[1].replace(G, "") + " ";
                        if (f) return a;
                        for (var f = 0, h;
                            (h = b[f]) != null; f++) h && (e ^ (h.className &&
                            (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[f] = false));
                        return false
                    },
                    ID: function (a) {
                        return a[1].replace(G, "")
                    },
                    TAG: function (a) {
                        return a[1].replace(G, "").toLowerCase()
                    },
                    CHILD: function (a) {
                        if (a[1] === "nth") {
                            a[2] || n.error(a[0]);
                            a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0;
                            a[3] = b[3] - 0
                        } else a[2] && n.error(a[0]);
                        a[0] = sa++;
                        return a
                    },
                    ATTR: function (a,
                        b, c, d, e, f) {
                        b = a[1] = a[1].replace(G, "");
                        !f && p.attrMap[b] && (a[1] = p.attrMap[b]);
                        a[4] = (a[4] || a[5] || "").replace(G, "");
                        a[2] === "~=" && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function (a, b, c, d, e) {
                        if (a[1] === "not")
                            if ((ra.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) a[3] = n(a[3], null, null, b);
                            else {
                                a = n.filter(a[3], b, c, 1 ^ e);
                                c || d.push.apply(d, a);
                                return false
                            } else if (p.match.POS.test(a[0]) || p.match.CHILD.test(a[0])) return true;
                        return a
                    },
                    POS: function (a) {
                        a.unshift(true);
                        return a
                    }
                },
                filters: {
                    enabled: function (a) {
                        return a.disabled ===
                            false && a.type !== "hidden"
                    },
                    disabled: function (a) {
                        return a.disabled === true
                    },
                    checked: function (a) {
                        return a.checked === true
                    },
                    selected: function (a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return a.selected === true
                    },
                    parent: function (a) {
                        return !!a.firstChild
                    },
                    empty: function (a) {
                        return !a.firstChild
                    },
                    has: function (a, b, c) {
                        return !!n(c[3], a).length
                    },
                    header: function (a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function (a) {
                        return "text" === a.getAttribute("type")
                    },
                    radio: function (a) {
                        return "radio" === a.type
                    },
                    checkbox: function (a) {
                        return "checkbox" ===
                            a.type
                    },
                    file: function (a) {
                        return "file" === a.type
                    },
                    password: function (a) {
                        return "password" === a.type
                    },
                    submit: function (a) {
                        return "submit" === a.type
                    },
                    image: function (a) {
                        return "image" === a.type
                    },
                    reset: function (a) {
                        return "reset" === a.type
                    },
                    button: function (a) {
                        return "button" === a.type || a.nodeName.toLowerCase() === "button"
                    },
                    input: function (a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    }
                },
                setFilters: {
                    first: function (a, b) {
                        return b === 0
                    },
                    last: function (a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function (a, b) {
                        return b % 2 ===
                            0
                    },
                    odd: function (a, b) {
                        return b % 2 === 1
                    },
                    lt: function (a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function (a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function (a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function (a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function (a, b, c, d) {
                        var e = b[1],
                            f = p.filters[e];
                        if (f) return f(a, c, b, d);
                        if (e === "contains") return (a.textContent || a.innerText || n.getText([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not") {
                            b = b[3];
                            c = 0;
                            for (d = b.length; c < d; c++)
                                if (b[c] === a) return false;
                            return true
                        }
                        n.error(e)
                    },
                    CHILD: function (a, b) {
                        var c = b[1],
                            d = a;
                        switch (c) {
                        case "only":
                        case "first":
                            for (; d =
                                d.previousSibling;)
                                if (d.nodeType === 1) return false;
                            if (c === "first") return true;
                            d = a;
                        case "last":
                            for (; d = d.nextSibling;)
                                if (d.nodeType === 1) return false;
                            return true;
                        case "nth":
                            var c = b[2],
                                e = b[3];
                            if (c === 1 && e === 0) return true;
                            var f = b[0],
                                h = a.parentNode;
                            if (h && (h.sizcache !== f || !a.nodeIndex)) {
                                for (var i = 0, d = h.firstChild; d; d = d.nextSibling)
                                    if (d.nodeType === 1) d.nodeIndex = ++i;
                                h.sizcache = f
                            }
                            d = a.nodeIndex - e;
                            return c === 0 ? d === 0 : d % c === 0 && d / c >= 0
                        }
                    },
                    ID: function (a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function (a,
                        b) {
                        return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                    },
                    CLASS: function (a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function (a, b) {
                        var c = b[1],
                            c = p.attrHandle[c] ? p.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                            d = c + "",
                            e = b[2],
                            f = b[4];
                        return c == null ? e === "!=" : e === "=" ? d === f : e === "*=" ? d.indexOf(f) >= 0 : e === "~=" ? (" " + d + " ").indexOf(f) >= 0 : !f ? d && c !== false : e === "!=" ? d !== f : e === "^=" ? d.indexOf(f) === 0 : e === "$=" ? d.substr(d.length - f.length) === f : e === "|=" ? d === f || d.substr(0, f.length +
                            1) === f + "-" : false
                    },
                    POS: function (a, b, c, d) {
                        var e = p.setFilters[b[2]];
                        if (e) return e(a, c, b, d)
                    }
                }
            },
            Ub = p.match.POS,
            Vb = function (a, b) {
                return "\\" + (b - 0 + 1)
            },
            M;
        for (M in p.match) p.match[M] = RegExp(p.match[M].source + /(?![^\[]*\])(?![^\(]*\))/.source), p.leftMatch[M] = RegExp(/(^(?:.|\r|\n)*?)/.source + p.match[M].source.replace(/\\(\d+)/g, Vb));
        var v = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(l.documentElement.childNodes, 0)[0].nodeType
        } catch (kc) {
            v =
                function (a, b) {
                    var c = 0,
                        d = b || [];
                    if (Ya.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                    else if (typeof a.length === "number")
                        for (var e = a.length; c < e; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
        }
        var ca, N;
        l.documentElement.compareDocumentPosition ? ca = function (a, b) {
            if (a === b) {
                aa = true;
                return 0
            }
            return !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (ca = function (a, b) {
            var c, d, e = [],
                f = [];
            c = a.parentNode;
            d = b.parentNode;
            var h = c;
            if (a === b) {
                aa = true;
                return 0
            }
            if (c === d) return N(a, b);
            if (c) {
                if (!d) return 1
            } else return -1;
            for (; h;) {
                e.unshift(h);
                h = h.parentNode
            }
            for (h = d; h;) {
                f.unshift(h);
                h = h.parentNode
            }
            c = e.length;
            d = f.length;
            for (h = 0; h < c && h < d; h++)
                if (e[h] !== f[h]) return N(e[h], f[h]);
            return h === c ? N(a, f[h], -1) : N(e[h], b, 1)
        }, N = function (a, b, c) {
            if (a === b) return c;
            for (a = a.nextSibling; a;) {
                if (a === b) return -1;
                a = a.nextSibling
            }
            return 1
        });
        n.getText = function (a) {
            for (var b = "", c, d = 0; a[d]; d++) {
                c = a[d];
                c.nodeType === 3 || c.nodeType === 4 ? b = b + c.nodeValue : c.nodeType !==
                    8 && (b = b + n.getText(c.childNodes))
            }
            return b
        };
        var da = l.createElement("div"),
            ab = "script" + (new Date).getTime(),
            ea = l.documentElement;
        da.innerHTML = "<a name='" + ab + "'/>";
        ea.insertBefore(da, ea.firstChild);
        l.getElementById(ab) && (p.find.ID = function (a, b, c) {
            if (typeof b.getElementById !== "undefined" && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || typeof b.getAttributeNode !== "undefined" && b.getAttributeNode("id").nodeValue === a[1] ? [b] : m : []
        }, p.filter.ID = function (a, b) {
            var c = typeof a.getAttributeNode !== "undefined" &&
                a.getAttributeNode("id");
            return a.nodeType === 1 && c && c.nodeValue === b
        });
        ea.removeChild(da);
        var ea = da = null,
            z = l.createElement("div");
        z.appendChild(l.createComment(""));
        0 < z.getElementsByTagName("*").length && (p.find.TAG = function (a, b) {
            var c = b.getElementsByTagName(a[1]);
            if (a[1] === "*") {
                for (var d = [], e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                c = d
            }
            return c
        });
        z.innerHTML = "<a href='#'></a>";
        z.firstChild && ("undefined" !== typeof z.firstChild.getAttribute && "#" !== z.firstChild.getAttribute("href")) && (p.attrHandle.href =
            function (a) {
                return a.getAttribute("href", 2)
            });
        z = null;
        if (l.querySelectorAll) {
            var ta = n,
                fa = l.createElement("div");
            fa.innerHTML = "<p class='TEST'></p>";
            if (!(fa.querySelectorAll && 0 === fa.querySelectorAll(".TEST").length)) {
                var n = function (a, b, c, d) {
                        b = b || l;
                        if (!d && !n.isXML(b)) {
                            var e = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
                            if (e && (b.nodeType === 1 || b.nodeType === 9)) {
                                if (e[1]) return v(b.getElementsByTagName(a), c);
                                if (e[2] && p.find.CLASS && b.getElementsByClassName) return v(b.getElementsByClassName(e[2]), c)
                            }
                            if (b.nodeType ===
                                9) {
                                if (a === "body" && b.body) return v([b.body], c);
                                if (e && e[3]) {
                                    var f = b.getElementById(e[3]);
                                    if (f && f.parentNode) {
                                        if (f.id === e[3]) return v([f], c)
                                    } else return v([], c)
                                }
                                try {
                                    return v(b.querySelectorAll(a), c)
                                } catch (h) {}
                            } else if (b.nodeType === 1 && b.nodeName.toLowerCase() !== "object") {
                                var e = b,
                                    i = (f = b.getAttribute("id")) || "__sizzle__",
                                    j = b.parentNode,
                                    k = /^\s*[+~]/.test(a);
                                f ? i = i.replace(/'/g, "\\$&") : b.setAttribute("id", i);
                                if (k && j) b = b.parentNode;
                                try {
                                    if (!k || j) return v(b.querySelectorAll("[id='" + i + "'] " + a), c)
                                } catch (m) {} finally {
                                    f ||
                                        e.removeAttribute("id")
                                }
                            }
                        }
                        return ta(a, b, c, d)
                    },
                    ua;
                for (ua in ta) n[ua] = ta[ua];
                fa = null
            }
        }
        var ga = l.documentElement,
            va = ga.matchesSelector || ga.mozMatchesSelector || ga.webkitMatchesSelector || ga.msMatchesSelector,
            bb = !1;
        try {
            va.call(l.documentElement, "[test!='']:sizzle")
        } catch (lc) {
            bb = !0
        }
        va && (n.matchesSelector = function (a, b) {
            b = b.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
            if (!n.isXML(a)) try {
                if (bb || !p.match.PSEUDO.test(b) && !/!=/.test(b)) return va.call(a, b)
            } catch (c) {}
            return n(b, null, null, [a]).length > 0
        });
        var H = l.createElement("div");
        H.innerHTML = "<div class='test e'></div><div class='test'></div>";
        H.getElementsByClassName && 0 !== H.getElementsByClassName("e").length && (H.lastChild.className = "e", 1 !== H.getElementsByClassName("e").length && (p.order.splice(1, 0, "CLASS"), p.find.CLASS = function (a, b, c) {
            if (typeof b.getElementsByClassName !== "undefined" && !c) return b.getElementsByClassName(a[1])
        }, H = null));
        n.contains = l.documentElement.contains ? function (a, b) {
                return a !== b && (a.contains ? a.contains(b) : true)
            } : l.documentElement.compareDocumentPosition ?
            function (a, b) {
                return !!(a.compareDocumentPosition(b) & 16)
            } : function () {
                return false
            };
        n.isXML = function (a) {
            return (a = (a ? a.ownerDocument || a : 0).documentElement) ? a.nodeName !== "HTML" : false
        };
        var $a = function (a, b) {
            for (var c, d = [], e = "", f = b.nodeType ? [b] : b; c = p.match.PSEUDO.exec(a);) {
                e = e + c[0];
                a = a.replace(p.match.PSEUDO, "")
            }
            a = p.relative[a] ? a + "*" : a;
            c = 0;
            for (var h = f.length; c < h; c++) n(a, f[c], d);
            return n.filter(e, d)
        };
        d.find = n;
        d.expr = n.selectors;
        d.expr[":"] = d.expr.filters;
        d.unique = n.uniqueSort;
        d.text = n.getText;
        d.isXMLDoc =
            n.isXML;
        d.contains = n.contains;
        var Wb = /Until$/,
            Xb = /^(?:parents|prevUntil|prevAll)/,
            Yb = /,/,
            pb = /^.[^:#\[\.,]*$/,
            Zb = Array.prototype.slice,
            cb = d.expr.match.POS,
            $b = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        d.fn.extend({
            find: function (a) {
                var b = this,
                    c, g;
                if (typeof a !== "string") return d(a).filter(function () {
                    c = 0;
                    for (g = b.length; c < g; c++)
                        if (d.contains(b[c], this)) return true
                });
                var e = this.pushStack("", "find", a),
                    f, h, i;
                c = 0;
                for (g = this.length; c < g; c++) {
                    f = e.length;
                    d.find(a, this[c], e);
                    if (c > 0)
                        for (h = f; h < e.length; h++)
                            for (i =
                                0; i < f; i++)
                                if (e[i] === e[h]) {
                                    e.splice(h--, 1);
                                    break
                                }
                }
                return e
            },
            has: function (a) {
                var b = d(a);
                return this.filter(function () {
                    for (var a = 0, g = b.length; a < g; a++)
                        if (d.contains(this, b[a])) return true
                })
            },
            not: function (a) {
                return this.pushStack(Ba(this, a, false), "not", a)
            },
            filter: function (a) {
                return this.pushStack(Ba(this, a, true), "filter", a)
            },
            is: function (a) {
                return !!a && (typeof a === "string" ? d.filter(a, this).length > 0 : this.filter(a).length > 0)
            },
            closest: function (a, b) {
                var c = [],
                    g, e, f = this[0];
                if (d.isArray(a)) {
                    var h, i = {},
                        j = 1;
                    if (f &&
                        a.length) {
                        g = 0;
                        for (e = a.length; g < e; g++) {
                            h = a[g];
                            i[h] || (i[h] = cb.test(h) ? d(h, b || this.context) : h)
                        }
                        for (; f && f.ownerDocument && f !== b;) {
                            for (h in i) {
                                g = i[h];
                                (g.jquery ? g.index(f) > -1 : d(f).is(g)) && c.push({
                                    selector: h,
                                    elem: f,
                                    level: j
                                })
                            }
                            f = f.parentNode;
                            j++
                        }
                    }
                    return c
                }
                h = cb.test(a) || typeof a !== "string" ? d(a, b || this.context) : 0;
                g = 0;
                for (e = this.length; g < e; g++)
                    for (f = this[g]; f;)
                        if (h ? h.index(f) > -1 : d.find.matchesSelector(f, a)) {
                            c.push(f);
                            break
                        } else {
                            f = f.parentNode;
                            if (!f || !f.ownerDocument || f === b || f.nodeType === 11) break
                        }
                c = c.length > 1 ?
                    d.unique(c) : c;
                return this.pushStack(c, "closest", a)
            },
            index: function (a) {
                return !a ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : typeof a === "string" ? d.inArray(this[0], d(a)) : d.inArray(a.jquery ? a[0] : a, this)
            },
            add: function (a, b) {
                var c = typeof a === "string" ? d(a, b) : d.makeArray(a && a.nodeType ? [a] : a),
                    g = d.merge(this.get(), c);
                return this.pushStack(!c[0] || !c[0].parentNode || c[0].parentNode.nodeType === 11 || !g[0] || !g[0].parentNode || g[0].parentNode.nodeType === 11 ? g : d.unique(g))
            },
            andSelf: function () {
                return this.add(this.prevObject)
            }
        });
        d.each({
            parent: function (a) {
                return (a = a.parentNode) && a.nodeType !== 11 ? a : null
            },
            parents: function (a) {
                return d.dir(a, "parentNode")
            },
            parentsUntil: function (a, b, c) {
                return d.dir(a, "parentNode", c)
            },
            next: function (a) {
                return d.nth(a, 2, "nextSibling")
            },
            prev: function (a) {
                return d.nth(a, 2, "previousSibling")
            },
            nextAll: function (a) {
                return d.dir(a, "nextSibling")
            },
            prevAll: function (a) {
                return d.dir(a, "previousSibling")
            },
            nextUntil: function (a, b, c) {
                return d.dir(a, "nextSibling", c)
            },
            prevUntil: function (a, b, c) {
                return d.dir(a, "previousSibling",
                    c)
            },
            siblings: function (a) {
                return d.sibling(a.parentNode.firstChild, a)
            },
            children: function (a) {
                return d.sibling(a.firstChild)
            },
            contents: function (a) {
                return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : d.makeArray(a.childNodes)
            }
        }, function (a, b) {
            d.fn[a] = function (c, g) {
                var e = d.map(this, b, c),
                    f = Zb.call(arguments);
                Wb.test(a) || (g = c);
                g && typeof g === "string" && (e = d.filter(g, e));
                e = this.length > 1 && !$b[a] ? d.unique(e) : e;
                if ((this.length > 1 || Yb.test(g)) && Xb.test(a)) e = e.reverse();
                return this.pushStack(e,
                    a, f.join(","))
            }
        });
        d.extend({
            filter: function (a, b, c) {
                c && (a = ":not(" + a + ")");
                return b.length === 1 ? d.find.matchesSelector(b[0], a) ? [b[0]] : [] : d.find.matches(a, b)
            },
            dir: function (a, b, c) {
                for (var g = [], a = a[b]; a && a.nodeType !== 9 && (c === m || a.nodeType !== 1 || !d(a).is(c));) {
                    a.nodeType === 1 && g.push(a);
                    a = a[b]
                }
                return g
            },
            nth: function (a, b, c) {
                for (var b = b || 1, d = 0; a; a = a[c])
                    if (a.nodeType === 1 && ++d === b) break;
                return a
            },
            sibling: function (a, b) {
                for (var c = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
                return c
            }
        });
        var ac = / jQuery\d+="(?:\d+|null)"/g,
            wa = /^\s+/,
            db = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
            eb = /<([\w:]+)/,
            bc = /<tbody/i,
            cc = /<|&#?\w+;/,
            fb = /<(?:script|object|embed|option|style)/i,
            gb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            dc = /\/(java|ecma)script/i,
            rb = /^\s*<!(?:\[CDATA\[|\-\-)/,
            t = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>",
"</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            };
        t.optgroup = t.option;
        t.tbody = t.tfoot = t.colgroup = t.caption = t.thead;
        t.th = t.td;
        d.support.htmlSerialize || (t._default = [1, "div<div>", "</div>"]);
        d.fn.extend({
            text: function (a) {
                return d.isFunction(a) ? this.each(function (b) {
                    var c = d(this);
                    c.text(a.call(this, b, c.text()))
                }) : typeof a !== "object" && a !== m ? this.empty().append((this[0] && this[0].ownerDocument || l).createTextNode(a)) : d.text(this)
            },
            wrapAll: function (a) {
                if (d.isFunction(a)) return this.each(function (b) {
                    d(this).wrapAll(a.call(this,
                        b))
                });
                if (this[0]) {
                    var b = d(a, this[0].ownerDocument).eq(0).clone(true);
                    this[0].parentNode && b.insertBefore(this[0]);
                    b.map(function () {
                        for (var a = this; a.firstChild && a.firstChild.nodeType === 1;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function (a) {
                return d.isFunction(a) ? this.each(function (b) {
                    d(this).wrapInner(a.call(this, b))
                }) : this.each(function () {
                    var b = d(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function (a) {
                return this.each(function () {
                    d(this).wrapAll(a)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    d.nodeName(this,
                        "body") || d(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function () {
                return this.domManip(arguments, true, function (a) {
                    this.nodeType === 1 && this.appendChild(a)
                })
            },
            prepend: function () {
                return this.domManip(arguments, true, function (a) {
                    this.nodeType === 1 && this.insertBefore(a, this.firstChild)
                })
            },
            before: function () {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (a) {
                    this.parentNode.insertBefore(a, this)
                });
                if (arguments.length) {
                    var a = d(arguments[0]);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a,
                        "before", arguments)
                }
            },
            after: function () {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, d(arguments[0]).toArray());
                    return a
                }
            },
            remove: function (a, b) {
                for (var c = 0, g;
                    (g = this[c]) != null; c++)
                    if (!a || d.filter(a, [g]).length) {
                        if (!b && g.nodeType === 1) {
                            d.cleanData(g.getElementsByTagName("*"));
                            d.cleanData([g])
                        }
                        g.parentNode && g.parentNode.removeChild(g)
                    }
                return this
            },
            empty: function () {
                for (var a = 0, b;
                    (b = this[a]) != null; a++)
                    for (b.nodeType === 1 && d.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
                return this
            },
            clone: function (a, b) {
                a = a == null ? false : a;
                b = b == null ? a : b;
                return this.map(function () {
                    return d.clone(this, a, b)
                })
            },
            html: function (a) {
                if (a === m) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ac, "") : null;
                if (typeof a === "string" && !fb.test(a) && (d.support.leadingWhitespace || !wa.test(a)) && !t[(eb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a =
                        a.replace(db, "<$1></$2>");
                    try {
                        for (var b = 0, c = this.length; b < c; b++)
                            if (this[b].nodeType === 1) {
                                d.cleanData(this[b].getElementsByTagName("*"));
                                this[b].innerHTML = a
                            }
                    } catch (g) {
                        this.empty().append(a)
                    }
                } else d.isFunction(a) ? this.each(function (b) {
                    var c = d(this);
                    c.html(a.call(this, b, c.html()))
                }) : this.empty().append(a);
                return this
            },
            replaceWith: function (a) {
                if (this[0] && this[0].parentNode) {
                    if (d.isFunction(a)) return this.each(function (b) {
                        var c = d(this),
                            g = c.html();
                        c.replaceWith(a.call(this, b, g))
                    });
                    typeof a !== "string" &&
                        (a = d(a).detach());
                    return this.each(function () {
                        var b = this.nextSibling,
                            c = this.parentNode;
                        d(this).remove();
                        b ? d(b).before(a) : d(c).append(a)
                    })
                }
                return this.length ? this.pushStack(d(d.isFunction(a) ? a() : a), "replaceWith", a) : this
            },
            detach: function (a) {
                return this.remove(a, true)
            },
            domManip: function (a, b, c) {
                var g, e, f, h = a[0],
                    i = [];
                if (!d.support.checkClone && arguments.length === 3 && typeof h === "string" && gb.test(h)) return this.each(function () {
                    d(this).domManip(a, b, c, true)
                });
                if (d.isFunction(h)) return this.each(function (e) {
                    var f =
                        d(this);
                    a[0] = h.call(this, e, b ? f.html() : m);
                    f.domManip(a, b, c)
                });
                if (this[0]) {
                    g = h && h.parentNode;
                    g = d.support.parentNode && g && g.nodeType === 11 && g.childNodes.length === this.length ? {
                        fragment: g
                    } : d.buildFragment(a, this, i);
                    f = g.fragment;
                    if (e = f.childNodes.length === 1 ? f = f.firstChild : f.firstChild) {
                        b = b && d.nodeName(e, "tr");
                        e = 0;
                        for (var j = this.length, k = j - 1; e < j; e++) c.call(b ? d.nodeName(this[e], "table") ? this[e].getElementsByTagName("tbody")[0] || this[e].appendChild(this[e].ownerDocument.createElement("tbody")) : this[e] : this[e],
                            g.cacheable || j > 1 && e < k ? d.clone(f, true, true) : f)
                    }
                    i.length && d.each(i, qb)
                }
                return this
            }
        });
        d.buildFragment = function (a, b, c) {
            var g, e, f, h;
            b && b[0] && (h = b[0].ownerDocument || b[0]);
            h.createDocumentFragment || (h = l);
            if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && h === l && a[0].charAt(0) === "<" && !fb.test(a[0]) && (d.support.checkClone || !gb.test(a[0]))) {
                e = true;
                (f = d.fragments[a[0]]) && f !== 1 && (g = f)
            }
            if (!g) {
                g = h.createDocumentFragment();
                d.clean(a, h, g, c)
            }
            e && (d.fragments[a[0]] = f ? g : 1);
            return {
                fragment: g,
                cacheable: e
            }
        };
        d.fragments = {};
        d.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (a, b) {
            d.fn[a] = function (c) {
                var g = [],
                    c = d(c),
                    e = this.length === 1 && this[0].parentNode;
                if (e && e.nodeType === 11 && e.childNodes.length === 1 && c.length === 1) {
                    c[b](this[0]);
                    return this
                }
                for (var e = 0, f = c.length; e < f; e++) {
                    var h = (e > 0 ? this.clone(true) : this).get();
                    d(c[e])[b](h);
                    g = g.concat(h)
                }
                return this.pushStack(g, a, c.selector)
            }
        });
        d.extend({
            clone: function (a, b, c) {
                var g = a.cloneNode(true),
                    e, f, h;
                if ((!d.support.noCloneEvent ||
                        !d.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !d.isXMLDoc(a)) {
                    Da(a, g);
                    e = Q(a);
                    f = Q(g);
                    for (h = 0; e[h]; ++h) f[h] && Da(e[h], f[h])
                }
                if (b) {
                    Ca(a, g);
                    if (c) {
                        e = Q(a);
                        f = Q(g);
                        for (h = 0; e[h]; ++h) Ca(e[h], f[h])
                    }
                }
                return g
            },
            clean: function (a, b, c, g) {
                b = b || l;
                typeof b.createElement === "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || l);
                for (var e = [], f, h = 0, i;
                    (i = a[h]) != null; h++) {
                    typeof i === "number" && (i = i + "");
                    if (i) {
                        if (typeof i === "string")
                            if (cc.test(i)) {
                                i = i.replace(db, "<$1></$2>");
                                f = (eb.exec(i) || ["", ""])[1].toLowerCase();
                                var j = t[f] || t._default,
                                    k = j[0],
                                    m = b.createElement("div");
                                for (m.innerHTML = j[1] + i + j[2]; k--;) m = m.lastChild;
                                if (!d.support.tbody) {
                                    k = bc.test(i);
                                    j = f === "table" && !k ? m.firstChild && m.firstChild.childNodes : j[1] === "<table>" && !k ? m.childNodes : [];
                                    for (f = j.length - 1; f >= 0; --f) d.nodeName(j[f], "tbody") && !j[f].childNodes.length && j[f].parentNode.removeChild(j[f])
                                }!d.support.leadingWhitespace && wa.test(i) && m.insertBefore(b.createTextNode(wa.exec(i)[0]), m.firstChild);
                                i = m.childNodes
                            } else i = b.createTextNode(i);
                        var n;
                        if (!d.support.appendChecked)
                            if (i[0] &&
                                typeof (n = i.length) === "number")
                                for (f = 0; f < n; f++) Fa(i[f]);
                            else Fa(i);
                        i.nodeType ? e.push(i) : e = d.merge(e, i)
                    }
                }
                if (c) {
                    a = function (a) {
                        return !a.type || dc.test(a.type)
                    };
                    for (h = 0; e[h]; h++)
                        if (g && d.nodeName(e[h], "script") && (!e[h].type || e[h].type.toLowerCase() === "text/javascript")) g.push(e[h].parentNode ? e[h].parentNode.removeChild(e[h]) : e[h]);
                        else {
                            if (e[h].nodeType === 1) {
                                b = d.grep(e[h].getElementsByTagName("script"), a);
                                e.splice.apply(e, [h + 1, 0].concat(b))
                            }
                            c.appendChild(e[h])
                        }
                }
                return e
            },
            cleanData: function (a) {
                for (var b, c,
                        g = d.cache, e = d.expando, f = d.event.special, h = d.support.deleteExpando, i = 0, j;
                    (j = a[i]) != null; i++)
                    if (!j.nodeName || !d.noData[j.nodeName.toLowerCase()])
                        if (c = j[d.expando]) {
                            if ((b = g[c] && g[c][e]) && b.events) {
                                for (var k in b.events) f[k] ? d.event.remove(j, k) : d.removeEvent(j, k, b.handle);
                                if (b.handle) b.handle.elem = null
                            }
                            h ? delete j[d.expando] : j.removeAttribute && j.removeAttribute(d.expando);
                            delete g[c]
                        }
            }
        });
        var xa = /alpha\([^)]*\)/i,
            ec = /opacity=([^)]*)/,
            fc = /([A-Z]|^ms)/g,
            hb = /^-?\d+(?:px)?$/i,
            gc = /^-?\d/,
            hc = /^([\-+])=([\-+.\de]+)/,
            ic = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            sb = ["Left", "Right"],
            tb = ["Top", "Bottom"],
            A, ib, jb;
        d.fn.css = function (a, b) {
            return arguments.length === 2 && b === m ? this : d.access(this, a, b, true, function (a, b, e) {
                return e !== m ? d.style(a, b, e) : d.css(a, b)
            })
        };
        d.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = A(a, "opacity", "opacity");
                            return c === "" ? "1" : c
                        }
                        return a.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": d.support.cssFloat ?
                    "cssFloat" : "styleFloat"
            },
            style: function (a, b, c, g) {
                if (a && !(a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
                    var e, f = d.camelCase(b),
                        h = a.style,
                        i = d.cssHooks[f],
                        b = d.cssProps[f] || f;
                    if (c !== m) {
                        g = typeof c;
                        if (g === "string" && (e = hc.exec(c))) {
                            c = +(e[1] + 1) * +e[2] + parseFloat(d.css(a, b));
                            g = "number"
                        }
                        if (!(c == null || g === "number" && isNaN(c))) {
                            g === "number" && !d.cssNumber[f] && (c = c + "px");
                            if (!i || !("set" in i) || (c = i.set(a, c)) !== m) try {
                                h[b] = c
                            } catch (j) {}
                        }
                    } else return i && "get" in i && (e = i.get(a, false, g)) !== m ? e : h[b]
                }
            },
            css: function (a, b, c) {
                var g,
                    e, b = d.camelCase(b);
                e = d.cssHooks[b];
                b = d.cssProps[b] || b;
                b === "cssFloat" && (b = "float");
                if (e && "get" in e && (g = e.get(a, true, c)) !== m) return g;
                if (A) return A(a, b)
            },
            swap: function (a, b, c) {
                var d = {},
                    e;
                for (e in b) {
                    d[e] = a.style[e];
                    a.style[e] = b[e]
                }
                c.call(a);
                for (e in b) a.style[e] = d[e]
            }
        });
        d.curCSS = d.css;
        d.each(["height", "width"], function (a, b) {
            d.cssHooks[b] = {
                get: function (a, g, e) {
                    var f;
                    if (g) {
                        if (a.offsetWidth !== 0) return Ga(a, b, e);
                        d.swap(a, ic, function () {
                            f = Ga(a, b, e)
                        });
                        return f
                    }
                },
                set: function (a, b) {
                    if (hb.test(b)) {
                        b = parseFloat(b);
                        if (b >= 0) return b + "px"
                    } else return b
                }
            }
        });
        d.support.opacity || (d.cssHooks.opacity = {
            get: function (a, b) {
                return ec.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function (a, b) {
                var c = a.style,
                    g = a.currentStyle,
                    e = d.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
                    f = g && g.filter || c.filter || "";
                c.zoom = 1;
                if (b >= 1 && d.trim(f.replace(xa, "")) === "") {
                    c.removeAttribute("filter");
                    if (g && !g.filter) return
                }
                c.filter = xa.test(f) ? f.replace(xa, e) : f + " " + e
            }
        });
        d(function () {
            if (!d.support.reliableMarginRight) d.cssHooks.marginRight = {
                get: function (a, b) {
                    var c;
                    d.swap(a, {
                        display: "inline-block"
                    }, function () {
                        c = b ? A(a, "margin-right", "marginRight") : a.style.marginRight
                    });
                    return c
                }
            }
        });
        l.defaultView && l.defaultView.getComputedStyle && (ib = function (a, b) {
            var c, g, b = b.replace(fc, "-$1").toLowerCase();
            if (!(g = a.ownerDocument.defaultView)) return m;
            if (g = g.getComputedStyle(a, null)) {
                c = g.getPropertyValue(b);
                c === "" && !d.contains(a.ownerDocument.documentElement, a) && (c = d.style(a, b))
            }
            return c
        });
        l.documentElement.currentStyle && (jb = function (a, b) {
            var c, d = a.currentStyle &&
                a.currentStyle[b],
                e = a.runtimeStyle && a.runtimeStyle[b],
                f = a.style;
            if (!hb.test(d) && gc.test(d)) {
                c = f.left;
                if (e) a.runtimeStyle.left = a.currentStyle.left;
                f.left = b === "fontSize" ? "1em" : d || 0;
                d = f.pixelLeft + "px";
                f.left = c;
                if (e) a.runtimeStyle.left = e
            }
            return d === "" ? "auto" : d
        });
        A = ib || jb;
        d.expr && d.expr.filters && (d.expr.filters.hidden = function (a) {
            var b = a.offsetHeight;
            return a.offsetWidth === 0 && b === 0 || !d.support.reliableHiddenOffsets && (a.style.display || d.css(a, "display")) === "none"
        }, d.expr.filters.visible = function (a) {
            return !d.expr.filters.hidden(a)
        });
        return d
    }(window);

    function h(a) {
        throw a;
    }
    var i = void 0,
        k = !0,
        l = null,
        m = !1;

    function aa() {
        return function (a) {
            return a
        }
    }

    function ba(a) {
        var b = typeof a;
        return "object" == b && a != l || "function" == b
    }

    function ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function da(a, b, c) {
        a || h(Error());
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function n(a, b, c) {
        n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da;
        return n.apply(l, arguments)
    }

    function ea(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    };

    function fa(a) {
        this.Q = a
    }
    fa.prototype.get = function (a) {
        try {
            return ha(this.Q.getItem(ia))[a]
        } catch (b) {}
    };
    fa.prototype.set = function (a, b) {
        try {
            var c = ha(this.Q.getItem(ia)) || {};
            c[a] = b;
            this.Q.setItem(ia, p(c))
        } catch (d) {}
    };
    var ja = {
            get: function () {},
            set: function () {}
        },
        ia = "optimizely_data",
        r = ja,
        ka = ja;
    try {
        r = new fa(window.localStorage), ka = new fa(window.sessionStorage)
    } catch (la) {};

    function ma(a, b) {
        var c = k;
        v(a, function (a) {
            if (!b(a)) return c = m
        });
        return c
    }

    function w(a, b) {
        var c = m;
        v(a, function (a) {
            if (b(a)) return c = k
        });
        return c
    }

    function x(a, b) {
        for (var c = 0; c < a.length; c++)
            if (b == a[c]) return k;
        return m
    }

    function na(a, b) {
        var c = oa(arguments, 1);
        return function () {
            var b = oa(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    }

    function v(a, b) {
        var c = l;
        if (z(a))
            for (var d = a.length, e = 0; e < d && !(c = b.call(i, a[e], e), C(c)); ++e);
        else
            for (d in a)
                if (Object.prototype.hasOwnProperty.call(a, d) && (c = b.call(i, d, a[d]), C(c))) break; return c
    }

    function pa(a, b) {
        if ("function" === typeof a.map) return a.map(b);
        for (var c = [], d = 0; d < a.length; d++) c.push(b(a[d], d));
        return c
    }

    function D(a, b) {
        v(b, function (b, d) {
            a[b] = d
        });
        return a
    }

    function qa(a, b) {
        for (var c = [], d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            b(f) && c.push(f)
        }
        return c
    }

    function ra(a, b) {
        return v(b, function (b) {
            if (b === a) return k
        }) || m
    }

    function z(a) {
        return a && "object" === typeof a && a.length && "number" === typeof a.length
    }

    function C(a) {
        return "undefined" !== typeof a
    }

    function sa(a) {
        return ("number" === typeof a || "string" === typeof a) && Number(a) == a
    }

    function E(a) {
        E = Object.gb || function (a) {
            var c = [];
            v(a, function (a) {
                c.push(a)
            });
            return c
        };
        return E.call(l, a)
    }

    function ta(a, b) {
        function c() {
            var b = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                c = document.createElement("script");
            c.src = a;
            c.type = "text/javascript";
            b.appendChild(c)
        }
        if (b) try {
            if ("loading" === document.readyState) {
                var d = "optimizely_synchronous_script_" + Math.floor(1E5 * Math.random()); - 1 !== a.indexOf('"') ? G("loadScript", "Blocked attempt to load unsafe script: " + a) : (document.write('<script id="' + d + '" src="' + a + '"><\/script>'), 1 !== $("#" + d).length && h(Error("Document.write failed to append script")))
            } else h(Error("Not safe to attempt document.write"))
        } catch (e) {
            try {
                var f =
                    new XMLHttpRequest;
                f.open("GET", a, m);
                f.onload = function () {
                    eval(f.responseText)
                };
                f.onerror = function () {
                    h(Error())
                };
                f.send()
            } catch (g) {
                H("Common", "Failed to load %s synchronously", a), c()
            }
        } else c()
    }

    function H(a, b, c) {
        var d = window.console;
        if (ua && d && d.log) {
            var e = oa(arguments, 1);
            e[0] = "Optimizely / " + a + " / " + b;
            Function.prototype.apply.call(d.log, d, e)
        }
    }

    function va(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return a
        }
    }

    function oa(a, b) {
        return Array.prototype.slice.call(a, b || 0, a.length)
    };

    function wa(a) {
        a = a || {};
        if (xa) {
            a && a.sVariable && (ya = a.sVariable);
            var b = ya || ("undefined" !== typeof window.s ? window.s : l);
            if (b)
                if (za) {
                    a = Aa;
                    if (a !== l && b) try {
                        H("Integrator", "Fixing SiteCatalyst referrer to %s", a), b.referrer = String(a)
                    } catch (c) {
                        H("Integrator", "Error setting SiteCatalyst referrer: %s", c)
                    }
                    H("Integrator", "Tracking with SiteCatalyst");
                    v(Ba(), function (a) {
                        var c = I(a),
                            a = J(c, a, 100, 100, 25, k),
                            f = a.key + ": " + a.value,
                            a = [],
                            g = K(c, "site_catalyst_evar") || l,
                            c = K(c, "site_catalyst_prop") || l;
                        g !== l && a.push("eVar" + g);
                        c !== l && a.push("prop" + c);
                        v(a, function (a) {
                            H("Integrator", "Setting SiteCatalyst %s='%s'", a, f);
                            b[a] = f
                        })
                    })
                } else Ca = k;
            else G("Integrator", "Error with SiteCatalyst integration: 's' variable not defined")
        }
    }

    function Da(a) {
        a = sa(a) ? Number(a) : -1;
        if (-1 !== [1, 2, 3].indexOf(a)) Ea = a;
        else return Ea
    }

    function Fa() {
        if (xa) {
            var a = Aa;
            if (a !== l) try {
                H("Integrator", "Fixing _gaq._setReferrerOverride with %s", a), _gaq.push(["_setReferrerOverride", a])
            } catch (b) {
                H("Integrator", "Error setting Google Analytics referrer: %s", b)
            }
            var c = [];
            v(Ba(), function (a) {
                var b = I(a);
                if (K(b, "chartbeat")) {
                    var d = Ga;
                    Ga = "";
                    var e = J(b, a, 10, 10, 5, m);
                    Ga = d;
                    d = Ha(a);
                    Ia = e.key + ": " + String(d);
                    try {
                        H("Integrator", "Calling _cbq.push"), _cbq.push(["_optlyx", Ia])
                    } catch (t) {
                        G("Integrator", "Error sending Chartbeat data for " + L(b))
                    }
                }
                if (Ja(b)) {
                    var e = Ja(b),
                        d = J(b, a, 100, 100, 25, k),
                        q = e + (-1 !== e.indexOf("?") ? "&" : "?") + "optimizely_experiment_id=" + b + "&optimizely_experiment_name=" + encodeURIComponent(d.key) + "&optimizely_variation_id=" + a + "&optimizely_variation_name=" + encodeURIComponent(d.value) + "&ns_m_exp=(" + b + ") " + encodeURIComponent(d.key) + "&ns_m_chs=(" + a + ") " + encodeURIComponent(d.value) + "&type=hidden";
                    try {
                        $(window).load(function () {
                            G("Integrator", "Sending comScore log call");
                            Ka(q, l)
                        })
                    } catch (u) {
                        G("Integrator", "Error sending comScore data for " + L(b))
                    }
                }
                if (K(b, "crazyegg")) {
                    e =
                        J(b, a, 100, 100, 15, m);
                    try {
                        H("Integrator", "Defining CE_SNAPSHOT_NAME"), window.CE_SNAPSHOT_NAME = e.key + ": " + e.value
                    } catch (B) {
                        G("Integrator", "Error sending CrazyEgg data for " + L(b))
                    }
                }
                if (La(b)) {
                    e = La(b);
                    d = 0;
                    C(e) && (d = e.slot || d);
                    var e = d,
                        d = La(b),
                        y = "";
                    C(d) && (y = d.tracker || y);
                    d = y;
                    y = J(b, a, 28, 24, 5, k);
                    try {
                        var T = "";
                        "" !== d && (T = d + ".");
                        H("Integrator", "Calling _gaq._setCustomVar for slot %d and scope %d", e, Ea);
                        _gaq.push([T + "_setCustomVar", e, y.key, y.value, Ea])
                    } catch (F) {
                        G("Integrator", "Error sending Google Analytics data for " +
                            L(b))
                    }
                }
                if (K(b, "inspectlet")) {
                    e = Ga;
                    Ga = "";
                    d = J(b, a, 100, 100, 25, m);
                    Ga = e;
                    try {
                        G("Integrator", "Calling __insp.push for sending data to Inspectlet"), window.__insp = window.__insp || [], window.__insp.push(["tagSession", {
                            "Optimizely Experiment Name": d.key,
                            "Optimizely Variation Name": d.value,
                            "Optimizely Experiment ID": b,
                            "Optimizely Variation ID": a
                        }])
                    } catch (A) {
                        G("Integrator", "Error sending Inspectlet data for " + L(b))
                    }
                }
                if (M("kissmetrics")) {
                    e = J(b, a, 100, 100, 15, k);
                    d = {};
                    d[e.key] = e.value;
                    try {
                        H("Integrator", "Calling _kmq.set"),
                            _kmq.push(["set", d])
                    } catch (nb) {
                        G("Integrator", "Error sending KISSmetrics data for " + L(b))
                    }
                }
                if (K(b, "mixpanel")) {
                    e = J(b, a, 100, 100, 15, m);
                    d = {};
                    d[e.key] = e.value;
                    try {
                        H("Integrator", "Calling mixpanel.push"), mixpanel.push(["register", d])
                    } catch (ec) {
                        G("Integrator", "Error sending Mixpanel data for " + L(b))
                    }
                }
                if (K(b, "moat")) {
                    e = J(b, a, 100, 100, 15, m);
                    e = e.key + ": " + e.value;
                    try {
                        H("Integrator", "Calling optimizelyMoat.push"), optimizelyMoat.push(e)
                    } catch (fc) {
                        G("Integrator", "Error sending Moat data for " + L(b))
                    }
                }
                K(b, "sessioncam") &&
                    (c = c.concat(Ma(b, a)));
                if (Na(b, "acct_no")) {
                    e = Na(b, "acct_no");
                    d = Na(b, "url");
                    y = J(b, a, 28, 24, 5, k);
                    a = d + "/hit.xiti?s=" + e + "&abmvc=" + (b + "[" + encodeURIComponent(y.key) + "]-0-" + a + "[" + encodeURIComponent(y.value) + "]") + "&type=mvt";
                    try {
                        H("Integrator", "Sending AT Internet log call for account %s", e), Ka(a, l)
                    } catch (hc) {
                        G("Integrator", "Error sending AT Internet data for " + L(b))
                    }
                }
            });
            if (0 < c.length) {
                a = c;
                try {
                    G("Integrator", "Calling sessioncamConfiguration object"), window.sessioncamConfiguration = window.sessioncamConfiguration || {}, window.sessioncamConfiguration.customDataObjects = window.sessioncamConfiguration.customDataObjects || [], window.sessioncamConfiguration.customDataObjects = window.sessioncamConfiguration.customDataObjects.concat(a)
                } catch (d) {
                    G("Integrator", "Error sending sessioncam data " + a)
                }
            }
            a = N("optimizelyChartbeat") || "";
            try {
                if (a && Ia != a && (H("Integrator", "Calling _cbq.push for referral"), _cbq.push(["_optlyr", a])), Ia != a) H("Integrator", "Set new Chartbeat referral cookie."), O("optimizelyChartbeat", Ia)
            } catch (e) {
                G("Integrator",
                    "Error sending Chartbeat referral for " + a)
            }
            za = k;
            Oa && (Pa(), Oa = m);
            Ca && (wa(), Ca = m)
        }
    }

    function Qa() {
        if (window.ClickTaleContext) {
            try {
                window.ClickTaleContext.getAggregationContextAsync("1", function (a) {
                    a.Location && window.optimizely.push(["overrideUrl", a.Location]);
                    for (var b in a.PageEvents) {
                        var e = a.PageEvents[b][2].match(/x[0-9]+=[0-9_]+/g);
                        H("Integrator", "Playback ClickTale Integration - %s", e);
                        for (b = 0; b < e.length; b++) {
                            H("Integrator", "Playback ClickTale Integration - %s", e[b]);
                            for (var f = e[b].split("=")[0].substr(1), g = e[b].split("=")[1].split("_"), j = 0; j < g.length; j++) Ra(g[j]) ? H("Integrator",
                                "Skip activation for redirect.") : window.optimizely.push(["activate", f, g[j], {
                                force: k
                            }])
                        }
                    }
                })
            } catch (a) {
                H("Integrator", "Playback ClickTale Aggregation Integration failed.")
            }
            try {
                window.ClickTaleContext.getRecordingContextAsync("1.1", function (a) {
                    if (a.inSingleRecordingScope) {
                        a.location && window.optimizely.push(["overrideUrl", a.location]);
                        H("Integrator", "Playback ClickTale getRecordingContextAsync callback");
                        for (var b in a.fields) H("Integrator", "Playback ClickTale Integration - %s=%s", b, a.fields[b]), Ra(a.fields[b]) ?
                            H("Integrator", "Skip activation for redirect.") : window.optimizely.push(["activate", b, a.fields[b], {
                                force: k
                            }])
                    }
                })
            } catch (b) {
                H("Integrator", "Playback ClickTale Recording Integration failed.")
            }
        } else H("Integrator", "ClickTaleContext not defined.")
    }

    function Sa() {
        H("Integrator", "Tracking with ClickTale.");
        "function" == typeof window.ClickTaleField ? v(Ba(), function (a) {
            var b = I(a),
                c = J(b, a, 100, 100, 15, m),
                c = c.key + ": " + c.value + " (x" + b + "=" + a + ")";
            H("Integrator", "Setting ClickTale - %s", c);
            window.ClickTaleField(b, a);
            window.ClickTaleEvent(c)
        }) : H("Integrator", "ClickTaleField() not defined.")
    }

    function Ta(a) {
        Ga = a
    }

    function Ua(a) {
        ya = a
    }

    function Va(a, b) {
        return a.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_").substring(0, b)
    }

    function Ba() {
        var a = Wa.concat(Q),
            b = [];
        v(Xa(), function (c) {
            var e = I(c),
                f = m;
            if (Ya(e)) {
                var g = Za(c);
                x(a, e) && (H("Integrator", '"%s" relevant because experiment active', g), f = k);
                f && b.push(c)
            }
        });
        var c = $a;
        c && b.push(c);
        return b
    }

    function Ra(a) {
        return (a = bb(cb(a))) ? a[1] : l
    }

    function Pa() {
        if (xa)
            if (za) {
                var a = window[window.GoogleAnalyticsObject || "ga"];
                if (a) {
                    var b = Aa;
                    if (b !== l) try {
                        H("Integrator", "Fixing Universal Analytics set referrer with %s", b), (0, window[window.GoogleAnalyticsObject || "ga"])("set", "referrer", b)
                    } catch (c) {
                        H("Integrator", "Error setting Universal Analytics referrer: %s", c)
                    }
                    H("Integrator", "Tracking with Universal Analytics");
                    v(Ba(), function (b) {
                        var c = I(b);
                        if (db(c, "slot")) {
                            var f = db(c, "slot"),
                                g = db(c, "tracker"),
                                j = J(c, b, 100, 100, 25, k),
                                b = j.key + " (" + c + "): " + j.value;
                            150 < b.length && (b = j.key.substring(0, 80) + " (" + c + "): " + j.value, b = b.substring(0, 149));
                            c = g ? g + "." : "";
                            H("Integrator", "Calling ua set dimension - ga(%sset, dimension%d, %s)", c, f, b);
                            a(c + "set", "dimension" + f, b)
                        }
                    })
                } else G("Integrator", "Error with Universal Analytics integration: 'GoogleAnalyticsObject' not defined")
            } else Oa = k
    }

    function Ma(a, b) {
        G("Integrator", "Preparing to send data to Sessioncam");
        return [J(a, b, 100, 100, 15, m), {
            key: "Optimizely Exp " + a,
            value: "Optimizely Var " + b
        }]
    }

    function J(a, b, c, d, e, f) {
        a = Ga + eb(a);
        b = fb(b);
        1 < b.length ? (b = $.map(b, function (a) {
            return a.substr(0, e - 1)
        }), b = b.join("~")) : b = b[0];
        f ? (a = Va(a, c), b = Va(b.replace("#", ""), d)) : (a = a.substring(0, c), b = b.substring(0, d));
        return {
            key: a,
            value: b
        }
    }
    var Oa = m,
        Ca = m,
        Ia = "",
        Ea = 2,
        za = m,
        Ga = "Optimizely ",
        ya = l;
    var gb, hb;

    function ib(a, b, c) {
        if (!R) return m;
        var d = "number" === typeof b || "string" === typeof b ? String(b) : l,
            e = b === k || b && b.force === k || c && c.force === k,
            c = ("object" === typeof b ? b : c) || {},
            f = c.skip === k,
            b = c.skipPageview === k,
            g = c.enabledStatus;
        if (d) try {
            jb(a, d, k)
        } catch (j) {
            G("API", "Error while activating experiment " + a + " for variation " + d + " -- proceeding without bucketing user.")
        }
        var o = l,
            t = [],
            q = [];
        sa(a) ? t.push(a) : v(kb(), function (a) {
            lb(a) && t.push(a)
        });
        G("API", "Testing experiments to activate");
        v(t, function (a) {
            if (!e && !mb(a)) ob.push(a);
            else if (e || pb(a, {
                    manualMode: k,
                    objectType: "experiment",
                    enabledStatus: g,
                    visitor: S
                }))(o = qb(a, f)) && q.push(a)
        });
        rb(q, t);
        sb();
        Fa();
        R && !b && tb(document.location.href, "pageview", {
            H: k
        })
    }

    function ub(a) {
        if (!R) return m;
        var b = n(r.set, r, "asyncInfo"),
            c = !!a;
        c && (U("geoArrive"), b(a));
        if (!vb)
            if (vb = k, wb = a || wb) {
                G("API", "Testing geodelayed segments");
                v(xb, function (a) {
                    yb(a)
                });
                var d = [];
                G("API", "Testing geodelayed experiments");
                v(ob, function (a) {
                    pb(a, {
                        manualMode: k,
                        objectType: "experiment",
                        visitor: S
                    }) && qb(a) && d.push(a)
                });
                rb(d, ob);
                sb();
                Fa();
                zb || tb(document.location.href, "pageview", {
                    H: k
                });
                Ab();
                U(c ? "geoSuccess" : "geoCache")
            } else geolocation.requested && U("geoFailed");
        return k
    }

    function Bb(a, b) {
        try {
            var c = r.get("thirdParty") || {};
            c[a] = b;
            r.set("thirdParty", c)
        } catch (d) {}
    }

    function Cb(a, b) {
        var c = Db(a) || a,
            d = Eb()[c];
        d ? d.audience_id ? S.u(d.audience_id) : d.dimension_id ? S.G(d.dimension_id, b || k, m) : Fb(c, b) : G("API", "Unable to find segment: " + c)
    }

    function jb(a, b, c) {
        Gb = k;
        R && c !== k && tb(document.location.href, "pageview", {
            H: k
        });
        var a = String(a),
            b = String(b),
            d = l,
            e = b.split("_"),
            f = Hb(a),
            b = f && 0 !== f.length;
        if ("-1" === e[0]) {
            c = a;
            Ib[c] && delete Ib[c];
            Jb[c] && delete Jb[c];
            for (e = 0; e < V.length; e++) V[e].w === c && V.splice(e, 1);
            Kb()
        } else if (b && e.length == f.length) d = [], v(e, function (a, b) {
            256 >= Number(a) ? d.push(Lb(f[b])[a]) : d.push(a)
        }), d = d.join("_");
        else if (!b && 1 == e.length && 256 >= Number(e[0])) {
            var c = String,
                e = e[0],
                g = Mb(a),
                j = l;
            try {
                j = g[e]
            } catch (o) {}
            d = c(j)
        } else 1 == e.length ? d =
            e[0] : G("API", "Error: could not bucket user. Unknown arguments.");
        d && (b && Nb(a, d) ? (b = d, c = Nb(a, b), Ob[a] = Ob[a] || {}, Ob[a][c] = b, G("Distributor", "Preferring variation partial " + b + " of section " + c + " of experiment " + a), a = Pb(a), 1 === a.length && Qb(a[0], "api.bucketUser", k)) : Qb(d, "api.bucketUser", k));
        sb()
    }

    function Rb(a) {
        a && "tracking" === a || (G("API", "Optimizely disabled"), R = m);
        xa = m
    }

    function Sb() {
        G("API", "Finalizing API.");
        Ab();
        gb = k
    }

    function Tb(a, b, c) {
        var d = [],
            e = b,
            c = C(c) ? c : m;
        z(b) && (e = b[0], d = oa(b, 1));
        (a = a[e]) ? (G("API", 'Called function "' + e + '"'), a.apply(l, d)) : c || G("API", 'Error for unknown function "' + e + '"');
        Ub()
    }

    function Vb(a, b) {
        gb ? G("API", "Error: can't add custom tags after Optimizely loads") : (hb = hb || {}, 2 == arguments.length ? hb[a] = b : 1 == arguments.length && $.extend(k, hb, a))
    }

    function Wb(a, b) {
        var c = Db(a) || a,
            b = C(b) ? b : k,
            d = Eb()[c];
        d ? d.audience_id ? S.P(d.audience_id) : d.dimension_id ? S.G(d.dimension_id, l) : Xb(c, b) : G("API", "Unable find segment for: " + c)
    }

    function Yb() {
        var a = E(Eb());
        v(a, function (a) {
            Wb(a, m)
        });
        Zb()
    }

    function Ab() {
        $b = {};
        ac = {};
        bc = {};
        v(Xa(), function (a) {
            var b = I(a);
            $b[b] = a.split("_");
            ac[b] = Ha(a);
            bc[b] = Za(a)
        });
        W = {};
        var a = M("audiences");
        a && (W.audiences = a);
        W.experiments = {};
        W.sections = {};
        W.segments = {};
        W.state = {};
        W.variations = {};
        W.visitor = {};
        W.customTags = hb;
        W.thirdParty = r.get("thirdParty") || {};
        for (var b = kb(), a = 0; a < b.length; a++) {
            var c = b[a],
                d = {};
            d.code = K(c, "code") || "";
            d.name = eb(c);
            d.conditional = cc(c);
            d.manual = lb(c);
            d.section_ids = Hb(c);
            d.variation_ids = Mb(c);
            W.experiments[c] = d
        }
        b = E(Eb());
        for (a = 0; a < b.length; a++) c =
            b[a], W.segments[c] = {
                name: dc(c, "name") || "Seg " + c
            };
        b = E(M("sections") || {});
        for (a = 0; a < b.length; a++) c = b[a], d = {}, d.name = M("sections", c, "name") || "Sec " + c, d.variation_ids = Lb(c), W.sections[c] = d;
        b = E(M("variations") || {});
        for (a = 0; a < b.length; a++) c = b[a], d = {}, d.name = Za(c), d.code = cb(c), W.variations[c] = d;
        b = {};
        a = gc();
        D(b, {
            browser: ic[a] ? ic[a][0] : a,
            browserVersion: jc(),
            device: kc().id,
            deviceType: kc().type,
            platform: lc(),
            mobile: mc(),
            mobileId: nc(),
            os: lc().id
        });
        b.location = oc();
        b.ip = pc();
        b.params = {};
        c = qc();
        c.reverse();
        a = 0;
        for (d = c.length; a < d; a++) try {
            b.params[va(c[a][0])] = va(c[a][1])
        } catch (e) {
            G("API", "Failed to decode parameter " + c[a][0] + "=" + c[a][1])
        }
        b.referrer = String(document.referrer);
        b.segments = rc();
        b.dimensions = S.g;
        b.audiences = S.f;
        W.visitor = b;
        a = {};
        a.activeExperiments = Wa || [];
        a.variationIdsMap = $b;
        a.variationMap = ac;
        a.variationNamesMap = bc;
        a.enabled = R;
        W.state = a;
        D(window.optimizely, {
            activeExperiments: Wa,
            allExperiments: sc(),
            all_experiments: sc(),
            data: W,
            variationIdsMap: $b,
            variationMap: ac,
            variationNamesMap: bc,
            variation_map: ac
        })
    }

    function tc(a) {
        if (!sa(a)) return m;
        uc = Number(a)
    }

    function vc() {
        wc = k
    }

    function xc(a) {
        var b = "";
        "number" !== typeof a ? (b = "must be a number.", a = 31536E4) : a = Math.floor(86400 * a);
        7776E3 > a && (b = "less then minimum.", a = 7776E3);
        G("API", (b && "Days argument " + b) + " Cookie expiration set to " + a + " seconds.");
        yc = a;
        zc()
    }

    function Ac() {
        zb = k
    }

    function Bc() {
        N("optimizelyReportableFix") ? G("API", "skipping because cookie is set") : (v(M("audiences"), function (a) {
            Cc(a) && (G("API", "Removing from reportable audience: " + a), S.P(a))
        }), O("optimizelyReportableFix", "1", 7776E3))
    }

    function Dc(a) {
        var b = Ec();
        a ? O("optimizelyPPID", a, yc) : Fc("optimizelyPPID", Gc || Hc || Ic);
        a !== b && (G("Plan", "Resetting visitor buckets"), Jc = {}, Ib = {}, Jb = {}, V = [], sb());
        G("API", "Set PPID to " + a)
    }
    var W = {},
        Kc = {},
        wb = l,
        vb = m,
        ob = [],
        xb = [],
        $b = {},
        ac = {},
        bc = {},
        S = l;
    var Lc = Math.pow(2, 32);

    function Mc(a, b) {
        function c(a, b) {
            var c = b & 65535;
            return ((b - c) * a | 0) + (c * a | 0) | 0
        }
        for (var d = a.length, e = b || 0, f = d & -4, g, j = 0; j < f; j += 4) g = a.charCodeAt(j) & 255 | (a.charCodeAt(j + 1) & 255) << 8 | (a.charCodeAt(j + 2) & 255) << 16 | (a.charCodeAt(j + 3) & 255) << 24, g = c(g, 3432918353), g = (g & 131071) << 15 | g >>> 17, g = c(g, 461845907), e ^= g, e = (e & 524287) << 13 | e >>> 19, e = 5 * e + 3864292196 | 0;
        g = 0;
        switch (d % 4) {
        case 3:
            g = (a.charCodeAt(f + 2) & 255) << 16;
        case 2:
            g |= (a.charCodeAt(f + 1) & 255) << 8;
        case 1:
            g |= a.charCodeAt(f) & 255, g = c(g, 3432918353), e ^= c((g & 131071) << 15 | g >>> 17, 461845907)
        }
        e ^=
            d;
        e = c(e ^ e >>> 16, 2246822507);
        e = c(e ^ e >>> 13, 3266489909);
        return ((e ^ e >>> 16) >>> 0) / Lc
    };
    var Nc = window.OPTIMIZELY_TEST_MODULE,
        Oc = "com local net org xxx edu es gov biz info fr nl ca de kr it me ly tv mx cn jp il in iq test".split(" "),
        Qc = /\/\*\s*_optimizely_variation_url( +include="([^"]*)")?( +exclude="([^"]*)")?( +match_type="([^"]*)")?( +include_match_types="([^"]*)")?( +exclude_match_types="([^"]*)")?( +id="([^"]*)")?\s*\*\//;
    var Rc, uc = 0,
        Sc = m,
        R = k,
        Tc = m,
        wc = m,
        Uc = "",
        Vc = m,
        Wc = m,
        ua = m,
        Xc = m,
        Gb = m,
        zb = m,
        xa = k,
        yc = 31536E4;

    function Yc() {
        var a;
        if (!(a = Zc)) {
            var b = new $c.ma(window.navigator.userAgent);
            a = b.i();
            var c = b.ca(),
                b = b.A(),
                d = b.model in ad ? ad[b.model] : "unknown",
                e = (c.name || "unknown").toLowerCase(),
                f;
            a: if (x(["mobile", "tablet"], b.type)) f = k;
                else {
                    if (d && "unknown" !== d)
                        for (f in ad)
                            if (d === ad[f]) {
                                f = k;
                                break a
                            }
                    f = x(["android", "blackberry", "ios", "windows phone"], e) ? k : m
                }
            a = {
                na: bd(a.name),
                oa: a.version,
                platform: {
                    id: e,
                    version: c.version
                },
                v: {
                    id: d,
                    type: b.type || (f ? "mobile" : "desktop"),
                    l: f
                }
            }
        }
        return Zc = a
    }

    function gc() {
        return Yc().na
    }

    function jc() {
        return Yc().oa
    }

    function kc() {
        return Yc().v
    }

    function cd(a) {
        if (!a) return "";
        try {
            return a.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]
        } catch (b) {
            return ""
        }
    }

    function lc() {
        return Yc().platform
    }

    function ed() {
        var a = N("optimizelyEndUserId");
        a || (a = "oeu" + +new Date + "r" + Math.random(), O("optimizelyEndUserId", a, yc));
        return a
    }

    function Ec() {
        return N("optimizelyPPID")
    }

    function fd(a) {
        var b = Ec() || ed(),
            b = r.get(b) || {};
        return a ? b[a] : b
    }

    function pc() {
        var a = "";
        try {
            a = (wb || l).ip
        } catch (b) {}
        return X(a)
    }

    function oc() {
        var a = wb || l,
            a = a && a.location || {};
        return {
            city: X(a.city),
            continent: X(a.continent),
            country: X(a.country),
            region: X(a.region)
        }
    }

    function X(a) {
        if (!a) return "";
        a = a.toUpperCase();
        return "N/A" == a ? "" : a
    }

    function nc() {
        var a = "android;blackberry;ipad;iphone;ipod;windows phone".split(";");
        return x(a, kc().id) ? kc().id : x(a, lc().id) ? lc().id : mc() ? "mobile" : "unknown"
    }

    function mc() {
        return kc().l
    }

    function gd() {
        return hd ? "returning" : "new"
    }
    lc = function () {
        return Yc().platform
    };

    function id(a) {
        H("User", "Setting current URL to %s", a);
        jd = a
    }
    var jd = i,
        Zc = i,
        hd = i;

    function kd() {
        return (fd("events") || []).concat(ld).slice(-md)
    }

    function nd(a) {
        var b = hb || {},
            c = {
                t: +new Date,
                n: a.name,
                y: a.type
            },
            a = D({}, a.options);
        a.c && (c.r = a.c);
        c.o = D(b || {}, a.hb || {});
        return c
    }
    var ld = [],
        md = 1E3;

    function od(a, b) {
        var c;
        a: {
            c = {};
            var d, e = M("custom_revenue_goals");
            e && (a in e && sa(e[a])) && (d = Number(e[a]));
            if (b)
                if (sa(b)) d = Number(b);
                else if ("object" === typeof b) {
                if (c = b, "revenue" in b)
                    if (sa(b.revenue)) d = Number(b.revenue);
                    else {
                        H("tracker", "Revenue field %s not a number.", b.revenue);
                        c = l;
                        break a
                    }
            } else {
                H("tracker", "Revenue argument %s not a number.", b);
                c = l;
                break a
            }
            C(d) && (c.c = d)
        }
        if (c === l) H("tracker", "Bad options. Will not track this event.");
        else {
            d = pd();
            var f = {};
            v(d, function (a) {
                f[a] = k
            });
            $.extend(c, {
                k: f
            });
            tb(a, "custom", c)
        }
    }

    function tb(a, b, c) {
        c = c || {};
        if (xa) {
            b = {
                name: a,
                type: b,
                options: c
            };
            qd.push(b);
            if (c.H !== k) {
                ld.push(nd(b));
                var b = kd(),
                    d = Ec() || ed(),
                    e = fd();
                e.events = b;
                r.set(d, e);
                ld = []
            }
            delete c.H;
            rd ? (sd(), G("Tracker", "Tracking event '" + a + "'")) : G("Tracker", "Queued tracking event '" + a + "'")
        }
    }

    function td() {
        ud();
        $("html").bind("mousedown", vd);
        $("html").bind("touchstart", wd)
    }

    function ud() {
        $("html").unbind("touchstart", wd);
        $("html").unbind("mousedown touchend", vd);
        $("html").unbind("touchmove", td)
    }

    function wd() {
        $("html").bind("touchend", vd);
        $("html").bind("touchmove", td)
    }

    function xd() {
        var a = document.location.href,
            b = M("pageview_revenue_goals");
        b && 0 < E(b) ? v(E(b), function (c) {
            tb(a, "pageview", {
                c: c,
                k: b[c]
            })
        }) : tb(a, "pageview")
    }

    function yd(a) {
        var b = M("goal_expressions"),
            c = [],
            d;
        for (d in b) b.hasOwnProperty(d) && $.each(b[d], function (b, f) {
            try {
                if (a.match(RegExp(f, "i"))) return c.push(d), m
            } catch (g) {}
            return k
        });
        return c
    }

    function zd() {
        var a = N("optimizelyPendingLogEvents") || "[]",
            b = [];
        try {
            b = ha(a)
        } catch (c) {}
        if (z(b))
            for (var a = 0, d = b.length; a < d; a++) {
                var e = b[a];
                if ("string" !== typeof e) {
                    b = [];
                    break
                } else try {
                    ha(e);
                    b = [];
                    break
                } catch (f) {}
            } else b = [];
        return b
    }

    function Ka(a, b) {
        if (Ad && -1 !== a.indexOf(Bd)) try {
            var c = new XMLHttpRequest;
            if ("withCredentials" in c) {
                c.onload = b;
                c.open("GET", a, k);
                c.withCredentials = k;
                c.send();
                return
            }
            Ad = m;
            G("Tracker", "Found that XHR with credentials is not supported in this browser.")
        } catch (d) {
            G("Tracker", "XHR not supported"), Ad = m
        }
        var c = a,
            e = new Image;
        e.onload = b;
        c = c.replace("&" + Bd, "");
        e.src = c;
        Cd.push(e)
    }

    function Dd(a) {
        var b = (a = a === k || "true" === a) ? "true" : "false";
        a ? (O("optimizelyOptOut", b, yc), O("optimizelyBuckets", b, yc), alert("You have successfully opted out of Optimizely for this domain.")) : (O("optimizelyOptOut", b, yc), alert("You are NOT opted out of Optimizely for this domain."))
    }

    function vd() {
        ud();
        tb("engagement", "engagement")
    }
    var qd = [],
        rd = m;

    function sd() {
        var a = ["a=" + Ed(), "d=" + Fd(), "y=" + !!M("ip_anonymization"), "src=js"];
        Gb && a.push("override=true");
        v(Xa(), function (b) {
            var c = I(b);
            a.push("x" + c + "=" + b)
        });
        v(rc(), function (b, c) {
            a.push("s" + b + "=" + c)
        });
        var b = [],
            c = ed(),
            d = Ec();
        v(qd, function (a) {
            var e = [],
                f = [];
            a.name && (e.push("n=" + encodeURIComponent(a.name)), f = f.concat(yd(a.name)));
            if (a.type && "pageview" === a.type) {
                var f = f.concat(Wa.concat(Q)),
                    g = $a;
                g && (g = I(g), f.push(g))
            }
            a.options.anonymous !== k && (e.push("u=" + c), d && e.push("p=" + encodeURIComponent(d)));
            Ad &&
                e.push(Bd);
            e.push("t=" + +new Date);
            wc && e.push("dtpc=" + wc);
            var j = !!a.options && !!a.options.c && a.options.k || {},
                g = E(j),
                o = qa(pd(), function (a) {
                    return !j[a]
                }),
                f = [{
                    J: g,
                    ga: f.concat([M("summary_revenue_goal_id") || l]),
                    U: ["v=" + encodeURIComponent(a.options.c)]
                }, {
                    J: o,
                    ga: f,
                    U: []
                }];
            v(f, function (a) {
                (a.J.length || Sc) && b.push(e.concat(a.U).concat(["f=" + a.J.join(","), "g=" + a.ga.join(",")]).join("&"))
            });
            if ("custom" === a.type) try {
                var q = a.name,
                    t = ed(),
                    u = r.get("customEvents") || {},
                    P = u[t] || (u[t] = []),
                    P = z(P) ? P : []; - 1 !== $.inArray(q,
                    P) && P.splice($.inArray(q, P), 1);
                P.push(q);
                100 < P.length && P.shift();
                u[t] = P;
                r.set("customEvents", u);
                Fc("optimizelyCustomEvents", Gc || Hc || Ic)
            } catch (ab) {}
        });
        var e = b.concat(zd());
        Gd(e);
        var f = a.join("&"),
            e = Hd ? b : e;
        Hd = k;
        for (var g = 0, j = e.length; g < j; g++) {
            var o = e[g],
                t = f + "&" + o;
            G("Tracker", "Making a log request.");
            var q = Ed(),
                u = M("log_host");
            q && (u = q.toString() + "." + u);
            q = document.location.protocol;
            "chrome-extension:" === q && (q = "http:");
            Ka(q + "//" + u + "/event?" + t, function () {
                for (var a = o, b = zd(), c = 0, d = b.length; c < d; c++)
                    if (b[c] ===
                        a) {
                        b.splice(c, 1);
                        break
                    }
                Gd(b);
                G("Tracker", "Removed a pending log event from the pending events cookie.")
            })
        }
        qd = [];
        rd = k
    }

    function Gd(a) {
        for (var b = p(a); 1536 < b.length;) a = a.slice(0, -1), b = p(a);
        O("optimizelyPendingLogEvents", b, 15)
    }
    var Cd = [],
        Hd = m,
        Bd = "wxhr=true",
        Ad = k;
    /*


     UAParser.js v0.7.3
     Lightweight JavaScript-based User-Agent string parser
     https://github.com/faisalman/ua-parser-js

     Copyright ? 2012-2014 Faisal Salman <fyzlman@gmail.com>
     Dual licensed under GPLv2 & MIT
    */
    function $c() {}
    var Id = $c,
        Jd = {
            extend: function (a, b) {
                for (var c in b) - 1 !== "browser cpu device engine os".indexOf(c) && 0 === b[c].length % 2 && (a[c] = b[c].concat(a[c]));
                return a
            },
            has: function (a, b) {
                if ("string" === typeof a) return -1 !== b.toLowerCase().indexOf(a.toLowerCase())
            },
            C: function (a) {
                return a.toLowerCase()
            }
        };

    function Kd() {
        for (var a, b = 0, c, d, e, f, g, j, o = arguments; b < o.length && !g;) {
            var t = o[b],
                q = o[b + 1];
            if ("undefined" === typeof a)
                for (e in a = {}, q) f = q[e], "object" === typeof f ? a[f[0]] = i : a[f] = i;
            for (c = d = 0; c < t.length && !g;)
                if (g = t[c++].exec(this.fa()))
                    for (e = 0; e < q.length; e++) j = g[++d], f = q[e], "object" === typeof f && 0 < f.length ? 2 == f.length ? a[f[0]] = "function" == typeof f[1] ? f[1].call(this, j) : f[1] : 3 == f.length ? a[f[0]] = "function" === typeof f[1] && (!f[1].exec || !f[1].test) ? j ? f[1].call(this, j, f[2]) : i : j ? j.replace(f[1], f[2]) : i : 4 == f.length &&
                        (a[f[0]] = j ? f[3].call(this, j.replace(f[1], f[2])) : i) : a[f] = j ? j : i;
            b += 2
        }
        return a
    }

    function Ld(a, b) {
        for (var c in b)
            if ("object" === typeof b[c] && 0 < b[c].length)
                for (var d = 0; d < b[c].length; d++) {
                    if (Jd.has(b[c][d], a)) return "?" === c ? i : c
                } else if (Jd.has(b[c], a)) return "?" === c ? i : c;
        return a
    }
    var Md = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2E3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            "8.1": "NT 6.3",
            10: "NT 6.4",
            RT: "ARM"
        },
        Nd = {
            browser: [[/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i], ["name", "version", "major"], [/\s(opr)\/((\d+)?[\w\.]+)/i], [["name", "Opera"], "version", "major"], [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,
/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i], ["name", "version", "major"], [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i], [["name", "IE"], "version", "major"], [/(yabrowser)\/((\d+)?[\w\.]+)/i], [["name", "Yandex"], "version", "major"], [/(comodo_dragon)\/((\d+)?[\w\.]+)/i], [["name", /_/g, " "], "version", "major"], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i,
/(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i], ["name", "version", "major"], [/(dolfin)\/((\d+)?[\w\.]+)/i], [["name", "Dolphin"], "version", "major"], [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i], [["name", "Chrome"], "version", "major"], [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i], ["version", "major", ["name", "Mobile Safari"]], [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i], ["version", "major", "name"], [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i], ["name", ["major", Ld, {
                1: ["/8", "/1",
"/3"],
                2: "/4",
                "?": "/"
            }], ["version", Ld, {
                "1.0": "/8",
                "1.2": "/1",
                "1.3": "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
            }]], [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i], ["name", "version", "major"], [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i], [["name", "Netscape"], "version", "major"], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,
/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i], ["name", "version", "major"]],
            S: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", Jd.C]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture",
"arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", Jd.C]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", Jd.C]]],
            v: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], ["model", "vendor", ["type", "tablet"]], [/applecoremedia\/[\w\.]+ \((ipad)/], ["model", ["vendor", "Apple"], ["type", "tablet"]], [/(apple\s{0,1}tv)/i], [["model", "Apple TV"], ["vendor", "Apple"]],
[/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], ["vendor", "model", ["type", "tablet"]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], ["model", ["vendor", "Amazon"], ["type", "tablet"]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [["model", Ld, {
                    "Fire Phone": ["SD", "KF"]
                }], ["vendor", "Amazon"], ["type", "mobile"]], [/\((ip[honed|\s\w*]+);.+(apple)/i], ["model", "vendor", ["type", "mobile"]], [/\((ip[honed|\s\w*]+);/i], ["model",
["vendor", "Apple"], ["type", "mobile"]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], ["vendor", "model", ["type", "mobile"]], [/\(bb10;\s(\w+)/i], ["model", ["vendor", "BlackBerry"], ["type", "mobile"]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], ["model", ["vendor", "Asus"], ["type", "tablet"]], [/(sony)\s(tablet\s[ps])/i], ["vendor", "model", ["type", "tablet"]],
[/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], ["vendor", "model", ["type", "console"]], [/android.+;\s(shield)\sbuild/i], ["model", ["vendor", "Nvidia"], ["type", "console"]], [/(playstation\s[3portablevi]+)/i], ["model", ["vendor", "Sony"], ["type", "console"]], [/(sprint\s(\w+))/i], [["vendor", Ld, {
                    HTC: "APA",
                    Sprint: "Sprint"
                }], ["model", Ld, {
                    "Evo Shift 4G": "7373KT"
                }], ["type", "mobile"]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], ["vendor", "model", ["type", "tablet"]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i,
/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], ["vendor", ["model", /_/g, " "], ["type", "mobile"]], [/(nexus\s9)/i], ["model", ["vendor", "HTC"], ["type", "tablet"]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], ["model", ["vendor", "Microsoft"], ["type", "console"]], [/(kin\.[onetw]{3})/i], [["model", /\./g, " "], ["vendor", "Microsoft"], ["type", "mobile"]], [/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i, /(mot)[\s-]?(\w+)*/i], [["vendor", "Motorola"], "model",
["type", "mobile"]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], ["model", ["vendor", "Motorola"], ["type", "tablet"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [["vendor", "Samsung"], "model", ["type", "tablet"]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [["vendor", "Samsung"], "model", ["type", "mobile"]], [/(samsung);smarttv/i], ["vendor", "model", ["type", "smarttv"]], [/\(dtv[\);].+(aquos)/i],
["model", ["vendor", "Sharp"], ["type", "smarttv"]], [/sie-(\w+)*/i], ["model", ["vendor", "Siemens"], ["type", "mobile"]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [["vendor", "Nokia"], "model", ["type", "mobile"]], [/android\s3\.[\s\w-;]{10}(a\d{3})/i], ["model", ["vendor", "Acer"], ["type", "tablet"]], [/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i], [["vendor", "LG"], "model", ["type", "tablet"]], [/(lg) netcast\.tv/i], ["vendor", "model", ["type", "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
["model", ["vendor", "LG"], ["type", "mobile"]], [/android.+(ideatab[a-z0-9\-\s]+)/i], ["model", ["vendor", "Lenovo"], ["type", "tablet"]], [/linux;.+((jolla));/i], ["vendor", "model", ["type", "mobile"]], [/((pebble))app\/[\d\.]+\s/i], ["vendor", "model", ["type", "wearable"]], [/android.+;\s(glass)\s\d/i], ["model", ["vendor", "Google"], ["type", "wearable"]], [/(mobile|tablet);.+rv\:.+gecko\//i], [["type", Jd.C], "vendor", "model"]],
            T: [[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
/(icab)[\/\s]([23]\.[\d\.]+)/i], ["name", "version"], [/rv\:([\w\.]+).*(gecko)/i], ["version", "name"]],
            ia: [[/microsoft\s(windows)\s(vista|xp)/i], ["name", "version"], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], ["name", ["version", Ld, Md]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [["name", "Windows"], ["version", Ld, Md]], [/\((bb)(10);/i], [["name", "BlackBerry"], "version"], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
/linux;.+(sailfish);/i], ["name", "version"], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [["name", "Symbian"], "version"], [/\((series40);/i], ["name"], [/mozilla.+\(mobile;.+gecko.+firefox/i], [["name", "Firefox OS"], "version"], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i,
/(gnu)\s?([\w\.]+)*/i], ["name", "version"], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [["name", "Chromium OS"], "version"], [/(sunos)\s?([\w\.]+\d)*/i], [["name", "Solaris"], "version"], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], ["name", "version"], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [["name", "iOS"], ["version", /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [["name", "Mac OS"], ["version", /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i,
/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], ["name", "version"]]
        };

    function Od(a, b) {
        if (!(this instanceof Od)) return (new Od(a, b)).Da();
        var c = a || (Id && Id.navigator && Id.navigator.userAgent ? Id.navigator.userAgent : ""),
            d = b ? Jd.extend(Nd, b) : Nd;
        this.i = function () {
            return Kd.apply(this, d.browser)
        };
        this.va = function () {
            return Kd.apply(this, d.S)
        };
        this.A = function () {
            return Kd.apply(this, d.v)
        };
        this.za = function () {
            return Kd.apply(this, d.T)
        };
        this.ca = function () {
            return Kd.apply(this, d.ia)
        };
        this.Da = function () {
            return {
                ib: this.fa(),
                browser: this.i(),
                T: this.za(),
                ia: this.ca(),
                v: this.A(),
                S: this.va()
            }
        };
        this.fa = function () {
            return c
        };
        this.Oa = function (a) {
            c = a
        };
        this.Oa(c)
    }
    Od.VERSION = "0.7.3";
    Od.Ra = {
        R: "name",
        Xa: "major",
        VERSION: "version"
    };
    Od.Ta = {
        Qa: "architecture"
    };
    Od.Ua = {
        Za: "model",
        VENDOR: "vendor",
        cb: "type",
        Sa: "console",
        Ya: "mobile",
        ab: "smarttv",
        bb: "tablet",
        eb: "wearable",
        Va: "embedded"
    };
    Od.Wa = {
        R: "name",
        VERSION: "version"
    };
    Od.$a = {
        R: "name",
        VERSION: "version"
    };
    Id.ma = Od;

    function bd(a) {
        a = (a || "").toLowerCase();
        if (a in ic) return a;
        for (var b in ic)
            if (w(ic[b] || [], function (b) {
                    return b.toLowerCase() === a
                })) return b;
        return "unknown"
    }
    var ic = {
            gc: ["Chrome", "chromium", "silk", "yandex", "maxthon"],
            ie: ["Internet Explorer", "iemobile"],
            ff: ["Firefox", "iceweasel"],
            opera: ["Opera", "opera mini", "opera tablet"],
            safari: ["Safari", "mobile safari", "webkit"],
            ucbrowser: ["UC Browser"]
        },
        ad = {
            iPhone: "iphone",
            iPad: "ipad"
        };

    function Fd() {
        return M("admin_account_id")
    }

    function Pd(a) {
        return M("audiences", a)
    }

    function Cc(a) {
        a = M("audiences", a, "segment_id");
        return !a ? l : a
    }

    function Qd() {
        if (!Rd) {
            var a = M("click_goals") || [];
            Rd = [];
            for (var b = 0, c = a.length; b < c; b++)
                for (var d = a[b], e = d.selector.split(","), f = 0, g = e.length; f < g; f++) {
                    var j = e[f];
                    j && (j = {
                        event_name: d.event_name,
                        selector: j
                    }, "experiments" in d ? j.experiments = d.experiments : "url_conditions" in d && (j.url_conditions = d.url_conditions), "revenue" in d && (j.revenue = d.revenue), Rd.push(j))
                }
        }
        return Rd
    }

    function Sd(a, b) {
        return M("dimensions", a, b)
    }

    function Td(a) {
        a = Sd(a, "condition_type");
        return !a ? l : a
    }

    function Ud(a) {
        a = Sd(a, "name");
        return !a ? l : a
    }

    function pd() {
        Vd || (Vd = qa(kb(), Ya));
        return Vd
    }

    function Db(a) {
        var b = Eb(),
            c;
        for (c in b)
            if (Object.prototype.hasOwnProperty.call(b, c)) {
                var d = b[c];
                if (d && d.api_name === a) return String(c)
            }
        return l
    }

    function sc() {
        return M("experiments") || {}
    }

    function kb() {
        return E(M("experiments") || {})
    }

    function lb(a) {
        return "manual" === K(a, "activation_mode")
    }

    function cc(a) {
        return "conditional" === K(a, "activation_mode")
    }

    function eb(a) {
        return K(a, "name") || "Exp " + a
    }

    function L(a) {
        return 'experiment "' + eb(a) + '" (' + a + ")"
    }

    function Hb(a) {
        return K(a, "section_ids") || []
    }

    function Mb(a) {
        return K(a, "variation_ids") || []
    }

    function Ed() {
        return M("project_id")
    }

    function Eb() {
        return M("segments") || {}
    }

    function Nb(a, b) {
        for (var c = Hb(a), d = 0; d < c.length; d++) {
            var e = Lb(c[d]);
            if (x(e, b)) return c[d]
        }
        return ""
    }

    function Wd(a) {
        var b = {},
            c = M("public_suffixes") || {};
        v(c, function (a, c) {
            v(c, function (c) {
                b[c] = a
            })
        });
        Wd = function (a) {
            return b[a] || ""
        };
        return Wd.call(l, a)
    }

    function Lb(a) {
        return M("sections", a, "variation_ids") || []
    }

    function cb(a) {
        var b = [];
        v(a.split("_"), function (a) {
            (a = M("variations", a, "code")) && b.push(a)
        });
        return b.join("\n")
    }

    function I(a) {
        if (!Xd) {
            var b = {};
            v(kb(), function (a) {
                v(Hb(a), function (d) {
                    v(Lb(d), function (d) {
                        b[d] = a
                    })
                });
                v(Mb(a), function (d) {
                    b[d] = a
                })
            });
            Xd = b
        }
        return Xd[a.split("_")[0]] || ""
    }

    function Ha(a) {
        var b = I(a),
            c = Hb(b);
        if (0 === c.length) {
            c = Mb(b);
            for (b = 0; b < c.length; b++)
                if (c[b] === a) return b
        } else {
            for (var a = a.split("_"), b = [], d = 0; d < c.length; d++)
                for (var e = Lb(c[d]), f = 0; f < e.length; f++) e[f] === a[d] && b.push(f);
            if (b !== []) return b
        }
        return -1
    }

    function Za(a) {
        var b;
        return fb(a).join(b || ", ")
    }

    function fb(a) {
        var b = [];
        v(a.split("_"), function (a) {
            b.push(M("variations", a, "name") || "Var " + a)
        });
        return b
    }

    function Ya(a) {
        return !!K(a, "enabled")
    }

    function K(a, b) {
        return M("experiments", a, b)
    }

    function Ja(a) {
        a = K(a, "comscore");
        return C(a) ? a.url : l
    }

    function La(a) {
        return K(a, "google_analytics")
    }

    function db(a, b) {
        var c = K(a, "universal_analytics");
        return C(c) ? c[b] : l
    }

    function Na(a, b) {
        var c = K(a, "at_internet");
        return C(c) ? c[b] : l
    }

    function M(a) {
        var b = DATA;
        if (v(arguments, function (a) {
                a = b[a];
                if (C(a)) b = a;
                else return l
            }) !== l) return b
    }

    function dc(a, b) {
        return M("segments", a, b)
    }

    function Yd() {
        var a = M("rum_sampling_rate");
        return C(a) ? a : 0.001
    }
    var Rd = l,
        Vd = l,
        Xd = l;

    function Zd() {
        return (new Date).getTime() - ($d || 0)
    }
    var $d = Zd();

    function U(a) {
        var b = ae;
        b.d[a] || (b.d[a] = Zd())
    }
    var be;
    try {
        be = !document.getElementsByTagName("body")[0]
    } catch (ce) {
        be = l
    }
    var de = l;
    try {
        window.requestAnimationFrame(function () {
            de = Zd()
        })
    } catch (ee) {}
    var fe = /\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;

    function ge() {
        try {
            var a = qa(window.performance.getEntries(), function (a) {
                return !!fe.test(a.name)
            })[0];
            if (!a) return l;
            var a = D({}, a),
                b;
            for (b in a) {
                var c = a[b];
                (0 === c || "string" === typeof c) && delete a[b]
            }
            return a
        } catch (d) {
            return l
        }
    }
    var ae = new function () {
        this.d = {};
        this.Ja = Math.random() < Yd();
        geolocation.requested && (this.d.geoRequest = geolocation.requested - $d)
    };

    function he(a) {
        if (0 === $("body").length) setTimeout(function () {
            he(a)
        }, 20);
        else {
            var b;
            b = '<div id="optimizely-loading" style="position:absolute;top:0;right:0;left:0;bottom:0;background-color:white;opacity:0.9;z-index: 3271000;"><h2 style="color:#9a9a9a;top:40%;position:absolute;font-size:2.25em;text-align:center;width:100%;font-family:\'Lucida Grande\',sans-serif;">' + a + "</h2></div>";
            $("#optimizely-loading").remove();
            $("body").append(b)
        }
    }
    var ie = M("preview_host");

    function qb(a, b) {
        var b = b === k,
            c, d = l;
        v(V, function (b) {
            a == b.w && (d = b.id)
        });
        if ((c = d) && 0 < c.length) return G("Distributor", "Not distributing experiment " + a + " (already in plan)"), k;
        if (b || a in Ib) return G("Distributor", "Not distributing experiment " + a + " (is ignored)"), m;
        c = K(a, "enabled_variation_ids") || [];
        if (0 === c.length) return G("Distributor", "Permanently ignoring experiment " + a + " (no enabled variations)"), je(a), m;
        var e = K(a, "ignore") || 0,
            f = Ec() || ed();
        if (e > Math.floor(1E4 * Mc(f + a, 0))) return G("Distributor", "Permanently ignoring experiment " +
            a + "(" + e / 100 + "% likelihood)"), je(a), m;
        e = c;
        Ob[a] !== i && (G("Distributor", "Taking into account bucketUser variations for experiment " + a), e = Pb(a));
        var f = e,
            g = [],
            j = K(a, "variation_weights") || {};
        v(f, function (a) {
            g.push(j[a])
        });
        f = ke(a, g);
        e = e[f];
        G("Distributor", "Picked variation " + e + " [index " + f + " of " + c.length + "]");
        Qb(e, "distributor");
        return k
    }

    function le(a, b) {
        b = b || {};
        G("Distributor", "Testing conditionally activated experiment for conditions: " + a);
        Kc[a] || (me(a, b), gb && Ab())
    }

    function me(a, b) {
        function c() {
            ib(a, b);
            o.isActive = x(Wa.concat(Q), a);
            G("Distributor", "Activating conditionally activated experiment " + a)
        }
        var d = K(a, "conditional_code"),
            e = k,
            f;
        try {
            var g = eval("(function() {return " + ("(" + d + ")") + ";})()");
            "function" === typeof g && (e = m, f = g)
        } catch (j) {}
        var o = {
            isActive: m,
            experimentId: a
        };
        if (e) {
            if (e = {
                    objectType: "experiment",
                    enabledStatus: b.enabledStatus
                }, b.force || !mb(a) || pb(a, e)) {
                var t = function () {
                    mb(a) && (ne(0, {
                        value: d
                    }) || g) ? c() : setTimeout(t, 50)
                };
                t();
                G("Distributor", "Set up conditional polling for " +
                    a);
                Kc[a] = k
            }
        } else try {
            f(c, o), G("Distributor", "Set up conditional callback for " + a), Kc[a] = k
        } catch (q) {
            G("Distributor", "Error running conditional callback function for " + a)
        }
    }

    function ke(a, b) {
        var c = b.length;
        if (0 === c) return l;
        if (1 === c) return 0;
        for (var d = 0, e = 0; e < c; e++) d += b[e];
        e = Ec() || ed();
        d *= Mc(e + a, 1);
        for (e = 0; e < c; e++) {
            if (d < b[e]) return e;
            d -= b[e]
        }
        d = Ec() || ed();
        return Math.floor(Mc(d + a, 2) * c)
    }

    function Pb(a) {
        var b = [];
        v(K(a, "enabled_variation_ids") || [], function (c) {
            var d = k,
                e;
            for (e in Ob[a]) - 1 === c.indexOf(Ob[a][e]) && (d = m);
            d && b.push(c)
        });
        return b
    }
    var Ob = {};

    function qc() {
        var a = window.location.search || "";
        0 === a.indexOf("?") && (a = a.substring(1));
        for (var a = a.split("&"), b = [], c = 0; c < a.length; c++) {
            var d = "",
                e = "",
                f = a[c].split("=");
            0 < f.length && (d = f[0]);
            1 < f.length && (e = f[1]);
            b.push([d, e])
        }
        return b
    }

    function oe() {
        for (var a = window.location.search, b, c = /optimizely_([^=]+)=([^&]*)/g, d = {}; b = c.exec(a);) d[b[1]] = b[2];
        return d
    }
    var pe = /x(\d+)/;

    function qe(a) {
        return a && -1 !== String(a).indexOf("[native code]")
    };

    function bb(a) {
        return a.match(/_optimizely_redirect(?:_no_cookie)?=(\S+)/)
    }

    function re(a) {
        return -1 !== a.indexOf("_optimizely_redirect_no_cookie")
    }

    function se(a) {
        var a = a || "",
            b = N("optimizelyRedirect");
        return re(a) || !b || b && "true" === b.split("|")[1] ? k : m
    }

    function te() {
        var a;
        a = C(a) ? a : document.referrer;
        O("optimizelyReferrer", a, 5)
    }
    var Aa = l,
        $a = "",
        ue = /^\/\* _optimizely_redirect.+\*\/[ ]*\nwindow\.location\.replace\(_optly\.redir\.href.*\)[ ]*[;]?$/,
        ve = /^\/\* _optimizely_redirect.+\*\/[ ]*\nvar[ ]*_optly[ ]*=[ ]*{[ ]*redir:document\.createElement\("a"\)\}[;]?\n_optly\.redir\.href\=.*\n_optly\.cur=.+\nif \(_optly.cur\)[ ]?{.+}[ ]*\nwindow\.location\.replace\(_optly\.redir\.href.*\)[ ]*[;]?$/,
        we = /^\/\* _optimizely_redirect.+\*\/[ ]*[\n]+window\.location\.replace\([ ]*redirectFirst.*\)[ ]*[;]?$/;
    var ha, p;
    (function () {
        function a(a) {
            d.lastIndex = 0;
            return d.test(a) ? '"' + a.replace(d, function (a) {
                var b = g[a];
                return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function b(c, d) {
            var g, u, B, y, T = e,
                F, A = d[c];
            "function" === typeof j && (A = j.call(d, c, A));
            switch (typeof A) {
            case "string":
                return a(A);
            case "number":
                return isFinite(A) ? String(A) : "null";
            case "boolean":
            case "null":
                return String(A);
            case "object":
                if (!A) return "null";
                e += f;
                F = [];
                if ("[object Array]" === Object.prototype.toString.apply(A)) {
                    y = A.length;
                    for (g = 0; g < y; g += 1) F[g] = b(g, A) || "null";
                    B = 0 === F.length ? "[]" : e ? "[\n" + e + F.join(",\n" + e) + "\n" + T + "]" : "[" + F.join(",") + "]";
                    e = T;
                    return B
                }
                if (j && "object" === typeof j) {
                    y = j.length;
                    for (g = 0; g < y; g += 1) "string" === typeof j[g] && (u = j[g], (B = b(u, A)) && F.push(a(u) + (e ? ": " : ":") + B))
                } else
                    for (u in A) Object.prototype.hasOwnProperty.call(A, u) && (B = b(u, A)) && F.push(a(u) + (e ? ": " : ":") + B);
                B = 0 === F.length ? "{}" : e ? "{\n" + e + F.join(",\n" + e) + "\n" + T + "}" : "{" + F.join(",") + "}";
                e = T;
                return B
            }
        }
        var c = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            e, f, g = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            j;
        p = function (a, c, d) {
            var g;
            f = e = "";
            if ("number" === typeof d)
                for (g = 0; g < d; g += 1) f += " ";
            else "string" === typeof d && (f = d);
            (j = c) && ("function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length)) && h(Error("JSON.stringify"));
            return b("", {
                "": a
            })
        };
        ha = function (a, b) {
            function d(a, c) {
                var e, f, g = a[c];
                if (g &&
                    "object" === typeof g)
                    for (e in g) Object.prototype.hasOwnProperty.call(g, e) && (f = d(g, e), f !== i ? g[e] = f : delete g[e]);
                return b.call(a, c, g)
            }
            var e, a = String(a);
            c.lastIndex = 0;
            c.test(a) && (a = a.replace(c, function (a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof b ?
                d({
                    "": e
                }, "") : e;
            h(new SyntaxError("JSON.parse"))
        }
    })();

    function xe(a, b) {
        var c;
        c = $.trim(b);
        var d = "";
        if (window.optimizely && window.optimizely.data)
            if (d = c.match(ye)) d = window.optimizely.data.visitor.params[d[1]], d === i && (d = "");
            else {
                for (var d = c.split("."), e = window.optimizely, f = 0, g = d.length; f < g; f++)
                    if (e = e[d[f]], e === i || e === l) {
                        e = "";
                        break
                    }
                d = "" + e
            }
        G("Template", c + " evaluated to: '" + d + "'");
        return d
    }
    var ze = /\{\{ *optimizely\.([^\n\r{}<>]*)\}\}/g,
        ye = /^data\.visitor\.params\.(.*)$/;

    function Ae(a) {
        var b = a || Be;
        G("Segmenter", "Loading segments cookie.");
        if (a = N("optimizelySegments")) {
            try {
                a = ha(a)
            } catch (c) {
                a = {}
            }
            v(a, function (a, c) {
                var d = Eb()[a];
                G("Segmenter", "Segments cookie contains segment id: " + a);
                d && d.audience_id ? b.u(d.audience_id) : d && d.dimension_id ? b.G(d.dimension_id, c, m) : Y[a] = c
            })
        }
        G("Segmenter", "Evaluating all segments.");
        for (var a = E(Eb()), d = 0; d < a.length; d++) {
            var e = a[d];
            dc(e, "is_api_only") ? G("Segmenter", "Not doing anything since segment " + e + " is api only.") : (G("Segmenter", "Testing whether to add to segment " +
                e), mb(e) ? yb(e) : xb.push(e))
        }
        Ce.push(zc);
        Zb();
        G("Integrator", "Loading third-party segments.");
        if (window.bk_results) {
            a = window.bk_results;
            G("Integrator", "Loading BlueKai segments.");
            try {
                v(a.campaigns, function (a) {
                    a = a.seg_id;
                    Eb()[a] ? Fb(a, k) : Pd(a) && b.u(a)
                })
            } catch (f) {
                G("Integrator", "Error loading BlueKai segments.")
            }
        }
    }

    function zc() {
        var a = {};
        v(Y, function (b, c) {
            c && (a[b] = c)
        });
        O("optimizelySegments", p(a), yc)
    }

    function Fb(a, b) {
        a && !isNaN(parseInt(a, 10)) ? (!b && "" !== b && (b = k), Y[a] = b, Zb()) : G("Segmenter", "Unable to find segment for ID: " + a)
    }

    function Zb() {
        v(Ce, function (a) {
            a()
        })
    }

    function yb(a) {
        G("Segmenter", "Evaluating Segment " + a);
        if (pb(a, {
                objectType: "segment"
            })) {
            var b;
            a: {
                var c = b = l;
                switch (dc(a, "segment_value_type") || "") {
                case "browser":
                    b = Z.W();
                    c = "unknown";
                    break;
                case "campaign":
                    b = Z.wa();
                    c = "none";
                    break;
                case "country":
                    b = Z.B().country;
                    c = "unknown";
                    break;
                case "language":
                    b = Z.K();
                    c = "none";
                    break;
                case "mobile":
                    b = Z.l();
                    break;
                case "os":
                    b = Z.da().id;
                    c = "unknown";
                    break;
                case "referrer":
                    b = Z.Ca();
                    c = "none";
                    break;
                case "source_type":
                    b = Z.Ea();
                    c = "direct";
                    break;
                default:
                    b = "true";
                    break a
                }
                if (b === l) {
                    if (Y.hasOwnProperty(a)) {
                        b =
                            l;
                        break a
                    }
                    b = c
                }
                b = De(b)
            }
            b !== l && Fb(a, b)
        }
    }

    function Ee() {
        var a = Z.M();
        if (Z.j("utm_source") || Z.j("gclid") || Z.j("otm_source")) return "campaign";
        for (var b = ["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "https://(www)?\\.google\\..*?/$", "bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search", "baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"], c = 0; c < b.length; c++)
            if (a.match(b[c])) return "search";
        return a && cd(a) !== cd(Z.z()) ? "referral" : l
    }

    function Fe() {
        var a = [];
        v(Y, function (b, c) {
            c && a.push(b)
        });
        return a
    }

    function rc() {
        var a = {};
        v(Y, function (b, c) {
            c && (a[String(b)] = c)
        });
        return a
    }

    function Ge(a) {
        return v(Y, function (b, c) {
            if ((dc(b, "segment_value_type") || "") == a) return c
        })
    }

    function Xb(a, b) {
        var c = Db(a) || a;
        Y[c] ? (Y[c] = m, ("undefined" === typeof b || b) && Zb()) : G("Segmenter", "Not removing " + a + ", not found")
    }

    function De(a, b) {
        var c, b = C(b) ? b : k;
        c = c || He;
        a = va(a);
        a = String(a);
        b && (a = a.toLowerCase());
        a = a.substring(0, c);
        return encodeURIComponent(a)
    }
    var Ce = [],
        Y = {},
        He = 20;

    function G(a, b, c) {
        Ie.push({
            ra: new Date,
            pa: a,
            message: b,
            ha: c || m
        });
        Je && Ub()
    }

    function Ke() {
        ua = k
    }

    function Le() {
        Xc = ua = k
    }

    function Ub() {
        ua && (v(Ie, function (a) {
            if (!a.Ma && (!a.ha || a.ha === Xc)) {
                var b = +a.ra;
                H(a.pa, a.message + (" [time " + (Me ? b - Me : 0) + " +" + (Ne ? b - Ne : 0) + "]"));
                Ne = b;
                Me || (Me = b);
                a.Ma = k
            }
        }), Je = k)
    }
    var Ne = l,
        Me = l,
        Ie = [],
        Je = m;
    var Oe = /\s*;\s*/,
        Pe = /^([^=]+)=?(.*)$/;

    function N(a) {
        var b = [];
        v(Qe(), function (c) {
            a === c.name && b.push(va(c.value))
        });
        if (0 === b.length) return l;
        1 < b.length && H("Cookie", "Values found for %s: %s", a, b.length);
        return b.pop()
    }

    function Qe() {
        var a, b = [];
        a = a || "";
        v((document.cookie || "").split(Oe), function (c) {
            var d = c.match(Pe);
            d && 0 === d[1].indexOf(a) && b.push({
                name: d[1],
                value: d[2],
                F: c
            })
        });
        return b
    }

    function O(a, b, c) {
        var d = Gc || Hc || Ic,
            e = document.location.hostname,
            b = b || "";
        !Hc && M("remote_public_suffix") && Re.push({
            fb: c,
            name: a,
            value: b
        });
        d && (d === Hc && d !== Ic) && (Fc(a, e), Fc(a, Ic));
        Se(a, b, d, c);
        var f = N(a);
        f === b ? H("Cookie", "Successful set %s=%s on %s", a, b, d) : (H("Cookie", "Setting %s on %s apparently failed (%s != %s)", a, d, f, b), H("Cookie", "Setting %s on %s", a, e), Se(a, b, e, c), f = N(a), f === b ? (H("Cookie", "Setting %s on %s worked; saving as new public suffix", a, e), Ic = e) : (H("Cookie", "Could not set cookie %s, disabling event tracking.",
            a), xa = m))
    }

    function Fc(a, b) {
        H("Cookie", "Deleting %s on %s", a, b);
        document.cookie = [a, "=; domain=.", b, "; path=/; expires=", (new Date(0)).toUTCString()].join("")
    }

    function Se(a, b, c, d) {
        a = [a, "=", encodeURIComponent(b), "; domain=.", c, "; path=/"];
        d && a.push("; expires=", (new Date(+new Date + 1E3 * d)).toUTCString());
        document.cookie = a.join("")
    }

    function Te(a) {
        var b = Gc || Hc || Ic;
        b !== a && (Gc = String(a) || "", H("Cookie", "Api public suffix set to: %s", Gc), zc(), Fc("optimizelySegments", b))
    }
    var Ic = "",
        Gc = "",
        Hc = "",
        Re = [];

    function Ue() {}
    D(Ue.prototype, {
        W: gc,
        ua: jc,
        Ba: nc,
        l: mc,
        i: function () {
            return {
                id: this.W(),
                version: this.ua(),
                mobileId: this.Ba()
            }
        },
        wa: function () {
            return this.j("utm_campaign")
        },
        X: N,
        A: kc,
        L: pc,
        ta: kd,
        K: function () {
            var a = "";
            try {
                a = navigator.userLanguage || window.navigator.language, a = a.toLowerCase()
            } catch (b) {
                a = ""
            }
            return a
        },
        B: oc,
        z: function () {
            return jd || window.location.href
        },
        ba: gd,
        Aa: function () {
            return !hd ? k : !!ka.get("first_session")
        },
        sa: qc,
        da: lc,
        M: function () {
            return N("optimizelyReferrer") || document.referrer || ""
        },
        Fa: function (a) {
            var a = a.split("."),
                b = a[0];
            a: {
                for (var a = a.slice(1), b = (r.get("thirdParty") || {})[b], c = 0, d = a.length; c < d; c++)
                    if (ba(b) && b.hasOwnProperty(a[c])) b = b[a[c]];
                    else {
                        a = i;
                        break a
                    }
                a = b
            }
            return a
        },
        Ha: function () {
            return Ec() !== l
        },
        Ca: function () {
            return cd(this.M())
        },
        ea: Fe,
        Ea: Ee,
        ya: function () {
            return document.referrer
        },
        j: function (a) {
            a: {
                for (var b = this.sa(), b = b || qc(), c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (d[0] === a) {
                        a = d[1];
                        a = a.replace(/\+/g, " ");
                        a = va(a);
                        break a
                    }
                }
                a = l
            }
            return a
        },
        xa: function () {
            return hb
        },
        Y: function (a) {
            return (this.xa() || {})[a]
        },
        Ga: function () {
            var a =
                (r.get("customEvents") || {})[ed()] || [];
            return z(a) ? a : []
        },
        Ia: function (a) {
            var b = this.ea();
            return x(b, a)
        },
        la: function (a) {
            return x(this.Ga(), a)
        },
        getDate: function () {
            return new Date
        },
        aa: function () {
            return (wb || l) && (wb || l).lists || l
        },
        Z: function (a) {
            a = this.aa() && this.aa()[a];
            C(a) || (a = l);
            return a
        }
    });
    var Z = new Ue;

    function Ve() {
        this.f = {};
        this.g = {};
        this.m = {};
        this.ka = {}
    }
    Ve.prototype.La = function (a) {
        var b = this.m.hasOwnProperty(a) || this.ka.hasOwnProperty(a);
        if (!this.f.hasOwnProperty(a) || !b) try {
            var c = this.f,
                d = Pd(a);
            d || h(Error("Unable to find audience for id: " + a));
            var e = We(this, d.conditions);
            G("Visitor", "Checking if in audience " + a + ": " + e);
            c[a] = e
        } catch (f) {
            G("Visitor", "Error: " + f.message)
        }
        return this.f[a]
    };

    function Xe(a, b, c, d) {
        d = D({
            D: k,
            ja: k,
            p: k
        }, d);
        if (Pd(b)) {
            a.f[b] = c;
            var e = Cc(b);
            e ? a.ka[b] = c : d.D ? a.m[b] = c : delete a.m[b];
            e && d.p && a.p(e, c);
            if (!e && d.D && d.ja) {
                var f = [];
                v(a.m, n(function (a) {
                    this.f[a] && f.push(a)
                }, a));
                f.sort();
                O("optimizelyAudiences", f.join(","), 31536E4)
            }
        } else G("Visitor", "Unable to find audience " + b)
    }
    Ve.prototype.u = function (a) {
        Xe(this, a, k)
    };
    Ve.prototype.P = function (a) {
        Xe(this, a, m)
    };
    Ve.prototype.Na = function () {
        v(this.f, n(function (a) {
            Xe(this, a, m, {
                D: !!this.m.hasOwnProperty(a)
            })
        }, this))
    };

    function Ye(a, b, c, d) {
        d = !C(d) || d;
        C(c) && c !== l && String(c) ? (d && (c = De(String(c), m)), a.g[b] = c) : delete a.g[b];
        return a.g[b]
    }
    Ve.prototype.G = function (a, b, c) {
        var d;
        a: {
            for (d in M("dimensions") || {}) {
                var e = a,
                    f = Sd(d, "api_name");
                if (e === (!f ? l : f)) break a
            }
            d = l
        }
        d = d || a;
        M("dimensions", d) ? "custom_dimension" === Td(d) ? (b = Ye(this, d, b, c), a = Sd(d, "segment_id"), (a = !a ? l : a) && this.p(a, b), G("Visitor", 'Set dimension "' + d + '" to "' + b + '"')) : G("Visitor", 'Unknown dimension "' + d + '"') : G("Visitor", "Unable to find dimension " + a)
    };
    Ve.prototype.p = function (a, b) {
        b ? Fb(a, b) : Xb(a)
    };
    var Be = new Ve;

    function Ze(a) {
        Y = {};
        Ae(a)
    };

    function $e(a, b) {
        if (a && b)
            if (af) G("Evaluator", "Bound event " + b + " to selector " + a), bf(a, b);
            else {
                var c = {
                    h: b,
                    e: a,
                    type: "event '" + b + "' (click goal)",
                    q: k
                };
                G("Evaluator", "Add step to bind event " + c.h + " to selector " + c.e);
                cf.push(c)
            }
    }

    function rb(a, b) {
        if (R) {
            z(a) ? df(a) : (a = [], df(b));
            a = a.concat(Q);
            Q = [];
            for (var c = 0; c < a.length; c++) x(Wa, a[c]) || Wa.push(a[c]);
            c = a;
            c === i ? c = [] : sa(c) && (c = [c]);
            for (var d = Xa(c), e = [], f = [], g = [], j = [], o = qa(Qd(), function (a) {
                    return a.experiments ? m : ef(a.url_conditions || [])
                }), t = 0, q = o.length; t < q; t++) {
                var u = {
                    h: o[t].event_name,
                    e: o[t].selector,
                    type: "event '" + o[t].event_name + "' (click goal)",
                    q: k
                };
                "revenue" in o[t] && (u.revenue = o[t].revenue);
                e.push(u)
            }
            v(c, function (a) {
                var b = {},
                    c = K(a, "events") || {};
                v(c, function (a, c) {
                    b[a] = [c]
                });
                var c = qa(Qd(), function (b) {
                        return "experiments" in b ? a in b.experiments : m
                    }),
                    d = 0;
                for (; d < c.length; d++) {
                    var A = c[d];
                    b[A.selector] || (b[A.selector] = []);
                    b[A.selector].push({
                        eventName: A.event_name,
                        revenue: A.revenue,
                        experimentIds: A.experiments
                    })
                }
                v(b, function (b, c) {
                    v(c, function (c) {
                        e.push({
                            h: c.eventName,
                            k: c.experimentIds,
                            c: c.revenue,
                            e: b,
                            type: "event '" + c.eventName + "' (experiment " + a + ")",
                            q: k
                        })
                    })
                });
                c = K(a, "css") || "";
                d = K(a, "code") || "";
                c && g.push({
                    code: '$("body").append("<style>' + c.replace(/([\f\n\r\t\\'"])/g, "\\$1") +
                        '</style>");',
                    e: "body",
                    type: "global css (experiment " + a + ")",
                    q: k
                });
                d && ff(d, f, j)
            });
            v(d, function (a) {
                for (var b = cb(a), b = b.split("\n"), c = [], d = k, e = 0, g = b.length; e < g; e++) {
                    var o = $.trim(b[e]);
                    if (o === "/* _optimizely_variation_url_end */") d = k;
                    else if (o !== "") {
                        var q = Qc.exec(o);
                        if (q && q.length === 13) {
                            var t = q[2] ? q[2].split(" ") : [],
                                o = q[4] ? q[4].split(" ") : [],
                                u = q[6] ? q[6] : "substring",
                                ab = q[8] ? q[8].split(" ") : [],
                                q = q[10] ? q[10].split(" ") : [];
                            if (t.length > 0) {
                                d = gf(t, ab, u);
                                d = ef(d)
                            }
                            if (d && o.length > 0) {
                                d = gf(o, q, u);
                                d = !ef(d)
                            }
                        } else d &&
                            c.push(o)
                    }
                }
                b = c.join("\n");
                ff(b, f, j, a)
            });
            c = [];
            c.push.apply(c, f);
            c.push.apply(c, g);
            c.push.apply(c, j);
            c.push.apply(c, e);
            cf.push.apply(cf, c);
            hf()
        }
    }

    function hf() {
        var a = m;
        jf = l;
        for (G("Evaluator", kf + " times waited"); !a && 0 < cf.length;) {
            G("Evaluator", cf.length + " steps remaining");
            var b = cf.shift(),
                c = b,
                a = m;
            if (c.Pa && !af) G("Evaluator", "Document not ready yet"), a = k;
            else if (c.q && !af && (c = c.e))
                for (var c = z(c) ? c : [c], d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (!(e === l || e === i || !e.length))
                        if (0 === ("document" == e ? $(document) : $(e)).length) G("Evaluator", "'" + e + "' not found"), a = k
                }
            a ? cf.unshift(b) : b.h ? (lf(), G("Evaluator", "Bound event " + b.h + " to selector " + b.e), c = {}, b.c && (c = {
                c: b.c,
                k: b.k
            }), bf(b.e, b.h, c)) : b.code && (G("Evaluator", "Run code: " + b.code), mf(b.code, b.I))
        }
        a ? (jf = setTimeout(hf, 0 === kf ? 10 : 50), kf++) : (G("Evaluator", kf + " total times waited"), lf())
    }

    function lf() {
        U("flash");
        0 === ob.length && U("flashGeo")
    }

    function mf(a, b) {
        a = a.replace(ze, xe);
        if (bb(a))
            if (G("Evaluator", "Redirect detected"), se(a)) {
                G("Evaluator", "OK to redirect");
                var c = re(a);
                G("Evaluator", "setting a redirect cookie" + (b ? " for variation: " + b : ""));
                O("optimizelyRedirect", (b || "unknown variation") + "|" + (c ? "true" : "false"), 5);
                te()
            } else {
                G("Evaluator", "NOT OK to redirect");
                return
            }
        eval("var $j = $;");
        try {
            if (bb(a)) {
                $("head").append("<style type='text/css'>body{display:none;visibility:hidden;}</style>");
                G("Evaluator", "Hiding body before redirect");
                var d =
                    ve.test(a) || ue.test(a) || we.test(a),
                    e = /_keep_body_hidden=(\S+)/.test(a);
                d || e ? G("Evaluator", "Standard redirect detected - Will not unhide body.") : setTimeout(function () {
                    document.body && (document.body.style.visibility = "visible", document.body.style.display = "block", G("Evaluator", "Unhiding body -- did not redirect"), U("bodyUnhidden"))
                }, 1700)
            }
            eval(a)
        } catch (f) {
            c = ua, ua = k, G("Evaluator", "Error: " + f.message), G("Evaluator", "Code: " + a), ua = c, G("Evaluator", "Failed to run code: " + f.message)
        }
    }

    function bf(a, b, c) {
        c = c || {};
        if (!nf[a] || !nf[a][b]) {
            var d = function () {
                    tb(b, "custom", c)
                },
                e = $(a);
            if (0 < e.length) {
                var f = function () {
                        e.unbind("touchend", d);
                        e.unbind("touchmove", f);
                        e.unbind("mousedown", d)
                    },
                    g = function () {
                        f();
                        e.bind("touchmove", f);
                        e.bind("touchend", d)
                    };
                e.bind("mousedown", d);
                e.bind("touchstart", g)
            } else e = $("html"), f = function () {
                e.undelegate(a, "touchend", d);
                e.undelegate(a, "touchmove", f);
                e.undelegate(a, "mousedown", d)
            }, e.delegate(a, "touchstart", function () {
                f();
                e.delegate(a, "touchend", d);
                e.delegate(a,
                    "touchmove", f)
            }), e.delegate(a, "mousedown", d);
            nf[a] || (nf[a] = {});
            nf[a][b] = "mousedown touchstart"
        }
    }

    function of(a) {
        pf = a
    }

    function df(a) {
        a || (a = kb());
        for (var b = 0; b < a.length; b++) L(a[b])
    }
    var nf = {},
        Wa = [],
        Q = Q || [],
        pf = 0,
        af = m,
        cf = [],
        jf = l,
        kf = 0;
    $(function () {
        setTimeout(function () {
            U("docReady");
            af = k;
            jf !== l && (G("Evaluator", "Document is ready"), clearTimeout(jf), 0 < pf ? setTimeout(hf, pf) : hf())
        }, 50)
    });

    function qf(a, b, c) {
        if (!z(b)) return c;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (!ba(a) || !a.hasOwnProperty(e)) return c;
            a = a[e]
        }
        return a
    }
    var rf = ["*"],
        sf = {
            eq: function (a) {
                return a[0] === a[1]
            },
            gt: function (a) {
                return a[0] > a[1]
            },
            lt: function (a) {
                return a[0] < a[1]
            },
            gte: function (a) {
                return a[0] >= a[1]
            },
            lte: function (a) {
                return a[0] <= a[1]
            },
            "in": function (a) {
                return x(a[1], a[0])
            },
            between: function (a) {
                return a[1] <= a[0] && a[0] <= a[2]
            },
            and: function (a) {
                return ma(a, aa())
            },
            or: function (a) {
                return w(a, aa())
            },
            not: function (a) {
                return !a[0]
            },
            "+": function (a) {
                return (a[0] || 0) + (a[1] || 0)
            },
            "-": function (a) {
                return (a[0] || 0) - (a[1] || 0)
            },
            "/": function (a) {
                return (a[0] || 0) / (a[1] || 1)
            },
            "%": function (a) {
                return (a[0] || 0) % (a[1] || 1)
            }
        },
        tf = {
            sum: function (a, b) {
                for (var c = a[0] || rf, d = 0, e = 0; e < b.length; e++) d += qf(b[e], c, 0);
                return d
            },
            max: function (a, b) {
                for (var c = a[0] || rf, d = Number.NEGATIVE_INFINITY, e = 0; e < b.length; e++) d = Math.max(d, qf(b[e], c, Number.NEGATIVE_INFINITY));
                return d
            },
            min: function (a, b) {
                for (var c = a[0] || rf, d = Number.POSITIVE_INFINITY, e = 0; e < b.length; e++) d = Math.min(d, qf(b[e], c, Number.POSITIVE_INFINITY));
                return d
            },
            count: function (a, b) {
                return b.length
            }
        },
        uf = {
            now: function () {
                return +new Date
            }
        };

    function vf(a, b) {
        if (b.hasOwnProperty("value")) return b.value;
        if (b.hasOwnProperty("field")) return qf(a, b.field);
        if (b.hasOwnProperty("eval")) {
            if (!(b.eval in uf)) {
                H("Rules", "Unknown function: " + b.eval);
                return
            }
            return uf[b.eval]()
        }
        if (b.a) {
            if (b.a in sf) {
                var c = ea(vf, a),
                    d = pa(b.b || [], function (a) {
                        return c(a)
                    });
                return sf[b.a](d, a)
            }
            H("Rules", "Unknown operator: " + b.a)
        } else H("Rules", "No operator specified: " + p(b))
    };

    function wf(a) {
        var b = a.split(":");
        2 !== b.length && h(Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string " + a));
        return 60 * parseInt(b[0], 10) + parseInt(b[1], 10)
    };

    function pb(a, b) {
        var c = b.manualMode === k,
            d = b.objectType ? b.objectType : "experiment",
            e = "experiment" === d,
            f = b.enabledStatus,
            g = b.visitor || Be;
        G("Condition", "Testing " + d + " " + a);
        var f = e && (C(f) ? !!f : Ya(a)),
            j = e && lb(a),
            o;
        a: switch (d) {
        case "experiment":
            o = K(a, "conditions");
            break a;
        case "segment":
            o = dc(a, "add_condition");
            break a;
        default:
            o = []
        }
        if (e && !f) return G("Condition", "Failed for " + d + " " + a + " (paused)"), m;
        if (e && !c && j) return G("Condition", " Failed for " + d + " " + a + " (manual activation mode)"), m;
        if (o) {
            var t = "experiment" ===
                (d || "experiment"),
                q = k;
            v(o, function (b) {
                var c = b.type;
                if (t && b.only_first_time && xf(a)) G("Condition", c + " condition passed because it only gets checked when bucketing", k);
                else {
                    var d = !b.not,
                        b = (0, yf[c])(b),
                        e = b !== d;
                    G("Condition", "Found that " + ("the visitor " + (b ? "passed" : "failed") + " a " + c + " targeting condition  when it needed to " + (d ? "pass" : "fail")), !e);
                    if (e) return q = m
                }
            });
            if (!q) return G("Condition", "Failed for " + d + " " + a + " (condition failed)"), m
        } else {
            a: {
                c = [];
                e = [];
                if ("experiment" === d) c = K(a, "audiences") || [], e =
                    K(a, "urls") || [];
                else if ("segment" === d)(f = dc(a, "audience_id")) && (c = [f]);
                else {
                    G("Condition", "Not a valid objectType: " + d);
                    d = m;
                    break a
                }
                if (0 < c.length && (G("Condition", "Testing audiences for " + d + " " + a + ": " + c), !w(c, n(g.La, g)))) {
                    G("Condition", "Failed to match any audiences for " + d + " " + a);
                    d = m;
                    break a
                }
                if (0 < e.length) {
                    G("Condition", "Testing URLs for " + d + " " + a);
                    var g = e,
                        u = Z.z(),
                        B = [],
                        y = [];
                    v(g, function (a) {
                        a.negate ? y.push(a) : B.push(a)
                    });
                    g = function (a) {
                        return w(a, function (a) {
                            return zf(u, a)
                        })
                    };
                    if (g(y) || !(0 === B.length ||
                            g(B))) {
                        G("Condition", "Failed to match any URL for " + d + " " + a);
                        d = m;
                        break a
                    }
                }
                d = k
            }
            if (!d) return m
        }
        return k
    }

    function Af(a, b) {
        if (!b) return 0;
        for (var c = b.toString().split("."), d = a.toString().split("."), e = 0; e < c.length; e++)
            if (C(d[e])) {
                if (Number(d[e]) < Number(c[e])) return -1;
                if (Number(d[e]) > Number(c[e])) return 1
            } else return -1;
        return 0
    }

    function Bf(a, b) {
        var c = b.value,
            d = a.id,
            e = a.version,
            f = a.mobileId;
        return f && "unknown" !== f ? (G("Condition", f, k), "mobile" === c || c === f) : 0 === c.indexOf(d) ? 0 === Af(e, c.substr(d.length)) : m
    }

    function ne(a, b) {
        var c = b.value;
        if (c === i) return k;
        try {
            return Boolean(eval(c))
        } catch (d) {
            return m
        }
    }

    function Cf(a, b) {
        return Df(b.value, b.match, a)
    }

    function Ef(a, b) {
        return Df(b.value, b.match, a)
    }

    function Ff(a, b) {
        var c = b.value;
        switch (b.match) {
        case "exact":
            if (a == c && "" != a) return k;
            break;
        case "prefix":
            if (0 == a.indexOf(c)) return k;
            break;
        case "regex":
            try {
                var d = RegExp(c)
            } catch (e) {
                break
            }
            if (d.test(a)) return k;
            break;
        case "cidr":
            try {
                var f;
                a: {
                    var g = new Gf(c),
                        j = Hf(a);
                    j === l && h(Error("Invalid ip: " + a));
                    for (c = 0; 4 > c; c++)
                        if ((j[c] & g.N[c]) !== g.O[c]) {
                            f = m;
                            break a
                        }
                    f = k
                }
                return f
            } catch (o) {}
        }
        return m
    }

    function If(a, b) {
        var c = b.value;
        return "any" === c || 0 === a.indexOf(c)
    }

    function Jf(a, b) {
        var c = b.value.split("|"),
            d = $.trim(c[0]),
            e = $.trim(c[1]),
            f = $.trim(c[2]),
            g = $.trim(c[3]);
        switch (c.length) {
        case 1:
            if (X(a.country) === d) return k;
            break;
        case 2:
            if (X(a.region) === e && X(a.country) === d) return k;
            break;
        case 3:
            if (X(a.city) === f && (X(a.region) === e || "" === e) && X(a.country) === d) return k;
            break;
        case 4:
            if (X(a.continent) === g) return k
        }
        return m
    }

    function Kf(a, b) {
        return Df(b.value, b.match, a)
    }

    function Lf(a, b) {
        var c = b.value,
            d = b.match;
        G("Condition", "Testing referrer " + a + " against  " + c + " (" + d + ")", k);
        return Mf(a, c, d)
    }

    function Nf(a) {
        return !!a
    }

    function ef(a) {
        var b = Z.z();
        return w(a.values, ea(zf, b))
    }

    function zf(a, b) {
        var c = b.value,
            d = b.match;
        G("Condition", "Testing URL " + a + " against  " + c + " (" + d + ")", k);
        return Mf(a, c, d)
    }

    function Of(a, b) {
        switch (b.value) {
        case "new":
            if ("returning" === a) return m;
            break;
        case "returning":
            return "returning" === a
        }
        return k
    }

    function We(a, b) {
        var c = {
            and: function (b) {
                return ma(b, ea(We, a))
            },
            or: function (b) {
                return w(b, ea(We, a))
            },
            not: function (b) {
                1 !== b.length && h(Error('"not" argument too long: ' + p(b)));
                return !We(a, b[0])
            }
        };
        if (z(b)) {
            if (b[0] in c) return c[b[0]](b.slice(1));
            h(Error("Not an operator"))
        }
        var c = b.dimension_id,
            d = Td(c),
            e = b.value;
        d || h(Error("No dimension type for dimension: " + c));
        var f = Pf[d];
        f || h(Error("Unknown dimension type: " + d));
        d = i;
        if (a.g.hasOwnProperty(c)) d = a.g[c];
        else try {
            var g = Td(c) || "",
                j, o;
            M("dimensions", c) || h(Error("Unable to find dimension for id: " +
                c));
            "custom_dimension" === g && h(Error("calculateDimensionValue called on custom dimension " + c));
            (j = {
                browser: n(Z.i, Z),
                browser_version: n(Z.i, Z),
                behavior: n(Z.ta, Z),
                campaign: ea(Ge, "campaign"),
                cookies: n(Z.X, Z),
                custom_tag: n(Z.Y, Z),
                device: n(Z.A, Z),
                event: n(Z.la, Z),
                first_session: n(Z.Aa, Z),
                has_ppid: n(Z.Ha, Z),
                ip: n(Z.L, Z),
                language: n(Z.K, Z),
                list: n(Z.Z, Z),
                location: n(Z.B, Z),
                query: n(Z.j, Z),
                platform: n(Z.da, Z),
                referrer: n(Z.M, Z),
                segment: n(Z.Ia, Z),
                source_type: ea(Ge, "source_type"),
                third_party_dimension: n(Z.Fa, Z),
                time_and_day: n(Z.getDate,
                    Z),
                url: n(Z.z, Z),
                visitor: n(Z.ba, Z)
            }[g]) && (o = j(Ud(c)));
            G("Visitor", "Got dimension (" + g + ") value " + c + ": " + p(o));
            d = o
        } catch (t) {
            G("Visitor", "Error: " + t.message)
        }
        return f(d, {
            value: e,
            match: b.match || "exact"
        })
    }

    function mb(a) {
        var b = k;
        !K(a, "conditions") && !dc(a, "add_condition") ? (b = [dc(a, "audience_id")], b[0] || (b = K(a, "audiences") || []), b = ma(b, function (a) {
            a = Pd(a);
            return !a.conditions ? k : Qf(a.conditions)
        })) : (K(a, "uses_geotargeting") || dc(a, "uses_geotargeting")) && (b = Rf.ip(l) || Rf.location(l));
        b || G("Condition", "Not ready to test (geotargeting): " + a);
        return b
    }

    function Qf(a) {
        if (z(a)) return ma(a.slice(1), Qf);
        var b = Td(a.dimension_id) || "";
        return (b = Rf[b]) ? b(a) : k
    }
    var yf = {
            browser: function (a) {
                var b = Z.i();
                return w(a.values, function (a) {
                    return Bf(b, {
                        value: a
                    })
                })
            },
            code: function (a) {
                return ne(0, a)
            },
            cookies: function (a) {
                for (var b = a.names || [], a = a.values || [], c, d = 0; d < b.length; d++)
                    if (c = b[d], Cf(Z.X(c), {
                            value: a[d] || i
                        })) return k;
                return m
            },
            custom_tag: function (a) {
                return w(a.values, function (a) {
                    return Ef(Z.Y(a.key), {
                        value: a.value
                    })
                })
            },
            event: function (a) {
                return w(a.values, function (a) {
                    return Z.la(a)
                })
            },
            ip: function (a) {
                var b = Z.L();
                return w(a.values, ea(Ff, b))
            },
            language: function (a) {
                var b =
                    Z.K();
                return w(a.values, function (a) {
                    return If(b, {
                        value: a
                    })
                })
            },
            location: function (a) {
                var b = Z.B();
                return w(a.values, function (a) {
                    return Jf(b, {
                        value: a
                    })
                })
            },
            query: function (a) {
                return 0 === a.values.length ? k : w(a.values, function (a) {
                    return Kf(Z.j(a.key), {
                        value: a.value
                    })
                })
            },
            referrer: function (a) {
                return w(a.values, ea(Lf, Z.ya()))
            },
            segment: function (a) {
                var b = Z.ea();
                return w(a.values, function (a) {
                    return Nf(ra(a, b))
                })
            },
            url: ef,
            visitor: function (a) {
                var b = Z.ba();
                return Of(b, a)
            }
        },
        Pf = {
            browser: Bf,
            browser_version: function (a,
                b) {
                var c = b.value,
                    d = a.id,
                    e = a.version;
                return 0 === c.indexOf(d) ? 0 === Af(e, c.substr(d.length)) : m
            },
            behavior: function (a, b) {
                try {
                    var c;
                    var d = ha(b.value);
                    try {
                        var e;
                        var f = d;
                        if (f.hasOwnProperty("where")) {
                            var g = f,
                                j = function (a, b) {
                                    z(a) && ("and" !== a[0] && ("or" !== a[0] && "not" !== a[0]) && H("Rules", "Unexpected operation " + a[0] + ". Continuing optimistically."), a = {
                                        a: a[0],
                                        b: a.slice(1)
                                    });
                                    if (a.hasOwnProperty("field") || a.hasOwnProperty("value") || a.hasOwnProperty("eval")) return a;
                                    if (b && a.a in tf) {
                                        var c = "_" + a.a + "_" + ((a.b && a.b[0] || {}).field || rf).join(".");
                                        c in t || (o.push({
                                            a: a.a,
                                            b: a.b
                                        }), t[c] = k);
                                        return {
                                            field: [c]
                                        }
                                    }
                                    for (var c = [], d = a.b || [], e = 0; e < d.length; e++) c[e] = j(d[e], b);
                                    return {
                                        a: a.a,
                                        b: c
                                    }
                                },
                                o = [],
                                t = {},
                                q = {};
                            if (g.hasOwnProperty("where")) {
                                q.where = j(g.where, m);
                                g.hasOwnProperty("groupBy") && (q.groupBy = g.groupBy);
                                g.hasOwnProperty("having") && (q.having = j(g.having, k));
                                if (g.hasOwnProperty("aggregate") || 0 < o.length) q.aggregate = (g.aggregate || []).concat(o);
                                f = q
                            } else H("Rules", "Rule to overwrite has no WHERE clause: ", p(g)), f = g;
                            var u = qa(a, function (a) {
                                return vf(a,
                                    f.where)
                            });
                            if (!f.hasOwnProperty("groupBy") && !f.hasOwnProperty("aggregate")) e = u;
                            else {
                                var B;
                                var y = f.groupBy;
                                if ("undefined" === typeof y || !z(y) || 0 === y.length) {
                                    var T = {},
                                        F = {};
                                    F[rf] = "_";
                                    T[rf + "=_"] = {
                                        V: F,
                                        d: u
                                    };
                                    B = T
                                } else {
                                    T = pa(y, function (a) {
                                        return a.field
                                    });
                                    g = {};
                                    for (q = 0; q < u.length; q++) {
                                        for (var F = u[q], y = [], A = {}, nb = 0; nb < T.length; nb++) {
                                            var ec = T[nb],
                                                fc = qf(F, ec, "_"),
                                                hc = ec.join(".");
                                            A[hc] = fc;
                                            y.push(encodeURIComponent(hc) + "=" + encodeURIComponent(fc.toString()))
                                        }
                                        var P = y.join("&");
                                        g.hasOwnProperty(P) || (g[P] = {
                                            V: A,
                                            d: []
                                        });
                                        g[P].d.push(F)
                                    }
                                    B = g
                                }
                                u = {};
                                if (f.hasOwnProperty("aggregate")) {
                                    var ab = f.aggregate,
                                        Pc = {};
                                    v(B, function (a, b) {
                                        Pc[a] = {};
                                        for (var c = 0; c < ab.length; c++) {
                                            var d = ab[c],
                                                e = d.a;
                                            if (e in tf) {
                                                var f = (d.b && d.b[0] || {}).field || rf,
                                                    d = "_" + e + "_" + f.join("."),
                                                    e = tf[e]([f], b.d);
                                                Pc[a][d] = e
                                            } else H("Rules", "Unknown aggregate operator " + e)
                                        }
                                    });
                                    u = Pc
                                }
                                var Vf = u,
                                    dd = [];
                                v(B, function (a, b) {
                                    var c = D({}, b.V);
                                    D(c, Vf[a] || {});
                                    dd.push(c)
                                });
                                e = !f.hasOwnProperty("having") ? dd : qa(dd, function (a) {
                                    return vf(a, f.having)
                                })
                            }
                        } else H("Rules", "Missing WHERE clause: " +
                            p(f)), e = a;
                        c = 0 < e.length
                    } catch (Wf) {
                        H("Rules", "Error " + Wf.toString() + " while evaluating rule " + d.toString()), c = m
                    }
                    return c
                } catch (hg) {}
                return m
            },
            campaign: function (a, b) {
                "none" === a && (a = l);
                return Df(b.value, b.match, a)
            },
            code: ne,
            cookies: Cf,
            custom_dimension: function (a, b) {
                var c = b.value;
                return !C(c) ? C(a) : c == a
            },
            custom_tag: Ef,
            device: function (a, b) {
                var c = b.value;
                return "unknown" !== a.id ? a.id === c : "tablet" === c ? "tablet" === a.type : "mobile" === c ? a.l && "tablet" !== a.type : "desktop" === c ? !a.l : m
            },
            event: aa(),
            first_session: aa(),
            ip: Ff,
            language: If,
            list: function (a, b) {
                if (a === l || !C(a)) return m;
                var c = b.value;
                return !C(c) ? "" === a || a !== m : a.toString() === c
            },
            location: Jf,
            query: Kf,
            platform: function (a, b) {
                var c = b.value.split("_"),
                    d = c[0],
                    c = c.slice(1);
                return d === a.id ? 0 === c.length ? k : 1 < c.length ? 0 <= Af(a.version, c[0]) && 0 >= Af(a.version, c[1]) : 0 === Af(a.version, c[0]) : m
            },
            referrer: Lf,
            segment: Nf,
            source_type: function (a, b) {
                return b.value === a
            },
            time_and_day: function (a, b) {
                var c, d, e;
                c = b.value;
                e = c.split("_");
                3 !== e.length && h(Error("Invalid time and day string " + c));
                c = e[0];
                d = e[1];
                e = e[2].split(",");
                c = wf(c);
                d = wf(d);
                var f = 60 * a.getHours() + a.getMinutes(),
                    g = "sunday monday tuesday wednesday thursday friday saturday".split(" ")[a.getDay()];
                return f >= c && f <= d && -1 !== $.inArray(g, e)
            },
            third_party_dimension: function (a, b) {
                return z(a) ? w(a, ea(Df, b.value, b.match)) : Df(b.value, b.match, a)
            },
            url: zf,
            visitor: Of,
            has_ppid: aa()
        },
        Rf = {
            ip: function () {
                U("checkGeo");
                return !!Z.L()
            },
            location: function () {
                var a = Z.B();
                U("checkGeo");
                return !!(a && a.continent || a.country || a.region || a.city)
            },
            list: function (a) {
                a =
                    a.dimension_id;
                U("checkGeo");
                return Z.Z(Ud(a) || "") !== l
            }
        };

    function Df(a, b, c) {
        var d = C(c) && c !== l,
            e = C(a) && a !== l;
        switch (b || (e ? "exact" : "exists")) {
        case "exists":
            return d;
        case "exact":
            return d && String(c) === a;
        case "substring":
            return d && -1 !== String(c).indexOf(a);
        case "regex":
            try {
                return e && d ? Boolean(String(c).match(RegExp(a))) : m
            } catch (f) {
                return m
            }
        case "range":
            return a = a.split(":"), b = parseFloat(a[1]), c = parseFloat(c), c >= parseFloat(a[0]) && c <= b;
        default:
            return m
        }
    };

    function Gf(a) {
        this.qa = $.trim(a);
        a = Sf(this.qa);
        a === l && h(Error("Invalid CIDR specification"));
        this.O = a.O;
        this.N = a.N
    }

    function Sf(a) {
        a = a.split("/");
        if (2 != a.length) return l;
        var b = parseInt(a[1], 10);
        if (isNaN(b) || 0 > b || 32 < b) return l;
        a = Hf(a[0]);
        if (a === l) return l;
        if (0 > b || 32 < b) b = l;
        else {
            for (var c = [], d = 0; 4 > d; d++) c[d] = 0;
            for (var e = Math.floor(b / 8), d = 0; d < e; d++) c[d] = 255;
            4 > e && (c[e] = Tf[b % 8]);
            b = c
        }
        for (c = 0; 4 > c; c++) a[c] &= b[c];
        return {
            O: a,
            N: b
        }
    }

    function Hf(a) {
        a = a.split(".");
        if (4 != a.length) return l;
        for (var b = [], c = 0; 4 > c; c++) {
            var d;
            d = a[c];
            if (3 < d.length) d = l;
            else {
                var e = parseInt(d, 10);
                d = isNaN(e) || d !== e.toString() || 0 > e || 255 < e ? l : e
            }
            if (d === l) return l;
            b[c] = d
        }
        return b
    }
    var Tf = [0, 128, 192, 224, 240, 248, 252, 254, 255];

    function Mf(a, b, c) {
        var d = a.split("?");
        if (d[1]) {
            var e = [];
            $.each(d[1].split("&"), function () {
                0 !== this.indexOf(Uf) && e.push(this)
            });
            d[1] = e.join("&");
            a = d.join("?")
        }
        switch (c) {
        case "exact":
            return a = Xf(a), a === Xf(b);
        case "regex":
            try {
                return Boolean(a.match(b))
            } catch (f) {
                return m
            }
        case "simple":
            return a = Xf(Yf(a)), b = Xf(Yf(b)), a === b;
        case "substring":
            return a = Xf(a, k), b = Xf(b, k), -1 !== a.indexOf(b);
        default:
            return m
        }
    }

    function Yf(a) {
        var b = a.indexOf("?"); - 1 !== b && (a = a.substring(0, b));
        b = a.indexOf("#"); - 1 !== b && (a = a.substring(0, b));
        return a
    }

    function Xf(a, b) {
        var a = a.replace("/?", "?"),
            a = a.toLowerCase().replace(/[/&?]+$/, ""),
            c = Zf.slice(0);
        b || (c = c.concat($f));
        for (var d = c.length, e = 0; e < d; e++) a = a.replace(RegExp("^" + c[e]), "");
        return a
    }
    var Zf = ["https?://.*?.?optimizelyedit.(com|test)/", "https?://.*.?optimizelypreview.(com|test)/", "https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/", "https?://.*?.?optimizelyedit(-hrd)?.appspot.com/", "https?://"],
        $f = ["www."],
        Uf = "optimizely_";

    function ag(a) {
        return function (b) {
            if ("object" === typeof b && bg()) {
                var c = l,
                    d;
                for (d in b) b.hasOwnProperty(d) && (c = a.call(this, d, b[d]));
                return c
            }
            return a.apply(this, arguments)
        }
    }

    function bg() {
        for (var a in {}) return k;
        return m
    };

    function Qb(a, b, c) {
        var d;
        d = m === k;
        var c = c === k,
            e = m,
            f = I(a);
        if (f && (c || !xf(f))) {
            e = k;
            if (c && xf(f))
                for (c = 0; c < V.length; c++) V[c].w === f && V.splice(c, 1);
            V.push({
                w: f,
                id: a,
                source: b
            });
            d && (Q = Q || [], Q.push(f));
            Jb[f] = k;
            Kb();
            G("Plan", "Added experiment " + f + " and variation id " + a + " to the plan, source is " + b, k)
        }
        return e
    }

    function xf(a) {
        return a in Ib || a in Jb
    }

    function Xa(a) {
        var b = [],
            c = !C(a),
            a = a || [];
        v(V, function (d) {
            (c || x(a, d.w)) && b.push(d.id)
        });
        return b
    }

    function je(a) {
        var b;
        if (b === k || !xf(a)) Ib[a] = k, Kb()
    }

    function sb() {
        var a = {};
        v(Jc, function (b, c) {
            a[b] = c
        });
        v(V, function (b) {
            var c = I(b.id);
            a[c] = b.id
        });
        v(Ib, function (b) {
            a[b] = "0"
        });
        v(M("blacklisted_experiments") || {}, function (b) {
            b in a && delete a[b]
        });
        O("optimizelyBuckets", p(a), yc)
    }

    function Kb() {
        v(cg, function (a) {
            a()
        })
    }

    function ff(a, b, c, d) {
        if (-1 !== a.indexOf("_optimizely_redirect")) b.push({
            code: a,
            type: "code forced (redirect)",
            I: d
        });
        else {
            for (var a = a.split("\n"), e = m, f = m, g = [], j = []; 0 < a.length;) {
                var o;
                o = a.shift().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
                var t = 0 < j.length;
                if (o)
                    if (Boolean(o.match(/_optimizely_evaluate\s{0,9}=\s{0,9}force/i))) f = k;
                    else if (Boolean(o.match(/_optimizely_evaluate\s{0,9}=\s{0,9}safe/i)) || Boolean(o.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_force/i))) f = m;
                else if (Boolean(o.match(/_optimizely_evaluate\s{0,9}=\s{0,9}editor_only/i))) e =
                    k;
                else if (Boolean(o.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_editor_only/i))) e = m;
                else if (!dg.exec(o) && !e)
                    if (f) g.push(o);
                    else {
                        if (!t) {
                            var q = eg.exec(o),
                                u = [];
                            q ? (u.push(q[1].replace(/^['"]|['"]$/g, "")), (q = fg.exec(o)) && 4 < q.length && u.push(q[4]), c.push({
                                code: o,
                                e: u,
                                type: "safe jquery",
                                q: k,
                                I: d
                            })) : t = k
                        }
                        t && j.push(o)
                    }
            }
            0 < g.length && b.push({
                code: g.join("\n"),
                type: "forced evaluation",
                I: d
            });
            0 < j.length && c.push({
                code: j.join("\n"),
                type: "safe non-jquery",
                Pa: k,
                I: d
            })
        }
    }

    function gf(a, b, c) {
        for (var d = {
                values: []
            }, e = 0, f = a.length; e < f; e++) d.values.push({
            value: a[e],
            match: b[e] || c
        });
        return d
    }
    var cg = [],
        Jc = {},
        Ib = {},
        fg = /^\$j?\(['"](.+?)['"]\)\.detach\(\)\.(appendTo|insertAfter|insertBefore|prependTo)\(['"](.+?)['"]\);(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/,
        dg = /^(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/,
        eg = /^\$j?\((['"].+?['"]|document)\)\..+;(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/,
        Jb = {},
        V = [];

    function gg() {
        if (!Nc) {
            var a = $;
            a.fn.attr = ag(a.fn.attr);
            a.fn.css = ag(a.fn.css);
            a.fn.extend = ag(a.fn.extend);
            var b = a.each;
            a.each = function (c, d, e) {
                if (!(c.length === i || a.isFunction(c)) || !bg()) b.apply(this, arguments);
                else if (e)
                    for (var f in c) {
                        if (c.hasOwnProperty(f) && d.apply(c[f], e) === m) break
                    } else
                        for (f in c)
                            if (c.hasOwnProperty(f) && !d.call(c[f], f, c[f]) === m) break;
                return c
            };
            var c = a.fn.Ka,
                d = function (a, b, d) {
                    return new c(a, b, d)
                },
                e, f = document.getElementsByClassName;
            if (!qe(f)) var f = (window.optimizely || {}).getElementsByClassName,
                g = (window.optly || {}).getElementsByClassName,
                f = qe(f) ? f : qe(g) ? g : l;
            e = f;
            a.fn.Ka = function (b, c, f) {
                var g = d,
                    j = document.getElementsByClassName;
                !qe(j) && e && (g = function (a, b, c) {
                    document.getElementsByClassName = e;
                    a = d(a, b, c);
                    document.getElementsByClassName = j;
                    return a
                });
                if (!("string" === typeof b && c && "object" === a.type(c) && bg())) return g(b, c, f);
                b = g(b, i, f);
                b.attr(c);
                return b
            }
        }
        G("Main", "Started, revision " + M("revision"));
        var f = oe(),
            g = m,
            j;
        for (j in f)
            if (pe.exec(j)) {
                g = k;
                break
            }("true" === f.opt_out || "false" === f.opt_out) && Dd("true" ===
            f.opt_out);
        Sc = "true" === f.force_tracking;
        if ("true" === f.disable || "true" === f.opt_out || "true" === N("optimizelyOptOut")) R = m;
        Tc = "true" === f.editor;
        Wc = "true" === f.show_preview;
        j = f.token;
        /^[0-9a-f]{32}$/.test(j) ? Uc = j : G("Query", "Blocked request to load unsafe script: " + j);
        ua = "true" === f.log;
        Xc = "true" === f.verbose;
        xa = !(Wc || g) || Sc;
        "false" === f.client && (R = m, Rc = "js/" + Ed() + ".js");
        j = window.optimizely;
        if (R && z(j)) {
            var o = {
                disable: Rb
            };
            v(j, function (a) {
                Tb(o, a, k)
            })
        }
        if (R && (j = M("project_js"))) G("Evaluator", "Running project level javascript."),
            mf(j);
        if (Uc) {
            if (!window.optimizelyPreview) {
                if (!window.optimizely || !window.optimizely.unshift) window.optimizely = [];
                window.optimizely.unshift(["verifyPreviewProject", Ed()]);
                ta([ie, "/js/preview/", Uc, ".js"].join(""), k);
                Wc && he('Loading Preview<br /><img alt="loading" src="//www.optimizely.com/static/img/loading-32.gif" style="padding-top:20px" />')
            }
        } else if (Wc && !Uc) he("This preview link has expired. Please return to Optimizely and preview again to get a new link.");
        else {
            wb = r.get("asyncInfo") || l;
            j = document.location.hostname;
            var f = j.split("."),
                g = j,
                t = f[f.length - 1];
            2 < f.length && "appspot" === f[f.length - 2] && "com" === t ? g = f[f.length - 3] + ".appspot.com" : 1 < f.length && ra(t, Oc) && (g = f[f.length - 2] + "." + t);
            Ic = g;
            H("Cookie", "Guessed public suffix: %s", Ic);
            Hc = Wd(j);
            H("Cookie", "Public suffix (from data): %s", Hc);
            Gc && H("Cookie", "Api public suffix (from api): %s", Gc);
            j = gc();
            f = jc();
            "ie" === j && ("unknown" !== f && 8 > Number(f)) && (R = m);
            if (R) {
                j = N("optimizelyEndUserId");
                hd = j !== i && j !== l;
                a: {
                    j = "googlebot;yahoo! slurp;bingbot;bingpreview;msnbot;keynote;ktxn;khte;gomezagent;alertsite;yottaamonitor;pingdom.com_bot;aihitbot;baiduspider;adsbot-google;mediapartners-google".split(";");
                    f = navigator.userAgent;
                    f = f.toLowerCase();
                    for (g = 0; g < j.length; g++)
                        if (-1 !== f.indexOf(j[g])) {
                            j = k;
                            break a
                        }
                    j = m
                }
                j ? xa = m : hd || ka.set("first_session", k)
            }
            if (j = N("optimizelyBuckets")) {
                try {
                    j = ha(j)
                } catch (q) {
                    j = {}
                }
                var u = {};
                v(j, function (a, b) {
                    var b = String(b),
                        c = I(b);
                    if (Hb(c).length > 1 && b.indexOf("_") === -1) {
                        u[c] = u[c] || {};
                        u[c][a] = b
                    } else b !== "0" ? Qb(b, "cookie") || (Jc[a] = b) : je(a)
                });
                v(u, function (a, b) {
                    var c;
                    a: {
                        c = [];
                        for (var d = Hb(a), e = 0; e < d.length; e++) {
                            var f = b[d[e]];
                            if (f === "0") {
                                c = "";
                                break a
                            }
                            c.push(f)
                        }
                        c = c.join("_")
                    }
                    c.length > 0 ? Qb(c,
                        "cookie") : je(a)
                })
            }
            Ae();
            $a = (N("optimizelyRedirect") || "|").split("|")[0];
            j = N("optimizelyReferrer");
            j !== l && (Aa = 0 == j.length ? "" : j, O("optimizelyReferrer", ""));
            j = Be;
            G("Visitor", "Initializing");
            (f = N("optimizelyAudiences")) && 0 < f.length && v(f.split(","), n(function (a) {
                Xe(this, a, k, {
                    D: k,
                    ja: m
                })
            }, j));
            v(Fe(), n(function (a) {
                G("Visitor", "Found segment " + a);
                var b = Eb()[a];
                if (b && b.audience_id) {
                    G("Visitor", "Adding to audience " + b.audience_id);
                    Xe(this, b.audience_id, k, {
                        p: m
                    })
                } else if (b && b.dimension_id) {
                    G("Visitor", "Setting dimension value " +
                        b.dimension_id);
                    Ye(this, b.dimension_id, Y[a], m)
                }
            }, j));
            S = Be;
            gb = m;
            Ce.push(Ab);
            cg.push(Ab);
            j = {
                $: $,
                activeExperiments: Wa || [],
                allExperiments: sc(),
                all_experiments: sc(),
                allVariations: M("variations") || {},
                data: W,
                getElementsByClassName: document.getElementsByClassName,
                revision: M("revision"),
                variationIdsMap: $b,
                variation_map: ac,
                variationMap: ac,
                variationNamesMap: bc
            };
            var f = {},
                B = na(Tb, f);
            D(f, {
                activate: ib,
                activateGeoDelayedExperiments: ub,
                activateSiteCatalyst: wa,
                activateUniversalAnalytics: Pa,
                addToAudience: n(S.u, S),
                addToSegment: Cb,
                bindTrackElement: $e,
                bucketUser: jb,
                bucketVisitor: jb,
                clickTaleRecord: Sa,
                clickTalePlayback: Qa,
                customTag: Vb,
                delayDomReadyEval: of,
                delayPageviewTracking: tc,
                disable: Rb,
                log: Ke,
                getAccountId: Fd,
                getProjectId: Ed,
                googleAnalyticsCustomVariableScope: Da,
                integrationPrefix: Ta,
                optOut: Dd,
                overrideUrl: id,
                push: B,
                removeFromAllAudiences: n(S.Na, S),
                removeFromAllSegments: Yb,
                removeFromAudience: n(S.P, S),
                removeFromSegment: Wb,
                sc_activate: wa,
                sc_svar: Ua,
                setCookieDomain: Te,
                skipPageTracking: Ac,
                optOutThirdPartyCookies: vc,
                setCookieExpiration: xc,
                setDimensionValue: n(S.G, S),
                setUserId: Dc,
                storeThirdPartyData: Bb,
                timeout: Rb,
                trackEvent: od,
                verbose: Le
            });
            f.removeFromReportableAudiences = Bc;
            D(j, f);
            f = window.optimizely;
            z(f) && v(f, function (a) {
                B(a)
            });
            window.optimizely = j;
            U("apiInitialize");
            window.optimizely.iapi = {
                evaluateSegments: ea(Ze, i)
            };
            var y = !M("force_variation");
            j = oe();
            v(j, function (a, b) {
                var c = pe.exec(a);
                if (c)
                    if (y) {
                        Vc = k;
                        H("Query", "Ignored parameter %s", a)
                    } else {
                        c = c[1];
                        jb(c, b, k);
                        cc(c) ? le(c, {
                            force: k,
                            skipPageviewTracking: k
                        }) : pb(c, {}) || ib(c, {
                            force: k,
                            skipPageviewTracking: k
                        })
                    }
            });
            Vc ? he("Force parameters are disabled for this project. See Project Code Settings.") : (gg.log(), Tc && ta("https://" + M("www_host") + "/js/innie.js?_=" + +new Date), R && (U("distributeExperiments"), v(kb(), function (a) {
                if (!ra(a, Q))
                    if (cc(a) && Ya(a)) le(a);
                    else if (mb(a)) {
                    if (pb(a, {
                            objectType: "experiment"
                        })) {
                        G("Distributor", "Going to distribute " + L(a));
                        if (qb(a)) {
                            Q = Q || [];
                            Q.push(a)
                        }
                    }
                } else !lb(a) && !x(Wa, a) && ob.push(a)
            }), sb(), td(), zb || (0 < uc ? setTimeout(function () {
                xd()
            }, uc) : xd()), sd(), Fa()), ua && (v(Ib, function (a) {
                var b = eb(a);
                G("Plan", "Ignore experiment '" + b + "' (" + a + ")")
            }), v(V, function (a) {
                var b = I(a.id),
                    c = Za(a.id);
                G("Plan", L(b) + ' in variation "' + c + '" (' + a.id + ")")
            })), Tc ? Sb() : R && (U("beginEvaluate"), rb(), Sb(), Ub(), !M("installation_verified") && xa && (j = "//" + M("www_host") + "/account/snippet_installed?project_id=" + Ed() + "&wxhr=true", G("Tracker", "Making snippet verification request."), Ka(j, l))), setTimeout(function () {
                window.optimizelyCode = {}
            }, 0), setTimeout(function () {
                ub()
            }, 2E3), setTimeout(function () {
                if (xa) {
                    var a = ae;
                    if (a.Ja) {
                        var b =
                            kd(),
                            b = {
                                user: ed(),
                                ppid: Ec(),
                                project: Ed(),
                                sync: be,
                                timebase: $d,
                                render: de,
                                sampleRate: Yd(),
                                numExps: Wa.concat(Q).length,
                                numBehaviorEvents: b.length,
                                behaviorEventsSize: p(b).length,
                                codeVersion: M("version"),
                                wxhr: k
                            };
                        D(b, ge() || {});
                        D(b, a.d);
                        var c = ["optimizelyAudiences", "optimizelyBuckets", "optimizelyCustomEvents", "optimizelyPendingLogEvents", "optimizelyReferrer", "optimizelySegments"],
                            d = {},
                            e = 0,
                            f = 0;
                        v(Qe(), function (a) {
                            if (a.name.indexOf("optimizely") === 0) {
                                if (x(c, a.name)) {
                                    G("RUM", "Cookie size for " + a.name + ": " + a.F.length);
                                    d[a.name + "Len"] = a.F.length
                                }
                                e = e + a.F.length
                            }
                            f = f + a.F.length
                        });
                        D(d, {
                            allOptimizelyCookiesLen: e,
                            allCookiesLen: f
                        });
                        D(b, d || {});
                        var a = [],
                            g;
                        for (g in b) Object.prototype.hasOwnProperty.call(b, g) && a.push(window.encodeURIComponent(g) + "=" + window.encodeURIComponent(b[g]));
                        Ka("https://rum.optimizely.com/rum?" + a.join("&"), l)
                    }
                }
            }, 3E3), G("Main", "End of main"), U("mainEnd"))
        }
    }
    gg.log = function () {
        G("Info", "Is enabled: " + R);
        G("Info", "Diagnostic enabled: false");
        G("Info", "Force variation enabled: " + !!M("force_variation"));
        G("Info", "Script to load: " + (Rc || "none"));
        G("Info", "Browser type: " + gc());
        G("Info", "Browser version: " + jc());
        var a = nc();
        "unknown" !== a && G("Info", "Mobile browser type: " + a);
        G("Info", "New vs returning: " + gd());
        G("Info", "Source type: " + Ee());
        G("Info", "User ID: " + ed())
    };
    gg();
    optly.Cleanse.finish();
};
optimizelyCode();
window.optimizely = window.optimizely || [];
window.optimizely.push(['clickTalePlayback']);









var ask, rock, paper, scissors, randomNum;

function gameOn() {
    ask = prompt("rock, paper, scissors");

    function random() {
        randomNum = Math.floor(Math.random() * 3);
        return randomNum;
    }
    if (randomNum === 1) {
        randomNum = "rock";
    } else if (randomNum === 2) {
        randomNum = "paper";
    } else if (randomNum === 3) {
        randomNum = "scissors";
    }
    if (ask === "rock") {
        rock = ask;
    } else if (ask === "paper") {
        paper = ask;
    } else if (ask === "scissors") {
        scissors = ask;
    } else {
        alert("please enter rock, paper or scissors");
    }
    if (ask > randomNum) {
        document.getElementById("rps").innerHTML = ask + " " + "beats " + randomNum;
    } else {
        document.getElementById("rps").innerHTML = randomNum + " " + "beats " + ask;

    }
}
