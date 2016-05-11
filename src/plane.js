'use strict';
function Plane() {};

Plane.prototype.land = function(airport) {
  if(airport.isStormy() === false){
  airport.clearForLanding(this);
  };
  if (airport.isStormy() === true){
      throw new Error("Wait until skies are clear");
    };
  };

Plane.prototype.takeOff = function(airport){
  airport.clearForTakeOff(this); };
