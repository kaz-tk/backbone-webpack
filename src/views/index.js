import * as $ from 'jquery'
import Backbone from "backbone";
import indexTemplate from '../template/index.ejs'
import i18n from "../i18n";
import underi18n from 'underi18n'
import en from "../locales/en";
import * as _ from 'underscore'

const IndexView = Backbone.View.extend({
  el: $("#index"),
  t: (key) => {
    return i18n.t(key)
  },

  // 設定項目を書いていく
  initialize: (options) => {
    // インスタンスの生成時に呼ばれる
    console.log("IndexView initialize")
  },
  render: function () {
    underi18n.templateSettings = {
      translate: /<%_ ([\s\S]+?) %>/g,
      i18nVarLeftDel: '<%=',
      i18nVarRightDel: '%>'
    }
    const t = underi18n.MessageFactory(en)
    var html = _.template(underi18n.template(indexTemplate, t))
    $(this.el).html(html);
  }
});

export default IndexView
