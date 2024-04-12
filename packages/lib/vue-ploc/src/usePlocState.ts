import { Ploc } from '@core/common';
import {
  type DeepReadonly,
  ref,
  onMounted,
  onUnmounted,
  readonly,
  type Ref,
} from 'vue';

export function usePlocState<S>(bloc: Ploc<S>): DeepReadonly<Ref<S>> {
  const state = ref(bloc.state) as Ref<S>;

  const stateSubscription = (newState: S) => {
    state.value = newState;
  };

  onMounted(() => {
    bloc.subscribe(stateSubscription);
  });

  onUnmounted(() => {
    bloc.unsubscribe(stateSubscription);
  });

  return readonly(state);
}
