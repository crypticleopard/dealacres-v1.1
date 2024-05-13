'use client'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Button, Checkbox, Grid, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function InstantLoanForm({
  onNext
}) {

  const params = useSearchParams()
 
  

  const [tcChecked, setTcChecked] = useState(false)



  const { register, handleSubmit,setValue, getValues, formState: { errors } } = useForm({
    defaultValues: {
      tenure: '1',
      age: '1'
    }
  });
  const onSubmit = (data) => {
    console.log(data);
    onNext('detailsModal', data);
  }

  useEffect(() => {
   


  }, [])

  useLayoutEffect(() => {
    if(params.get('amount')){
      setValue('amount', params.get('amount'))
    }
    
    if(params.get('tenure')){
      console.log(params.get('tenure'))
      setValue('tenure', params.get('tenure'))

    }

   
  }, [])

  // console.log(getValues('tenure'))
  return (

    <div>

      <h1 className='text-center text-4xl text-blue-500 font-bold'>
        Get Instant Loan
      </h1>
      <form className='py-4' >

        <p className='py-2'>
          We just need a few details to match you with right home loan product.
        </p>
        <Stack spacing={2} justifyContent={"center"} alignItems={"center"} >
          <Grid container spacing={2} >

            <Grid item md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount">Loan Amount</InputLabel>
                <OutlinedInput
                  {...register('amount', { required: "Please fill this field." })}
                  id="outlined-adornment-amount"
                  type="number"
                  startAdornment={<InputAdornment position="start"><span className="font-bold text-lg" > ₹ </span></InputAdornment>}
                  label="Loan Amount"
                  error={errors.amount && !!errors.amount}
                  helperText={errors.amount && errors.amount.message}
                />
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
               
                <TextField
                  select
                  
                  {...register('tenure', { required: "Please fill this field." })}
                  label="Tenure"
                  
                  error={errors.tenure && !!errors.tenure}
                  helperText={errors.tenure && errors.tenure.messtenure}

                  InputProps={{
                    endAdornment: <InputAdornment position="start">Years&nbsp;&nbsp;</InputAdornment>,
                  }}
                >
                  {
                    [...Array(100)].map((_, index) => <MenuItem value={index + 1} key={index}>{index + 1}</MenuItem>
                  )
                  }
                  
                </TextField>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
              
                <TextField
                  select
                  {...register('age', { required: "Please fill this field." })}
                  
                  label="Age"
                  error={errors.age && !!errors.age}
                  helperText={errors.age && errors.age.message}

                  InputProps={{
                    endAdornment: <InputAdornment position="start">Years&nbsp;&nbsp;</InputAdornment>,
                  }}
                >

                  {
                    [...Array(100)].map((_, index) => <MenuItem value={index + 1} key={index}>{index + 1}</MenuItem>
                  )
                  }
                  
                </TextField>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="pIdentified-label">Is Your Property Identified</InputLabel>
                <Select
                  {...register('pIdentified', { required: "Please fill this field." })}
                  labelId="pIdentified-label"
                  label="pIdentified"
                  error={errors.pIdentified && !!errors.pIdentified}
                  helperText={errors.pIdentified && errors.pIdentified.message}
                >
                  <MenuItem value={"true"}>Yes</MenuItem>
                  <MenuItem value={"false"}>No</MenuItem>

                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="pCity-label">Property City</InputLabel>
                <Select
                  {...register('pCity', { required: "Please fill this field." })}
                  labelId="pCity-label"
                  label="pCity"
                  error={errors.pCity && !!errors.pCity}
                  helperText={errors.pCity && errors.pCity.message}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-pCost">Property Cost</InputLabel>
                <OutlinedInput
                  {...register('pCost', { required: "Please fill this field." })}
                  id="outlined-adornment-pCost"
                  startAdornment={<InputAdornment position="start"><span className="font-bold text-lg" > ₹ </span></InputAdornment>}
                  label="Loan pCost"
                  error={errors.pCost && !!errors.pCost}
                  helperText={errors.pCost && errors.pCost.message}
                />
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="eType-label">Employment Type</InputLabel>
                <Select
                  {...register('eType', { required: "Please fill this field." })}
                  labelId="eType-label"
                  label="eType"
                  error={errors.eType && !!errors.eType}
                  helperText={errors.eType && errors.eType.message}
                >
                  <MenuItem value={"salaried"}>Salaried</MenuItem>
                  <MenuItem value={"self-emp"}>Self - Employed</MenuItem>
                  <MenuItem value={'NA'}>Not Applicable</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-income">Your Income</InputLabel>
                <OutlinedInput
                  {...register('income', { required: "Please fill this field." })}
                  id="outlined-adornment-income"
                  type="number"
                  startAdornment={<InputAdornment position="start"><span className="font-bold text-lg" > ₹ </span></InputAdornment>}
                  label="Loan income"
                  error={errors.income && !!errors.income}
                  helperText={errors.income && errors.income.message}
                />
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-curEmi">Current EMI</InputLabel>


        
                <OutlinedInput
                  {...register('curEmi', { required: "Please fill this field." })}
                  id="outlined-adornment-curEmi"
                  type="number"
                  startAdornment={<InputAdornment position="start"><span className="font-bold text-lg" > ₹ </span></InputAdornment>}
                  label="Loan curEmi"
                  error={errors.curEmi && !!errors.curEmi}
                  helperText={errors.curEmi && errors.curEmi.message}
                  endAdornment={<InputAdornment position="end">Monthly</InputAdornment>}
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <TextField
                  {...register('fullName', { required: "Please fill this field." })}

                  label="Full Name (As per PAN)"
                  error={errors.fullName && !!errors.fullName}
                  helperText={errors.fullName && errors.fullName.message}
                />
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>

                <TextField
                  {...register('email', {
                    required: 'Please enter a valid email address',
                    pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Enter a valid email' }
                  })}

                  label="Your Email ID"
                  error={errors.email && !!errors.email}
                  helperText={errors.email && errors.email.message}
                />
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} sm={6} lg={3}>
              <FormControl fullWidth>

                <TextField
                  {...register('mobile', {
                    required: "Please fill this field.",
                    pattern: {
                      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                      message: "Please enter valid phone number."
                    }
                  })}

                  label="Mobile Number(OTP Verification required.)"
                  error={errors.mobile && !!errors.mobile}
                  helperText={errors.mobile && errors.mobile.message}
                />

              </FormControl>
            </Grid>
          </Grid>

          <div className='flex w-[80%] mx-auto'>
            <Checkbox {...label}
              checked={tcChecked}
              onChange={() => setTcChecked(prev => !prev)}
            />
            <h1 className="text-gray-400 text-md text-justify">
              I authorize dealacres.com relevant loan providers and their representives to call, SMS or email me with reference to the application ** accept dealacres.com "Terms & Conditions". This consent shall override any DNC/NDNC registration.
            </h1>
          </div>

          <button className="bg-blue-500 text-white text-lg py-2 px-8 flex items-center justify-center rounded shadow w-[80%] mx-auto disabled:bg-blue-300 "
            onClick={handleSubmit(onSubmit)} disabled={!tcChecked} >
            Submit Details
          </button>

        </Stack>

      </form>


    </div>
  );
}