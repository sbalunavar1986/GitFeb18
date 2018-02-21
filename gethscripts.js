// connect to ethereum via geth
// nany errors show to the user
// if connected display status
function connect() {

    

    if (!window.web3){
        var url = 
    "http://" + getTextfromHTMLControl("ip")+":"+ getTextfromHTMLControl("port");
        window.web3 = new Web3(Web3.providers.HttpProvider(url));
    }
    
    var Status = "IsConnected : " + window.web3.isConnected();
    document.getElementById('Status').innerHTML = Status;
    console.log(window.web3.isConnected());
     console.log(window.web3.version.api);

}

function getTextfromHTMLControl(id){

    return document.getElementById(id).value;
}

function getPeerCount(){
    web3.net.getPeerCount(
        function (error,result){
            if (error){
                console.log("Error is" + error);
            }
            else{
                console.log("Result is "+ result)
            }
        }
    );
}

function IsSyncing(){
    web3.eth.getSyncing(
        function (error,result){
            if (error){
                console.log("Error is" + error);
            }
            else{
                console.log("Result is "+ result)
            }     
        }
    );
}