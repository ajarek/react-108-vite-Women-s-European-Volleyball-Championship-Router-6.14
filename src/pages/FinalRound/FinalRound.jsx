import './FinalRound.css'

const FinalRound = () => {
  return (
    <div className='final-round'>
      <div class='bracket'>
        <div class='round'>
          Runda 1/16
          <div class='match'>
            <div className='data'>27-08 Florencja</div>
            <div class='team'>
              <span>D1</span> Team A <span className='span-result'></span>
            </div>
            <div class='team'>
              <span>B4</span>Team B <span className='span-result'></span>
            </div>
          </div>
          
          <div class='match'>
            <div className='data'>27-08 Florencja</div>
            <div class='team'>
              <span>B2</span>Team C <span className='span-result'></span>
            </div>
            <div class='team'>
              <span>D3</span>Team D <span className='span-result'></span>
            </div>
          </div>
          <hr />
          <div class='match'>
            <div className='data'>27-08 Bruksela</div>
            <div class='team'>
              <span>A1</span>Team E <span className='span-result'></span>
            </div>
            <div class='team'>
              <span>C4</span>Team F <span className='span-result'></span>
            </div>
          </div>
          <div class='match'>
            <div className='data'>27-08 Bruksela</div>
            <div class='team'>
              <span>C2</span>Team G <span className='span-result'></span>
            </div>
            <div class='team'>
              <span>A3</span>Team H <span className='span-result'></span>
            </div>
          </div>
          <hr />
          <div class='match'>
            <div className='data'>26-08 Florencja</div>
            <div class='team'>
              <span>B1</span> Team I <span className='span-result'></span>
            </div>
            <div class='team'>
              <span>D4</span>Team J <span className='span-result'></span>
            </div>
          </div>
          <div class='match'>
            <div className='data'>26-08 Florencja</div>
            <div class='team'>
              <span>D2</span>Team K <span className='span-result'></span>
            </div>
            <div class='team'>
              <span>B3</span>Team L <span className='span-result'></span>
            </div>
          </div>
          <hr />
          <div class='match'>
            <div className='data'>28-08 Bruksela</div>
            <div class='team'>
              <span>C1</span>Team M <span className='span-result'></span>
            </div>
            <div class='team'>
              <span>A4</span>Team N <span className='span-result'></span>
            </div>
          </div>
          <div class='match'>
            <div className='data'>28-08 Bruksela</div>
            <div class='team'>
              <span>A2</span>Team O <span className='span-result'></span>
            </div>
            <div class='team'>
              <span>C3</span>Team P <span className='span-result'></span>
            </div>
          </div>
        </div>
        <div class='round'>
          Runda Ćwierćfinał
          <div class='match space'>
            <div className='data'>29-08 Florencja</div>
            <div class='team'>{/* Team A */}<span className='span-result'></span></div>
            <div class='team'>{/* Team B */}<span className='span-result'></span></div>
          </div>
          <div class='match spaceX2'>
            <div className='data'>30-08 Bruksela</div>
            <div class='team'>{/* Team C */}<span className='span-result'></span></div>
            <div class='team'>{/* Team D */}<span className='span-result'></span></div>
          </div>
          <hr style={{marginTop:'55px'}} />
          <div class='match spaceX2'>
            <div className='data'>29-08 Florencja</div>
            <div class='team'>{/* Team A */}<span className='span-result'></span></div>
            <div class='team'>{/* Team B */}<span className='span-result'></span></div>
          </div>
          <div
            class='match spaceX2
          '
          >
            <div className='data'>30-08 Bruksela</div>
            <div class='team'>{/* Team C */}<span className='span-result'></span></div>
            <div class='team'>{/* Team D */}<span className='span-result'></span></div>
          </div>
        </div>
        <div class='round'>
          Runda Półfinał
          <div class='match spaceX3'>
            <div className='data'>01-09 Bruksela</div>
            <div class='team'>{/* Team A */}<span className='span-result'></span></div>
            <div class='team'>{/* Team B */}<span className='span-result'></span></div>
          </div>
          <hr style={{marginTop:'142px'}}/>
          <div class='match spaceX6'>
            <div className='data'>01-09 Bruksela</div>
            <div class='team'>{/* Team C */}<span className='span-result'></span></div>
            <div class='team'>{/* Team D */}<span className='span-result'></span></div>
          </div>
        </div>

        <div class='round'>
          Runda Finał
          <div class='match spaceX5'>
          <div className='place3'>Mecz o 1 miejsce</div>
            <div className='data'>03-09 Bruksela</div>
            <div class='team'>{/* Team A */}<span className='span-result'></span></div>
            <div class='team'>{/* Team B */}<span className='span-result'></span></div>
          </div>
          <div class='match spaceX2'>
          <div className='place3'>Mecz o 3 miejsce</div>
          <div className='data'>03-09 Bruksela</div>
          <div class='team'>{/* Team A */}<span className='span-result'></span></div>
          <div class='team'>{/* Team B */}<span className='span-result'></span></div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default FinalRound
