const links = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/marissawongn/",
  },
  {
    name: "dev",
    url: "https://dev.to/marissa",
  },
];

function App() {
  return (
    <div className="soon">
      <div className="title">
        <div>site em</div>
        <div>construção</div>
      </div>
      <div className="contact">
        <div className="email">contato@marissa.com.br</div>
        <div className="links">
          {links.map((l, index) => (
            <>
              <div
                className="social"
                onClick={() => window.open(l.url, "_blank")}
              >
                {l.name}
              </div>
              {links.length > index + 1 && <div className="divider"></div>}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
