gdjs.WelcomeScreenCode = {};
gdjs.WelcomeScreenCode.localVariables = [];
gdjs.WelcomeScreenCode.idToCallbackMap = new Map();
gdjs.WelcomeScreenCode.GDVersionObjects1= [];
gdjs.WelcomeScreenCode.GDVersionObjects2= [];
gdjs.WelcomeScreenCode.GDPlayButtonObjects1= [];
gdjs.WelcomeScreenCode.GDPlayButtonObjects2= [];
gdjs.WelcomeScreenCode.GDCreditsButtonObjects1= [];
gdjs.WelcomeScreenCode.GDCreditsButtonObjects2= [];
gdjs.WelcomeScreenCode.GDGameLogoObjects1= [];
gdjs.WelcomeScreenCode.GDGameLogoObjects2= [];
gdjs.WelcomeScreenCode.GDBackgroundWidescreenObjects1= [];
gdjs.WelcomeScreenCode.GDBackgroundWidescreenObjects2= [];
gdjs.WelcomeScreenCode.GDExitButtonObjects1= [];
gdjs.WelcomeScreenCode.GDExitButtonObjects2= [];
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
gdjs.WelcomeScreenCode.GDFlashEffectObjects1= [];
gdjs.WelcomeScreenCode.GDFlashEffectObjects2= [];
gdjs.WelcomeScreenCode.GDHandAndGunObjects1= [];
gdjs.WelcomeScreenCode.GDHandAndGunObjects2= [];
gdjs.WelcomeScreenCode.GDAmmoHUDObjects1= [];
gdjs.WelcomeScreenCode.GDAmmoHUDObjects2= [];
gdjs.WelcomeScreenCode.GDReloadMessageObjects1= [];
gdjs.WelcomeScreenCode.GDReloadMessageObjects2= [];


gdjs.WelcomeScreenCode.asyncCallback20968628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.WelcomeScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MoveToMap", false);
}
gdjs.WelcomeScreenCode.localVariables.length = 0;
}
gdjs.WelcomeScreenCode.idToCallbackMap.set(20968628, gdjs.WelcomeScreenCode.asyncCallback20968628);
gdjs.WelcomeScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.WelcomeScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.WelcomeScreenCode.asyncCallback20968628(runtimeScene, asyncObjectsList)), 20968628, asyncObjectsList);
}
}

}


};gdjs.WelcomeScreenCode.asyncCallback20969924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.WelcomeScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
gdjs.WelcomeScreenCode.localVariables.length = 0;
}
gdjs.WelcomeScreenCode.idToCallbackMap.set(20969924, gdjs.WelcomeScreenCode.asyncCallback20969924);
gdjs.WelcomeScreenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.WelcomeScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.WelcomeScreenCode.asyncCallback20969924(runtimeScene, asyncObjectsList)), 20969924, asyncObjectsList);
}
}

}


};gdjs.WelcomeScreenCode.asyncCallback20971092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.WelcomeScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BackgroundWidescreen"), gdjs.WelcomeScreenCode.GDBackgroundWidescreenObjects2);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}
{for(var i = 0, len = gdjs.WelcomeScreenCode.GDBackgroundWidescreenObjects2.length ;i < len;++i) {
    gdjs.WelcomeScreenCode.GDBackgroundWidescreenObjects2[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2.5);
}
}
gdjs.WelcomeScreenCode.localVariables.length = 0;
}
gdjs.WelcomeScreenCode.idToCallbackMap.set(20971092, gdjs.WelcomeScreenCode.asyncCallback20971092);
gdjs.WelcomeScreenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.WelcomeScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.WelcomeScreenCode.asyncCallback20971092(runtimeScene, asyncObjectsList)), 20971092, asyncObjectsList);
}
}

}


};gdjs.WelcomeScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BackgroundWidescreen"), gdjs.WelcomeScreenCode.GDBackgroundWidescreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.WelcomeScreenCode.GDCreditsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.WelcomeScreenCode.GDExitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameLogo"), gdjs.WelcomeScreenCode.GDGameLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.WelcomeScreenCode.GDPlayButtonObjects1);
{for(var i = 0, len = gdjs.WelcomeScreenCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.WelcomeScreenCode.GDPlayButtonObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.WelcomeScreenCode.GDCreditsButtonObjects1.length ;i < len;++i) {
    gdjs.WelcomeScreenCode.GDCreditsButtonObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.WelcomeScreenCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.WelcomeScreenCode.GDExitButtonObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.WelcomeScreenCode.GDGameLogoObjects1.length ;i < len;++i) {
    gdjs.WelcomeScreenCode.GDGameLogoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.WelcomeScreenCode.GDBackgroundWidescreenObjects1.length ;i < len;++i) {
    gdjs.WelcomeScreenCode.GDBackgroundWidescreenObjects1[i].setCenterXInScene(0);
}
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "Background", 0) + (20 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "Background", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlashEffect"), gdjs.WelcomeScreenCode.GDFlashEffectObjects1);
{for(var i = 0, len = gdjs.WelcomeScreenCode.GDFlashEffectObjects1.length ;i < len;++i) {
    gdjs.WelcomeScreenCode.GDFlashEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 255, null);
}
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.5, "Background", 0);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "MainTheme", true, 100, 1);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 0, "Background", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.WelcomeScreenCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WelcomeScreenCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.WelcomeScreenCode.GDPlayButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WelcomeScreenCode.GDPlayButtonObjects1[k] = gdjs.WelcomeScreenCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.WelcomeScreenCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlashEffect"), gdjs.WelcomeScreenCode.GDFlashEffectObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("I");
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("The Beginning of Beginnings");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setString("December 18, 2078");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Map001");
}
{for(var i = 0, len = gdjs.WelcomeScreenCode.GDFlashEffectObjects1.length ;i < len;++i) {
    gdjs.WelcomeScreenCode.GDFlashEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 255, null);
}
}

