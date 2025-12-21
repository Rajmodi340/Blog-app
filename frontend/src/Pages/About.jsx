import React from "react";
import { useAuth } from "../context/Authprovider";

function About() {
  const { profile } = useAuth();

  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About Me</h1>

      <p>
        Hi, I’m{" "}
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
          {profile?.user?.name || "Raj"}
        </strong>
        , a passionate full stack developer who loves building modern,
        scalable, and user-friendly web applications. I enjoy turning complex
        problems into simple, elegant solutions through clean and efficient
        code.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">
        Technical Expertise
      </h2>

      <p>
        <strong>Front-End:</strong> Experienced in React.js, JavaScript,
        HTML5, CSS3, and responsive design. I focus on creating intuitive and
        visually appealing user interfaces that deliver great user experiences.
        <br />
        <br />
        <strong>Back-End:</strong> Skilled in Node.js and Express.js, with hands-on
        experience in building RESTful APIs and working with databases like
        MongoDB and SQL-based systems.
        <br />
        <br />
        <strong>DevOps & Tools:</strong> Familiar with Git & GitHub, Docker, and
        basic CI/CD concepts. I enjoy learning DevOps practices to better
        understand deployment and system reliability.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">
        Professional Highlights
      </h2>

      <p>
        I have worked on multiple full-stack projects that strengthened my
        problem-solving skills and deepened my understanding of real-world
        application development. I enjoy collaborating with others, learning
        from feedback, and continuously improving my skills to stay updated
        with evolving technologies.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">
        Personal Interests
      </h2>

      <p>
        Outside of coding, I’m a big cricket enthusiast and admire{" "}
        <strong>King Kohli</strong> for his discipline and mindset. I believe in
        consistent growth, hard work, and staying curious. These values push me
        to keep learning and building better software every day.
      </p>
    </div>
  );
}

export default About;
