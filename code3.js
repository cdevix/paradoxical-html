gdjs.CreditsCode = {};
gdjs.CreditsCode.localVariables = [];
gdjs.CreditsCode.idToCallbackMap = new Map();
gdjs.CreditsCode.GDNewBBTextObjects1= [];
gdjs.CreditsCode.GDNewBBTextObjects2= [];
gdjs.CreditsCode.GDPlayerObjects1= [];
gdjs.CreditsCode.GDPlayerObjects2= [];
gdjs.CreditsCode.GDPlayerFalledMarkerObjects1= [];
gdjs.CreditsCode.GDPlayerFalledMarkerObjects2= [];
gdjs.CreditsCode.GDMapObjects1= [];
gdjs.CreditsCode.GDMapObjects2= [];
gdjs.CreditsCode.GDParallaxObjects1= [];
gdjs.CreditsCode.GDParallaxObjects2= [];
gdjs.CreditsCode.GDBackgroundMapObjects1= [];
gdjs.CreditsCode.GDBackgroundMapObjects2= [];
gdjs.CreditsCode.GDCursorObjects1= [];
gdjs.CreditsCode.GDCursorObjects2= [];


gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.CreditsCode.GDNewBBTextObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDNewBBTextObjects1[i].setPosition(0,1100);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDNewBBTextObjects1.length = 0;
gdjs.CreditsCode.GDNewBBTextObjects2.length = 0;
gdjs.CreditsCode.GDPlayerObjects1.length = 0;
gdjs.CreditsCode.GDPlayerObjects2.length = 0;
gdjs.CreditsCode.GDPlayerFalledMarkerObjects1.length = 0;
gdjs.CreditsCode.GDPlayerFalledMarkerObjects2.length = 0;
gdjs.CreditsCode.GDMapObjects1.length = 0;
gdjs.CreditsCode.GDMapObjects2.length = 0;
gdjs.CreditsCode.GDParallaxObjects1.length = 0;
gdjs.CreditsCode.GDParallaxObjects2.length = 0;
gdjs.CreditsCode.GDBackgroundMapObjects1.length = 0;
gdjs.CreditsCode.GDBackgroundMapObjects2.length = 0;
gdjs.CreditsCode.GDCursorObjects1.length = 0;
gdjs.CreditsCode.GDCursorObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
gdjs.CreditsCode.GDNewBBTextObjects1.length = 0;
gdjs.CreditsCode.GDNewBBTextObjects2.length = 0;
gdjs.CreditsCode.GDPlayerObjects1.length = 0;
gdjs.CreditsCode.GDPlayerObjects2.length = 0;
gdjs.CreditsCode.GDPlayerFalledMarkerObjects1.length = 0;
gdjs.CreditsCode.GDPlayerFalledMarkerObjects2.length = 0;
gdjs.CreditsCode.GDMapObjects1.length = 0;
gdjs.CreditsCode.GDMapObjects2.length = 0;
gdjs.CreditsCode.GDParallaxObjects1.length = 0;
gdjs.CreditsCode.GDParallaxObjects2.length = 0;
gdjs.CreditsCode.GDBackgroundMapObjects1.length = 0;
gdjs.CreditsCode.GDBackgroundMapObjects2.length = 0;
gdjs.CreditsCode.GDCursorObjects1.length = 0;
gdjs.CreditsCode.GDCursorObjects2.length = 0;


return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
