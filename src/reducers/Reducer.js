import {fromJS} from 'immutable';

export const defaultState = fromJS({
  judgedIndividuals: [],
  rankedIndividuals: [],
  lastEvaluatedIndividual: '',
  selectedIndividuals: {},
  evolving: false,
  gettingIndividuals: false
});


export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_RANKED_INDIVIDUALS_REQUEST':
      return state.set('gettingIndividuals', true);
    case 'GET_RANKED_INDIVIDUALS':
      console.log(`Got individuals ${JSON.stringify(action)}`);
      const lastId = action.res.LastEvaluatedKey.id;
      return state.update('rankedIndividuals',
                          (i) => i.concat(action.individuals))
                  .set('gettingIndividuals', false)
                  .set('lastEvaluatedIndividual', lastId);
    case 'CROSSOVER':
      return state;
    case 'MUTATE':
      return state;
    default:
      return state;
  }
}
