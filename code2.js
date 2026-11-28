gdjs.YouDiedCode = {};
gdjs.YouDiedCode.localVariables = [];
gdjs.YouDiedCode.idToCallbackMap = new Map();
gdjs.YouDiedCode.GDYouDiedLabelObjects1= [];
gdjs.YouDiedCode.GDYouDiedLabelObjects2= [];
gdjs.YouDiedCode.GDYouDiedTextObjects1= [];
gdjs.YouDiedCode.GDYouDiedTextObjects2= [];
gdjs.YouDiedCode.GDReturnTextObjects1= [];
gdjs.YouDiedCode.GDReturnTextObjects2= [];
gdjs.YouDiedCode.GDRestartLevelButtonObjects1= [];
gdjs.YouDiedCode.GDRestartLevelButtonObjects2= [];
gdjs.YouDiedCode.GDReturnToMenuButtonObjects1= [];
gdjs.YouDiedCode.GDReturnToMenuButtonObjects2= [];
gdjs.YouDiedCode.GDPlayerObjects1= [];
gdjs.YouDiedCode.GDPlayerObjects2= [];
gdjs.YouDiedCode.GDPlayerFalledMarkerObjects1= [];
gdjs.YouDiedCode.GDPlayerFalledMarkerObjects2= [];
gdjs.YouDiedCode.GDMapObjects1= [];
gdjs.YouDiedCode.GDMapObjects2= [];
gdjs.YouDiedCode.GDParallaxObjects1= [];
gdjs.YouDiedCode.GDParallaxObjects2= [];
gdjs.YouDiedCode.GDBackgroundMapObjects1= [];
gdjs.YouDiedCode.GDBackgroundMapObjects2= [];
gdjs.YouDiedCode.GDCursorObjects1= [];
gdjs.YouDiedCode.GDCursorObjects2= [];
gdjs.YouDiedCode.GDFlashEffectObjects1= [];
gdjs.YouDiedCode.GDFlashEffectObjects2= [];
gdjs.YouDiedCode.GDHandAndGunObjects1= [];
gdjs.YouDiedCode.GDHandAndGunObjects2= [];
gdjs.YouDiedCode.GDAmmoHUDObjects1= [];
gdjs.YouDiedCode.GDAmmoHUDObjects2= [];
gdjs.YouDiedCode.GDReloadMessageObjects1= [];
gdjs.YouDiedCode.GDReloadMessageObjects2= [];


