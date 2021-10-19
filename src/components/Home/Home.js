import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Course from '../Course/Course';
import useCourses from '../useCourses/useCourses';
import './Home.css'
import Bg from './../../bg-image.jpg'
const Home = () => {

    const history = useHistory();
    const [courses] = useCourses();
    const featureCourses = courses.slice(0, 6);
    function GoServices() {
        history.push("/courses");
    };
    return (
        <div>

            <div>
                <div style={{
                    background: `url(${Bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}>
                    <Container>
                        <div
                            style={{ height: "90vh" }}
                            className="d-flex justify-content-center align-items-center"
                        ><br />

                            <br />
                            <div className="text-center mt-5 my-5 py-5">
                                <h1 className=" rounded  bg-white">
                                    Learn to be defensive, protective and creative</h1>
                                <p className="my-4 rounded-pill   bg-white fs-5">
                                    Learn exciting techniques , martial arts and more
                                </p>
                                <Button
                                    onClick={GoServices}
                                    className="rounded-pill  fs-5 py-2 px-4 bg-primary text-white"
                                    variant="primary"
                                >
                                    View Courses
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
                <div >
                    <Container className="py-5">
                        <h2 className="text-center mb-2">Featured Courses</h2>
                        <p className=" text-center">
                            Here you can find our all latest courses. Choose some of them and
                            try to grow up your skills.
                        </p>
                        <Row className="feature-courses ">
                            {featureCourses?.map((course) => (
                                <Course
                                    course={course}
                                    key={course.key}></Course>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>

        </div>
    );
};

export default Home;