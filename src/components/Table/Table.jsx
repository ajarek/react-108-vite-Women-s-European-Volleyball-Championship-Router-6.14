import { React } from 'react'
import countries from '../../data/countries.json'
import './Table.css'
const Table = () => {
  const selectCountry = (country) => {
    const newData = countries.find(el => el.country === country);
  
    return (
      <div>
        <span style={{marginRight:'8px'}}>{newData.country}</span>
        <img src={newData.flag} alt="" />
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
            <th>PKT drużyna 1</th>
            <th>PKT drużyna 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>17-08</td>
            <td>20:00</td>
            <td>{selectCountry('Węgry')}</td>
            <td>{selectCountry('Belgia')}</td>
            <td><input type="number" min={0} max={3} required />:<input type="number" min={0} max={3} required /></td>
            <td>{0}</td>
            <td>{0}</td>
          </tr>
          <tr>
            <td>18-08</td>
            <td>17:00</td>
            <td>{selectCountry('Serbia')}</td>
            <td>{selectCountry('Ukraina')}</td>
            <td><input type="number" min={0} max={3} required />:<input type="number" min={0} max={3} required /></td>
            <td>{0}</td>
            <td>{0}</td>
          </tr>
          <tr>
            <td>18-08</td>
            <td>20:00</td>
            <td>{selectCountry('Słowenia')}</td>
            <td>{selectCountry('Polska')}</td>
            <td><input type="number" min={0} max={3} required />:<input type="number" min={0} max={3} required /></td>
            <td>{0}</td>
            <td>{0}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
