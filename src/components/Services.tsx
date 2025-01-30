import React from "react";

export default function Services() {
  return (
    <div className="bg-mosque-background py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-mosque-primary text-center mb-16">
          Online Classes
        </h2>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-mosque-primary mb-8 border-b-2 border-mosque-secondary pb-2">
            Afaan Oromo Classes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter((service) => service.language === "Oromo")
              .map((course, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
                >
                  <h3 className="text-xl font-semibold text-mosque-primary mb-2">
                    {course.title}
                  </h3>
                  <p className="text-mosque-text/70 mb-4">
                    {course.description}
                  </p>
                  <p className="text-mosque-secondary font-medium">
                    {course.time}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-mosque-primary mb-8 border-b-2 border-mosque-secondary pb-2">
            English Classes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter((service) => service.language == "English")
              .map((course, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
                >
                  <h3 className="text-xl font-semibold text-mosque-primary mb-2">
                    {course.title}
                  </h3>
                  <p className="text-mosque-text/70 mb-4">
                    {course.description}
                  </p>
                  <p className="text-mosque-secondary font-medium">
                    {course.time}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    language: "English",
    title: "Al-Arba'in al-Nawawiyya",
    description: "a compilation of forty hadiths by Imam al-Nawawi",
    time: "Wednesdays and Thursdays 7:00 PM - 7:30 PM",
  },
  {
    language: "English",
    title: "Sahih Adab al-Islamiyyah",
    description: "Learn the Islamic etiquettes",
    time: "Thursdays 7:30 PM - 8:00 PM",
  },
  {
    language: "Oromo",
    title: "Quran Classes (Sisters Only)",
    description: "Learn to read the Quran",
    time: "Wednesday and Thursday 5:00 PM - 7:00 PM",
  },
  {
    language: "English",
    title: "Shama'il al-Muhammadiyya",
    description:
      "Detailed descriptions of the moral, physical and spiritual qualities of the Prophet Muhammad ﷺ.",
    time: "Wednesdays 7:30 PM - 8:00 PM",
  },
  {
    language: "Oromo",
    title: "Riyad As-Salihin ",
    description:
      "selection of hadith compiled by Imam Yahya ibn Sharaf an-Nawawi",
    time: "Mondays 7:00 PM - 7:30 PM, Tuesdays 7:30 PM - 8:00 PM, Wednesdays 8:00 PM - 8:30 PM",
  },
  {
    language: "Oromo",
    title: "Tafsir al-Quran ",
    description:
      "Learn the explanation or interpretations of the verses of Quran",
    time: "Mondays 8:00 PM - 8:45 PM, Saturdays 7:45 PM - 8:45 PM",
  },
  {
    language: "Oromo",
    title: "Bulugh al-Maram",
    description:
      "Attainment of the Objective According to Evidences of the Ordinances",
    time: "Mondays 7:30 PM - 8:00 PM, Saturdays 7:00 PM - 7:45 PM, Sundays 7:30 PM - 8:30 PM",
  },
  {
    language: "Oromo",
    title: "Kitab at Tawheed",
    description: "The Book of Monotheism",
    time: "Tuesdays and Sundays 7:00 PM - 8:00 PM, ",
  },
  {
    language: "Oromo",
    title: "Zaad ul Maad",
    description:
      "classical encyclopedia detailing the History, practical tradition, statements and general guidance of the Prophet",
    time: "Tuesdays and Sundays 8:00 PM - 8:30 PM, ",
  },
];
