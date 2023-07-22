import {React , useState , useEffect} from 'react'
import './Loader.css'
import RingLoader from "react-spinners/RingLoader";


const Loader = () => {

    const [loading , setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },5000)
    },[])

  return (
    <div className='loader'>
      loading ?
      <RingLoader
        color="#386dd6"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader
