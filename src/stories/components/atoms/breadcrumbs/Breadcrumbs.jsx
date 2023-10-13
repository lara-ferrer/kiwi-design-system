import React from "react";
import PropTypes from "prop-types";
import "./breadcrumbs.scss";
import "../../../../styles/index.scss";

export const Breadcrumbs = ({ links }) => {
  return (
    <div className={'kiwi-breadcrumbs'}>
      {links.map((link, i) =>
        <>
          <a href={link.url} className={`kiwi-breadcrumbs__item ${link.isActive ? 'kiwi-breadcrumbs--active' : ''}`}>{link.title}</a>
          {i !== links.length -1 && <span> / </span>}
        </>

      )}
    </div>
  );
};

Breadcrumbs.propTypes = {
  links: PropTypes.array.isRequired
};

Breadcrumbs.defaultProps = {
  links: [
    {
      title: 'Inicio',
      url: 'https://www.greenspot.com/',
    },
    {
      title: 'Zaragoza',
      url: 'https://www.greenspot.com/ciudades/zaragoza'
    },
    {
      title: 'Restaurantes',
      url: 'https://www.greenspot.com/ciudades/zaragoza/restaurantes',
      isActive: true
    }
  ]
};
