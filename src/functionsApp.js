import {httpResponse} from "./httpResponse";

//GET data from sending an HTTP request to url
export function getData(url) {
    // create a new XMLHttpRequest
    var http = new XMLHttpRequest()

    // get a callback when the server responds
    http.onload = () => {
        console.log(http.responseXML.title);
    };
    // open the request with the verb and the url
    http.open('GET', url)
    // send the request
    http.send()
}

//Fuction that finds the credit notes associated with a selected invoice
export function filterCreditNotes(creditNotes,id){
    return creditNotes.filter( credit => credit["reference"] === id)
}

//Filter data given by request with type = "received"
export const allInvoices = httpResponse.filter(dat => dat["type"] === "received");

//Filter data given by request by type = "
export const allCreditNotes = httpResponse.filter(dat => dat["type"] === "credit_note");