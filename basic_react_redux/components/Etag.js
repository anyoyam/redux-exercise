import React, {PropTypes} from 'react';

const Etag = ({id, name, onClickEtag}) => {
    return (
        <a href="#" onClick={(e) => {
            e.preventDefault();
            onClickEtag(id);
        }}>{name}</a>
    );
};

Etag.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onClickEtag: PropTypes.func.isRequired
};

export default Etag;
