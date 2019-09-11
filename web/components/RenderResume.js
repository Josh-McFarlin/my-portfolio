import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import { Document, Page, pdfjs } from 'react-pdf';

import client from '../client';


pdfjs.GlobalWorkerOptions.workerSrc = '/static/pdf.worker.min.js';

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

class RenderResume extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            numPages: null,
            pageNumber: 1,
            pdfLink: null,
            imageLink: null
        };
    }

    async componentDidMount() {
        const { image, pdf } = this.props;

        if (pdf != null) {
            const response = await client.fetch(`*[_id == "${pdf.asset._ref}"][0]`);

            this.setState({
                pdfLink: response.url
            });
        }

        if (image != null) {
            const imageLink = await urlFor(image)
                .height(1200)
                .auto('format')
                .url();

            this.setState({
                imageLink
            });
        }
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({
            numPages
        });
    };

    render() {
        const { first, second, link } = this.props;
        const { pageNumber, numPages, pdfLink, imageLink } = this.state;

        return (
            <div>
                {(link || pdfLink) && (
                <>
                    <Document
                        file={pdfLink != null ? pdfLink : link}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                        options={{
                            cMapUrl: 'cmaps/',
                            cMapPacked: true,
                            renderMode: 'svg'
                        }}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                </>
                )}

            </div>
        );
    }
}

RenderResume.propTypes = {
    first: PropTypes.string,
    second: PropTypes.string,
    image: PropTypes.shape({
        asset: {
            _ref: PropTypes.string,
            _type: PropTypes.string
        },
        _type: PropTypes.string
    }),
    link: PropTypes.string,
    pdf: PropTypes.shape({
        _type: PropTypes.string,
        asset: PropTypes.shape({
            _ref: PropTypes.string,
            _type: PropTypes.string
        })
    })
};

RenderResume.defaultProps = {
    first: 'link',
    second: 'pdf',
    image: null,
    link: null,
    pdf: null
};

export default RenderResume;
