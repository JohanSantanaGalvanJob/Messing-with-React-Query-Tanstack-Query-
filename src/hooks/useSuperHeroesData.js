import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
    return  axios.get('http://localhost:4000/superheroes');
}

 export const useSuperHeroesData = (onSuccess,onError) => {
    return useQuery(['super-heroes'],fetchSuperHeroes,
    {
        //refetches everytime something is changed in the database.
        // refetchOnWindowFocus:true,
        //refetches in a interval of 2s. This is for real time data
        // refetchInterval: 2000,
        // refetchIntervalInBackground:true
        // enabled:false,
        //Controls errors and callbacks well
        onError,
        onSuccess,
        // select: (data) => {
        //     const superHeroName = data.data.map((hero) => hero.name)
        //     return superHeroName
        // }
    })
}