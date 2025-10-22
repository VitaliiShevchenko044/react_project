import "./styles.css";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

function Lesson_03() {
  const homer = {
    avatarURL:
      "https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg",
    firstName: "Homer",
    surname: "Simpson",
    job: "Safety Inspector",
    hobbies: ["drinking beer", "watching TV", "eating", "bowling"],
  };

  const marge = {
    avatarURL:
      "https://people.com/thmb/QWhbgiph8yu9vkGras44LnN71TQ=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/simpsons-marge-050725-b57d3c67df25418a84be800ff0888798.jpg",
    firstName: "Marge",
    surname: "Simpson",
    job: "No Job",
    hobbies: ["cooking"],
  };

  const bart = {
    avatarURL:
      "https://funny.klev.club/uploads/posts/2024-03/funny-klev-club-p-smeshnie-kartinki-bart-simpson-3.jpg",
    firstName: "Bart",
    surname: "Simpson",
    job: "No Job",
    hobbies: ["skate"],
  };

  const getUser = () => {
    console.log("Button works");
  };

  return (
    <div className="lesson03_page_wrapper">
      <Card
        avatarURL={marge.avatarURL}
        firstName={marge.firstName}
        lastName={marge.surname}
        job={marge.job}
        hobbies={marge.hobbies}
      />
      <Card
        avatarURL={homer.avatarURL}
        firstName={homer.firstName}
        lastName={homer.surname}
        job={homer.job}
        hobbies={homer.hobbies}
      />
      <Card
        avatarURL={bart.avatarURL}
        firstName={bart.firstName}
        lastName={bart.surname}
        job={bart.job}
        hobbies={bart.hobbies}
      />
      <div className="button_container">
        <Button name="Get user" />
        <Button name="Send request" />
        <Button onClick={getUser} >
            <img className="icon" src="https://static.thenounproject.com/png/198954-200.png" alt="" />
        </Button>
        {/* <button onClick={getUser}>Get</button> */}
      </div>
    </div>
  );
}

export default Lesson_03;
