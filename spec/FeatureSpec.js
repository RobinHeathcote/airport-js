'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at airport', function(){
  spyOn(airport, "isStormy").and.returnValue(false);
  plane.land(airport);
  expect(airport.planes()).toContain(plane);
  });

  it('can instruct planes to take off', function(){
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  });
  it ("planes can be instructed to land at an airport", function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane)
  });
  it ("checks weather and does not allow planes to land when weather is stormy", function(){
    spyOn(airport, "isStormy").and.returnValue(true);
    expect(function(){plane.land(airport);}).toThrowError("Wait until skies are clear");
  });
});
