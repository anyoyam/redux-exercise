import React, {PropTypes} from 'react';
import Etag from './Etag';

const Link = ({title, url, mtag, etag, onClickMtag, onClickEtag}) => {
    return (
        <span>
            <span className="mtag">[<a href="#" onClick={(e) => {
                e.preventDefault();
                onClickMtag(mtag.id);
            }}>{mtag.name}</a>]</span>
            <a className="link" href={url} target="_blank">{title}</a>
            <span className="etag">
                {etag.map(i => {
                    return <Etag {...i} onClickEtag={onClickEtag}/>
                })}
            </span>
        </span>
    );
}

Link.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onClickMtag: PropTypes.func.isRequired,
    onClickEtag: PropTypes.func.isRequired
};

export default Link;
