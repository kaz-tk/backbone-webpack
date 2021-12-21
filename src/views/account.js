import * as $ from 'jquery'
import Backbone from "backbone";
import accountTemplate from '../template/account.ejs'
import i18n from "./../i18n";
import underi18n from 'underi18n'
import en from "../locales/en";
import * as _ from 'underscore'

const AccountView = Backbone.View.extend({
  el: $("#index"),
  t: (key) => {
    return i18n.t(key)
  },
  // 設定項目を書いていく
  initialize: (options) => {
    // インスタンスの生成時に呼ばれる
    console.log("AccountView initialize")
  },
  render: function () {
    underi18n.templateSettings = {
      translate: /<%_ ([\s\S]+?) %>/g,
      i18nVarLeftDel: '<%=',
      i18nVarRightDel: '%>'
    }
    const t = underi18n.MessageFactory(en)
    console.log(en)
    console.log(t("message_process_error"))
    console.log(underi18n.template(accountTemplate, t))
    var html = _.template(underi18n.template(accountTemplate, t))
    $(this.el).html(html);
  }
});

export default AccountView
