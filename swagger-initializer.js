window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "./end-points/eweb-onpremise-api-collections.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    supportedSubmitMethods: [],
    layout: "BaseLayout",
    // Hide authorize button
    showCommonExtensions: false,
    // Disable OAuth2 redirect if needed
    oauth2RedirectUrl: null,
  });

  //</editor-fold>
};
