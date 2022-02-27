import React from 'react'
import { Grid } from "@mui/material"
import CardHightLight from './CardHightLight'

const WrapCard = ({sumaryReport}) => {
  return (
    <Grid container spacing={3}>
      {sumaryReport.map((item) => (
        <Grid  item sm={4} xs={12}>
          <CardHightLight
          title ={item.title}
          count={item.count}
          type={item.type}
          >

          </CardHightLight>
        </Grid>
      ))}
    </Grid>
  )
}
export default WrapCard