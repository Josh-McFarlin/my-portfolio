// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import route from './documents/route';
import siteConfig from './documents/siteConfig';
import socialLink from './documents/socialLink';
import resumePage from './documents/resumePage';

// Object types
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';
import job from './objects/job';
import project from './objects/project';
import school from './objects/school';
import skill from './objects/skill';
import titledLink from './objects/titledLink';
import socialLinks from './objects/socialLinks';
import sectionHeader from './objects/sectionHeader';
import figure from './objects/figure';
import icon from './objects/icon';

// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import emailForm from './objects/emailForm';
import textSection from './objects/textSection';
import projectsSection from './objects/projectsSection';
import workExperience from './objects/workExperience';
import education from './objects/education';
import skillSet from './objects/skillSet';
import basicImage from './objects/basicImage';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    name: 'default',
    // Then proceed to concatenate our our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        cta,
        embedHTML,
        figure,
        hero,
        imageSection,
        internalLink,
        link,
        emailForm,
        page,
        portableText,
        route,
        simplePortableText,
        siteConfig,
        textSection,
        workExperience,
        job,
        projectsSection,
        project,
        education,
        school,
        skillSet,
        skill,
        titledLink,
        basicImage,
        socialLinks,
        sectionHeader,
        socialLink,
        resumePage,
        icon
    ])
});
