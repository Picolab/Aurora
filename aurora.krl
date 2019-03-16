ruleset aurora {
  /**
   * An interface for the aurora that uses the aurora_api ruleset to effect changes upon the aurora
   * Should be installed after aurora_api rulset, otherwise send an aurora:sync_with_interface event to this ruleset
   * 
   * See http://forum.nanoleaf.me/docs/openapi section 3.2.14.1 for docs on the "animData" part of the effects
   */
  meta {
    shares __testing, generateSolidColorAnimData
    use module aurora_api alias aurora
  }
  global {
    __testing = { "queries":
      [ { "name": "__testing" }
      //, { "name": "generateSolidColorAnimData", "args": [ "RGBWT_array" ] }
      ] , "events":
      [ { "domain": "aurora", "type": "sync_with_interface" }
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
    
    //Arrays are of format RGBWT: Red, Green, Blue, White, Transition Frames
    solidTransitionTime = 10 //In increments of 100 ms
    red = [1, 255, 0, 0, 0, solidTransitionTime]
    blue = [1, 255, 0, 0, 0, solidTransitionTime]
    green = [1, 0, 255, 0, 0, solidTransitionTime]
    yellow = [1, 255, 255, 0, 0, solidTransitionTime]
    
    
    generateSolidColorAnimData = function(RGBWT_array) {
      arrayString = RGBWT_array.join(" ");
      panelColorArray = ent:panelIds.map(function(pId){pId + " " + arrayString});
      ent:panelIds.length() + " " + panelColorArray.join(" ");
    }
  }
  
  rule onInstallation {
    select when wrangler ruleset_added where rids >< meta:rid
    always {
      raise aurora event sync_with_interface
    }
  }
  
  rule syncWithAuroraApi {
    select when aurora sync_with_interface
    pre {
    }
    always {
      ent:panels := aurora:layout();
      ent:panelIds := ent:panels{"positionData"}.map(function(v) {
        v{"panelId"}
      });
      ent:animDataEffectMap := ent:animDataEffectMap.defaultsTo({}).put("red", {"animData":generateSolidColorAnimData(red)});
      ent:animDataEffectMap := ent:animDataEffectMap.defaultsTo({}).put("blue", {"animData":generateSolidColorAnimData(blue)});
      ent:animDataEffectMap := ent:animDataEffectMap.defaultsTo({}).put("green", {"animData":generateSolidColorAnimData(green)});
      ent:animDataEffectMap := ent:animDataEffectMap.defaultsTo({}).put("yellow", {"animData":generateSolidColorAnimData(yellow)});
       raise aurora event "load_effects"
         attributes {
           "effectMap":ent:animDataEffectMap
         }
    }
  }
  
  /**
   * Takes an effect map of shape
   * {
   *  effectName: {
                    "animData": "<animData>"
                    "looping": <boolean>
                  }
      . . .
     }
   }
   * 
   */
  rule giveAuroraOurEffects {
    select when aurora load_effects
    foreach event:attr("effectMap") setting(effect, effectName)
    always {
      raise aurora event "addEffect"
        attributes {
          "name":effectName,
          "data":effect{"animData"},
          "loop":false
        }
    }
  }
  
  rule changeToGreen {
    select when aurora green
    always {
      raise aurora event "effect"
        attributes {
          "name":"green"
        }
    }
  }
  
  rule changeToRed {
    select when aurora red
    always {
      raise aurora event "effect"
        attributes {
          "name":"red"
        }
    }
  }
  
  rule changeToYellow {
    select when aurora yellow
        always {
      raise aurora event "effect"
        attributes {
          "name":"yellow"
        }
    }
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
