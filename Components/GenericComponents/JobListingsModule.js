import React from 'react';
import './GenericStyles.css';
import GenericButton from './GenericButton.js';

function JobListing(props)
{
return (
         <section className={props.classNameJobListing||"job-listing"}>
             <div className={props.classNameJobListingText || "job-listing-text"}> {props.data}</div>
             <div className={props.classNameJobListingText || "job-listing-text"}>{props.data}</div>
             <div className={props.clasNameJobListingButtonWrapper || "job-listing-button-wrapper"}>
                 <GenericButton value="Button One" onClick = {function(){}}/>
                 <GenericButton value="Button Two" onClick = {function(){}}/>
             </div>
         </section>
        );
}

class JobListings extends React.Component
 {

    constructor(props)
    {
        super(props)
    }

    render()
    {

      var listings = this.props.jobs.map((listing) => <JobListing key="placeholder" data={listing}/>);
       
      return (
       <section className="placeholder">
            {listings}
       </section>
        );
    }
}

export default JobListings;