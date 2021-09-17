import React from "react"
import PropTypes from "prop-types"

const HTML = (props) => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="The World Standard in Home Staging Education. StagedHomes is the premier accredited designation for professional home stagers." />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Raleway:700,400,300' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=PT+Serif' rel='stylesheet' type='text/css' />

        <script src="https://use.fontawesome.com/3e5471d65c.js"></script>


        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} id="main-page" className="boxed pattern-1">
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default HTML;
