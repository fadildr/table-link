import { useState } from "react";
import "./App.css";
import { Table } from "./components/table";
import { Modal } from "./components/modal";

const dataDummy = [
  {
    id: 1,
    name: "Emily Chen",
    age: 28,
    occupation: "Software Engineer",
  },
  {
    id: 2,
    name: "Ryan Thompson",
    age: 32,
    occupation: "Marketing Manager",
  },
  {
    id: 3,
    name: "Sophia Patel",
    age: 25,
    occupation: "Data Analyst",
  },
  {
    id: 4,
    name: "Michael Lee",
    age: 41,
    occupation: "CEO",
  },
  {
    id: 5,
    name: "Olivia Brown",
    age: 29,
    occupation: "Graphic Designer",
  },
  {
    id: 6,
    name: "Alexander Hall",
    age: 38,
    occupation: "Sales Representative",
  },
  {
    id: 7,
    name: "Isabella Davis",
    age: 26,
    occupation: "Teacher",
  },
  {
    id: 8,
    name: "Ethan White",
    age: 35,
    occupation: "Lawyer",
  },
  {
    id: 9,
    name: "Lily Tran",
    age: 30,
    occupation: "Nurse",
  },
  {
    id: 10,
    name: "Julian Sanchez",
    age: 39,
    occupation: "Engineer",
  },
  {
    id: 11,
    name: "Ava Martin",
    age: 27,
    occupation: "Journalist",
  },
  {
    id: 12,
    name: "Benjamin Walker",
    age: 42,
    occupation: "Doctor",
  },
  {
    id: 13,
    name: "Charlotte Brooks",
    age: 31,
    occupation: "HR Manager",
  },
  {
    id: 14,
    name: "Gabriel Harris",
    age: 36,
    occupation: "IT Consultant",
  },
  {
    id: 15,
    name: "Hannah Taylor",
    age: 24,
    occupation: "Student",
  },
  {
    id: 16,
    name: "Jackson Brown",
    age: 40,
    occupation: "Business Owner",
  },
  {
    id: 17,
    name: "Kayla Lewis",
    age: 33,
    occupation: "Event Planner",
  },
  {
    id: 18,
    name: "Logan Mitchell",
    age: 37,
    occupation: "Architect",
  },
  {
    id: 19,
    name: "Mia Garcia",
    age: 29,
    occupation: "Artist",
  },
  {
    id: 20,
    name: "Natalie Hall",
    age: 34,
    occupation: "Teacher",
  },
  {
    id: 21,
    name: "Oliver Patel",
    age: 38,
    occupation: "Software Developer",
  },
  {
    id: 22,
    name: "Penelope Martin",
    age: 26,
    occupation: "Writer",
  },
  {
    id: 23,
    name: "Quinn Lee",
    age: 35,
    occupation: "Entrepreneur",
  },
  {
    id: 24,
    name: "Rachel Kim",
    age: 30,
    occupation: "Dentist",
  },
  {
    id: 25,
    name: "Samuel Jackson",
    age: 42,
    occupation: "Lawyer",
  },
  {
    id: 26,
    name: "Tessa Hall",
    age: 28,
    occupation: "Graphic Designer",
  },
  {
    id: 27,
    name: "Uma Patel",
    age: 39,
    occupation: "Marketing Manager",
  },
  {
    id: 28,
    name: "Vincent Brooks",
    age: 36,
    occupation: "IT Consultant",
  },
  {
    id: 29,
    name: "Walter White",
    age: 41,
    occupation: "Engineer",
  },
  {
    id: 30,
    name: "Xavier Sanchez",
    age: 33,
    occupation: "Sales Representative",
  },
  {
    id: 31,
    name: "Yvonne Martin",
    age: 29,
    occupation: "Teacher",
  },
  {
    id: 32,
    name: "Zoe Lee",
    age: 27,
    occupation: "Data Analyst",
  },
  {
    id: 33,
    name: "Abigail Brown",
    age: 34,
    occupation: "Nurse",
  },
  {
    id: 34,
    name: "Caleb Harris",
    age: 38,
    occupation: "Business Owner",
  },
  {
    id: 35,
    name: "Diana Taylor",
    age: 31,
    occupation: "Event Planner",
  },
  {
    id: 36,
    name: "Eleanor Walker",
    age: 40,
    occupation: "CEO",
  },
];
const tabs = ["tabs1", "tabs2", "tabs3"];
function App() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const peopleWithMinAge = dataDummy.reduce((min: any, person: any) =>
    person.age < min.age ? person : min
  );

  // find max age
  const peopleWithMaxAge = dataDummy.reduce((max: any, person: any) =>
    person.age > max.age ? person : max
  );

  // sort by min age
  const sortByMinAge = dataDummy.sort((a: any, b: any) => a.age - b.age);

  // sort by max age
  const sortByMaxAge = dataDummy.sort((a: any, b: any) => b.age - a.age);
  console.log("sortByMaxAge", sortByMaxAge);
  console.log("sortByMinAge", sortByMinAge);
  const closeModal = () => setIsShowModal(false);

  const columns = [
    { Header: "ID", accessor: "id", width: 10 },
    {
      Header: "Name",
      accessor: "name",
      width: 200,
    },
    {
      Header: "Age",
      accessor: "age",
      width: 200,
    },
    {
      Header: "Occupation",
      accessor: "occupation",
      width: 200,
    },
  ];
  console.log({ isShowModal });
  return (
    <>
      <h1>Test Table Link</h1>

      <div className="mb-10">
        <div>1. Counter</div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="mb-10">
        2.JavaScript function
        <div>People with the lowest age: {peopleWithMinAge.name}</div>
        <div>People with the highest age: {peopleWithMaxAge.name}</div>
      </div>
      <div className="mb-10">
        3.Tab
        <div>
          {tabs.map((tab) => (
            <button
              className={tab === activeTab ? "bg-white text-black" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {activeTab}
      </div>
      <div>
        4. Modal
        <button onClick={() => setIsShowModal(!isShowModal)}>Show Modal</button>
      </div>
      <div className="w-full">
        5. Table
        <div className="bg-white text-black w-full">
          <Table
            columns={columns}
            data={dataDummy.sort((a, b) => a.id - b.id)}
          />
        </div>
      </div>
      <Modal isOpen={isShowModal} title="Modal" onClose={closeModal}>
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  );
}

export default App;
