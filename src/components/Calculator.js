import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import context from './Context'
import { useContext } from 'react'

function Calculator() {
    const [value,setValue]=useState('');
    const theme = useContext(context);
  return (
    <div className={theme}>
        <div>
            <div className="card-body calc">
                {/* <div className="top-bar">
                    <div className="heading">Calc</div>
                    <div className="theme-btn">
                        <button className='night-btn' onClick={()=>setTheme('dark')}><FontAwesomeIcon icon={faMoon} /></button>
                        <button className='day-btn' onClick={()=>setTheme('light')}><FontAwesomeIcon icon={faSun}/></button>
                    </div>
                </div> */}

                <input className={`display-bar ${theme}`} type="text" placeholder='0' value={value} onChange={(e)=>setValue(e.target.value)}/>

                <div className="button-area">
                    <input type='button' className="but" value="AC" onClick={(e)=>setValue("")}/>
                    <input type="button" className="but" value="C" onClick={(e)=>setValue(value.slice(0,-1))}/>
                    <input type="button" className="but" value="%" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="/" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="7" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="8" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="9" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="*" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="4" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="5" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="6" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="-" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="1" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="2" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="3" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="+" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but but1"  value="0" onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="." onClick={(e)=>setValue(value+e.target.value)}/>
                    <input type="button" className="but" value="=" onClick={(e)=>setValue(eval(value))}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator