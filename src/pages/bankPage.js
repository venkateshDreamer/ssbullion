import React,{useState,useEffect}from 'react'
import { bank } from 'components/images'
import axios from 'axios'
import {NotificationManager} from 'react-notifications';

 function BankPage() {

    const [bank, setBank] = useState({ });

    useEffect (()=> {
       apiInit()
    },[])

    const apiInit =() => {
        axios.get("/ss/bankDetails")
        .then(res => {
            const {result} = res.data
            console.log(result)
            if(result[0] !== undefined && result[0] !==null ){
                setBank({
                    "Company":result[0].Company ,
                    "Bank":result[0].Bank  ,
                    "Account":result[0].Account,
                    "IFSC":result[0].IFSC  , 
                    "Swift_Code":result[0].Swift_Code,
                    "Branch":result[0].Branch,
                    "Country":result[0].Country,
                })
            }
        })
    }

    const handleChange = e => {
        setBank({ ...bank,  [e.target.name]: e.target.value })
    }

    const submitData = (event) => {
        axios.post("/ss/bankNewDetails", bank)
        .then(res => {
            NotificationManager.success('SuccessFully Bank Updated', ' ');
            apiInit()
        })
    }
    return (
        
        <>
        <div className="container mt-3">
            <div className="row justify-content-center">
                <img src={bank} width={50} alt='' />
                <h2 style={{ margin: '6px 10px' }}> Bank Details </h2>
            </div>
        </div>

        <div className="container col-sm-8">
            <div className="mt-3 mb-5">
                <div className="form-group p-4 shadow-sm" style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.35)', background: '#c00000', borderRadius: 6 }}>
                    <div className="row">
                        <label className="col-sm-2 col-form-label text-white">Company</label>
                        <div className="col">
                            <input className="form-control" type="text" onChange={handleChange} value={bank.Company} name="Company" required />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <label className="col-sm-2 col-form-label text-white">Bank</label>
                        <div className="col">
                            <input className="form-control" type="text" onChange={handleChange} value={bank.Bank} name="Bank" required />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <label className="col-sm-2 col-form-label text-white">A/C No</label>
                        <div className="col">
                            <input className="form-control" type="text" onChange={handleChange} value={bank.Account}  name="Account" required />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <label className="col-sm-2 col-form-label text-white">IFSC</label>
                        <div className="col">
                            <input className="form-control" type="text"  onChange={handleChange} name="IFSC" value={bank.IFSC} required />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <label className="col-sm-2 col-form-label text-white">Swift Code</label>
                        <div className="col">
                            <input className="form-control" type="text"  onChange={handleChange} value={bank.Swift_Code} name="Swift_Code" required />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <label className="col-sm-2 col-form-label text-white">Branch</label>
                        <div className="col">
                            <input className="form-control" type="text"  onChange={handleChange} value={bank.Branch} name="Branch" required />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <label className="col-sm-2 col-form-label text-white">Country</label>
                        <div className="col">
                            <input className="form-control" type="text"  onChange={handleChange} value={bank.Country} name="Country" required />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button type="submit" onClick={submitData} className="btn-update">Update</button>
                </div>
            </div>
        </div>
        </>

    )
}
export default BankPage