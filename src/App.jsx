import React from 'react';

// 1. DATA OBJECT - Change your info here!
const profileData = {
  name: "Adeelsoomro",
  role: "Web Developer & Designer",
  about: "Hey! I am a web developer and web designer focused on creating clean interfaces.",
  education: [
    "Currently studying in 11th Grade",
    "11th Grade student",
    "Intermediate part 1"
  ],
  skills: ["Web Developer", "Web Designer", "Data Management"],
  contact: {
    email: "adeelsro3601@gmail.com",
    phone: "03083092133"
  }
};

// 2. REUSABLE SECTION COMPONENT
const Section = ({ title, children }) => (
  <div style={styles.section}>
    <h2 style={styles.sectionTitle}>{title}</h2>
    <div style={styles.sectionContent}>{children}</div>
    <hr style={styles.hr} />
  </div>
);

// 3. MAIN APP COMPONENT
function App() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <hr style={styles.hr} />
        <h1 style={styles.name}><i><b>{profileData.name.toUpperCase()}</b></i></h1>
        <hr style={styles.hr} />
      </header>

      {/* About Section */}
      <Section title="About me">
        <p>{profileData.about}</p>
      </Section>

      {/* Education Section */}
      <Section title="Education">
        {profileData.education.map((item, index) => (
          <p key={index} style={styles.noMargin}>{item}</p>
        ))}
      </Section>

      {/* Skills Section */}
      <Section title="Skills">
        {profileData.skills.map((skill, index) => (
          <p key={index} style={styles.noMargin}>{skill}</p>
        ))}
      </Section>

      {/* Contact Section */}
      <Section title="Contact">
        <p>| Email: {profileData.contact.email} | Phone: {profileData.contact.phone} |</p>
      </Section>
    </div>
  );
}

// 4. STYLES (JavaScript Object)
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: '"Times New Roman", Times, serif',
    padding: '20px',
    color: '#333'
  },
  header: {
    marginBottom: '30px'
  },
  name: {
    fontSize: '2.5rem',
    margin: '10px 0'
  },
  section: {
    marginBottom: '20px'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  sectionContent: {
    lineHeight: '1.6'
  },
  noMargin: {
    margin: '5px 0'
  },
  hr: {
    border: '0',
    borderTop: '1px solid #000',
    margin: '10px 0'
  }
};

export default App;