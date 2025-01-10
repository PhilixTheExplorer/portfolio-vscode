const contactItems = [
  {
    social: "website",
    link: "kaunghsethein",
    href: "https://portfolio-vscode-ten.vercel.app/",
  },
  {
    social: "email",
    link: "heinknine@gmail.com",
    href: "mailto:heinknine@gmail.com",
  },
  {
    social: "github",
    link: "PhilixTheExplorer",
    href: "https://github.com/PhilixTheExplorer",
  },
  {
    social: "linkedin",
    link: "kaung-hset-hein",
    href: "https://linkedin.com/in/kaung-hset-hein",
  },
];

function ContactPage() {
  return (
    <div className="flex flex-col justify-center h-full p-8 sm:p-4">
      <h1 className="text-4xl font-bold mb-8 sm:text-2xl">Contact Me</h1>
      <div className="code text-xs leading-[1.5rem] sm:text-lg counter-reset-line">
        <p className="line before:content-[counter(line)] before:counter-increment-line before:mr-4 before:text-gray-500">
          <span className="text-[#D16D9E]">const</span>
          <span className="text-[#42A5F5]"> socials </span>
          <span className="text-white">= </span>
          <span className="text-yellow-500">&#123;</span>
        </p>
        {contactItems.map((item, index) => (
          <p
            className="line before:content-[counter(line)] before:counter-increment-line before:mr-4 before:text-gray-500"
            key={index}
          >
            &nbsp;&nbsp;&nbsp;{item.social}:{" "}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#42A5F5] no-underline hover:underline"
            >
              {item.link}
            </a>
            ;
          </p>
        ))}
        <p className="line text-yellow-500 before:content-[counter(line)] before:counter-increment-line before:mr-4 before:text-gray-500">
          &#125;
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
