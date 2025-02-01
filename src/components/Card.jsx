import PropTypes from 'prop-types'


const Card = ({coffee}) => {
    const {name} = coffee;
    // console.log(coffee)
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

Card.propTypes = {
    coffee: PropTypes.object.isRequired
};

export default Card;