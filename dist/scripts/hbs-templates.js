(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['section'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id="
    + alias4(((helper = (helper = helpers.sectionId || (depth0 != null ? depth0.sectionId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sectionId","hash":{},"data":data}) : helper)))
    + " class=\"mb-5\">\r\n    <h2 class=\"mb-3\">"
    + alias4(((helper = (helper = helpers.sectionTitle || (depth0 != null ? depth0.sectionTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sectionTitle","hash":{},"data":data}) : helper)))
    + "</h2>\r\n\r\n    \r\n</section>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sectionContent : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();