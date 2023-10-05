import { useState, useEffect } from "react";


export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]= useState(null)

    useEffect(() => {
        const abortCont = new AbortController();
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzRhYjMwMzYxZTVlOTRkNGRkNzYwYWRkYmEyNTM5OCIsInN1YiI6IjY0Njc5NjE1YTUwNDZlMDE0NzRjNjBjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z6YJXPa8s6McqnYAOS9yr4CJIZgbYX4JsxkYjwVkthA'
            
        }
    }
        fetch(url, options, {signal: abortCont.signal})
            .then(res =>  {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    setLoading(false)
                    setError(err.message)
                }
            })
        return () => abortCont.abort();

    },[url])

    return {data, loading, error}
}
