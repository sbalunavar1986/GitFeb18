'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.qt.hyperledger.namespace.vegetable} vegetabletracker
 * @transaction
 */
function onSellVegetable(myvegetable) {
    var assetRegistry;
    var Vegid=myvegetable.vegetable.assetId;
    return getAssetRegistry('org.qt.hyperledger.namespace.vegetable')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(Vegid);
        })
        .then(function(vegetable) {
            vegetable.Owner = myvegetable.buyer;
            return assetRegistry.update(vegetable);
        });
}