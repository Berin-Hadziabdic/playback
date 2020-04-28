import React from 'react';
import './GenericStyles.css';
import GenericButton from './GenericButton.js';

function JobListing(props)
{
return (
         <section className={props.classNameJobListing||"row row-align-center"}>
             <div className={props.classNameJobListingText || "col-4"}> {props.data}</div>
             <div className={props.classNameJobListingText || "col-4"}>{props.data}</div>
             <div className={props.clasNameJobListingButtonWrapper || "col-4 row row-align-end"}>
                 <GenericButton className="col align-self-end"value="Button One" onClick = {function(){}}/>
                 <GenericButton className="col align-self-end" value="Button Two" onClick = {function(){}}/>
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