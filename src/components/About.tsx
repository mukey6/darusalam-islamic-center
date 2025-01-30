import React from "react";

export default function About() {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-mosque-primary">
            About Darusalam Islamic Center
          </h2>
          <p className="text-mosque-text/80 text-lg leading-relaxed">
            Here at Darusalam we focus on spiritual growth, education, and
            community connection. We are dedicated to providing online classes,
            workshops, and programs that make learning about the Deen accessible
            to everyone, no matter where you are. We offer classes in both
            English and Afaan Oromo so that everyone can benefit from the
            teaching.
          </p>
          <p className="text-mosque-text/80 text-lg leading-relaxed">Anas ibn Malik reported: The Messenger of Allah, peace and blessings be upon him, said: 
            <span className="font-extrabold"> {`"Seeking knowledge is an obligation upon every Muslim."`}</span>
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* <div className="p-6 rounded-lg bg-mosque-background">
              <h3 className="text-xl font-semibold text-mosque-primary mb-2">
                Daily Prayers
              </h3>
              <p className="text-mosque-text/70">
                Open for all five daily prayers with congregation
              </p>
            </div> */}
            <div className="p-6 rounded-lg bg-mosque-background">
              <h3 className="text-xl font-semibold text-mosque-primary mb-2">
                Islamic Education
              </h3>
              <p className="text-mosque-text/70">
                Daily classes for youth and adults
              </p>
            </div>
            <div className="p-6 rounded-lg bg-mosque-background">
              <h3 className="text-xl font-semibold text-mosque-primary mb-2">
                Community Events
              </h3>
              <p className="text-mosque-text/70">
                Regular gatherings (Muhadara) and special events
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
