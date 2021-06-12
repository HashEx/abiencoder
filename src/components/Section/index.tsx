import React from 'react';
import classnames from 'classnames';

import './Section.css';

export interface SectionProps {
    className?: string;
    title?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({className, children, title, id}) => {
    const classNames = classnames("section", "container", className);
    return (
        <section className={classNames} id={id}>
            {title && <h2 className="section__title">{title}</h2>}
            <div className="section__content">
                {children}
            </div>
        </section>
    )
}

export default Section;