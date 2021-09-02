import  { useEffect, useState } from 'react'

export const useFetch = (url) => {
const [state, setState] = useState({ data: null, loading: true, error: null })

 useEffect(() => {
    const abortController = new AbortController();

      fetch(url)
      .then((res) => res.json())
      .then((data) => {
          setState({ 
              loading: false,
              data,
              error: null,})
      })
      .catch((err) => {
          setState({ 
              data: null,
              loading: false,
              error: err,
          })
      })
      return () => abortController.abort();
 }, [url])
    
   return state;
}
