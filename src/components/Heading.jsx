import PropTypes from 'prop-types'


const Heading = ({title, subtitle}) => {
    return (
        <div className="text-center my-8">
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='text-lg font-medium mt-3'>{subtitle}</p>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

export default Heading;