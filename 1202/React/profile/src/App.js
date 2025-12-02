import logo from './logo.svg';
import './App.css';

function App() {
  const profile = {
    name: "김철수", 
    age: 28,
    job: "프론트엔드 개발자",
    skills: ["JavaScript", "React", "TypeScript", "CSS"], 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuygckPRusQJccRa6je2IFo_ElBWLt_Gc3Q&s"
  };
  return (
    <div className="profile-card">
      <img src={profile.image} alt="profile" className="profile-img" />
      
      <h2>{profile.name}</h2>
      <p>나이: {profile.age}</p>
      <p>직업: {profile.job}</p>

      <h4>보유 스킬</h4>
      <ul>
        {profile.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
