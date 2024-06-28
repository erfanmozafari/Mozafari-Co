import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';

export default function PricingTableSection(props) {
    const { type, elementId, colors, title, subtitle, plans = [], styles = {} } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self}>
            {title && <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)}>{title}</h2>}
            {subtitle && (
                <p
                    className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, {
                        'mt-6': title
                    })}
                >
                    {subtitle}
                </p>
            )}
            {plans.length > 0 && (
                <div
                    className={classNames('flex', 'flex-wrap', 'justify-center', {
                        'mt-12 lg:mt-16': title || subtitle
                    })}
                >
                    {plans.map((plan, index) => (
                        <PricingPlan key={index} {...plan} />
                    ))}
                </div>
            )}
        </Section>
    );
}

function PricingPlan(props) {
    const { title, price, features = [], image } = props;
    return (
        <div className="sb-component sb-component-block sb-component-pricing-plan flex-1 mr-6 mb-6 p-6 border rounded-lg text-center max-w-xs">
            {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
            {image && <img src={image} alt={title} className="mt-12 mb-12 mx-auto max-w-full h-auto" />}
            {features.length > 0 && (
                <ul className="text-center">
                    {features.map((feature, index) => (
                        <li key={index} className="mb-2">
                            {feature}
                        </li>
                    ))}
                </ul>
            )}
            {price && <p className="text-xl font-semibold mt-4">{price}</p>}
            {/* <a href="#" className="see-more-button mt-4 inline-block px-6 py-2 text-white bg-blue-500 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105">
                See More
            </a> */}
        </div>
    );
}