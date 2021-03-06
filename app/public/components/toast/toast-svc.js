'use strict';

angular
  .module('ngGather')
  .service('toastService', function($timeout) {
    var toast = [];
    this.setToast = function(msg, timeout) {
      toast.length = 0;
      toast.push(msg);
      $timeout(function(){
        toast.length = 0;
      }, timeout || 1500);
    };
    this.clearToast = function() {
      toast.length = 0;
    };
    this.getToast = function() {
      return toast;
    };
  });
