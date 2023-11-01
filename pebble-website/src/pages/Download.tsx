import React from 'react'
import { Footer, Navbar } from '../components'
import { Button } from '@mui/material'

const Download = () => {
  return (
    <div className='h-screen max-w-screen overflow-x-hidden bg-bg-light text-black dark:bg-bg-dark dark:text-off-white'>
      <Navbar current='Download'/>

      <div className='flex flex-row h-4/5 px-28 py-28'>
        <div className='flex flex-1 flex-col ml-28 justify-center items-center gap-5'>
          <h1 className='w-2/3 text-5xl leading-snug font-bold'>Download Pebble, now on all mobile platforms.</h1>
        </div>
        <div className='flex flex-col flex-1 items-center justify-center mr-28 gap-14'>
          <Button color="primary" className="w-3/4 flex-shrink" variant="contained" disableElevation href='https://www.google.com/url?q=https%3A%2F%2Fwww.apple.com%2Fapp-store%2F&sa=D&sntz=1&usg=AOvVaw1mZ3cT6K8MGVtUHot50QfQ'>
            Coming soon on the App Store
          </Button>
          <Button color="primary" className="w-3/4 flex-shrink" variant="contained" disableElevation href='https://play.google.com/store/games?device=windows&utm_source=na_Med&utm_medium=hasem&utm_content=Jul0722&utm_campaign=Evergreen&pcampaignid=MKT-EDR-na-us-1000189-Med-hasem-py-Evergreen-Jul0722-Text_Search_BKWS-id_101963_%7CEXA%7CONSEM_kwid_43700074148358933&gclid=CjwKCAjw_aemBhBLEiwAT98FMn4vRv_tPtwNU7QovTlX4A6Bv3Es6uoV-CYiU_bNjSrCBYGoyHfWsRoCE_cQAvD_BwE&gclsrc=aw.ds'>
            Coming soon on the Play Store
          </Button>
        </div>
      </div>

      <Footer />
    </div>
    
  )
}

export default Download