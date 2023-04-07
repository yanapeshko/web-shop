import { Helmet } from "react-helmet";
import React from "react";

const Meta = (props) => {
  return (
    <Helmet>
      <meta carSet="utf-8" />
      <title>{props.title}</title>
    </Helmet>
  );
};

export default Meta;
