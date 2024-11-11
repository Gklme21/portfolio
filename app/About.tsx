import Image from "next/image";

const icons = [
  "c.svg",
  "c-plusplus.svg",
  "python.svg",
  "javascript.svg",
  "typescript-icon.svg",
  "php.svg",
  "html-5.svg",
  "css-3.svg",
  "mysql-icon.svg",
  "postgresql.svg",
  "mongodb-icon.svg",
  "redis.svg",
  "elasticsearch.svg",
  "microsoft-azure.svg",
  "aws.svg",
  "google-cloud.svg",
  "nextjs-icon.svg",
  "nodejs-icon.svg",
  "django-icon.svg",
  "xampp.svg",
  "docker-icon.svg",
  "kubernetes.svg",
  "storybook-icon.svg",
  "chromatic-icon.svg",
  "kibana.svg",
  "logstash.svg",
  "tailwindcss-icon.svg",
  "bootstrap.svg",
  "selenium.svg",
  "git-icon.svg",
];

const About = () => {
  return (
    <>
      <div className="text-white flex flex-col items-center">
        <h4 className="text-4xl md:text-6xl text-transparent bg-custom-gradient bg-clip-text my-4 xl:mb-8">
          About
        </h4>
        <p className="text-base md:text-3xl text-justify w-3/4 xl:w-3/5 mt-4 xl:mt-8 mb-4 xl:mb-16">
          I am an aspiring software developer with a decade of coding
          experience, focusing on full stack development. I am proficient in
          C++, Python, JavaScript, and SQL. Additionally, I have completed
          various projects in AI and ML, providing me with a strong foundation
          in these areas.
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4 p-4 md:w-3/4 md:mx-auto">
        {icons.map((icon, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              alt="Icon"
              className="md:w-16 md:h-16 xl:w-20 xl:h-20"
              src={icon}
              width="40"
              height="40"
            />
          </div>
        ))}
      </div>

      {/* <p>
        Display about my education and the relevant courses learnt in school
      </p> */}
    </>
  );
};

export default About;
