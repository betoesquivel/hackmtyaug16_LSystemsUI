import {promiseIndividuals} from '../lib/core.js';

export function getRankedIndividuals(lastId) {
  return {
    type: 'GET_RANKED_INDIVIDUALS',
    promise: promiseIndividuals(lastId),
    lastId
  }
}
export function crossover(parent1, parent2) {
  return {
    type: 'CROSSOVER',
    parent1,
    parent2
  };
}
export function mutate(parent) {
  return {
    type: 'MUTATE',
    parent: parent
  };
}
export function rank(params) {
  const {
   winnersId,
   winners,
   loosersId,
   loosers,
   offspringId,
   offspringResult 
  } = params;

  return {
    type: 'RANK',
    params: params
  };
}
