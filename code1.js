gdjs.WelcomeScreenCode = {};
gdjs.WelcomeScreenCode.localVariables = [];
gdjs.WelcomeScreenCode.idToCallbackMap = new Map();
gdjs.WelcomeScreenCode.GDGameNameObjects1= [];
gdjs.WelcomeScreenCode.GDGameNameObjects2= [];
gdjs.WelcomeScreenCode.GDPlayButtonObjects1= [];
gdjs.WelcomeScreenCode.GDPlayButtonObjects2= [];
gdjs.WelcomeScreenCode.GDVersionObjects1= [];
gdjs.WelcomeScreenCode.GDVersionObjects2= [];
gdjs.WelcomeScreenCode.GDBackgroundObjects1= [];
gdjs.WelcomeScreenCode.GDBackgroundObjects2= [];
gdjs.WelcomeScreenCode.GDLogoObjects1= [];
gdjs.WelcomeScreenCode.GDLogoObjects2= [];
gdjs.WelcomeScreenCode.GDCreditsButtonObjects1= [];
gdjs.WelcomeScreenCode.GDCreditsButtonObjects2= [];
gdjs.WelcomeScreenCode.GDPlayerObjects1= [];
gdjs.WelcomeScreenCode.GDPlayerObjects2= [];
gdjs.WelcomeScreenCode.GDPlayerFalledMarkerObjects1= [];
gdjs.WelcomeScreenCode.GDPlayerFalledMarkerObjects2= [];
gdjs.WelcomeScreenCode.GDMapObjects1= [];
gdjs.WelcomeScreenCode.GDMapObjects2= [];
gdjs.WelcomeScreenCode.GDParallaxObjects1= [];
gdjs.WelcomeScreenCode.GDParallaxObjects2= [];
gdjs.WelcomeScreenCode.GDBackgroundMapObjects1= [];
gdjs.WelcomeScreenCode.GDBackgroundMapObjects2= [];
gdjs.WelcomeScreenCode.GDCursorObjects1= [];
gdjs.WelcomeScreenCode.GDCursorObjects2= [];


gdjs.WelcomeScreenCode.mapOfGDgdjs_9546WelcomeScreenCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.WelcomeScreenCode.GDPlayButtonObjects1});
gdjs.WelcomeScreenCode.mapOfGDgdjs_9546WelcomeScreenCode_9546GDCreditsButtonObjects1Objects = Hashtable.newFrom({"CreditsButton": gdjs.WelcomeScreenCode.GDCreditsButtonObjects1});
gdjs.WelcomeScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.WelcomeScreenCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WelcomeScreenCode.mapOfGDgdjs_9546WelcomeScreenCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map001", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.WelcomeScreenCode.GDCreditsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WelcomeScreenCode.mapOfGDgdjs_9546WelcomeScreenCode_9546GDCreditsButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}
}

}


};

gdjs.WelcomeScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WelcomeScreenCode.GDGameNameObjects1.length = 0;
gdjs.WelcomeScreenCode.GDGameNameObjects2.length = 0;
gdjs.WelcomeScreenCode.GDPlayButtonObjects1.length = 0;
gdjs.WelcomeScreenCode.GDPlayButtonObjects2.length = 0;
gdjs.WelcomeScreenCode.GDVersionObjects1.length = 0;
gdjs.WelcomeScreenCode.GDVersionObjects2.length = 0;
gdjs.WelcomeScreenCode.GDBackgroundObjects1.length = 0;
gdjs.WelcomeScreenCode.GDBackgroundObjects2.length = 0;
gdjs.WelcomeScreenCode.GDLogoObjects1.length = 0;
gdjs.WelcomeScreenCode.GDLogoObjects2.length = 0;
gdjs.WelcomeScreenCode.GDCreditsButtonObjects1.length = 0;
gdjs.WelcomeScreenCode.GDCreditsButtonObjects2.length = 0;
gdjs.WelcomeScreenCode.GDPlayerObjects1.length = 0;
gdjs.WelcomeScreenCode.GDPlayerObjects2.length = 0;
gdjs.WelcomeScreenCode.GDPlayerFalledMarkerObjects1.length = 0;
gdjs.WelcomeScreenCode.GDPlayerFalledMarkerObjects2.length = 0;
gdjs.WelcomeScreenCode.GDMapObjects1.length = 0;
gdjs.WelcomeScreenCode.GDMapObjects2.length = 0;
gdjs.WelcomeScreenCode.GDParallaxObjects1.length = 0;
gdjs.WelcomeScreenCode.GDParallaxObjects2.length = 0;
gdjs.WelcomeScreenCode.GDBackgroundMapObjects1.length = 0;
gdjs.WelcomeScreenCode.GDBackgroundMapObjects2.length = 0;
gdjs.WelcomeScreenCode.GDCursorObjects1.length = 0;
gdjs.WelcomeScreenCode.GDCursorObjects2.length = 0;

gdjs.WelcomeScreenCode.eventsList0(runtimeScene);
gdjs.WelcomeScreenCode.GDGameNameObjects1.length = 0;
gdjs.WelcomeScreenCode.GDGameNameObjects2.length = 0;
gdjs.WelcomeScreenCode.GDPlayButtonObjects1.length = 0;
gdjs.WelcomeScreenCode.GDPlayButtonObjects2.length = 0;
gdjs.WelcomeScreenCode.GDVersionObjects1.length = 0;
gdjs.WelcomeScreenCode.GDVersionObjects2.length = 0;
gdjs.WelcomeScreenCode.GDBackgroundObjects1.length = 0;
gdjs.WelcomeScreenCode.GDBackgroundObjects2.length = 0;
gdjs.WelcomeScreenCode.GDLogoObjects1.length = 0;
gdjs.WelcomeScreenCode.GDLogoObjects2.length = 0;
gdjs.WelcomeScreenCode.GDCreditsButtonObjects1.length = 0;
gdjs.WelcomeScreenCode.GDCreditsButtonObjects2.length = 0;
gdjs.WelcomeScreenCode.GDPlayerObjects1.length = 0;
gdjs.WelcomeScreenCode.GDPlayerObjects2.length = 0;
gdjs.WelcomeScreenCode.GDPlayerFalledMarkerObjects1.length = 0;
gdjs.WelcomeScreenCode.GDPlayerFalledMarkerObjects2.length = 0;
gdjs.WelcomeScreenCode.GDMapObjects1.length = 0;
gdjs.WelcomeScreenCode.GDMapObjects2.length = 0;
gdjs.WelcomeScreenCode.GDParallaxObjects1.length = 0;
gdjs.WelcomeScreenCode.GDParallaxObjects2.length = 0;
gdjs.WelcomeScreenCode.GDBackgroundMapObjects1.length = 0;
gdjs.WelcomeScreenCode.GDBackgroundMapObjects2.length = 0;
gdjs.WelcomeScreenCode.GDCursorObjects1.length = 0;
gdjs.WelcomeScreenCode.GDCursorObjects2.length = 0;


return;

}

gdjs['WelcomeScreenCode'] = gdjs.WelcomeScreenCode;
