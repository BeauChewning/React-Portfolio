import React from 'react';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div>
        <p>
        "Water. Earth. Fire. Air. My grandmother used to tell me stories about the old days,
        a time of peace when the Avatar kept balance between the Water Tribes, Earth Kingdom,
        Fire Nation, and Air Nomads. But that all changed when the Fire Nation attacked.
        Only the Avatar mastered all four elements. Only he could stop the ruthless
        firebenders. But when the world needed him most, he vanished. A hundred
        years have passed and the Fire Nation is nearing victory in the War.
        Two years ago, my father and the men of my tribe journeyed to the
        Earth Kingdom to help fight against the Fire Nation, leaving me
        and my brother to look after our tribe. Some people believe that
        the Avatar was never reborn into the Air Nomads, and that the
        cycle is broken. But I haven't lost hope. I still believe that
        somehow, the Avatar will return to save the world."        </p>
        
      </div>
    </section>
  );
}

export default About;
