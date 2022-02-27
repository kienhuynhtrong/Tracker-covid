import React from "react";
import { CardContent, Card, Typography, makeStyles } from "@mui/material";
import CountUp from 'react-countup';

const CardHightLight = ({ title, count, type }) => {
  return (
  <Card>
    <CardContent>
      <Typography variant="h5" component='p'> { title }</Typography>
      <Typography variant="h5" component='span'>
        <CountUp end={count} separator=' ' duration={2}></CountUp>
      </Typography>
    </CardContent>
  </Card>)
};

export default CardHightLight;
