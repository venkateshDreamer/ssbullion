import React,{useState,useEffect}from 'react'
import { gold } from 'components/images'
import axios from 'axios'
import {NotificationManager} from 'react-notifications';
function GoldPage() {
    const [price, setprice] = useState({ });

    useEffect (()=> {
       apiInit()
    },[])
    const apiInit =() => {
        axios.get("/ss/priceDetails")
        .then(res => {
            const {result} = res.data
            if(result[0] !== undefined && result[0] !==null ){
                setprice({
                    "rtgsbuy9999":result[0].rtgsbuy9999 || 0,
                    "retail_buy9999":result[0].retail_buy9999 || 0 ,
                    "rtgs_buy999":result[0].rtgs_buy999 || 0 ,
                    "retail_buy999":result[0].retail_buy999 || 0 , 
                    "rtgs_buy9950":result[0].rtgs_buy9950 || 0,
                    "retail_buy9950":result[0].retail_buy9950 || 0,
                })
            }
        })
    }

    const handleChange = e => {
        setprice({ ...price,  [e.target.name]: e.target.value })
    }

    const submitData = (event) => {
        axios.post("/ss/priceNewDetails", price)
        .then(res => {
            NotificationManager.success('SuccessFully Price Updated', ' ');
        })
    }

    return (
        <>
            <div className="container mt-3" style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '1rem' }}><img src={gold} width={50} alt=''/> Gold Rates</h2>
            </div>
            <div className="container col-sm-8">
                <div className="mt-3 mb-5 " >
                    <div className="form-group mb-3 p-2 bg-white shadow-lg" style={{ borderRadius: 6 }}>
                        <label className="col-sm-4 col-form-label">
                            <h2>Gold</h2>
                        </label>
                        <label className="col-sm-5 col-form-label">
                            <h2>Sell</h2>
                        </label>
                    </div>
                    <div className="form-group p-4" style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.75)', background: '#C00000', borderRadius: 6 }}>
                        <div className="row">
                            <label className="col-sm-2 col-form-label text-white"  htmlFor="9999_rtgs">9999 (RTGS)</label>
                            <div className="col">
                                <input className="form-control" type="text" name="rtgsbuy9999" onChange={handleChange} value={price.rtgsbuy9999}  required />
                            </div>
                        </div><br />
                        <div className="row">
                            <label className="col-sm-2 col-form-label text-white" htmlFor="9999_retail">9999 (Retail)</label>
                            <div className="col">
                                <input className="form-control" type="text" name="retail_buy9999" onChange={handleChange} value={price.retail_buy9999} required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group p-4 " style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.75)', background: '#C00000', borderRadius: 6 }}>
                        <div className="row">
                            <label className="col-sm-2 col-form-label text-white" htmlFor="999_rtgs">999 (RTGS)</label>
                            <div className="col">
                                <input className="form-control" type="text" name="rtgs_buy999"  onChange={handleChange} value={price.rtgs_buy999}  required />
                            </div>
                            
                        </div><br />
                        <div className="row">
                            <label className="col-sm-2 col-form-label text-white" htmlFor="999_retail">999 (Retail)</label>
                            <div className="col">
                                <input className="form-control" type="text" name="retail_buy999" onChange={handleChange} value={price.retail_buy999} required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group p-4" style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.75)', background: '#C00000', borderRadius: 6 }}>
                        <div className="row">
                            <label className="col-sm-2 col-form-label text-white" htmlFor="9950_rtgs">9950 (RTGS)</label>
                            <div className="col">
                                <input className="form-control" type="text" name="rtgs_buy9950" onChange={handleChange} value={price.rtgs_buy9950}  required />
                            </div>
                            
                        </div><br />
                        <div className="row">
                            <label className="col-sm-2 col-form-label text-white" htmlFor="9950_retail">9950 (Retail)</label>
                            <div className="col">
                                <input className="form-control" type="text" name="retail_buy9950"  onChange={handleChange} value={price.retail_buy9950 } required />
                            </div>
                        </div>
                    </div><br />
                    <div className="row justify-content-center">
                        <button className="btn-update" onClick ={submitData}>submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoldPage