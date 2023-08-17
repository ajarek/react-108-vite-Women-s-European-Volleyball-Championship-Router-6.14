import cities from '../../data/cities.json'
import countries from '../../data/countries.json'
import './Home.css'
import Card from './../../components/Card/Card';
import Grup from '../../components/Grup/Grup';

const Home = () => {
  
  return (
    <div className='home'>
      <div className="baner">
        
     <h4>Mistrzostwa Europy w piłce siatkowej kobiet 2023  organizowany jest przez europejski organ zarządzający siatkówką CEV. Turniej EuroVolley kobiet po raz trzeci z rzędu odbędzie się w czterech krajach: Belgii, Estonii, Niemczech i we Włoszech.</h4>
      </div>
      <h3>Podział na grupy:</h3>
      <div className="grup-wrapper">
        <div className='grup-name'>Grupa A</div>
        <div className='grup-name'>Grupa B</div>
        <div className='grup-name'>Grupa C</div>
        <div className='grup-name'>Grupa D</div>
       {countries.map(cs=>{
        return(
          <Grup key={cs.id} flag={cs.flag} country={cs.country}/>
        )
       })}
      </div>
      <h3>Miasta rozgrywek:</h3>
     <div className="card-wrapper">
     {
      
      cities.map(el=>{
        return(
          <Card key={el.id} country={el['country-src']}
          city={el.city} poll={el.pool} arena={el.arena} capacity={el.capacity} src={el['city-src']}
          />
        )
      })
     }
     </div>
    </div>
  )
}

export default Home
