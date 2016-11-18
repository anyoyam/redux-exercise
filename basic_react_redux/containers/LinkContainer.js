import {connect} from 'react-redux';
import LinkList from '../components/LinkList';
import {filterLinkM, filterLinkE} from '../actions/index';

const filterList = (list, mfilter, efilter) => {
    let rtn = list;
    if (mfilter != -1)
        rtn = rtn.filter(i => {
            if (i.mtag.id == mfilter)
                return true;
        });
    if (efilter != -1)
        rtn = rtn.filter(i => {
            if (i.etag.hasOwnProperty(efilter))
                return true;
        });
    return rtn;
};

const mapStateToProps = (state) => {
    return {
        list: filterList(state.list, state.filter.mid, state.filter.eid)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickMtag: (id) => {
            console.log("mtag:" + id);
            dispatch(filterLinkM(id));
        },
        onClickEtag: (id) => {
            console.log("etag:" + id);
            dispatch(filterLinkE(id));
        }
    };
};

const LinkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkList);

export default LinkContainer;
