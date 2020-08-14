import React, { useState, useEffect } from 'react';
import { contact } from 'components/images';

import axios from 'axios';

import { NotificationManager } from 'react-notifications';

function ContactPage() {
    const [contacts, setContact] = useState({});

    useEffect(() => {
        apiInit()
    }, [])

    const apiInit = () => {
        axios.get("/ss/contactDetails")
            .then(res => {
                const { result } = res.data
                if (result[0] !== undefined && result[0] !== null) {
                    setContact({
                        "email": result[0].mobile,
                        "mobile": result[0].mobile,
                        "phone": result[0].phone,
                        "address": result[0].address,
                    })
                }
            })
    }

    const handleChange = e => {
        setContact({ ...contacts, [e.target.name]: e.target.value })
    }

    const submitData = (event) => {
        axios.post("/ss/contactNewDetails", contacts)
            .then(res => {
                NotificationManager.success('SuccessFully Contact Updated', ' ');
                apiInit()
            })
    }
    return (
        <>
            <div>
                <div className="container mt-3" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}><img src={contact} alt='' width={50} /> Contact </h2>
                </div>
                <div className="container col-sm-8">
                    <div className="mt-3 mb-5">
                        <div className="form-group p-4 shadow-sm" style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.35)', background: '#c00000', borderRadius: 6 }}>
                            <div className="row">
                                <label className="col-sm-2 col-form-label text-white">Email</label>
                                <div className="col">
                                    <input className="form-control" type="email" value={contacts.email} onChange = {handleChange} name="email" required />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <label className="col-sm-2 col-form-label text-white">Mobile</label>
                                <div className="col">
                                    <input className="form-control" type="text" value={contacts.mobile} onChange = {handleChange} name="mobile" required />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <label className="col-sm-2 col-form-label text-white">Phone</label>
                                <div className="col">
                                    <input className="form-control" type="text" value={contacts.phone} onChange = {handleChange} name="phone" required />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <label className="col-sm-2 col-form-label text-white">Address</label>
                                <div className="col">
                                    <textarea className="form-control" rows={5} type="text" value={contacts.address} onChange = {handleChange}  name="address" required defaultValue={""} />
                                </div>
                            </div>
                            <br />
                        </div>
                        <div className="row justify-content-center">
                            <button type="submit" onClick ={submitData} className="btn-update">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ContactPage