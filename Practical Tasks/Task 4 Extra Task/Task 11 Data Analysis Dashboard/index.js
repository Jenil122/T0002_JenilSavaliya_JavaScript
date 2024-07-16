const api = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "Engineering",
    salary: 60000,
    yearsExperience: 5,
    city: "New York",
    position: "Software Engineer",
    gender: "Male",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    department: "Marketing",
    salary: 50000,
    yearsExperience: 3,
    city: "San Francisco",
    position: "Marketing Specialist",
    gender: "Female",
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 35,
    department: "Sales",
    salary: 65000,
    yearsExperience: 10,
    city: "Chicago",
    position: "Sales Manager",
    gender: "Female",
  },
  {
    id: 4,
    name: "Mike Brown",
    age: 40,
    department: "HR",
    salary: 70000,
    yearsExperience: 15,
    city: "Boston",
    position: "HR Manager",
    gender: "Male",
  },
  {
    id: 5,
    name: "Sara Davis",
    age: 28,
    department: "Engineering",
    salary: 55000,
    yearsExperience: 4,
    city: "Seattle",
    position: "Software Engineer",
    gender: "Female",
  },
  {
    id: 6,
    name: "David Wilson",
    age: 45,
    department: "Management",
    salary: 90000,
    yearsExperience: 20,
    city: "New York",
    position: "Operations Manager",
    gender: "Male",
  },
  {
    id: 7,
    name: "Linda Martinez",
    age: 32,
    department: "Support",
    salary: 40000,
    yearsExperience: 6,
    city: "Denver",
    position: "Support Specialist",
    gender: "Female",
  },
  {
    id: 8,
    name: "James Taylor",
    age: 29,
    department: "Engineering",
    salary: 58000,
    yearsExperience: 4,
    city: "Austin",
    position: "DevOps Engineer",
    gender: "Male",
  },
  {
    id: 9,
    name: "Mary Lee",
    age: 50,
    department: "Finance",
    salary: 75000,
    yearsExperience: 25,
    city: "San Francisco",
    position: "Financial Analyst",
    gender: "Female",
  },
  {
    id: 10,
    name: "Robert Anderson",
    age: 38,
    department: "IT",
    salary: 68000,
    yearsExperience: 12,
    city: "Los Angeles",
    position: "System Administrator",
    gender: "Male",
  },
];

const arrDepartment = [];
const arrSalaryData = [];
const arrName = [];
const arrAge = [];
const arrYearsExperience = [];
const arrCity = [];

api.forEach((datasets) => {
  arrDepartment.push(datasets.department);
  arrSalaryData.push(datasets.salary);
  arrName.push(datasets.name);
  arrAge.push(datasets.age);
  arrYearsExperience.push(datasets.yearsExperience);
  arrCity.push(datasets.city);
});

const arrDepartmentData = [...new Set(arrDepartment)];
const calculateValues = document.getElementById("calculateValues");
let sum = 0;
let minimum = Number.POSITIVE_INFINITY;
let maximum = Number.NEGATIVE_INFINITY;

for (let i = 0; i < arrSalaryData.length; i++) {
  sum += arrSalaryData[i];
  if (minimum > arrSalaryData[i]) {
    minimum = arrSalaryData[i];
  }
  if (maximum < arrSalaryData[i]) {
    maximum = arrSalaryData[i];
  }
}

new Chart("myChartsBar", {
  type: "bar",
  data: {
    labels: arrDepartmentData,
    datasets: [
      {
        label: "Salary",
        data: arrSalaryData,
        backgroundColor: [
          "#FFFED3",
          "#F4CE14",
          "#987D9A",
          "rgb(121, 159, 190)",
          "rgb(199, 51, 51)",
          "rgb(197, 131, 131)",
          "#9CDBA6",
          "#E6B9A6",
        ],
      },
    ],
  },
  options: {
    legend: {
      display: true,
    },
  },
});

new Chart("myChartsLine", {
  type: "line",
  data: {
    labels: arrCity,
    datasets: [
      {
        label: "Salary",
        data: arrSalaryData,
        borderColor: "red",
        fill: false,
      },
    ],
  },
  options: {
    legend: {
      display: true,
    },
  },
});

new Chart("myChartsPie", {
  type: "pie",
  data: {
    labels: arrName,
    datasets: [
      {
        label: "Salary",
        data: arrSalaryData,
        backgroundColor: [
          "rgb(167, 185, 179)",
          "rgb(39, 161, 94)",
          "rgb(54, 58, 56)",
          "rgb(121, 159, 190)",
          "rgb(199, 51, 51)",
          "rgb(197, 131, 131)",
          "#E6B9A6",
          "#FFF6E9",
          "#6FDCE3",
        ],
      },
    ],
  },
  options: {
    legend: {
      display: true,
    },
  },
});

new Chart("myChartsMultiLine", {
  type: "line",
  data: {
    labels: arrDepartmentData,
    datasets: [
      {
        label: "Years of Experience",
        data: arrYearsExperience,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Age",
        data: arrAge,
        borderColor: "red",
        fill: false,
      },
    ],
  },
  options: {
    legend: {
      display: true,
    },
  },
});

const departmentFilter = document.getElementById("departmentFilter");

arrDepartmentData.forEach((department) => {
  const option = document.createElement("option");
  option.textContent = department;
  option.value = department.toLowerCase();
  departmentFilter.appendChild(option);
});

departmentFilter.addEventListener("change", () => {
  const selectedDepartment = departmentFilter.value;
  if (selectedDepartment === "all") {
    new Chart("myChartsBar", {
      type: "bar",
      data: {
        labels: arrDepartmentData,
        datasets: [
          {
            label: "Salary",
            data: arrSalaryData,
            backgroundColor: [
              "#FFFED3",
              "#F4CE14",
              "#987D9A",
              "rgb(121, 159, 190)",
              "rgb(199, 51, 51)",
              "rgb(197, 131, 131)",
              "#9CDBA6",
              "#E6B9A6",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: true,
        },
      },
    });
  } else {
    const filteredData = api.filter(
      (employee) => employee.department.toLowerCase() === selectedDepartment
    );
    const filteredSalaries = filteredData.map((employee) => employee.salary);
    const filteredLabels = filteredData.map((employee) => employee.name);

    new Chart("myChartsBar", {
      type: "bar",
      data: {
        labels: filteredLabels,
        datasets: [
          {
            label: "Salary",
            data: filteredSalaries,
            backgroundColor: [
              "#FFFED3",
              "#F4CE14",
              "#987D9A",
              "rgb(121, 159, 190)",
              "rgb(199, 51, 51)",
              "rgb(197, 131, 131)",
              "#9CDBA6",
              "#E6B9A6",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: true,
        },
      },
    });
  }
});
