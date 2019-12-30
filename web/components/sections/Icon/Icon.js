import React from 'react';
import PropTypes from 'prop-types';

import Person from './Icons/Person';
import Mail from './Icons/Mail';
import List from './Icons/List';
import Document from './Icons/Document';


const Icon = ({ type, ...rest }) => {
    switch (type) {
        case 'Person': {
            return <Person {...rest} />;
        }
        case 'Mail': {
            return <Mail {...rest} />;
        }
        case 'List': {
            return <List {...rest} />;
        }
        case 'Document': {
            return <Document {...rest} />;
        }
        default: {
            return null;
        }
    }
};

Icon.propTypes = {
    type: PropTypes.string.isRequired
};

export default Icon;
