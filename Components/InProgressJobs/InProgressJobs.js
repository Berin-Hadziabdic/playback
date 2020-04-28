import React from 'react';
import GenericHeading from "../GenericComponents/GenericHeading";
import JobListings from "../GenericComponents/JobListingsModule"
// This component might be redunant since it is virtually identical to Completed Jobs.
// I expect InProgressJobs to be slighly different in composoitojn than Completed JObs,
// so I made this component in anticipation.

class InProgressJobs extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        var jobs = ["X1344fesset","jTytul","144lkonj", "tuPIhnohb69","X1344fesset","jTytul","144lkonj", "tuPIhnohb69" ,"X1344fesset","jTytul","144lkonj", "tuPIhnohb69"]
        return (
        <React.Fragment>
                  <React.Fragment>   
                 <GenericHeading value="InProgress-Jobs"/>
                 <JobListings jobs={jobs}/> );
             </React.Fragment>  
            );
        </React.Fragment>)
    }
}

export default InProgressJobs;