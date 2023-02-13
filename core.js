/**
 * core.js
 * @NApiVersion 2.1
 */
define(['N/log'],

    (log) => {
    
    const generateRecord = (scriptContext) => { 
        //todo matching old and new records
        var newCustomRecord = scriptContext.newRecord.fields; 
        var oldCustomRecord = scriptContext.oldRecord.fields; 

        log.debug({
            title: 'newRecord JSON', 
            details: JSON.stringify(newCustomRecord)
        });

        log.debug({
            title: 'oldRecord JSON', 
            details: JSON.stringify(oldCustomRecord)
        });

         return newCustomRecord;
    }
   
    return {generateRecord} 
});