
gdjs.evtsExt__Zombie__ZombieBehavior = gdjs.evtsExt__Zombie__ZombieBehavior || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior = class ZombieBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.SharedData = class ZombieBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Zombie_ZombieBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Zombie_ZombieBehaviorSharedData = new gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._Zombie_ZombieBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Running");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
}

}


};

gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Zombie"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Zombie"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Zombie::ZombieBehavior", gdjs.evtsExt__Zombie__ZombieBehavior.ZombieBehavior);
