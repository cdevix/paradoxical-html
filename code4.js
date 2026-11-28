gdjs.MoveToMapCode = {};
gdjs.MoveToMapCode.localVariables = [];
gdjs.MoveToMapCode.idToCallbackMap = new Map();
gdjs.MoveToMapCode.GDChapterLabelObjects1= [];
gdjs.MoveToMapCode.GDChapterLabelObjects2= [];
gdjs.MoveToMapCode.GDChapterLabelObjects3= [];
gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects1= [];
gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects2= [];
gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects3= [];
gdjs.MoveToMapCode.GDChapterNameLabelObjects1= [];
gdjs.MoveToMapCode.GDChapterNameLabelObjects2= [];
gdjs.MoveToMapCode.GDChapterNameLabelObjects3= [];
gdjs.MoveToMapCode.GDPlayerObjects1= [];
gdjs.MoveToMapCode.GDPlayerObjects2= [];
gdjs.MoveToMapCode.GDPlayerObjects3= [];
gdjs.MoveToMapCode.GDPlayerFalledMarkerObjects1= [];
gdjs.MoveToMapCode.GDPlayerFalledMarkerObjects2= [];
gdjs.MoveToMapCode.GDPlayerFalledMarkerObjects3= [];
gdjs.MoveToMapCode.GDMapObjects1= [];
gdjs.MoveToMapCode.GDMapObjects2= [];
gdjs.MoveToMapCode.GDMapObjects3= [];
gdjs.MoveToMapCode.GDParallaxObjects1= [];
gdjs.MoveToMapCode.GDParallaxObjects2= [];
gdjs.MoveToMapCode.GDParallaxObjects3= [];
gdjs.MoveToMapCode.GDBackgroundMapObjects1= [];
gdjs.MoveToMapCode.GDBackgroundMapObjects2= [];
gdjs.MoveToMapCode.GDBackgroundMapObjects3= [];
gdjs.MoveToMapCode.GDCursorObjects1= [];
gdjs.MoveToMapCode.GDCursorObjects2= [];
gdjs.MoveToMapCode.GDCursorObjects3= [];
gdjs.MoveToMapCode.GDFlashEffectObjects1= [];
gdjs.MoveToMapCode.GDFlashEffectObjects2= [];
gdjs.MoveToMapCode.GDFlashEffectObjects3= [];
gdjs.MoveToMapCode.GDHandAndGunObjects1= [];
gdjs.MoveToMapCode.GDHandAndGunObjects2= [];
gdjs.MoveToMapCode.GDHandAndGunObjects3= [];
gdjs.MoveToMapCode.GDAmmoHUDObjects1= [];
gdjs.MoveToMapCode.GDAmmoHUDObjects2= [];
gdjs.MoveToMapCode.GDAmmoHUDObjects3= [];
gdjs.MoveToMapCode.GDReloadMessageObjects1= [];
gdjs.MoveToMapCode.GDReloadMessageObjects2= [];
gdjs.MoveToMapCode.GDReloadMessageObjects3= [];


gdjs.MoveToMapCode.asyncCallback21068868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MoveToMapCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), false);
}
gdjs.MoveToMapCode.localVariables.length = 0;
}
gdjs.MoveToMapCode.idToCallbackMap.set(21068868, gdjs.MoveToMapCode.asyncCallback21068868);
gdjs.MoveToMapCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MoveToMapCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MoveToMapCode.asyncCallback21068868(runtimeScene, asyncObjectsList)), 21068868, asyncObjectsList);
}
}

}


};gdjs.MoveToMapCode.asyncCallback21068524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MoveToMapCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("FlashEffect"), gdjs.MoveToMapCode.GDFlashEffectObjects2);

{for(var i = 0, len = gdjs.MoveToMapCode.GDFlashEffectObjects2.length ;i < len;++i) {
    gdjs.MoveToMapCode.GDFlashEffectObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 255, null);
}
}

