ruleset wovyn_buttons_to_aurora {
  // A ruleset that uses wovyn button events to send events an aurora.krl ruleset on a (presumedly) Aurora pico
  meta {
    shares __testing
  }
  global {
    __testing = { "queries":
      [ { "name": "__testing" }
      //, { "name": "entry", "args": [ "key" ] }
      ] , "events":
      [ //{ "domain": "d1", "type": "t1" }
      //, { "domain": "d2", "type": "t2", "attrs": [ "a1", "a2" ] }
      ]
    }
  }
  
  rule onInstallation {
    select when wrangler ruleset_added where rids >< meta:rid
    always {
      ent:aurora_eci := "THKD5NTy92BKCRyA5vL9UX"
    }
  }
  
  rule updateAuroraLoc {
    select when aurora aurora_loc_update
    pre {
      eci = event:attr("eci")
      host = event:attr("host")
    }
    noop()
    always {
      ent:aurora_eci := eci;
      ent:host := host;
    }
  }
  
  rule whenRedPressed {
    select when wovyn Red_pressed
    event:send({"eci":ent:aurora_eci, "domain":"aurora","type":"red"});
    always {
      
    }
  }
  
  rule whenBluePressed {
    select when wovyn Blue_pressed
    event:send({"eci":ent:aurora_eci, "domain":"aurora","type":"blue"});
    always {
      
    }
  }
  
  rule whenGreenPressed {
    select when wovyn Green_pressed
    event:send({"eci":ent:aurora_eci, "domain":"aurora","type":"green"});
    always {
      
    }
  }
  
  rule whenYellowPressed {
    select when wovyn Yellow_pressed
    event:send({"eci":ent:aurora_eci, "domain":"aurora","type":"yellow"});
    always {
      
    }
  }
}
