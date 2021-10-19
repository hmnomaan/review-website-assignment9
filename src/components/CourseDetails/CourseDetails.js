import React from 'react';
import { useParams } from 'react-router';

const CourseDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h3>Course ID: {id}</h3><br /><br />
            <div >
                <h3>Details coming Soon.</h3>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default CourseDetails;