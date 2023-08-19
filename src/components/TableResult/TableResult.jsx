import './TableResult.css'
import countries from '../../data/countries.json'
const TableResult = () => {
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
    <div className='table-result'>
      <table>
        <thead>
          <tr>
            <th>Pozycja</th>
            <th>Drużyna</th>
            <th>Wygrane</th>
            <th>Punkty</th>
            <th>Sety zdobyte</th>
            <th>Sety stracone</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>{selectCountry('Belgia')}</td>
            <td>2</td>
            <td>6</td>
            <td>6</td>
            <td>1</td>
            
          </tr>
        <tr>
            <td>2</td>
            <td>{selectCountry('Serbia')}</td>
            <td>1</td>
            <td>3</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          
           <tr>
            <td>3</td>
            <td>{selectCountry('Polska')}</td>
            <td>1</td>
            <td>3</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr>
            <td>4</td>
            <td>{selectCountry('Ukraina')}</td>
            <td>1</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            
          </tr>
          <tr>
            <td>5</td>
            <td>{selectCountry('Słowenia')}</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>6</td>
            
          </tr>
          <tr>
            <td>6</td>
            <td>{selectCountry('Węgry')}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>6</td>
            
          </tr> 
        
         
          </tbody>
          </table>
    </div>
  )
}

export default TableResult
