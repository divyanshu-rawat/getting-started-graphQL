import React from 'react';
import { Query } from "react-apollo";
import Course from './Course';
import gql from "graphql-tag";


// The Query component makes it extremely easy to embed the GraphQL query directly in the JSX code of the component. 
// Furthermore the Query component contains a callback method which is invoked once the GraphQL query is executed.

const Courses = () => (
  <Query
    query={gql`
      {
        allCourses {
          id
          title
          author
          description
          topic
          url
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
    
        return data.allCourses.map((currentCourse) => (
            <Course course={currentCourse} />
        ));
    }}
  </Query>
);

export default Courses;