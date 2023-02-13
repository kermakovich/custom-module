/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['./core', './https_request'],
    
    (core, https) => {

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {
            if (scriptContext.type === scriptContext.UserEventType.EDIT) {
                var updatedRecord = core.generateRecord(scriptContext);
                https.sendToNodeServer(updatedRecord);
            }
        }

        return {afterSubmit}
    });