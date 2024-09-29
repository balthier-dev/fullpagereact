import { Box, Grid2 } from '@mui/material'
import React from 'react'
import useScreenWidth from '../hook/useScreenWidth';

const Second = () => {

  const width = useScreenWidth();

  return (
    <div className='section'>
      {width > 1024 ? (
        <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffeea0', margin: '0 6em 0 6em', flexDirection: 'column' }}>
          <h3 style={{ color: '#9463a4' }}>Founder/Creator</h3>
          <img src="img/s2.png" style={{ width: '80%' }}></img>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
          <Grid2 sx={{ backgroundColor: '#ffeea0', width: '100%'}}>
          <h3 style={{ color: '#9463a4', margin: '0.3em' }}>Founder/Creator</h3>
          </Grid2>
          <img src="img/s2-mb.png" style={{ height: '90vh' }}></img>
        </Box>
      )
      }
    </div>
  )

}
export default Second;