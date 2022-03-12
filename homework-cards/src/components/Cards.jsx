import React from 'react';
import PropTypes from 'prop-types';

const Cards = (props) => {

    let showImage = '';

    if (!props.image) {
        showImage = 'd-none'
    }

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="https://placehold.co/280x180" className={`${showImage} card-img-top`} alt="Чо то тут" />
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

Cards.propTypes = {
    image: PropTypes.bool,
    children: PropTypes.node
}
Cards.defaultProps = {
    image: '',
    id: '',
    children: null,
}

export default Cards;


