import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';


const Person = dynamic(() => import('./Icons/Person'));
const Mail = dynamic(() => import('./Icons/Mail'));
const List = dynamic(() => import('./Icons/List'));
const Document = dynamic(() => import('./Icons/Document'));

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
