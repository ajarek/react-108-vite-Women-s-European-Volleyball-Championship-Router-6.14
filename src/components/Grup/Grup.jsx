import './Grup.css'

const Grup = ({flag, country}) => {
  
 
  return (
    <div className='grup'>
     
       <div >
          <img src={flag} alt="" />
          <span>{country}</span>
        </div>
    
    </div>
  )
}

export default Grup