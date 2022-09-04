import React , { useState,useEffect,useRef} from 'react'

function CountAnimation({end}) {
	
	const [state, setState] = useState(null);
  const ref = useRef(0)

  const accumulator = end/200

  const handleCount = ()=>{

    if(ref.current<end){
      const result = Math.ceil(ref.current + accumulator);
      if(result > end) return setState(end);
      setState(result);
      ref.current = result
    }
    setTimeout(handleCount,25)
  };

  useEffect(() => {
    let isMounted = true;
    if(isMounted){
      handleCount();
    }
    return()=>(isMounted = false)
  }, [end]);
  return (
	<div style={{color:'#fff',fontSize:'40px',fontWeight:'bold'}}>{state}</div>
  )
}

export default CountAnimation