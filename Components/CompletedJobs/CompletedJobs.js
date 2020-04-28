import React from 'react';
import './CompletedJobsStyle.css'
import GenericHeading from '../GenericComponents/GenericHeading';
import JobListings    from '../GenericComponents/JobListingsModule'

function CompletedJobs(props){
    return (    
             <React.Fragment>   
                 <GenericHeading value="Finished-Jobs"/>
                 <JobListings jobs={["X1344fesset","jTytul","144lkonj", "tuPIhnohb69"]}/> );
             </React.Fragment>  
            );
}


export default CompletedJobs;