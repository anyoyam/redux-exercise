import {actionGeneration} from '../util';

export const link = {
    add: "ADD_LINK",
    rm: 'DELETE_LINK',
    rp: 'MODIFY_LINK'
};

export const filter = {
    mtag: "FILTER_BY_MTAG",
    etag: "FILTER_BY_ETAG"
};

export const addLink = actionGeneration(link.add, 'title', 'url', 'mtag', 'etag', 'ctime');

export const modfiyLink = actionGeneration(link.rp, 'id', 'ndata');

export const deleteLink = actionGeneration(link.rm, 'id');

export const filterLinkM = actionGeneration(filter.mtag, 'mid');

export const filterLinkE = actionGeneration(filter.etag, 'eid');

export default {link, filter};