{ //Subevents
gdjs.WelcomeScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.WelcomeScreenCode.GDExitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WelcomeScreenCode.GDExitButtonObjects1.length;i<l;++i) {
    if ( gdjs.WelcomeScreenCode.GDExitButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WelcomeScreenCode.GDExitButtonObjects1[k] = gdjs.WelcomeScreenCode.GDExitButtonObjects1[i];
        ++k;
    }
}
gdjs.WelcomeScreenCode.GDExitButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlashEffect"), gdjs.WelcomeScreenCode.GDFlashEffectObjects1);
{for(var i = 0, len = gdjs.WelcomeScreenCode.GDFlashEffectObjects1.length ;i < len;++i) {
    gdjs.WelcomeScreenCode.GDFlashEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 255, null);
}
}

{ //Subevents
gdjs.WelcomeScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.WelcomeScreenCode.GDCreditsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WelcomeScreenCode.GDCreditsButtonObjects1.length;i<l;++i) {
    if ( gdjs.WelcomeScreenCode.GDCreditsButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WelcomeScreenCode.GDCreditsButtonObjects1[k] = gdjs.WelcomeScreenCode.GDCreditsButtonObjects1[i];
        ++k;
    }
}
gdjs.WelcomeScreenCode.GDCreditsButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlashEffect"), gdjs.WelcomeScreenCode.GDFlashEffectObjects1);
{for(var i = 0, len = gdjs.WelcomeScreenCode.GDFlashEffectObjects1.length ;i < len;++i) {
    gdjs.WelcomeScreenCode.GDFlashEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 255, null);
}
}

{ //Subevents
gdjs.WelcomeScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


};

gdjs.WelcomeScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WelcomeScreenCode.GDVersionObjects1.length = 0;
gdjs.WelcomeScreenCode.GDVersionObjects2.length = 0;
gdjs.WelcomeScreenCode.GDPlayButtonObjects1.length = 0;
gdjs.WelcomeScreenCode.GDPlayButtonObjects2.length = 0;
gdjs.WelcomeScreenCode.GDCreditsButtonObjects1.length = 0;
gdjs.WelcomeScreenCode.GDCreditsButtonObjects2.length = 0;
gdjs.WelcomeScreenCode.GDGameLogoObjects1.length = 0;
gdjs.WelcomeScreenCode.GDGameLogoObjects2.length = 0;
gdjs.WelcomeScreenCode.GDBackgroundWidescreenObjects1.length = 0;
gdjs.WelcomeScreenCode.GDBackgroundWidescreenObjects2.length = 0;
gdjs.WelcomeScreenCode.GDExitButtonObjects1.length = 0;
gdjs.WelcomeScreenCode.GDExitButtonObjects2.length = 0;
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
gdjs.WelcomeScreenCode.GDFlashEffectObjects1.length = 0;
gdjs.WelcomeScreenCode.GDFlashEffectObjects2.length = 0;
gdjs.WelcomeScreenCode.GDHandAndGunObjects1.length = 0;
gdjs.WelcomeScreenCode.GDHandAndGunObjects2.length = 0;
gdjs.WelcomeScreenCode.GDAmmoHUDObjects1.length = 0;
gdjs.WelcomeScreenCode.GDAmmoHUDObjects2.length = 0;
gdjs.WelcomeScreenCode.GDReloadMessageObjects1.length = 0;
gdjs.WelcomeScreenCode.GDReloadMessageObjects2.length = 0;

gdjs.WelcomeScreenCode.eventsList3(runtimeScene);
gdjs.WelcomeScreenCode.GDVersionObjects1.length = 0;
gdjs.WelcomeScreenCode.GDVersionObjects2.length = 0;
gdjs.WelcomeScreenCode.GDPlayButtonObjects1.length = 0;
gdjs.WelcomeScreenCode.GDPlayButtonObjects2.length = 0;
gdjs.WelcomeScreenCode.GDCreditsButtonObjects1.length = 0;
gdjs.WelcomeScreenCode.GDCreditsButtonObjects2.length = 0;
gdjs.WelcomeScreenCode.GDGameLogoObjects1.length = 0;
gdjs.WelcomeScreenCode.GDGameLogoObjects2.length = 0;
gdjs.WelcomeScreenCode.GDBackgroundWidescreenObjects1.length = 0;
gdjs.WelcomeScreenCode.GDBackgroundWidescreenObjects2.length = 0;
gdjs.WelcomeScreenCode.GDExitButtonObjects1.length = 0;
gdjs.WelcomeScreenCode.GDExitButtonObjects2.length = 0;
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
gdjs.WelcomeScreenCode.GDFlashEffectObjects1.length = 0;
gdjs.WelcomeScreenCode.GDFlashEffectObjects2.length = 0;
gdjs.WelcomeScreenCode.GDHandAndGunObjects1.length = 0;
gdjs.WelcomeScreenCode.GDHandAndGunObjects2.length = 0;
gdjs.WelcomeScreenCode.GDAmmoHUDObjects1.length = 0;
gdjs.WelcomeScreenCode.GDAmmoHUDObjects2.length = 0;
gdjs.WelcomeScreenCode.GDReloadMessageObjects1.length = 0;
gdjs.WelcomeScreenCode.GDReloadMessageObjects2.length = 0;


return;

}

gdjs['WelcomeScreenCode'] = gdjs.WelcomeScreenCode;
