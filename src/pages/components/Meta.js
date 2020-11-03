import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = () => {
  return (
    <Helmet>
      <html lang="ja" />
      <title>sample site</title>
      <meta name="description" content="説明文" />
    </Helmet>
  )
}
export default Meta;
