import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import React from 'react'

const fetchSuperHero = heroId => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroData = (heroId) => {
  return useQuery(['super-hero',heroId],() => fetchSuperHero(heroId))
}
