var baseUrl = 'api/v2/aws/';

var App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend();
App.ApplicationView = Ember.View.extend({
    templateName: 'application'
});

App.Router.map(function() {
    this.route("addresses");
    this.route("alarms");
    this.route("autoScalingGroups");
    this.route("buckets");
    this.route("images");
    this.route("instances");
    this.route("launchConfigurations");
    this.route("loadBalancers");
    this.route("reservedInstances");
    this.route("scalingPolicies");
    this.route("securityGroups");
    this.route("snapshots");
    this.route("tags");
//    this.resource("tags", function(){
//            this.route("tag", { path: "/tags;value=:value" });
//        });
    this.route("people");
});

App.AddressesRoute = Ember.Route.extend({
    model: function() {
        var data;
        $.ajax({
            url: baseUrl + 'addresses',
            async: false,
            success:function(result){
                data = result;
            }
        });
        return data;
    },
    setupController: function(controller, addresses) {
        controller.set('addresses', addresses);
    }
});


App.TagsRoute = Ember.Route.extend({
    model: function() {
        var data;
        $.ajax({
            url: baseUrl + 'tags;_expand',
            async: false,
            success:function(result){
                data = result;
            }
        });
        return data;
    },
    setupController: function(controller, tags) {
        controller.set('tags', tags);
    }
});

App.initialize();