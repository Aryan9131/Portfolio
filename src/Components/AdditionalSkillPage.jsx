import { Box , Typography} from '@mui/material'
import React from 'react'
import './AdditionalSkillPage.css'
export const AdditionalSkillPage = () => {
    return (
        <Box sx={{position:'relative', display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', height: '100vh', width: '100vw', backgroundColor: 'black', padding: '100px' }}>
            <Box id="expectText">
                <Typography>
                   WHAT YOU CAN
                </Typography>
                <Typography>
                   EXPECT FROM ME
                </Typography>
            </Box>
            <Box className="elem">
                <img src="/hardworkImage1.avif" alt="" width={'260'} height={'350'} />
                <Box className="text">
                    <h1>HardWork</h1>
                    <h1>HardWork</h1>
                </Box>
                <img src="/hardworkImage2.avif" alt="" width={'300'} height={'250'} />
            </Box>
            <Box className="elem">
                <img src="/passionImage1.avif" alt="" width={'260'} height={'350'} />
                <Box className="text">
                    <h1>Passion</h1>
                    <h1>Passion</h1>
                </Box>
                <img src="/passionImage2.avif" alt="" width={'300'} height={'250'} />
            </Box>
            <Box className="elem">
                <img src="/dedicationImage1.avif" alt="" width={'260'} height={'350'} />
                <Box className="text">
                    <h1>Dedication</h1>
                    <h1>Dedication</h1>
                </Box>
                <img src="/dedicationImage2.avif" alt="" width={'300'} height={'250'} />
            </Box>
        </Box>
    )
}
