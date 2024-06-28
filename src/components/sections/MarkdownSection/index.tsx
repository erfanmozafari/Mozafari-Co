import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import Section from '../Section';

export default function MarkdownSection(props) {
    const { type, elementId, colors, backgroundSize, title, text, styles = {} } = props;

    return (
        <Section type={type} elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self}>
            <div className={classNames('markdown-section', styles.text ? mapStyles(styles.text) : null)}>
                {title && <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)}>{title}</h2>}
                <Markdown options={{ forceBlock: true, forceWrapper: true }}>
                    {text}
                </Markdown>
            </div>
        </Section>
    );
}

function mapStyles(styles) {
    // Implement your style mapping logic here
    return styles;
}