import { Container, Typography} from '@mui/material'
import './App.css';
import moment from 'moment'
import CountrySelector from './CountrySelector/index'
import WrapCard from './HightLight/index'
import React, { useEffect, useMemo } from 'react';
import { getCountries, getReportByCountry } from './api';
import { sortBy } from 'lodash';


const App = () => {
  const [ countries, setCountries] = React.useState([]);
  const [ dataReport, setDataReport ] = React.useState([]);
  const [ selectCountryId, setSelectCountryId ] = React.useState('');
  //api get list countries
  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res;
      const countries = sortBy(data, 'Country');
      setCountries(countries);
      setSelectCountryId('vn');
    });
  }, [])

  useEffect(() => {
    console.log('selectCountryId', selectCountryId)
    if(selectCountryId) {
      const nameCountry = countries.find(item => item.ISO2 === selectCountryId.toUpperCase())
      getReportByCountry(nameCountry.Slug).then((res) => {
        const { data } = res;
        setDataReport(data)
      })
    }
  }, [selectCountryId])

  const sumaryReport = React.useMemo(() => {
    if (dataReport && dataReport.length) {
      const latestData = dataReport[dataReport.length -1];
      return [
        {
          title :' Số ca nhiễm',
          count: latestData.Confirmed,
          type: 'confirmed'
        },
        {
          title :' Khỏi bệnh',
          count: latestData.Recovered,
          type: 'recovered'
        },
        {
          title :' Tử vong',
          count: latestData.Deaths,
          type: 'death'
        }
      ]
    }
    return [];
  }, 
  [dataReport]);


  const handleOnChange = React.useCallback((e) => {
    setSelectCountryId(e.target.value)
  }, []);

  return (
    <Container style={{ marginTop: 20}}>
      <Typography variant='h2' component='h2'>
        Số liệu covid 19
      </Typography>
      <Typography variant='h5'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</Typography>
      < CountrySelector
        countries = {countries}
        handleOnChange={handleOnChange}
        value={selectCountryId}
      ></CountrySelector>
      <WrapCard sumaryReport={sumaryReport}></WrapCard>
    </Container>
  )
}

export default App;
