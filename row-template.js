(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['row'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "<tr data-index="
    + escapeExpression(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"index","hash":{},"data":data}) : helper)))
    + ">\n  <td>\n    <div class=\"ui mini icon buttons\">\n      <div class=\"ui button login-btn\"><i class=\"user icon\"></i></div>\n    </div>\n  </td>\n  <td>"
    + escapeExpression(((helper = (helper = helpers.startTime || (depth0 != null ? depth0.startTime : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"startTime","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.referer : stack1), depth0))
    + "</td>\n\n</tr>";
},"useData":true});
})();