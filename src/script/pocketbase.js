import PocketBase, { Record, Admin } from "pocketbase";

import { useEffect, useState } from "react";
import { pocketBaseUrl } from "./globalVariables";

export const isAdmin = () => {
    if (pb.authStore.model instanceof Admin) return "admin";
    if (pb.authStore.model instanceof Record) return "user";
    return "none";
};

export const pb = new PocketBase(pocketBaseUrl);
pb.autoCancellation(false);

// < !-- // HOOK \\ --! > \\

export function useCollection(
    collection,
    defaultValue = [],
    {
        queryParams: defaultQueryParams,
        realtime,
        pageParams: newPageParams,
    } = {},
    callbackOnUpdate
) {
    let pageParams = { page: 1, perPage: 50, ...newPageParams };
    const [result, setResult] = useState({ items: defaultValue });
    const [loading, setLoading] = useState(true);
    const [params, setParams] = useState(defaultQueryParams || {});

    const getList = async (newQueryParams = {}, reset = false) => {
        try {
            let newParsedQueryParams = {
                ...params,
                ...newQueryParams,
            };
            if (reset) {
                newParsedQueryParams = defaultQueryParams
                    ? defaultQueryParams
                    : {};
            }
            setLoading(true);
            setParams(newParsedQueryParams);
            const { items, page, perPage, totalItems } = await pb
                .collection(collection)
                // .getFullList(200, newParsedQueryParams);
                .getList(
                    pageParams.page,
                    pageParams.perPage,
                    newParsedQueryParams
                );
            setResult({
                items: items,
                others: { page, perPage, totalItems },
            });
        } catch (e) {
            console.log({
                message: "Impossible d'executer la requete",
                title: "Erreur !",
            });
        }
        setLoading(false);
    };

    const unsubcribe = async (unsub) => {
        unsub && (await unsub());
    };

    useEffect(() => {
        getList();
        let unsub;
        if (realtime)
            unsub = pb.collection(collection).subscribe("*", () => getList());

        return () => {
            unsubcribe(unsub);
        };
    }, []);

    return {
        records: result.items.reverse(),
        invalidate: getList,
        loading,
        otherResult: result.others,
    };
}
export const useAuthStore = () => {
    const [authStore, setAuthStore] = useState({
        store: pb.authStore,
        id: 0,
        status: isAdmin(),
    });

    useEffect(() => {
        const removeListener = pb.authStore.onChange((token, model) => {
            setAuthStore((old) => ({
                store: pb.authStore,
                id: old.id + 1,
                status: isAdmin(),
            }));
        }, false);
        return () => {
            removeListener();
        };
    }, []);

    return { auth: authStore?.store, status: authStore.status };
};

export function getUrl(record, filename, queryParams) {
    if (filename && record instanceof Record)
        return pb.getFileUrl(record, filename, queryParams);
    return undefined;
}

export default pb;
