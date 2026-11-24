gdjs.YouDiedCode = {};
gdjs.YouDiedCode.localVariables = [];
gdjs.YouDiedCode.idToCallbackMap = new Map();
gdjs.YouDiedCode.GDYouDiedLabelObjects1= [];
gdjs.YouDiedCode.GDYouDiedLabelObjects2= [];
gdjs.YouDiedCode.GDYouDiedTextObjects1= [];
gdjs.YouDiedCode.GDYouDiedTextObjects2= [];
gdjs.YouDiedCode.GDReturnTextObjects1= [];
gdjs.YouDiedCode.GDReturnTextObjects2= [];
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


gdjs.YouDiedCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ReturnText"), gdjs.YouDiedCode.GDReturnTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouDiedLabel"), gdjs.YouDiedCode.GDYouDiedLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouDiedText"), gdjs.YouDiedCode.GDYouDiedTextObjects1);
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
{for(var i = 0, len = gdjs.YouDiedCode.GDYouDiedTextObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDYouDiedTextObjects1[i].setPosition((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.YouDiedCode.GDYouDiedTextObjects1[i].getWidth())) / 2,(gdjs.evtTools.window.getWindowInnerHeight() - (gdjs.YouDiedCode.GDYouDiedTextObjects1[i].getHeight())) / 2);
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDYouDiedLabelObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDYouDiedLabelObjects1[i].setX((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.YouDiedCode.GDYouDiedLabelObjects1[i].getWidth())) / 2);
}
}
{for(var i = 0, len = gdjs.YouDiedCode.GDReturnTextObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDReturnTextObjects1[i].setX((gdjs.evtTools.window.getWindowInnerWidth() - (gdjs.YouDiedCode.GDReturnTextObjects1[i].getWidth())) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ReturnText"), gdjs.YouDiedCode.GDReturnTextObjects1);
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
{for(var i = 0, len = gdjs.YouDiedCode.GDReturnTextObjects1.length ;i < len;++i) {
    gdjs.YouDiedCode.GDReturnTextObjects1[i].getBehavior("Opacity").setOpacity(gdjs.evtTools.common.lerp((( gdjs.YouDiedCode.GDYouDiedTextObjects1.length === 0 ) ? 0 :gdjs.YouDiedCode.GDYouDiedTextObjects1[0].getOpacity()), 255, gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 3));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WelcomeScreen", false);
}
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

gdjs.YouDiedCode.eventsList0(runtimeScene);
gdjs.YouDiedCode.GDYouDiedLabelObjects1.length = 0;
gdjs.YouDiedCode.GDYouDiedLabelObjects2.length = 0;
gdjs.YouDiedCode.GDYouDiedTextObjects1.length = 0;
gdjs.YouDiedCode.GDYouDiedTextObjects2.length = 0;
gdjs.YouDiedCode.GDReturnTextObjects1.length = 0;
gdjs.YouDiedCode.GDReturnTextObjects2.length = 0;
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


return;

}

gdjs['YouDiedCode'] = gdjs.YouDiedCode;