gdjs.YouDiedCode.asyncCallback21009452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.YouDiedCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), false);
}
gdjs.YouDiedCode.localVariables.length = 0;
}
gdjs.YouDiedCode.idToCallbackMap.set(21009452, gdjs.YouDiedCode.asyncCallback21009452);
gdjs.YouDiedCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.YouDiedCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.YouDiedCode.asyncCallback21009452(runtimeScene, asyncObjectsList)), 21009452, asyncObjectsList);
}
}

}


};gdjs.YouDiedCode.asyncCallback21010772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.YouDiedCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WelcomeScreen", false);
}
gdjs.YouDiedCode.localVariables.length = 0;
}
gdjs.YouDiedCode.idToCallbackMap.set(21010772, gdjs.YouDiedCode.asyncCallback21010772);
gdjs.YouDiedCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.YouDiedCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.YouDiedCode.asyncCallback21010772(runtimeScene, asyncObjectsList)), 21010772, asyncObjectsList);
}
}

}


};gdjs.YouDiedCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlashEffect"), gdjs.YouDiedCode.GDFlashEffectObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReturnText"), gdjs.YouDiedCode.GDReturnTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouDiedLabel"), gdjs.YouDiedCode.GDYouDiedLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouDiedText"), gdjs.YouDiedCode.GDYouDiedTextObjects1);
{for(var i = 0, len = gdjs.YouDiedCode.GDFlashEffectObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDFlashEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 255, null);
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDYouDiedLabelObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDYouDiedLabelObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDYouDiedTextObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDYouDiedTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDReturnTextObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDReturnTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RestartLevelButton"), gdjs.YouDiedCode.GDRestartLevelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReturnToMenuButton"), gdjs.YouDiedCode.GDReturnToMenuButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouDiedLabel"), gdjs.YouDiedCode.GDYouDiedLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouDiedText"), gdjs.YouDiedCode.GDYouDiedTextObjects1);
{for(var i = 0, len = gdjs.YouDiedCode.GDYouDiedLabelObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDYouDiedLabelObjects1[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((gdjs.YouDiedCode.GDYouDiedLabelObjects1[i].getOpacity()), 255, gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 1));
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDYouDiedTextObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDYouDiedTextObjects1[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((gdjs.YouDiedCode.GDYouDiedTextObjects1[i].getOpacity()), 255, gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 2));
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDRestartLevelButtonObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDRestartLevelButtonObjects1[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((( gdjs.YouDiedCode.GDYouDiedTextObjects1.length === 0 ) ? 0 :gdjs.YouDiedCode.GDYouDiedTextObjects1[0].getOpacity()), 255, gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 3));
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDReturnToMenuButtonObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDReturnToMenuButtonObjects1[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((( gdjs.YouDiedCode.GDYouDiedTextObjects1.length === 0 ) ? 0 :gdjs.YouDiedCode.GDYouDiedTextObjects1[0].getOpacity()), 255, gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 3));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlashEffect"), gdjs.YouDiedCode.GDFlashEffectObjects1);
{for(var i = 0, len = gdjs.YouDiedCode.GDFlashEffectObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDFlashEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 255, null);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WelcomeScreen", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartLevelButton"), gdjs.YouDiedCode.GDRestartLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YouDiedCode.GDRestartLevelButtonObjects1.length;i<l;++i) {
    if ( gdjs.YouDiedCode.GDRestartLevelButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.YouDiedCode.GDRestartLevelButtonObjects1[k] = gdjs.YouDiedCode.GDRestartLevelButtonObjects1[i];
        ++k;
    }
}
gdjs.YouDiedCode.GDRestartLevelButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlashEffect"), gdjs.YouDiedCode.GDFlashEffectObjects1);
{for(var i = 0, len = gdjs.YouDiedCode.GDFlashEffectObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDFlashEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 255, null);
}
}

{ //Subevents
gdjs.YouDiedCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ReturnToMenuButton"), gdjs.YouDiedCode.GDReturnToMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YouDiedCode.GDReturnToMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.YouDiedCode.GDReturnToMenuButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.YouDiedCode.GDReturnToMenuButtonObjects1[k] = gdjs.YouDiedCode.GDReturnToMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.YouDiedCode.GDReturnToMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlashEffect"), gdjs.YouDiedCode.GDFlashEffectObjects1);
{for(var i = 0, len = gdjs.YouDiedCode.GDFlashEffectObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDFlashEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 255, null);
}
}

