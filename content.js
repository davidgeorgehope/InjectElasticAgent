    chrome.storage.local.get(['elasticUrl'], function(result) {
      console.log('Configuration currently is ' + result.elasticUrl);
      var getUrl = window.location;
      var baseUrl = getUrl.host;      
      baseUrl = baseUrl.replace(/\./g, '-');
      elasticApm.init({
        serviceName: baseUrl,
        serverUrl: result.elasticUrl,
      });
    });
  