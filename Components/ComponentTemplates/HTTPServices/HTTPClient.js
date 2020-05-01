

//This class will be responsible for processing data sent from the server
//to the client. This class will be part of the playback's component state.
//
class HTTPServiceClient {
    constructor(setStateReference,placeholderForOtheArguments){
        //this.setState holds a reference to the state object
        this.setState = setStateReference
        this.StateStore = {} 
    }

    registerUrlStateObject(url,state) {
        this.urlStateStore 
    }

    updateState(url,stateObject){

    }

    getUrlStateObject(url){

    }

}

export default HTTPServiceClient;