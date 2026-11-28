gdjs.Map001Code = {};
gdjs.Map001Code.localVariables = [];
gdjs.Map001Code.idToCallbackMap = new Map();
gdjs.Map001Code.GDPistolBulletObjects1= [];
gdjs.Map001Code.GDPistolBulletObjects2= [];
gdjs.Map001Code.GDPistolBulletObjects3= [];
gdjs.Map001Code.GDZombieObjects1= [];
gdjs.Map001Code.GDZombieObjects2= [];
gdjs.Map001Code.GDZombieObjects3= [];
gdjs.Map001Code.GDNewSprite2Objects1= [];
gdjs.Map001Code.GDNewSprite2Objects2= [];
gdjs.Map001Code.GDNewSprite2Objects3= [];
gdjs.Map001Code.GDHPBarObjects1= [];
gdjs.Map001Code.GDHPBarObjects2= [];
gdjs.Map001Code.GDHPBarObjects3= [];
gdjs.Map001Code.GDMedicineChestObjects1= [];
gdjs.Map001Code.GDMedicineChestObjects2= [];
gdjs.Map001Code.GDMedicineChestObjects3= [];
gdjs.Map001Code.GDGlitchEventObjects1= [];
gdjs.Map001Code.GDGlitchEventObjects2= [];
gdjs.Map001Code.GDGlitchEventObjects3= [];
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
gdjs.Map001Code.GDFlashEffectObjects1= [];
gdjs.Map001Code.GDFlashEffectObjects2= [];
gdjs.Map001Code.GDFlashEffectObjects3= [];
gdjs.Map001Code.GDHandAndGunObjects1= [];
gdjs.Map001Code.GDHandAndGunObjects2= [];
gdjs.Map001Code.GDHandAndGunObjects3= [];
gdjs.Map001Code.GDAmmoHUDObjects1= [];
gdjs.Map001Code.GDAmmoHUDObjects2= [];
gdjs.Map001Code.GDAmmoHUDObjects3= [];
gdjs.Map001Code.GDReloadMessageObjects1= [];
gdjs.Map001Code.GDReloadMessageObjects2= [];
gdjs.Map001Code.GDReloadMessageObjects3= [];


gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Map001Code.GDPlayerObjects1});
gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPlayerFalledMarkerObjects1Objects = Hashtable.newFrom({"PlayerFalledMarker": gdjs.Map001Code.GDPlayerFalledMarkerObjects1});
gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Map001Code.GDPlayerObjects1});
gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.Map001Code.GDZombieObjects1});
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


};gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPistolBulletObjects1Objects = Hashtable.newFrom({"PistolBullet": gdjs.Map001Code.GDPistolBulletObjects1});
gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Map001Code.GDPlayerObjects1});
gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDMedicineChestObjects1Objects = Hashtable.newFrom({"MedicineChest": gdjs.Map001Code.GDMedicineChestObjects1});
gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Map001Code.GDPlayerObjects1});
gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDGlitchEventObjects1Objects = Hashtable.newFrom({"GlitchEvent": gdjs.Map001Code.GDGlitchEventObjects1});
gdjs.Map001Code.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Map001");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmmoHUD"), gdjs.Map001Code.GDAmmoHUDObjects1);
gdjs.copyArray(runtimeScene.getObjects("HPBar"), gdjs.Map001Code.GDHPBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("HandAndGun"), gdjs.Map001Code.GDHandAndGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}
{for(var i = 0, len = gdjs.Map001Code.GDHandAndGunObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDHandAndGunObjects1[i].getBehavior("FireBullet").SetAmmoQuantityOp(100, null);
}
}
{for(var i = 0, len = gdjs.Map001Code.GDAmmoHUDObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDAmmoHUDObjects1[i].setPosition(16,18);
}
}
{for(var i = 0, len = gdjs.Map001Code.GDHPBarObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDHPBarObjects1[i].SetValue((( gdjs.Map001Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map001Code.GDPlayerObjects1[0].getBehavior("Health").Health(null)), null);
}
}
{for(var i = 0, len = gdjs.Map001Code.GDHandAndGunObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDHandAndGunObjects1[i].getBehavior("FireBullet").SetCooldownOp(0.5, null);
}
}
{for(var i = 0, len = gdjs.Map001Code.GDHandAndGunObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDHandAndGunObjects1[i].getBehavior("FireBullet").SetRotateBullet(true, null);
}
}
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

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Map001Code.GDZombieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPlayerObjects1Objects, gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDZombieObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlashEffect"), gdjs.Map001Code.GDFlashEffectObjects1);
gdjs.copyArray(runtimeScene.getObjects("HPBar"), gdjs.Map001Code.GDHPBarObjects1);
/* Reuse gdjs.Map001Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Map001Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("Health").Hit(1, true, true, null);
}
}
{for(var i = 0, len = gdjs.Map001Code.GDHPBarObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDHPBarObjects1[i].SetValue((( gdjs.Map001Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map001Code.GDPlayerObjects1[0].getBehavior("Health").Health(null)), null);
}
}
{for(var i = 0, len = gdjs.Map001Code.GDFlashEffectObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDFlashEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("102;0;0", 0.5, "Flash", "Both", 100, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map001Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.Map001Code.GDPlayerObjects1[k] = gdjs.Map001Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Map001Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Map001Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Map001Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Dead");
}
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


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Map001Code.GDZombieObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map001Code.GDZombieObjects1.length;i<l;++i) {
    if ( gdjs.Map001Code.GDZombieObjects1[i].getX() < (( gdjs.Map001Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map001Code.GDPlayerObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Map001Code.GDZombieObjects1[k] = gdjs.Map001Code.GDZombieObjects1[i];
        ++k;
    }
}
gdjs.Map001Code.GDZombieObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Map001Code.GDZombieObjects1 */
{for(var i = 0, len = gdjs.Map001Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDZombieObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Map001Code.GDZombieObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map001Code.GDZombieObjects1.length;i<l;++i) {
    if ( gdjs.Map001Code.GDZombieObjects1[i].getX() > (( gdjs.Map001Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map001Code.GDPlayerObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Map001Code.GDZombieObjects1[k] = gdjs.Map001Code.GDZombieObjects1[i];
        ++k;
    }
}
gdjs.Map001Code.GDZombieObjects1.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Map001Code.GDZombieObjects1 */
{for(var i = 0, len = gdjs.Map001Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDZombieObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HandAndGun"), gdjs.Map001Code.GDHandAndGunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map001Code.GDHandAndGunObjects1.length;i<l;++i) {
    if ( gdjs.Map001Code.GDHandAndGunObjects1[i].getBehavior("FireBullet").AmmoQuantity(null) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Map001Code.GDHandAndGunObjects1[k] = gdjs.Map001Code.GDHandAndGunObjects1[i];
        ++k;
    }
}
gdjs.Map001Code.GDHandAndGunObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Map001Code.GDHandAndGunObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);
gdjs.Map001Code.GDPistolBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Map001Code.GDHandAndGunObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDHandAndGunObjects1[i].getBehavior("FireBullet").FireTowardPosition((( gdjs.Map001Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map001Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Map001Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map001Code.GDPlayerObjects1[0].getPointY("")) + 5, gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPistolBulletObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 700, null);
}
}
{for(var i = 0, len = gdjs.Map001Code.GDHandAndGunObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDHandAndGunObjects1[i].getBehavior("FireBullet").SetAmmoQuantityOp((gdjs.Map001Code.GDHandAndGunObjects1[i].getBehavior("FireBullet").AmmoQuantity(null)) - 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AmmoHUD"), gdjs.Map001Code.GDAmmoHUDObjects1);
gdjs.copyArray(runtimeScene.getObjects("HandAndGun"), gdjs.Map001Code.GDHandAndGunObjects1);
{for(var i = 0, len = gdjs.Map001Code.GDAmmoHUDObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDAmmoHUDObjects1[i].getBehavior("Text").setText("Ammo: " + gdjs.evtTools.common.toString((( gdjs.Map001Code.GDHandAndGunObjects1.length === 0 ) ? 0 :gdjs.Map001Code.GDHandAndGunObjects1[0].getBehavior("FireBullet").AmmoQuantity(null))));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HandAndGun"), gdjs.Map001Code.GDHandAndGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map001Code.GDHandAndGunObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDHandAndGunObjects1[i].setPosition((( gdjs.Map001Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map001Code.GDPlayerObjects1[0].getPointX("")) - 1,(( gdjs.Map001Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map001Code.GDPlayerObjects1[0].getPointY("")) + 5);
}
}
{for(var i = 0, len = gdjs.Map001Code.GDHandAndGunObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDHandAndGunObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 360, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HandAndGun"), gdjs.Map001Code.GDHandAndGunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map001Code.GDHandAndGunObjects1.length;i<l;++i) {
    if ( gdjs.Map001Code.GDHandAndGunObjects1[i].getBehavior("FireBullet").IsOutOfAmmo(null) ) {
        isConditionTrue_0 = true;
        gdjs.Map001Code.GDHandAndGunObjects1[k] = gdjs.Map001Code.GDHandAndGunObjects1[i];
        ++k;
    }
}
gdjs.Map001Code.GDHandAndGunObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedicineChest"), gdjs.Map001Code.GDMedicineChestObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPlayerObjects1Objects, gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDMedicineChestObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map001Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("Health").Health(null) < 100 ) {
        isConditionTrue_0 = true;
        gdjs.Map001Code.GDPlayerObjects1[k] = gdjs.Map001Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Map001Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlashEffect"), gdjs.Map001Code.GDFlashEffectObjects1);
gdjs.copyArray(runtimeScene.getObjects("HPBar"), gdjs.Map001Code.GDHPBarObjects1);
/* Reuse gdjs.Map001Code.GDMedicineChestObjects1 */
/* Reuse gdjs.Map001Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Map001Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDPlayerObjects1[i].getBehavior("Health").Heal(10, null);
}
}
{for(var i = 0, len = gdjs.Map001Code.GDHPBarObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDHPBarObjects1[i].SetValue((( gdjs.Map001Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map001Code.GDPlayerObjects1[0].getBehavior("Health").Health(null)), null);
}
}
{for(var i = 0, len = gdjs.Map001Code.GDFlashEffectObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDFlashEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;102;20", 0.5, "Flash", "Both", 100, null);
}
}
{for(var i = 0, len = gdjs.Map001Code.GDMedicineChestObjects1.length ;i < len;++i) {
    gdjs.Map001Code.GDMedicineChestObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GlitchEvent"), gdjs.Map001Code.GDGlitchEventObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map001Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDPlayerObjects1Objects, gdjs.Map001Code.mapOfGDgdjs_9546Map001Code_9546GDGlitchEventObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
}

}

}

};

gdjs.Map001Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Map001Code.GDPistolBulletObjects1.length = 0;
gdjs.Map001Code.GDPistolBulletObjects2.length = 0;
gdjs.Map001Code.GDPistolBulletObjects3.length = 0;
gdjs.Map001Code.GDZombieObjects1.length = 0;
gdjs.Map001Code.GDZombieObjects2.length = 0;
gdjs.Map001Code.GDZombieObjects3.length = 0;
gdjs.Map001Code.GDNewSprite2Objects1.length = 0;
gdjs.Map001Code.GDNewSprite2Objects2.length = 0;
gdjs.Map001Code.GDNewSprite2Objects3.length = 0;
gdjs.Map001Code.GDHPBarObjects1.length = 0;
gdjs.Map001Code.GDHPBarObjects2.length = 0;
gdjs.Map001Code.GDHPBarObjects3.length = 0;
gdjs.Map001Code.GDMedicineChestObjects1.length = 0;
gdjs.Map001Code.GDMedicineChestObjects2.length = 0;
gdjs.Map001Code.GDMedicineChestObjects3.length = 0;
gdjs.Map001Code.GDGlitchEventObjects1.length = 0;
gdjs.Map001Code.GDGlitchEventObjects2.length = 0;
gdjs.Map001Code.GDGlitchEventObjects3.length = 0;
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
gdjs.Map001Code.GDFlashEffectObjects1.length = 0;
gdjs.Map001Code.GDFlashEffectObjects2.length = 0;
gdjs.Map001Code.GDFlashEffectObjects3.length = 0;
gdjs.Map001Code.GDHandAndGunObjects1.length = 0;
gdjs.Map001Code.GDHandAndGunObjects2.length = 0;
gdjs.Map001Code.GDHandAndGunObjects3.length = 0;
gdjs.Map001Code.GDAmmoHUDObjects1.length = 0;
gdjs.Map001Code.GDAmmoHUDObjects2.length = 0;
gdjs.Map001Code.GDAmmoHUDObjects3.length = 0;
gdjs.Map001Code.GDReloadMessageObjects1.length = 0;
gdjs.Map001Code.GDReloadMessageObjects2.length = 0;
gdjs.Map001Code.GDReloadMessageObjects3.length = 0;

gdjs.Map001Code.eventsList1(runtimeScene);
gdjs.Map001Code.GDPistolBulletObjects1.length = 0;
gdjs.Map001Code.GDPistolBulletObjects2.length = 0;
gdjs.Map001Code.GDPistolBulletObjects3.length = 0;
gdjs.Map001Code.GDZombieObjects1.length = 0;
gdjs.Map001Code.GDZombieObjects2.length = 0;
gdjs.Map001Code.GDZombieObjects3.length = 0;
gdjs.Map001Code.GDNewSprite2Objects1.length = 0;
gdjs.Map001Code.GDNewSprite2Objects2.length = 0;
gdjs.Map001Code.GDNewSprite2Objects3.length = 0;
gdjs.Map001Code.GDHPBarObjects1.length = 0;
gdjs.Map001Code.GDHPBarObjects2.length = 0;
gdjs.Map001Code.GDHPBarObjects3.length = 0;
gdjs.Map001Code.GDMedicineChestObjects1.length = 0;
gdjs.Map001Code.GDMedicineChestObjects2.length = 0;
gdjs.Map001Code.GDMedicineChestObjects3.length = 0;
gdjs.Map001Code.GDGlitchEventObjects1.length = 0;
gdjs.Map001Code.GDGlitchEventObjects2.length = 0;
gdjs.Map001Code.GDGlitchEventObjects3.length = 0;
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
gdjs.Map001Code.GDFlashEffectObjects1.length = 0;
gdjs.Map001Code.GDFlashEffectObjects2.length = 0;
gdjs.Map001Code.GDFlashEffectObjects3.length = 0;
gdjs.Map001Code.GDHandAndGunObjects1.length = 0;
gdjs.Map001Code.GDHandAndGunObjects2.length = 0;
gdjs.Map001Code.GDHandAndGunObjects3.length = 0;
gdjs.Map001Code.GDAmmoHUDObjects1.length = 0;
gdjs.Map001Code.GDAmmoHUDObjects2.length = 0;
gdjs.Map001Code.GDAmmoHUDObjects3.length = 0;
gdjs.Map001Code.GDReloadMessageObjects1.length = 0;
gdjs.Map001Code.GDReloadMessageObjects2.length = 0;
gdjs.Map001Code.GDReloadMessageObjects3.length = 0;


return;

}

gdjs['Map001Code'] = gdjs.Map001Code;
