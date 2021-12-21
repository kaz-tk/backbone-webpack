import Backbone from "backbone"
import i18n from "./i18n";
import IndexView from "./views";
import AccountView from "./views/account";

var Router = Backbone.Router.extend({
  routes: {
    "account": "account",
    "index": "index",
    "": "index",
  },
  account: () => {
    console.log("account")
    i18n.getResource("en-US")
    console.log(i18n.t("menu.label.Operation",))
    var accountView = new AccountView()
    accountView.render()
  },
  index: () => {
    console.log("index")
    console.log(i18n.t("menu.label.Operation",))
    var indexView = new IndexView()
    indexView.render()
  }
})

export default Router
