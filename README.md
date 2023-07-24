# Elastic JavaScript Injector Chrome Plugin

This is a Google Chrome plugin that injects the Elastic APM JavaScript agent into any web page. It allows the agent to report metrics to a specified Elastic APM server, thereby enabling you to collect performance data from the web pages you visit.

## Files

- `content.js`: This script retrieves the Elastic APM server URL from local storage and initializes the Elastic APM agent.
- `manifest.json`: This is the manifest file which provides important information about the extension to Chrome.
- `options.html`: This is the options page where you can specify the Elastic APM server URL.
- `options.js`: This script contains functions to save the Elastic APM server URL to local storage, and to restore the server URL from local storage when the options page is loaded.

## How to Install and Run

1. **Clone the repository:**

    If the plugin is hosted on a Git repository, you can clone it with the following command:

    ```
    git clone <repository_url>
    ```

    Replace `<repository_url>` with the actual URL of the Git repository.

2. **Load the extension into Chrome:**

    - Open Google Chrome.
    - Click on the three dots in the top-right corner to open the Chrome menu.
    - Navigate to `More tools > Extensions`.
    - In the Extensions page, turn on the "Developer mode" switch in the top-right corner.
    - Click on the "Load unpacked" button.
    - In the file dialog, navigate to the directory where you cloned the repository, and click on the "Select Folder" button.

3. **Set the Elastic APM server URL:**

    - After loading the extension, it will appear in the Extensions page.
    - Click on the "Details" button of the extension.
    - In the Details page, click on the "Extension options" link.
    - In the options page, enter the URL of your Elastic APM server into the text box, and click on the "Save" button. If you do not set a URL, the default is `http://localhost:8200`.

4. **Use the extension:**

    - The extension works automatically in the background. It injects the Elastic APM JavaScript agent into every web page that you visit.
    - You can view the collected performance data in the Kibana dashboard of your Elastic Stack.

## Note

This plugin requires access to the `activeTab`, `scripting`, and `storage` permissions in Chrome. These permissions allow it to interact with the current active tab, execute scripts in the context of web pages, and use the local storage API respectively.

**Disclaimer**: Be mindful when using the Elastic JavaScript Injector as it can capture performance metrics for all web pages you visit, including sensitive information. Always respect privacy policies and only monitor sites you have explicit permission to monitor.
