import {fromJS} from 'immutable';

export const defaultState = fromJS({
  judgedIndividuals: [],
  rankedIndividuals: [],
  lastEvaluatedIndividual: '',
  selectedIndividuals: {},
  evolving: false,
  gettingIndividuals: false,
  hasMore: true
});


export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_RANKED_INDIVIDUALS_REQUEST':
      return state.set('gettingIndividuals', true);
    case 'GET_RANKED_INDIVIDUALS':
      console.log(`Got response with ${JSON.stringify(Object.keys( action.res ))}`);
      console.log(`Got ${JSON.stringify(action.res.Count)} individuals`);
      console.log(`Got ${JSON.stringify(action.res.Items.slice(0,5))} individuals`);
      let lastId = action.res.LastEvaluatedKey;
      let hasMore = false;
      if (lastId) {
        lastId = lastId.id;
        hasMore = true;
      }
      //const nextState = state.set('hasMore', !!lastId); 
      const nextState = state.set('hasMore', false); 
      return nextState.update('rankedIndividuals',
                            (i) => i.concat(action.res.Items))
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
