gdjs.CreditsCode = {};
gdjs.CreditsCode.localVariables = [];
gdjs.CreditsCode.idToCallbackMap = new Map();
gdjs.CreditsCode.GDCreditsTextObjects1= [];
gdjs.CreditsCode.GDCreditsTextObjects2= [];
gdjs.CreditsCode.GD_9595DebugInfoObjects1= [];
gdjs.CreditsCode.GD_9595DebugInfoObjects2= [];
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
gdjs.CreditsCode.GDFlashEffectObjects1= [];
gdjs.CreditsCode.GDFlashEffectObjects2= [];
gdjs.CreditsCode.GDHandAndGunObjects1= [];
gdjs.CreditsCode.GDHandAndGunObjects2= [];
gdjs.CreditsCode.GDAmmoHUDObjects1= [];
gdjs.CreditsCode.GDAmmoHUDObjects2= [];
gdjs.CreditsCode.GDReloadMessageObjects1= [];
gdjs.CreditsCode.GDReloadMessageObjects2= [];


gdjs.CreditsCode.asyncCallback21036876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CreditsCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CreditsText"), gdjs.CreditsCode.GDCreditsTextObjects2);

gdjs.copyArray(runtimeScene.getObjects("_DebugInfo"), gdjs.CreditsCode.GD_9595DebugInfoObjects2);
{for(var i = 0, len = gdjs.CreditsCode.GD_9595DebugInfoObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GD_9595DebugInfoObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString((( gdjs.CreditsCode.GDCreditsTextObjects2.length === 0 ) ? 0 :gdjs.CreditsCode.GDCreditsTextObjects2[0].getY())));
}
}
gdjs.CreditsCode.localVariables.length = 0;
}
gdjs.CreditsCode.idToCallbackMap.set(21036876, gdjs.CreditsCode.asyncCallback21036876);
gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CreditsCode.localVariables);
for (const obj of gdjs.CreditsCode.GDCreditsTextObjects1) asyncObjectsList.addObject("CreditsText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.CreditsCode.asyncCallback21036876(runtimeScene, asyncObjectsList)), 21036876, asyncObjectsList);
}
}

}


};gdjs.CreditsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsText"), gdjs.CreditsCode.GDCreditsTextObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsTextObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsTextObjects1[i].setPosition(0,1100);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(60);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "CreditsTheme", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreditsText"), gdjs.CreditsCode.GDCreditsTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDCreditsTextObjects1.length;i<l;++i) {
    if ( !(gdjs.CreditsCode.GDCreditsTextObjects1[i].getY() < -2600) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDCreditsTextObjects1[k] = gdjs.CreditsCode.GDCreditsTextObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDCreditsTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CreditsCode.GDCreditsTextObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsTextObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsTextObjects1[i].setY(gdjs.CreditsCode.GDCreditsTextObjects1[i].getY() - (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}

{ //Subevents
gdjs.CreditsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreditsText"), gdjs.CreditsCode.GDCreditsTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDCreditsTextObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDCreditsTextObjects1[i].getY() < -2600 ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDCreditsTextObjects1[k] = gdjs.CreditsCode.GDCreditsTextObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDCreditsTextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WelcomeScreen", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(200);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CreditsText"), gdjs.CreditsCode.GDCreditsTextObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsTextObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsTextObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDCreditsTextObjects1.length = 0;
gdjs.CreditsCode.GDCreditsTextObjects2.length = 0;
gdjs.CreditsCode.GD_9595DebugInfoObjects1.length = 0;
gdjs.CreditsCode.GD_9595DebugInfoObjects2.length = 0;
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
gdjs.CreditsCode.GDFlashEffectObjects1.length = 0;
gdjs.CreditsCode.GDFlashEffectObjects2.length = 0;
gdjs.CreditsCode.GDHandAndGunObjects1.length = 0;
gdjs.CreditsCode.GDHandAndGunObjects2.length = 0;
gdjs.CreditsCode.GDAmmoHUDObjects1.length = 0;
gdjs.CreditsCode.GDAmmoHUDObjects2.length = 0;
gdjs.CreditsCode.GDReloadMessageObjects1.length = 0;
gdjs.CreditsCode.GDReloadMessageObjects2.length = 0;

gdjs.CreditsCode.eventsList1(runtimeScene);
gdjs.CreditsCode.GDCreditsTextObjects1.length = 0;
gdjs.CreditsCode.GDCreditsTextObjects2.length = 0;
gdjs.CreditsCode.GD_9595DebugInfoObjects1.length = 0;
gdjs.CreditsCode.GD_9595DebugInfoObjects2.length = 0;
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
gdjs.CreditsCode.GDFlashEffectObjects1.length = 0;
gdjs.CreditsCode.GDFlashEffectObjects2.length = 0;
gdjs.CreditsCode.GDHandAndGunObjects1.length = 0;
gdjs.CreditsCode.GDHandAndGunObjects2.length = 0;
gdjs.CreditsCode.GDAmmoHUDObjects1.length = 0;
gdjs.CreditsCode.GDAmmoHUDObjects2.length = 0;
gdjs.CreditsCode.GDReloadMessageObjects1.length = 0;
gdjs.CreditsCode.GDReloadMessageObjects2.length = 0;


return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
