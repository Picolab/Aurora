ruleset aurora {
  /**
   * An interface for the aurora that uses the aurora_api ruleset to effect changes upon the aurora
   * 
   */
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
    // defaultEffects = [
    //   "Color Burst",
    //   "Flames",
    //   "Forest",
    //   "Inner Peace",
    //   "Nemo",
    //   "Northern Lights",
    //   "Romantic",
    //   "Snowfall",
    //   "Triforce one"
    // ]
  }
  
  rule onInstallation {
    select when wrangler ruleset_added where rids >< meta:rid
    always {
    }
  }
  
  rule changeToGreen {
    select when aurora green
    always {
      raise aurora event "effect"
        attributes {
          "name":"Inner Peace"
        }
    }
  }
  
  rule changeToRed {
    select when aurora red

  }
  
  rule changeToYellow {
    select when aurora yellow
    
  }
  
  rule changeToBlue {
    select when aurora blue
    always {
      raise aurora event "effect"
        attributes {
          "name":"Snowfall"
        }
    }
  }
  
}
