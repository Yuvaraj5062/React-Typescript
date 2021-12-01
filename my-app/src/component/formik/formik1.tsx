/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import { useFormik } from 'formik';

interface Fileds {
    name: string
    email: string
    channel: string
}
const initialValues ={
    name:'',
    email:'',
    channel:''
}


const Formik1 = () => {
        const formik = useFormik({
            initialValues,
            onSubmit:(values: Fileds)=>{
                console.log("done",values)
            },
            validate: (values: Fileds)=>{
                let errors ={
                    name:'', 
                    email:'',
                    channel:''
                }
                if(!values.name){
                    errors.name="Required"
                }
                if(!formik.values.email){
                    errors.email="Required"
                }
                if(!formik.values.channel){
                    errors.channel="Required"
                }
                return errors
            }
        })
         if(!formik.values){console.log('form val',formik.values)}
         //else{console.log('form val',formik.values)}
        
   //   console.log('form val',formik.errors)
//  console.log('form val',formik.touched)
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'> Name </label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}
            onBlur={formik.handleBlur}/>
            {formik.touched.name && formik.errors.name?<div>{formik.errors.name}</div>:null}
            <label htmlFor='email'> email </label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}
            onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email?<div>{formik.errors.email}</div>:null}
            <label htmlFor='channel'> channel </label>
            <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}
            onBlur={formik.handleBlur}/>
            {formik.touched.channel && formik.errors.channel?<div>{formik.errors.channel}</div>:null}
            <button type='submit'>submit</button>
        </form>
   
    
    </div>
  );
}

export default Formik1; 
