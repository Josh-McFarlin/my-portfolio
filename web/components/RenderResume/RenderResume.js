import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import { Document, Page, pdfjs } from 'react-pdf';

import client from '../../client';
import styles from './RenderResume.module.css';


pdfjs.GlobalWorkerOptions.workerSrc = '/static/pdf.worker.min.js';

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

class RenderResume extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pageNumber: 1,
            pdfLink: null,
            imageLink: null,
            imageLoading: true,
            showWhich: props.first
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
                .height(3000)
                .auto('format')
                .url();

            this.setState({
                imageLink
            });
        }
    }

    onImageLoaded = () => {
        this.setState({
            imageLoading: false
        });
    };

    onRenderFail = () => {
        const { first, second } = this.props;

        this.setState((prevState) => {
            let next = null;

            if (prevState.showWhich === first && first !== second) {
                next = second;
            } else if (prevState.showWhich === second) {
                ['link', 'pdf', 'image'].forEach((item) => {
                    if (first !== item && second !== item) {
                        next = item;
                    }
                });
            }

            return {
                showWhich: next
            };
        });
    };

    render() {
        const { link } = this.props;
        const { pageNumber, pdfLink, imageLink, imageLoading, showWhich } = this.state;

        return (
            <div className={styles.root}>
                {(link || pdfLink) && (
                    <a
                        className={styles.link}
                        href={showWhich === 'link' ? link : pdfLink}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Download PDF
                    </a>
                )}
                <div className={styles.resumeContainer}>
                    {(showWhich === 'link' || showWhich === 'pdf') && (
                        <Document
                            className={styles.resume}
                            file={showWhich === 'link' ? link : pdfLink}
                            options={{
                                cMapUrl: 'cmaps/',
                                cMapPacked: true
                            }}
                            renderMode='svg'
                            loading={<div className={styles.loading}>Loading Resume...</div>}
                            onSourceError={this.onRenderFail}
                            onLoadError={this.onRenderFail}
                        >
                            <Page
                                pageNumber={pageNumber}
                                onRenderError={this.onRenderFail}
                            />
                        </Document>
                    )}
                    {(showWhich === 'image') && (
                        <>
                            {(imageLoading) && (
                                <div className={styles.loading}>Loading Resume...</div>
                            )}
                            <img
                                className={styles.resumeImage}
                                src={imageLink}
                                alt='Resume'
                                onLoad={this.onImageLoaded}
                                onError={this.onRenderFail}
                            />
                        </>
                    )}
                    {(showWhich == null) && (
                        <div className={styles.loading}>
                            Could not load resume at this time,
                            please try again later!
                        </div>
                    )}
                </div>
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
