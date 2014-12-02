'use strict';

describe('Service: todoservice', function () {

  // load the service's module
  beforeEach(module('angularjshowtoApp'));

  // instantiate service
  var todoservice;
  beforeEach(inject(function (_todoservice_) {
    todoservice = _todoservice_;
  }));

  it('should do something', function () {
    expect(!!todoservice).toBe(true);
  });

});
