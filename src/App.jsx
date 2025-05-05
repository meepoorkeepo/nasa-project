import Main from './componants/Main'
import Footer from './componants/Footer'
import SideBar from './componants/SideBar'
import { useEffect, useState } from 'react'


function App() {
  const [data,setdata] = useState(null)
  const[loading,setloading] = useState(false)
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const[showModal,setshowModal] = useState(false)
 
  
  function handeleToggleModal() {
    setshowModal(!showModal)
    
  }

  useEffect(() => {
    async function fetchapidata() {
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`  
      const today = (new Date()).toDateString()
      const localkey = `NASA-${today}`

      if (localStorage.getItem(localkey)) {
          const apidata = JSON.parse(localStorage.getItem(localkey))
          setdata(apidata)
          console.log('fetch from cache today');
          return  
        }

        localStorage.clear()


      try {
        const res = await fetch (url)
        const apidata = await res.json()
        localStorage.setItem(localkey, JSON.stringify(apidata))
        setdata(apidata)
        console.log("fetched from api today");
        
      } catch (error) {
        console.log(error.message);
      }
      
    }
  fetchapidata()
    
  }, [])
  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} 
        handeleToggleModal={handeleToggleModal}
         />
      )}
      <Footer
        data={data}
        handeleToggleModal={handeleToggleModal}
      />
    </>
  );
}

export default App
