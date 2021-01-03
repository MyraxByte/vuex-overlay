import {deepCopy} from "../utils/copy";
import {getDifference} from "../utils/diffStates";
import {getTime} from "../utils/getTime";

export const handleMutations = (store) => {
  let prevState = deepCopy(store.state);

  // Handle mutation
  return (mutation, state) => {
    if (mutation.type.split('/')[0] === 'vuexOverlay') return

    const nextState = deepCopy(state);
    const compared = getDifference(prevState, nextState);

    store.mutationsHistory.history.push({
      id: store.mutationsHistory.history.length + 1,
      type: mutation.type,
      payload: mutation.payload,
      prevState: compared.prev,
      nextState: compared.next,
      beforeState: prevState,
      afterState: nextState,
      time: getTime()
    })

    store.mutationsHistory.current = store.mutationsHistory.history.length

    prevState = nextState
  }
}