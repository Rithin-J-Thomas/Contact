import React from 'react'
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


function Home() {
    const tooltip_loc = <Tooltip id="tooltip">
                        <strong>Location</strong>
                        </Tooltip>

        const tooltip_mob = <Tooltip id="tooltip">
                            <strong>Mobile Number</strong>
                            </Tooltip>

        const tooltip_email= <Tooltip id="tooltip">
                            <strong>Email</strong>
                            </Tooltip>

    const [contacts, setContacts] = useState([])
    const fetchData = async () => {
        const result = await axios.get('/db.json')
        setContacts(result.data.contacts);
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(contacts);




    return (
        <div className='Home'>
            {
                contacts.map(i => (
                    <Card style={{ width: '18rem' }} className='cards mx-3 my-5'>
                        <Card.Img variant="top" src={i.profile} />
                        <Card.Body>
                            <Card.Title>    <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{i.name}</Accordion.Header>
                                    <Accordion.Body className='text-center'>

                                    <OverlayTrigger placement="right" overlay={tooltip_email}>
                                            <p>{i.email}</p>
                                            </OverlayTrigger>
                                        <hr />

                                        <OverlayTrigger placement="right" overlay={tooltip_mob}>
                                            <p>{i.mobile}</p>
                                            </OverlayTrigger>
                                        <hr />

                                        <OverlayTrigger placement="right" overlay={tooltip_loc}>
                                            <p>{i.location}</p>
                                        </OverlayTrigger>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            </Card.Title>

                        </Card.Body>
                    </Card>


                ))


                //     <p></p>   
                //  <p></p>
                // <p> </p>

            }
        </div>
    )
}

export default Home







