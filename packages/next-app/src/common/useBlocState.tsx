"use client";

import { Ploc } from "core";
import { useEffect, useState } from "react";

export function useBlocState<S>(bloc: Ploc<S>) {
    const [state, setState] = useState(bloc.state);

    useEffect(() => {
        const stateSubscription = (state: S) => {
            setState(state);
        };

        bloc.subscribe(stateSubscription);

        return () => bloc.unsubscribe(stateSubscription);
    }, [bloc]);

    return state;
}
