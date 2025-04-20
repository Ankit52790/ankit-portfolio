const Home = () => (
  <div className="home">
    <h1>Hi, I'm Ankit Kumar</h1>
    <p>
      Aspiring Software Engineer, AI Engineer, and Data Scientist with hands-on
      experience in ML, Python, and Cloud.
    </p>
    <a href={process.env.PUBLIC_URL + "/resume/Ankit_Kumar_Resume.pdf"} download>
      📄 Download Resume
    </a>
  </div>
);

export default Home;