{ //Subevents
gdjs.YouDiedCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RestartLevelButton"), gdjs.YouDiedCode.GDRestartLevelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReturnText"), gdjs.YouDiedCode.GDReturnTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReturnToMenuButton"), gdjs.YouDiedCode.GDReturnToMenuButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouDiedLabel"), gdjs.YouDiedCode.GDYouDiedLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouDiedText"), gdjs.YouDiedCode.GDYouDiedTextObjects1);
{for(var i = 0, len = gdjs.YouDiedCode.GDYouDiedTextObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDYouDiedTextObjects1[i].setPosition((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.YouDiedCode.GDYouDiedTextObjects1[i].getWidth())) / 2,(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.YouDiedCode.GDYouDiedTextObjects1[i].getHeight())) / 2);
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDYouDiedLabelObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDYouDiedLabelObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDReturnTextObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDReturnTextObjects1[i].setX((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.YouDiedCode.GDReturnTextObjects1[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDRestartLevelButtonObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDRestartLevelButtonObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDReturnToMenuButtonObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDReturnToMenuButtonObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
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

gdjs.YouDiedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.YouDiedCode.GDYouDiedLabelObjects1.length = 0;
gdjs.YouDiedCode.GDYouDiedLabelObjects2.length = 0;
gdjs.YouDiedCode.GDYouDiedTextObjects1.length = 0;
gdjs.YouDiedCode.GDYouDiedTextObjects2.length = 0;
gdjs.YouDiedCode.GDReturnTextObjects1.length = 0;
gdjs.YouDiedCode.GDReturnTextObjects2.length = 0;
gdjs.YouDiedCode.GDRestartLevelButtonObjects1.length = 0;
gdjs.YouDiedCode.GDRestartLevelButtonObjects2.length = 0;
gdjs.YouDiedCode.GDReturnToMenuButtonObjects1.length = 0;
gdjs.YouDiedCode.GDReturnToMenuButtonObjects2.length = 0;
gdjs.YouDiedCode.GDPlayerObjects1.length = 0;
gdjs.YouDiedCode.GDPlayerObjects2.length = 0;
gdjs.YouDiedCode.GDPlayerFalledMarkerObjects1.length = 0;
gdjs.YouDiedCode.GDPlayerFalledMarkerObjects2.length = 0;
gdjs.YouDiedCode.GDMapObjects1.length = 0;
gdjs.YouDiedCode.GDMapObjects2.length = 0;
gdjs.YouDiedCode.GDParallaxObjects1.length = 0;
gdjs.YouDiedCode.GDParallaxObjects2.length = 0;
gdjs.YouDiedCode.GDBackgroundMapObjects1.length = 0;
gdjs.YouDiedCode.GDBackgroundMapObjects2.length = 0;
gdjs.YouDiedCode.GDCursorObjects1.length = 0;
gdjs.YouDiedCode.GDCursorObjects2.length = 0;
gdjs.YouDiedCode.GDFlashEffectObjects1.length = 0;
gdjs.YouDiedCode.GDFlashEffectObjects2.length = 0;
gdjs.YouDiedCode.GDHandAndGunObjects1.length = 0;
gdjs.YouDiedCode.GDHandAndGunObjects2.length = 0;
gdjs.YouDiedCode.GDAmmoHUDObjects1.length = 0;
gdjs.YouDiedCode.GDAmmoHUDObjects2.length = 0;
gdjs.YouDiedCode.GDReloadMessageObjects1.length = 0;
gdjs.YouDiedCode.GDReloadMessageObjects2.length = 0;

gdjs.YouDiedCode.eventsList2(runtimeScene);
gdjs.YouDiedCode.GDYouDiedLabelObjects1.length = 0;
gdjs.YouDiedCode.GDYouDiedLabelObjects2.length = 0;
gdjs.YouDiedCode.GDYouDiedTextObjects1.length = 0;
gdjs.YouDiedCode.GDYouDiedTextObjects2.length = 0;
gdjs.YouDiedCode.GDReturnTextObjects1.length = 0;
gdjs.YouDiedCode.GDReturnTextObjects2.length = 0;
gdjs.YouDiedCode.GDRestartLevelButtonObjects1.length = 0;
gdjs.YouDiedCode.GDRestartLevelButtonObjects2.length = 0;
gdjs.YouDiedCode.GDReturnToMenuButtonObjects1.length = 0;
gdjs.YouDiedCode.GDReturnToMenuButtonObjects2.length = 0;
gdjs.YouDiedCode.GDPlayerObjects1.length = 0;
gdjs.YouDiedCode.GDPlayerObjects2.length = 0;
gdjs.YouDiedCode.GDPlayerFalledMarkerObjects1.length = 0;
gdjs.YouDiedCode.GDPlayerFalledMarkerObjects2.length = 0;
gdjs.YouDiedCode.GDMapObjects1.length = 0;
gdjs.YouDiedCode.GDMapObjects2.length = 0;
gdjs.YouDiedCode.GDParallaxObjects1.length = 0;
gdjs.YouDiedCode.GDParallaxObjects2.length = 0;
gdjs.YouDiedCode.GDBackgroundMapObjects1.length = 0;
gdjs.YouDiedCode.GDBackgroundMapObjects2.length = 0;
gdjs.YouDiedCode.GDCursorObjects1.length = 0;
gdjs.YouDiedCode.GDCursorObjects2.length = 0;
gdjs.YouDiedCode.GDFlashEffectObjects1.length = 0;
gdjs.YouDiedCode.GDFlashEffectObjects2.length = 0;
gdjs.YouDiedCode.GDHandAndGunObjects1.length = 0;
gdjs.YouDiedCode.GDHandAndGunObjects2.length = 0;
gdjs.YouDiedCode.GDAmmoHUDObjects1.length = 0;
gdjs.YouDiedCode.GDAmmoHUDObjects2.length = 0;
gdjs.YouDiedCode.GDReloadMessageObjects1.length = 0;
gdjs.YouDiedCode.GDReloadMessageObjects2.length = 0;


return;

}

gdjs['YouDiedCode'] = gdjs.YouDiedCode;
