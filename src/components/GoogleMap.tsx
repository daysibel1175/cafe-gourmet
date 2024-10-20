import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.7753971246107!2d-80.42484402558841!3d26.13886529291946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90ae4db0fffff%3A0xb2d0edd71a1e63c7!2sCaffe%20Gourmet!5e0!3m2!1ses!2sbr!4v1729445303740!5m2!1ses!2sbr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
