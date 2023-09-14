import { Ploc } from "core";
import { DeepReadonly, readonly, Ref } from "vue";

export function useBlocState<S>(bloc: Ploc<S>): DeepReadonly<Ref<S>> {
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