{ //Subevents
gdjs.MoveToMapCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MoveToMapCode.localVariables.length = 0;
}
gdjs.MoveToMapCode.idToCallbackMap.set(21068524, gdjs.MoveToMapCode.asyncCallback21068524);
gdjs.MoveToMapCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MoveToMapCode.localVariables);
for (const obj of gdjs.MoveToMapCode.GDFlashEffectObjects1) asyncObjectsList.addObject("FlashEffect", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.MoveToMapCode.asyncCallback21068524(runtimeScene, asyncObjectsList)), 21068524, asyncObjectsList);
}
}

}


};gdjs.MoveToMapCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ChapterLabel"), gdjs.MoveToMapCode.GDChapterLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("ChapterNameLabel"), gdjs.MoveToMapCode.GDChapterNameLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("ChapterSubtitleLabel"), gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects1);
{for(var i = 0, len = gdjs.MoveToMapCode.GDChapterLabelObjects1.length ;i < len;++i) {
    gdjs.MoveToMapCode.GDChapterLabelObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects1.length ;i < len;++i) {
    gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.MoveToMapCode.GDChapterNameLabelObjects1.length ;i < len;++i) {
    gdjs.MoveToMapCode.GDChapterNameLabelObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ChapterLabel"), gdjs.MoveToMapCode.GDChapterLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("ChapterNameLabel"), gdjs.MoveToMapCode.GDChapterNameLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("ChapterSubtitleLabel"), gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlashEffect"), gdjs.MoveToMapCode.GDFlashEffectObjects1);
{for(var i = 0, len = gdjs.MoveToMapCode.GDFlashEffectObjects1.length ;i < len;++i) {
    gdjs.MoveToMapCode.GDFlashEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 255, null);
}
}
{for(var i = 0, len = gdjs.MoveToMapCode.GDChapterLabelObjects1.length ;i < len;++i) {
    gdjs.MoveToMapCode.GDChapterLabelObjects1[i].getBehavior("Text").setText("Chapter " + runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}
{for(var i = 0, len = gdjs.MoveToMapCode.GDChapterNameLabelObjects1.length ;i < len;++i) {
    gdjs.MoveToMapCode.GDChapterNameLabelObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}
{for(var i = 0, len = gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects1.length ;i < len;++i) {
    gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "NewChapterSound", false, 100, 1);
}

{ //Subevents
gdjs.MoveToMapCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MoveToMapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MoveToMapCode.GDChapterLabelObjects1.length = 0;
gdjs.MoveToMapCode.GDChapterLabelObjects2.length = 0;
gdjs.MoveToMapCode.GDChapterLabelObjects3.length = 0;
gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects1.length = 0;
gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects2.length = 0;
gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects3.length = 0;
gdjs.MoveToMapCode.GDChapterNameLabelObjects1.length = 0;
gdjs.MoveToMapCode.GDChapterNameLabelObjects2.length = 0;
gdjs.MoveToMapCode.GDChapterNameLabelObjects3.length = 0;
gdjs.MoveToMapCode.GDPlayerObjects1.length = 0;
gdjs.MoveToMapCode.GDPlayerObjects2.length = 0;
gdjs.MoveToMapCode.GDPlayerObjects3.length = 0;
gdjs.MoveToMapCode.GDPlayerFalledMarkerObjects1.length = 0;
gdjs.MoveToMapCode.GDPlayerFalledMarkerObjects2.length = 0;
gdjs.MoveToMapCode.GDPlayerFalledMarkerObjects3.length = 0;
gdjs.MoveToMapCode.GDMapObjects1.length = 0;
gdjs.MoveToMapCode.GDMapObjects2.length = 0;
gdjs.MoveToMapCode.GDMapObjects3.length = 0;
gdjs.MoveToMapCode.GDParallaxObjects1.length = 0;
gdjs.MoveToMapCode.GDParallaxObjects2.length = 0;
gdjs.MoveToMapCode.GDParallaxObjects3.length = 0;
gdjs.MoveToMapCode.GDBackgroundMapObjects1.length = 0;
gdjs.MoveToMapCode.GDBackgroundMapObjects2.length = 0;
gdjs.MoveToMapCode.GDBackgroundMapObjects3.length = 0;
gdjs.MoveToMapCode.GDCursorObjects1.length = 0;
gdjs.MoveToMapCode.GDCursorObjects2.length = 0;
gdjs.MoveToMapCode.GDCursorObjects3.length = 0;
gdjs.MoveToMapCode.GDFlashEffectObjects1.length = 0;
gdjs.MoveToMapCode.GDFlashEffectObjects2.length = 0;
gdjs.MoveToMapCode.GDFlashEffectObjects3.length = 0;
gdjs.MoveToMapCode.GDHandAndGunObjects1.length = 0;
gdjs.MoveToMapCode.GDHandAndGunObjects2.length = 0;
gdjs.MoveToMapCode.GDHandAndGunObjects3.length = 0;
gdjs.MoveToMapCode.GDAmmoHUDObjects1.length = 0;
gdjs.MoveToMapCode.GDAmmoHUDObjects2.length = 0;
gdjs.MoveToMapCode.GDAmmoHUDObjects3.length = 0;
gdjs.MoveToMapCode.GDReloadMessageObjects1.length = 0;
gdjs.MoveToMapCode.GDReloadMessageObjects2.length = 0;
gdjs.MoveToMapCode.GDReloadMessageObjects3.length = 0;

gdjs.MoveToMapCode.eventsList2(runtimeScene);
gdjs.MoveToMapCode.GDChapterLabelObjects1.length = 0;
gdjs.MoveToMapCode.GDChapterLabelObjects2.length = 0;
gdjs.MoveToMapCode.GDChapterLabelObjects3.length = 0;
gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects1.length = 0;
gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects2.length = 0;
gdjs.MoveToMapCode.GDChapterSubtitleLabelObjects3.length = 0;
gdjs.MoveToMapCode.GDChapterNameLabelObjects1.length = 0;
gdjs.MoveToMapCode.GDChapterNameLabelObjects2.length = 0;
gdjs.MoveToMapCode.GDChapterNameLabelObjects3.length = 0;
gdjs.MoveToMapCode.GDPlayerObjects1.length = 0;
gdjs.MoveToMapCode.GDPlayerObjects2.length = 0;
gdjs.MoveToMapCode.GDPlayerObjects3.length = 0;
gdjs.MoveToMapCode.GDPlayerFalledMarkerObjects1.length = 0;
gdjs.MoveToMapCode.GDPlayerFalledMarkerObjects2.length = 0;
gdjs.MoveToMapCode.GDPlayerFalledMarkerObjects3.length = 0;
gdjs.MoveToMapCode.GDMapObjects1.length = 0;
gdjs.MoveToMapCode.GDMapObjects2.length = 0;
gdjs.MoveToMapCode.GDMapObjects3.length = 0;
gdjs.MoveToMapCode.GDParallaxObjects1.length = 0;
gdjs.MoveToMapCode.GDParallaxObjects2.length = 0;
gdjs.MoveToMapCode.GDParallaxObjects3.length = 0;
gdjs.MoveToMapCode.GDBackgroundMapObjects1.length = 0;
gdjs.MoveToMapCode.GDBackgroundMapObjects2.length = 0;
gdjs.MoveToMapCode.GDBackgroundMapObjects3.length = 0;
gdjs.MoveToMapCode.GDCursorObjects1.length = 0;
gdjs.MoveToMapCode.GDCursorObjects2.length = 0;
gdjs.MoveToMapCode.GDCursorObjects3.length = 0;
gdjs.MoveToMapCode.GDFlashEffectObjects1.length = 0;
gdjs.MoveToMapCode.GDFlashEffectObjects2.length = 0;
gdjs.MoveToMapCode.GDFlashEffectObjects3.length = 0;
gdjs.MoveToMapCode.GDHandAndGunObjects1.length = 0;
gdjs.MoveToMapCode.GDHandAndGunObjects2.length = 0;
gdjs.MoveToMapCode.GDHandAndGunObjects3.length = 0;
gdjs.MoveToMapCode.GDAmmoHUDObjects1.length = 0;
gdjs.MoveToMapCode.GDAmmoHUDObjects2.length = 0;
gdjs.MoveToMapCode.GDAmmoHUDObjects3.length = 0;
gdjs.MoveToMapCode.GDReloadMessageObjects1.length = 0;
gdjs.MoveToMapCode.GDReloadMessageObjects2.length = 0;
gdjs.MoveToMapCode.GDReloadMessageObjects3.length = 0;


return;

}

gdjs['MoveToMapCode'] = gdjs.MoveToMapCode;
