import { React, useState } from 'react'
import countries from '../../data/countries.json'

import './Table.css'
const Table = () => {
  
  const selectCountry = (country) => {
    const newData = countries.find(el => el.country === country);
  
    return (
      <div>
        <img src={newData.flag} alt="" />
        <span style={{marginLeft:'8px'}}>{newData.country}</span>
      </div>
    );
  };
  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Czas</th>
            <th>Drużyna 1</th>
            <th>Drużyna 2</th>
            <th>Wynik</th>
            <th>Suma Punktów</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>17-08</td>
            <td>20:00</td>
            <td>{selectCountry('Węgry')}</td>
            <td>{selectCountry('Belgia')}</td>
            <td>0-3</td>
            <td>50-75</td>
            
          </tr>
          <tr>
            <td>18-08</td>
            <td>17:00</td>
            <td>{selectCountry('Serbia')}</td>
            <td>{selectCountry('Ukraina')}</td>
            <td>3-0</td>
            <td>75-49</td>
            
          </tr>
          <tr>
            <td>18-08</td>
            <td>20:00</td>
            <td>{selectCountry('Słowenia')}</td>
            <td>{selectCountry('Polska')}</td>
            <td>0-3</td>
            <td>52-75</td>
            
          </tr>
          <tr>
            <td>19-08</td>
            <td>17:00</td>
            <td>{selectCountry('Ukraina')}</td>
            <td>{selectCountry('Węgry')}</td>
            <td>0-0</td>
            <td>0-0</td>  
          </tr>
          <tr>
            <td>19-08</td>
            <td>20:00</td>
            <td>{selectCountry('Słowenia')}</td>
            <td>{selectCountry('Belgia')}</td>
            <td>0-0</td>
            <td>0-0</td>  
          </tr>
          <tr>
            <td>20-08</td>
            <td>17:00</td>
            <td>{selectCountry('Węgry')}</td>
            <td>{selectCountry('Polska')}</td>
            <td>0-0</td>
            <td>0-0</td>  
          </tr>
          <tr>
            <td>20-08</td>
            <td>20:00</td>
            <td>{selectCountry('Serbia')}</td>
            <td>{selectCountry('Słowenia')}</td>
            <td>0-0</td>
            <td>0-0</td>  
          </tr>
          <tr>
            <td>21-08</td>
            <td>17:00</td>
            <td>{selectCountry('Polska')}</td>
            <td>{selectCountry('Serbia')}</td>
            <td>0-0</td>
            <td>0-0</td>  
          </tr>
          <tr>
            <td>21-08</td>
            <td>20:00</td>
            <td>{selectCountry('Belgia')}</td>
            <td>{selectCountry('Ukraina')}</td>
            <td>0-0</td>
            <td>0-0</td>  
          </tr>
          <tr>
            <td>22-08</td>
            <td>17:00</td>
            <td>{selectCountry('Słowenia')}</td>
            <td>{selectCountry('Węgry')}</td>
            <td>0-0</td>
            <td>0-0</td>  
          </tr>
          <tr>
            <td>22-08</td>
            <td>20:00</td>
            <td>{selectCountry('Belgia')}</td>
            <td>{selectCountry('Polska')}</td>
            <td>0-0</td>
            <td>0-0</td>  
          </tr>
          <tr>
            <td>23-08</td>
            <td>17:00</td>
            <td>{selectCountry('Ukraina')}</td>
            <td>{selectCountry('Słowenia')}</td>
            <td>0-0</td>
            <td>0-0</td>  
          </tr>
          <tr>
            <td>23-08</td>
            <td>20:00</td>
            <td>{selectCountry('Węgry')}</td>
            <td>{selectCountry('Serbia')}</td>
            <td>0-0</td>
            <td>0-0</td>  
          </tr>
          <tr>
            <td>24-08</td>
            <td>17:00</td>
            <td>{selectCountry('Polska')}</td>
            <td>{selectCountry('Ukraina')}</td>
            <td>0-0</td>
            <td>0-0</td>  
          </tr>
          <tr>
            <td>24-08</td>
            <td>20:00</td>
            <td>{selectCountry('Serbia')}</td>
            <td>{selectCountry('Belgia')}</td>
            <td>0-0</td>
            <td>0-0</td>  
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
