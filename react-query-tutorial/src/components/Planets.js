import React, { useState } from 'react'
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async ({ queryKey }) => {
    const [_key, page] = queryKey;
    console.log(_key, page);

    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}

export default function Planets() {

    const [ page, setPage ] = useState(1);
    const { 
        data, 
        isLoading,
        isError,
        isSuccess,
        isPreviousData  
    } = useQuery(['planets', page], fetchPlanets, {
        keepPreviousData: true,
        staleTime: 50000,
        // cacheTime: 10,
        onSuccess: () => console.log('data fetched with no problem')
    });
    console.log(data);

    return (
        <div>
            <h2>Planets</h2>
            { isLoading && (
                <div>Loading data...</div>
            ) }
            { isError && (
                <div>Error fetching data</div>
            ) }
            { isSuccess && (
                <>
                    <button 
                        disabled={ (page === 1) }
                        onClick={ () => setPage(old => Math.max(old - 1, 1)) }
                    >
                        Prev Page
                    </button>
                    <span>{ page }</span>
                    <button 
                        disabled={ isPreviousData || !data.next }
                        onClick={ () => setPage(old => (!data || !data.next) ? old : (old + 1)) }
                    >
                        Next Page
                    </button>
                    <div>
                        {
                            data && data.results.map(planet => (
                                <Planet key={ planet.name } planet={ planet } />
                            ))
                        }
                    </div>
                </>
            ) }
        </div>
    )
}
