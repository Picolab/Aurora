ruleset aurora {
  meta {
    shares __testing, isOn, getInfo, brightness, hue, saturation, colorTemperature, colorMode, currentEffect, listEffects, orientation, layout, requestEffect, requestAllEffects
  }

  global {
    host = "10.5.164.17:16021";
    auth = "KEY";

    isOn = function() {
      aurora:isOn(host, auth);
    }

    getInfo = function() {
      aurora:getInfo(host, auth);
    }

    brightness = function() {
      aurora:brightness(host, auth);
    }

    hue = function() {
      aurora:hue(host, auth);
    }

    saturation = function() {
      aurora:saturation(host, auth);
    }

    colorTemperature = function() {
      aurora:colorTemperature(host, auth);
    }

    colorMode = function() {
      aurora:colorMode(host, auth);
    }

    currentEffect = function() {
      aurora:getEffect(host, auth);
    }

    listEffects = function() {
      aurora:listEffects(host, auth);
    }

    requestEffect = function(name) {
      aurora:requestEffect(host, auth, name);
    }

    requestAllEffects = function() {
      aurora:requestAllEffects(host, auth);
    }

    orientation = function() {
      aurora:orientation(host, auth);
    }

    layout = function() {
      aurora:layout(host, auth);
    }



    __testing = { "queries": [ { "name": "isOn" },
                               { "name": "getInfo" },
                               { "name": "brightness" },
                               { "name": "hue" },
                               { "name": "saturation" },
                               { "name": "colorTemperature" },
                               { "name": "colorMode" },
                               { "name": "currentEffect" },
                               { "name": "listEffects" },
                               { "name": "requestEffect", "args": ["name"] },
                               { "name": "requestAllEffects" },
                               { "name": "orientation" },
                               { "name": "layout" }
                      ],
                  "events": [ { "domain": "user", "type": "add", "attrs": [ ] },
                              { "domain": "user", "type": "delete", "attrs": [ ] },
                              { "domain": "state", "type": "on", "attrs": [ ] },
                              { "domain": "state", "type": "off", "attrs": [ ] },
                              { "domain": "brightness", "type": "set", "attrs": [ "value" ] },
                              { "domain": "brightness", "type": "increase", "attrs": [ "value" ] },
                              { "domain": "brightness", "type": "decrease", "attrs": [ "value" ] },
                              { "domain": "hue", "type": "set", "attrs": [ "value" ] },
                              { "domain": "hue", "type": "increase", "attrs": [ "value" ] },
                              { "domain": "hue", "type": "decrease", "attrs": [ "value" ] },
                              { "domain": "saturation", "type": "set", "attrs": [ "value" ] },
                              { "domain": "saturation", "type": "increase", "attrs": [ "value" ] },
                              { "domain": "saturation", "type": "decrease", "attrs": [ "value" ] },
                              { "domain": "temperature", "type": "set", "attrs": [ "value" ] },
                              { "domain": "temperature", "type": "increase", "attrs": [ "value" ] },
                              { "domain": "temperature", "type": "decrease", "attrs": [ "value" ] },
                              { "domain": "effect", "type": "select", "attrs": [ "value" ] },
                              { "domain": "effect", "type": "selectTemp", "attrs": [ "name", "duration" ] },
                              { "domain": "effect", "type": "add", "attrs": [ "name", "data", "loop" ] },
                              { "domain": "effect", "type": "display", "attrs": [ "data", "loop" ] },
                              { "domain": "effect", "type": "displayTemp", "attrs": [ "data", "duration", "loop" ] },
                              { "domain": "effect", "type": "delete", "attrs": [ "name" ] },
                              { "domain": "effect", "type": "rename", "attrs": [ "name", "newName" ] }
    ] }
  }

  rule addUser {
    select when user add
    aurora:addUser(host)
    fired {}
  }

  rule deleteUser {
    select when user delete
    aurora:deleteUser(host, auth)
    fired {}
  }

  rule turnOn {
    select when state on
    aurora:turnOn(host, auth)
    fired {}
  }

  rule turnOff {
    select when state off
    aurora:turnOff(host, auth)
    fired {}
  }

  rule setBrightness {
    select when brightness set
    aurora:setBrightness(host, auth, event:attr("value"))
    fired {}
  }

  rule brighter {
    select when brightness increase
    aurora:brighter(host, auth, event:attr("value"))
    fired {}
  }

  rule darker {
    select when brightness decrease
    aurora:darker(host, auth, event:attr("value"))
    fired {}
  }

  rule setHue {
    select when hue set
    aurora:setHue(host, auth, event:attr("value"))
    fired {}
  }

  rule increaseHue {
    select when hue increase
    aurora:increaseHue(host, auth, event:attr("value"))
    fired {}
  }

  rule decreaseHue {
    select when hue decrease
    aurora:decreaseHue(host, auth, event:attr("value"))
    fired {}
  }

  rule setSaturation {
    select when saturation set
    aurora:setSaturation(host, auth, event:attr("value"))
    fired {}
  }

  rule saturate {
    select when saturation increase
    aurora:saturate(host, auth, event:attr("value"))
    fired {}
  }

  rule desaturate {
    select when saturation decrease
    aurora:desaturate(host, auth, event:attr("value"))
    fired {}
  }

  rule setColorTemp {
    select when temperature set
    aurora:setColorTemp(host, auth, event:attr("value"))
    fired {}
  }

  rule warmer {
    select when temperature increase
    aurora:warmer(host, auth, event:attr("value"))
    fired {}
  }

  rule colder {
    select when temperature decrease
    aurora:colder(host, auth, event:attr("value"))
    fired {}
  }

  rule selectEffect {
    select when effect select
    aurora:selectEffect(host, auth, event:attr("value"))
    fired {}
  }

  rule selectTempEffect {
    select when effect selectTemp
    aurora:selectTempEffect(host, auth, event:attr("name"), event:attr("duration"))
    fired {}
  }

  rule addEffect {
    select when effect add
    aurora:addEffect(host, auth, event:attr("name"), event:attr("data"), event:attr("loop"))
    fired {}
  }

  rule displayEffect {
    select when effect display
    aurora:displayEffect(host, auth, event:attr("data"), event:attr("loop"))
    fired {}
  }

  rule displayTempEffect {
    select when effect displayTemp
    aurora:displayTempEffect(host, auth, event:attr("data"), event:attr("duration"), event:attr("loop"))
    fired {}
  }

  rule deleteEffect {
    select when effect delete
    aurora:deleteEffect(host, auth, event:attr("name"))
    fired {}
  }

  rule renameEffect {
    select when effect rename
    aurora:renameEffect(host, auth, event:attr("name"), event:attr("newName"))
    fired {}
  }
}
