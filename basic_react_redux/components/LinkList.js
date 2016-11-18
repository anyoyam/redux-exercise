import React, {PropTypes} from 'react';
import Link from './Link';

const LinkList = ({list, onClickMtag, onClickEtag}) => {
    return (
        <ul>
            {list.map(i => {
                return (<li><Link {...i} onClickMtag={onClickMtag} onClickEtag={onClickEtag}/></li>)
            })}
        </ul>
    );
};

LinkList.propTypes = {
    onClickEtag: PropTypes.func.isRequired,
    onClickMtag: PropTypes.func.isRequired
};


export default LinkList;
