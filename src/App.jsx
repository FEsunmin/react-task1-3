import "./App.css";

export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((stud) => stud.age >= 18);

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {/* TODO: map을 사용해서 filteredStudents를 여기에 렌더링하세요. */}
        {filteredStudents.map((stud) => (
          <li
            className="students-list"
            key={students.name}
            // TODO: 학생이름을 클릭하면 나이와 점수가 salert 돼야 해요.
            onClick={() => alert(`나이: ${stud.age} | 점수: ${stud.grade}`)}
          >
            {stud.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
