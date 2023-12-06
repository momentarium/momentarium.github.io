import React, { useEffect } from 'react';

const WaitlistWidget = () => {
  useEffect(() => {
    // Load external CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css';
    document.head.appendChild(cssLink);

    // Load external JavaScript
    const jsScript = document.createElement('script');
    jsScript.src = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js';
    document.body.appendChild(jsScript);

    return () => {
      // Cleanup when the component is unmounted
      document.head.removeChild(cssLink);
      document.body.removeChild(jsScript);
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="row justify-content-center" id="getWaitlistContainer" data-waitlist_id="12312" data-widget_type="WIDGET_1"></div>
  );
};

export default WaitlistWidget;
