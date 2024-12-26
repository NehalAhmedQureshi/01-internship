import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from '@mui/material/Grid2'
// import Grid from '@mui/material/Grid2'
import { Paper } from '@mui/material'

function App() {
  return (
    <Grid container sx={{ width: '100%' }} spacing={2}>
      <Grid item lg={3} md={4} size={4}>
        <Paper>hello</Paper>
      </Grid>
      <Grid item lg={3} md={4} size={4}>
        <Paper>hello</Paper>
      </Grid>
      <Grid item lg={3} md={4} size={4}>
        <Paper>hello</Paper>
      </Grid>
      <Grid item lg={3} md={4} size={4}>
        <Paper>hello</Paper>
      </Grid>
    </Grid>
  )
}

export default App
