import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = (props) => {
    const { id, name, image, description, price, origin, instructor } = props.course;
    return (

        < div >


            <div className=" img-fluid card text-white bg-dark mb-3 m-2" >
                <img src={image} alt="" />
                <div className="card-body">
                    <h4 className="card-title">Course Name: {name}</h4>
                    <p className="card-text">Description:<small> {description.slice(0, 133)}</small></p>
                    <p>Price: ${price}</p>
                    <p>Instructor: {instructor}</p>
                    <small>Origin: {origin}</small>
                </div>
                <div>
                    <button className="btn-primary m-2 card-footer">Enroll Now</button> <button className="btn-primary m-2 card-footer "><Link to={`/course/${id}`} className="text-white decoration">View Details</Link></button>
                </div>

            </div>
        </div>
    );
};

export default Course;