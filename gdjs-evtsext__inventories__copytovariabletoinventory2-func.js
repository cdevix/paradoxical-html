
if (typeof gdjs.evtsExt__Inventories__CopyToVariableToInventory2 !== "undefined") {
  gdjs.evtsExt__Inventories__CopyToVariableToInventory2.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Inventories__CopyToVariableToInventory2 = {};
gdjs.evtsExt__Inventories__CopyToVariableToInventory2.idToCallbackMap = new Map();


gdjs.evtsExt__Inventories__CopyToVariableToInventory2.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.Variable.copy(eventsFunctionContext.getArgument("Variable"), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("InventoryName")), false);
}
}

}


};

gdjs.evtsExt__Inventories__CopyToVariableToInventory2.func = function(runtimeScene, InventoryName, Variable, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Inventories"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Inventories"),
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
if (argName === "InventoryName") return InventoryName;
if (argName === "Variable") return Variable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Inventories__CopyToVariableToInventory2.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Inventories__CopyToVariableToInventory2.registeredGdjsCallbacks = [];