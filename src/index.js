import * as $ from "jquery"
import Backbone from "backbone";
import Router from "./router"

const router = new Router();
// DOMの生成が完了してからstart()させる
$(function () {
  Backbone.history.start();  // ブラウザのhashChangeの監視を開始する
});
