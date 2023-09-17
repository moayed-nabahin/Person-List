import "./App.css";

const App = () => <PersonList />;
const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "Ali",
      job: "developer",
    },
    {
      img: 33,
      name: "Ahmed",
      job: "Designer",
    },
    {
      img: 44,
      name: "Omer",
      job: "UI/UX",
    },
  ];

  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam debitis
        aut necessitatibus sed
      </Person>
      <Person person={people[2]} />
    </section>
  );
};
const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="person" />
      <dir>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <p>{children}</p>
      </dir>
    </div>
  );
};

export default App;
