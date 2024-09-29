import React from 'react'
import { Grid2 } from '@mui/material'
import Box from '@mui/material/Box';
import useScreenWidth from '../hook/useScreenWidth';

const Forth = () => {

  const width = useScreenWidth();
  return (
    <div className='section'>
      {width > 1024 ? (
        <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', padding: '1em', flexDirection: 'column' }}>
          <Grid2 container spacing={2} sx={{ width: '30%', backgroundColor: "#9463a4", marginBottom: '1em', justifyContent: 'center' }}>
            <h4 style={{ color: '#fef0a2' }}>New Generation</h4>
          </Grid2>
          <Grid2 container spacing={2} sx={{ width: '90%' }}>
            <Grid2 size={3}>
              <Box>
                <img src="img/1.png" style={{ width: "80%" }}></img>
              </Box>
            </Grid2>
            <Grid2 sx={{ display: 'flex', flexDirection: 'column' }} size={3}>
              {/* <img src="img/logo-s1.png" style={{ width : "30%"}}></img> */}
              <Box>
                <img src="img/2.png" style={{ width: "80%" }}></img>
              </Box>
            </Grid2>
            <Grid2 sx={{ display: 'flex', flexDirection: 'column' }} size={3}>
              {/* <img src="img/logo-s1.png" style={{ width : "30%"}}></img> */}
              <Box>
                <img src="img/3.png" style={{ width: "80%" }}></img>
              </Box>
            </Grid2>
            <Grid2 sx={{ display: 'flex', flexDirection: 'column' }} size={3}>
              {/* <img src="img/logo-s1.png" style={{ width : "30%"}}></img> */}
              <Box>
                <img src="img/4.png" style={{ width: "80%" }}></img>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', padding: '1em', flexDirection: 'column' }}>
          <Grid2 container spacing={2} sx={{ width: '30%', backgroundColor: "#9463a4", marginBottom: '1em', justifyContent: 'center' }}>
            <h4 style={{ color: '#fef0a2' }}>New Generation</h4>
          </Grid2>
          <Grid2 container spacing={2} sx={{ width: '90%' }}>
            <Grid2 size={12}>
              <Box>
                <img src="img/1.png" style={{ width: "80%" }}></img>
              </Box>
            </Grid2>
            <Grid2 sx={{ display: 'flex', flexDirection: 'column' }} size={12}>
              {/* <img src="img/logo-s1.png" style={{ width : "30%"}}></img> */}
              <Box>
                <img src="img/2.png" style={{ width: "80%" }}></img>
              </Box>
            </Grid2>
            <Grid2 sx={{ display: 'flex', flexDirection: 'column' }} size={12}>
              {/* <img src="img/logo-s1.png" style={{ width : "30%"}}></img> */}
              <Box>
                <img src="img/3.png" style={{ width: "80%" }}></img>
              </Box>
            </Grid2>
            <Grid2 sx={{ display: 'flex', flexDirection: 'column' }} size={12}>
              {/* <img src="img/logo-s1.png" style={{ width : "30%"}}></img> */}
              <Box>
                <img src="img/4.png" style={{ width: "80%" }}></img>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      )
      }
    </div>
  )
}

export default Forth;
