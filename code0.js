gdjs.Map001Code = {};
gdjs.Map001Code.localVariables = [];
gdjs.Map001Code.idToCallbackMap = new Map();
gdjs.Map001Code.GDNewSpriteObjects1= [];
gdjs.Map001Code.GDNewSpriteObjects2= [];
gdjs.Map001Code.GDNewSpriteObjects3= [];
gdjs.Map001Code.GDPlayerObjects1= [];
gdjs.Map001Code.GDPlayerObjects2= [];
gdjs.Map001Code.GDPlayerObjects3= [];
gdjs.Map001Code.GDPlayerFalledMarkerObjects1= [];
gdjs.Map001Code.GDPlayerFalledMarkerObjects2= [];
gdjs.Map001Code.GDPlayerFalledMarkerObjects3= [];
gdjs.Map001Code.GDMapObjects1= [];
gdjs.Map001Code.GDMapObjects2= [];
gdjs.Map001Code.GDMapObjects3= [];
gdjs.Map001Code.GDParallaxObjects1= [];
gdjs.Map001Code.GDParallaxObjects2= [];
gdjs.Map001Code.GDParallaxObjects3= [];
gdjs.Map001Code.GDBackgroundMapObjects1= [];
gdjs.Map001Code.GDBackgroundMapObjects2= [];
gdjs.Map001Code.GDBackgroundMapObjects3= [];
gdjs.Map001Code.GDCursorObjects1= [];
gdjs.Map001Code.GDCursorObjects2= [];
gdjs.Map001Code.GDCursorObjects3= [];


gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Map001Code.GDPlayerObjects1});
gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPlayerFalledMarkerObjects1Objects = Hashtable.newFrom({"PlayerFalledMarker": gdjs.Map001Code.GDPlayerFalledMarkerObjects1});
gdjs.Map001Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Map001Code.GDPlayerObjects1, gdjs.Map001Code.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map001Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Map001Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Map001Code.GDPlayerObjects2[k] = gdjs.Map001Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Map001Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Map001Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Map001Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Map001Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Running");
}
}
}

}


{

/* Reuse gdjs.Map001Code.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map001Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Map001Code.GDPlayerObjects1[k] = gdjs.Map001Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Map001Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Map001Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Map001Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.Map001Code.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerFalledMarker"), gdjs.Map001Code.GDPlayerFalledMarkerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPlayerObjects1Objects, gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPlayerFalledMarkerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "YouDied", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerFalledMarker"), gdjs.Map001Code.GDPlayerFalledMarkerObjects1);
{for(var i = 0, len = gdjs.Map001Code.GDPlayerFalledMarkerObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDPlayerFalledMarkerObjects1[i].setCenterXInScene((( gdjs.Map001Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map001Code.GDPlayerObjects1[0].getCenterXInScene()));
}
}
{for(var i = 0, len = gdjs.Map001Code.GDPlayerFalledMarkerObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDPlayerFalledMarkerObjects1[i].setCenterYInScene(1025);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) + 1, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, "", 0) - 1, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map001Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Map001Code.GDPlayerObjects1[k] = gdjs.Map001Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Map001Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Map001Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Map001Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jumping");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map001Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Map001Code.GDPlayerObjects1[k] = gdjs.Map001Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Map001Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Map001Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map001Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map001Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map001Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(200);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map001Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(100);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.Map001Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Map001Code.GDNewSpriteObjects1.length = 0;
gdjs.Map001Code.GDNewSpriteObjects2.length = 0;
gdjs.Map001Code.GDNewSpriteObjects3.length = 0;
gdjs.Map001Code.GDPlayerObjects1.length = 0;
gdjs.Map001Code.GDPlayerObjects2.length = 0;
gdjs.Map001Code.GDPlayerObjects3.length = 0;
gdjs.Map001Code.GDPlayerFalledMarkerObjects1.length = 0;
gdjs.Map001Code.GDPlayerFalledMarkerObjects2.length = 0;
gdjs.Map001Code.GDPlayerFalledMarkerObjects3.length = 0;
gdjs.Map001Code.GDMapObjects1.length = 0;
gdjs.Map001Code.GDMapObjects2.length = 0;
gdjs.Map001Code.GDMapObjects3.length = 0;
gdjs.Map001Code.GDParallaxObjects1.length = 0;
gdjs.Map001Code.GDParallaxObjects2.length = 0;
gdjs.Map001Code.GDParallaxObjects3.length = 0;
gdjs.Map001Code.GDBackgroundMapObjects1.length = 0;
gdjs.Map001Code.GDBackgroundMapObjects2.length = 0;
gdjs.Map001Code.GDBackgroundMapObjects3.length = 0;
gdjs.Map001Code.GDCursorObjects1.length = 0;
gdjs.Map001Code.GDCursorObjects2.length = 0;
gdjs.Map001Code.GDCursorObjects3.length = 0;

gdjs.Map001Code.eventsList1(runtimeScene);
gdjs.Map001Code.GDNewSpriteObjects1.length = 0;
gdjs.Map001Code.GDNewSpriteObjects2.length = 0;
gdjs.Map001Code.GDNewSpriteObjects3.length = 0;
gdjs.Map001Code.GDPlayerObjects1.length = 0;
gdjs.Map001Code.GDPlayerObjects2.length = 0;
gdjs.Map001Code.GDPlayerObjects3.length = 0;
gdjs.Map001Code.GDPlayerFalledMarkerObjects1.length = 0;
gdjs.Map001Code.GDPlayerFalledMarkerObjects2.length = 0;
gdjs.Map001Code.GDPlayerFalledMarkerObjects3.length = 0;
gdjs.Map001Code.GDMapObjects1.length = 0;
gdjs.Map001Code.GDMapObjects2.length = 0;
gdjs.Map001Code.GDMapObjects3.length = 0;
gdjs.Map001Code.GDParallaxObjects1.length = 0;
gdjs.Map001Code.GDParallaxObjects2.length = 0;
gdjs.Map001Code.GDParallaxObjects3.length = 0;
gdjs.Map001Code.GDBackgroundMapObjects1.length = 0;
gdjs.Map001Code.GDBackgroundMapObjects2.length = 0;
gdjs.Map001Code.GDBackgroundMapObjects3.length = 0;
gdjs.Map001Code.GDCursorObjects1.length = 0;
gdjs.Map001Code.GDCursorObjects2.length = 0;
gdjs.Map001Code.GDCursorObjects3.length = 0;


return;

}

gdjs['Map001Code'] = gdjs.Map001Code;
