﻿if ("undefined" == typeof jQuery) throw new Error("thunderJs requires jQuery"); if ("undefined" == typeof jQuery.ui) throw new Error("thunderJs requires jQuery.ui"); !function (e, t) { e.thunder || (e.thunder = {}), e.thunder.version = "1.1.1", e.thunder.statusCode = { 400: "Bad request", 401: "Unauthorized", 403: "Forbidden", 404: "Page not found", 405: "Method not allowed", 407: "Proxy authentication required", 408: "Request timeout", 500: "Internal server error", 501: "Not implemented", 502: "Bad gateway", 503: "Service unavailable" }, e.thunder.activeModal = e({}), e.thunder.utility = function () { return { queryString: function (e) { return this.querStringFormUrl(t.location.search, e) }, querStringFormUrl: function (e, t) { t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var a = new RegExp("[\\?&]" + t + "=([^&#]*)"), n = a.exec(e); return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " ")) }, statusCode: function (t) { var a = e.extend(!0, {}, { message: { plugin: "message", selector: null, showClose: !1 } }, t), n = function (t) { var n = e.thunder.statusCode[t]; "message" === a.message.plugin && e(a.message.selector).length > 0 ? e.thunder.message(a.message.selector, n, e.extend(!0, { type: "danger" }, a.message)) : e.thunder.alert(n, { type: "danger" }) }; return { 400: function () { n(400) }, 401: function () { n(401) }, 403: function () { n(403) }, 404: function () { n(404) }, 405: function () { n(405) }, 407: function () { n(407) }, 408: function () { n(408) }, 500: function () { n(500) }, 501: function () { n(501) }, 502: function () { n(502) }, 503: function () { n(503) } } } } }, e.thunder.closeModal = function () { "undefined" !== e.thunder.activeModal && e.thunder.activeModal.size() > 0 && e.thunder.activeModal.dialog("close") }, e.thunder.appendMessage = function (t, a) { return e(t).each(function () { var t = function (t) { var a = []; return e.isArray(t) && t.length > 0 ? void 0 !== t[0].key && void 0 !== t[0].value ? e.each(t, function () { e.isArray(this.value) ? e.each(this.value, function () { a.push(this) }) : a.push(this.value) }) : e.each(t, function () { a.push(this) }) : e.isPlainObject(t) && void 0 !== t.key && void 0 !== t.value ? e.isArray(t.value) ? e.each(t.value, function () { a.push(this) }) : a.push(t.value) : a.push(t), a }, n = t(a); if (n.length > 1) { var s = e("<ul></ul>"); e.each(n, function () { s.append(e("<li></li>").html(this)) }), e(this).append(s) } else e(this).append(n[0]) }) }, e.thunder.disableElement = function (t) { return e(t).each(function () { e(this).addClass("disabled").attr("disabled", "disabled") }) }, e.thunder.enableElement = function (t) { return e(t).each(function () { e(this).removeClass("disabled").removeAttr("disabled") }) }, e.thunder.alert = function (a, n) { var s = e.extend(!0, { onOk: function () { } }, e.thunder.alert.defaultOptions, n), i = e("." + s.className), o = e('<div class="modal-dialog"></div>'), r = e('<div class="modal-content"></div>'), l = e('<div class="modal-header"></div>'), d = e('<div class="modal-body"></div>'), u = e('<div class="modal-footer"></div>'), c = e('<button type="button"></button>'); 0 === i.size() && (i = e("<div></div>").addClass(s.className), e("body").append(i)), "none" !== s.type && (i.removeClass(s.className + "-none").removeClass(s.className + "-success").removeClass(s.className + "-info").removeClass(s.className + "-warning").removeClass(s.className + "-danger"), i.addClass(s.className + "-" + s.type)), "" !== e.trim(s.title) && r.append(l.append(e('<h4 class="modal-title"></h4>').html(s.title))), c.addClass(s.button.className).html(s.button.label), c.on("click", function () { e.isFunction(s.onOk) && s.onOk.call(i), i.modal("hide") }), e.thunder.appendMessage(d, a), r.append(d).append(u.append(c)), o.css("width", e(t).width() > s.width ? s.width : e(t).width() - 20).append(r), i.empty().addClass("modal").addClass(s.effect).append(o), i.on("shown.bs.modal", function () { c.focus() }), i.modal({ keyboard: !1 }) }, e.thunder.alert.defaultOptions = { title: "Alert", className: "thunder-alert", effect: "fade", type: "none", button: { label: "OK", className: "btn btn-default btn-sm" }, width: 600 }, e.thunder.confirm = function (a, n) { var s = e.extend(!0, { onYes: function () { }, onNo: function () { } }, e.thunder.confirm.defaultOptions, n), i = e("." + s.className), o = e('<div class="modal-dialog"></div>'), r = e('<div class="modal-content"></div>'), l = e('<div class="modal-header"></div>'), d = e('<div class="modal-body"></div>').html(a), u = e('<div class="modal-footer"></div>'), c = e('<button type="button"></button>'), m = e('<button type="button"></button>'); 0 === i.size() && (i = e("<div></div>").addClass(s.className), e("body").append(i)), "" !== e.trim(s.title) && r.append(l.append(e('<h4 class="modal-title"></h4>').html(s.title))), c.addClass(s.button.yes.className).html(s.button.yes.label).on("click", function () { e.isFunction(s.onYes) && s.onYes.call(i), i.modal("hide") }), m.addClass(s.button.no.className).html(s.button.no.label).on("click", function () { e.isFunction(s.onNo) && s.onNo.call(i), i.modal("hide") }), r.append(d).append(u.append(c).append(m)), o.css("width", e(t).width() > s.width ? s.width : e(t).width() - 20).append(r), i.empty().addClass("modal").addClass(s.effect).append(o), i.modal({ keyboard: !1 }) }, e.thunder.confirm.defaultOptions = { title: "Confirm", className: "thunder-confirm", effect: "fade", button: { yes: { label: "Yes", className: "btn btn-success btn-sm" }, no: { label: "No", className: "btn btn-danger btn-sm" } }, width: 600 }, e.thunder.modal = function (a, n) { var s = e.extend(!0, { data: {}, open: function () { }, beforeClose: function () { }, close: function () { } }, e.thunder.modal.defaultOptions, n); if ("undefined" === a || "" === e.trim(a)) throw new Error("Unknown url"); var i = function () { var t = function () { return -1 === a.indexOf("?") ? "?" : "&" }; return jQuery.isPlainObject(s.data) && !jQuery.isEmptyObject(s.data) ? a += t() + e.param(s.data) : "string" == typeof s.data && (a += t() + s.data), s.forceReload && (a += t() + "forceReload=" + parseInt(9999999999 * Math.random())), a += t() + "forceFocusOnLoadInModal=" + s.forceFocusOnLoadInModal }, o = function () { for (var t = e("<div></div>").addClass("thunder-modal-loading"), a = 1; 8 >= a; a++) t.append(e("<div></div>").addClass("thunder-modal-loading-item").addClass("thunder-modal-loading-item-" + a)); return t }, r = e("." + s.className + "-iframe"), l = e("<iframe></iframe>").attr("frameborder", s.iframe.frameBorder).attr("marginheight", s.iframe.marginHeight).attr("marginwidth", s.iframe.marginWidth).attr("scrolling", s.iframe.scrolling).attr("src", i()).hide(); 0 === r.length && (r = e("<div></div>").addClass(s.className + "-iframe"), e("body").append(r)), e.thunder.activeModal = r, r.empty().show().dialog({ autoOpen: !0, modal: !0, resizable: !1, draggable: !1, closeOnEscape: s.closeOnEscape, dialogClass: s.className, width: e(t).width() > s.width ? s.width : e(t).width() - 20, height: s.height, open: function () { var a = o(); r.prev(".ui-dialog-titlebar").remove(), l.attr("width", r.width()).attr("height", r.height()), r.append(a).append(l), l.load(function () { l.show(), a.remove(), t.setTimeout(function () { var t = l.contents(); e.isFunction(s.open) && s.open.call(t) }, 100) }) }, beforeClose: function () { r.empty(), e.isFunction(s.beforeClose) && s.beforeClose.call() }, close: function () { e.thunder.activeModal = e({}), r.remove(), e.isFunction(s.close) && t.setTimeout(function () { s.close.call() }, 0) } }) }, e.thunder.modal.defaultOptions = { className: "thunder-modal", iframe: { frameBorder: 0, marginHeight: 0, marginWidth: 0, scrolling: "auto" }, width: 600, height: 400, forceReload: !0, forceFocusOnLoadInModal: !0, closeOnEscape: !1 }, e.thunder.openModal = function (t, a) { return e(t).each(function () { var t = e(this), n = function (e) { var t = "about:blank"; return e.is("a") && "undefined" !== e.attr("href") && "#" !== e.attr("href") && "" !== e.attr("href") && (t = e.attr("href")), "about:blank" === t && "undefined" !== e.data("url") && (t = e.data("url")), t }; return t.on("click", function (t) { t.preventDefault(), e.thunder.modal(n(e(this)), e.extend(!0, { width: e(this).data("width"), height: e(this).data("height") }, a)) }), t }) }, e.thunder.message = function (a, n, s) { var i = e.extend(!0, { show: function () { } }, e.thunder.message.defaultOptions, s); return e(a).each(function () { var a = e(this).removeClass("alert").removeClass("alert-success").removeClass("alert-info").removeClass("alert-warning").removeClass("alert-danger").addClass("alert").addClass("alert-" + i.type).empty().hide().css(i.css), s = function () { i.removeAfterClose ? a.remove() : a.hide() }; if (i.showClose) { var o = e("<button></button>").attr("type", "button").addClass("close").on("click", s).html("&times;"); a.append(o) } return e.thunder.appendMessage(a, n), a.show(i.animate.duration, i.animate.easing, function () { e.isFunction(i.show) && i.show.call(a) }), i.autoClose.enable && t.setTimeout(s, i.autoClose.timer), a }) }, e.thunder.message.defaultOptions = { showClose: !0, type: "success", removeAfterClose: !1, autoClose: { enable: !1, timer: 5e3 }, css: { marginTop: 0 }, animate: { duration: 400, easing: "linear" } }, e.thunder.ajaxForm = function (a, n) { var s = e.extend(!0, { message: { selector: null }, async: !0, autoResolveResult: !0, before: function () { }, beforeSend: function () { }, success: function () { }, result: function () { }, complete: function () { }, validate: function () { return !0 } }, e.thunder.ajaxForm.defaultOptions, n); return e(a).each(function () { var a = e(this).addClass(s.className), n = e(s.message.selector), i = e(s.loading); if (a.is("form") && ("undefined" === a.attr("action") || "" === e.trim(a.attr("action")))) throw new Error("Action attribute is empty in form"); if (!a.is("form") && ("undefined" === a.data("action") || "" === e.trim(a.data("action")))) throw new Error("Action attribute is empty in element"); if (0 !== n.length || a.prev().is("." + s.className + "-message") || (a.before(e("<div></div>").addClass(s.className + "-message")), n = a.prev()), 0 === i.length && 0 === e("." + s.className + "-loading", a).length) { i = e("<div></div>").addClass(s.className + "-loading"); for (var o = 1; 8 >= o; o++) i.append(e("<div></div>").addClass(s.className + "-loading-item").addClass(s.className + "-loading-item-" + o)); a.prepend(i), i = e("." + s.className + "-loading", a) } var r = function (t, a) { var i = e.extend({ type: 3 }, a), o = function () { return 0 === i.type ? "success" : 1 === i.type ? "info" : 2 === i.type ? "warning" : 3 === i.type ? "danger" : "" }; "message" === s.message.plugin ? e.thunder.message(n, t, e.extend(!0, { type: o(), show: function () { e.isFunction(s.message.show) && s.message.show.call() } }, s.message)) : e.thunder.alert(t, { type: o() }) }, l = function () { var t = e("input,select,textarea", a); return "undefined" !== s.ignore && "" !== s.ignore && (t = e("input,select,textarea", a).filter(s.ignore)), t }, d = function (t) { var a = l(), n = a.serializeArray(); return e.isArray(t) ? e.each(t, function () { e.each(this, function (e, t) { n.push({ name: e, value: t }) }) }) : e.isPlainObject(t) && !e.isEmptyObject(t) && e.each(t, function (e, t) { n.push({ name: e, value: t }) }), e.param(n) }, u = function (o) { var u = a, c = {}, m = l(); o.preventDefault(), i.hide(), n.hide(), e.isFunction(s.before) && (c = s.before.call(u)); var h = d(c); if (!e.isFunction(s.validate) || s.validate.call(u, h)) { var f = e.thunder.utility().statusCode(e.extend(!0, { message: { selector: n } }, s.statusCode)); e.ajax({ statusCode: f, async: s.async, url: u.is("form") ? u.attr("action") : u.data("action"), type: u.is("form") ? u.attr("method") : u.data("method") || "post", data: h, headers: { "Url-Parent": t.location.pathname }, beforeSend: function () { i.show(), e.thunder.disableElement(e("input,select,textarea,button", u)), m.removeClass(s.className + "-error"), m.closest(".form-group").removeClass("has-error"), e.isFunction(s.beforeSend) && s.beforeSend.call(u, m) }, complete: function () { e.thunder.enableElement(e("input,select,textarea,button", u)), i.hide(), e.isFunction(s.complete) && s.complete.call(u) }, success: function (a) { t.setTimeout(function () { s.autoResolveResult && e.isPlainObject(a) && !e.isEmptyObject(a) && "undefined" !== a.type ? 0 === a.type ? e.isFunction(s.success) && s.success.call(u, a) : (e.each(a.messages, function () { if (void 0 !== this.key) { var t = e("[name='" + this.key + "'],#" + this.key, u); t.closest(".form-group").size() > 0 ? t.closest(".form-group").addClass("has-error") : t.addClass(s.className + "-error") } }), r(a.messages, { type: a.type })) : s.success.call(u, a), e.isFunction(s.result) && s.result.call(u, a) }, 0) } }) } }, c = l(); if (a.is("form")) a.on("submit", function (e) { u(e) }); else { var m = e(s.submitButton); c.each(function () { e(this).on("keypress", function (e) { 13 === e.which && (e.preventDefault(), m.trigger("click")) }) }), m.on("click", function (e) { u(e) }) } return c.each(function () { e(this).on("blur", function () { (e(this).is("select") && "0" !== e(this).val() || !e(this).is("select") && "" !== e(this).val()) && e(this).removeClass(s.className + "-error") }) }), a }) }, e.thunder.ajaxForm.defaultOptions = { className: "thunder-ajax-form", ignore: "", loading: null, submitButton: "button.submit-button, a.submit-button", statusCode: { message: { plugin: "message", showClose: !1 } }, message: { plugin: "message", showClose: !0 } }, e.thunder.grid = function (a, n) { var s = e.extend(!0, { message: { selector: null }, fieldPrefix: "", async: !0, load: !0, currentPage: 0, form: null, before: function () { }, success: function () { }, complete: function () { }, validate: function () { return !0 } }, e.thunder.grid.defaultOptions, n), i = function (t, a) { var n = e.extend({ type: 3 }, a), i = function () { return 0 === n.type ? "success" : 1 === n.type ? "info" : 2 === n.type ? "warning" : 3 === n.type ? "danger" : "" }; "message" === s.message.plugin ? e.thunder.message(this, t, e.extend(!0, { type: i(), show: function () { e.isFunction(s.message.show) && s.message.show.call() } }, s.message)) : e.thunder.alert(t, { type: i() }) }, o = function (t) { var a = e(this), n = e("input,select,textarea", a); "undefined" !== s.ignore && "" !== s.ignore && (n = e("input,select,textarea", a).filter(s.ignore)); var i = n.serializeArray(); return e.isArray(t) ? e.each(t, function () { e.each(this, function (e, t) { i.push({ name: e, value: t }) }) }) : e.isPlainObject(t) && !e.isEmptyObject(t) && e.each(t, function (e, t) { i.push({ name: e, value: t }) }), e.param(i) }, r = function (e) { return null !== s.fieldPrefix && "" !== s.fieldPrefix ? s.fieldPrefix + "." + e : e }, l = function (t) { e("." + s.className + "-current-page", this).val(t) }, d = function () { var a = e(this), n = a.data("form"), r = a.data("loading"), l = a.data("message"), d = a.data("content"), u = {}; r.hide(), l.hide(), e.isFunction(s.before) && (u = s.before.call(n)); var c = o.call(n, u); if (!e.isFunction(s.validate) || s.validate.call(n, c)) { var m = e.thunder.utility().statusCode(e.extend(!0, { message: { selector: l } }, s.statusCode)); e.ajax({ statusCode: m, async: s.async, url: n.attr("action"), type: n.attr("method"), data: c, headers: { "Url-Parent": t.location.pathname }, beforeSend: function () { r.show(), e.thunder.disableElement(e("input,select,textarea,button", n)), e.thunder.disableElement(e("a,input,select,textarea,button", a)), e("input,select,textarea", n).removeClass(s.className + "-error") }, complete: function () { e.thunder.enableElement(e("input,select,textarea,button", n)), e.thunder.enableElement(e("a,input,select,textarea,button", a)), r.hide(), e.isFunction(s.complete) && s.complete.call(n) }, success: function (a) { t.setTimeout(function () { if (e.isPlainObject(a) && !e.isEmptyObject(a) && "undefined" !== a.type) if (0 === a.type) e.isFunction(s.success) && s.success.call(n, a); else { var t = null; e.each(a.messages, function () { if (void 0 !== this.key) { var a = e("[name='" + this.key + "'],#" + this.key, n); null === t && (t = a), a.addClass(s.className + "-error") } }), i(a.messages, { type: a.type }) } else d.html(a), s.success.call(n, a) }, 0) } }) } }; return "reload" === n ? (e(a).trigger("reload"), e(a)) : e(a).each(function () { var t = e(this), a = e(s.message.selector), n = e(s.loading), i = e(s.form), o = e("<div></div>"); if (t.addClass(s.className).css(s.css), 0 === e("." + s.className + "-content", t).length ? o.addClass(s.className + "-content").css(s.content.css) : o = e("." + s.className + "-content", t), void 0 === t.data("url")) throw new Error("Data url attribute is empty in grid"); if (0 !== a.length || t.prev().is("." + s.className + "-message") || (t.before(e("<div></div>").addClass(s.className + "-message")), a = t.prev()), 0 === i.length && 0 === e("." + s.className + "-form", t).length && (t.prepend(e(s.useForm ? "<form></form>" : "<div></div>").addClass(s.className + "-form")), i = e("." + s.className + "-form", t)), 0 === n.length && 0 === e("." + s.className + "-loading", t).length) { n = e("<div></div>").addClass(s.className + "-loading"); for (var u = 1; 8 >= u; u++) n.append(e("<div></div>").addClass(s.className + "-loading-item").addClass(s.className + "-loading-item-" + u)); t.prepend(n), n = e("." + s.className + "-loading", t) } return 0 === e("." + s.className + "-current-page", i).length && i.prepend(e("<input/>").attr("type", "hidden").attr("name", r("CurrentPage")).val(s.currentPage).addClass(s.className + "-current-page")), 0 === e("." + s.className + "-page-size", i).length && i.prepend(e("<input/>").attr("type", "hidden").attr("name", r("PageSize")).val(s.pageSize).addClass(s.className + "-page-size")), 0 === e("." + s.className + "-content", t).length && t.append(o), i.attr("action", t.data("url")).attr("method", s.httpMethod).on("submit", function (e) { e.preventDefault(), l.call(this, 0), d.call(t) }), t.data("loading", n).data("message", a).data("content", o).data("form", i), t.bind("reload", function () { i.trigger("submit") }), i.is("form") || (e("input:text", i).on("keypress", function (e) { 13 === e.which && i.trigger("submit") }), e(s.buttonSubmit, i).on("click", function (e) { e.preventDefault(), i.trigger("submit") })), t.on("click", "ul.pagination a", function (a) { var n = e(this); a.preventDefault(), n.is(".disabled") || n.parents("li:first").is(".disabled") || (l.call(i, n.data("page")), d.call(t)) }), s.load && d.call(t), t }) }, e.thunder.grid.defaultOptions = { className: "thunder-grid", ignore: "", loading: null, httpMethod: "POST", useForm: !0, buttonSubmit: null, statusCode: { message: { plugin: "message", showClose: !1 } }, message: { plugin: "message", showClose: !0 }, pageSize: 20, css: {}, content: { css: {} } }, e.thunder.openModal("[data-thunder-plugin=modal]"), e("[data-window=modal]").size() > 0 && ("true" === e.thunder.utility().queryString("forceFocusOnLoadInModal") && t.setTimeout(function () { e("input:visible:not(input[type='hidden'],:disabled),select:visible:not(:disabled),textarea:visible:not(:disabled)").filter(":first").focus() }, 500), e("button.close").on("click", function () { t.parent.$.thunder.closeModal() })) }(window.jQuery, window);