/**
 * http_request.js
 * @NApiVersion 2.1
 */
define(['N/https', 'N/log'],

    (https, log) => {

    const sendToNodeServer = (updatedRecord) => { 
        try {
            var header=[];
            header['Content-Type']='application/json';
            var apiURL='https://integration.motiontms.com/int/customer/netsuite/';

            let response = https.post({
                url: apiURL,
                headers: header,
                body: {updatedRecord}
            });

            log.debug({
                title: 'response JSON', 
                details: JSON.stringify(response)
            });

        } catch(error){
            log.error('ERROR',JSON.stringify(error));
        }

    }
   
    return {sendToNodeServer}
});