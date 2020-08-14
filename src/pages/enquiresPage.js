import React, { useState, useEffect } from 'react';
import { mail } from 'components/images';

import axios from 'axios';

import moment from 'moment';

//import { NotificationManager } from 'react-notifications';

function EnquiresPage() {
    const [values, setValues] = useState({});

    useEffect(() => {
        apiInit()
    }, [])

    const apiInit = () => {
        axios.get("/ss/messageDetails")
            .then(res => {
                const { result } = res.data
                console.log(result)
                setValues(result)
            })
    }
    const ViewData = data => {
        data.is_read = 1
        axios.post("/ss/messageNewDetails", data)
            .then(res => {
                apiInit()
            })
    }

    return (
        <>
            <div>
                <div className="container mt-3" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}><img src={mail} alt='' width={50} /> Enquires </h2>
                </div>
                <div className="container col-sm-8">
                    <div className="mt-3 mb-5">
                        {values.length > 0 ? values.map(msg => {
                            if (msg.is_read === 0) {
                                return (
                                    <div className="p-4" style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.75)', background: '#c00000', borderRadius: 6 }}>
                                        <label onClick={() => ViewData(msg)} className="col col-form-label text-white">New Message - {moment(msg.created_at).format("MM-DD-YYYY HH:mm:ss")}</label>
                                    </div>
                                )
                            }
                            else {
                                return (<div className=" p-4" style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.75)', background: '#7f7f7f', borderRadius: 6 }}>
                                    <label className="col col-form-label text-white"> Name - {msg.name}         -  {moment(msg.created_at).format("MM/DD/YYYY HH:mm:ss")} <br/><br/>
                                        Phone - {msg.phone}<br/><br/>
                                       Message -  {msg.message}
                                    </label>
                                </div>
                                )
                            }

                        }) : ''}
                    </div>
                </div>
            </div>

        </>
    )
}
export default EnquiresPage