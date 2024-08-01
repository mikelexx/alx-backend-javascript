interface Student {
    location: string
    lastName: string,
    firstName: string,
    age: number,
}

const [student1, student2] = [
    {
        lastName: "murithi",
        firstName: "michael",
        location: "Km",
        age: 22,
    },
    {
        firstName: "Abigael",
        lastName: "Kairu",
        age: 22,
        location: "Githu"
    }
]

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const thead: HTMLTableSectionElement = document.createElement("thead");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const leftCellHead: HTMLTableCellElement = rowHead.insertCell(0);
const rightCellHead: HTMLTableCellElement = rowHead.insertCell(1);

leftCellHead.innerHTML = "firstName";
rightCellHead.innerHTML = "location";
table.append(thead);


studentsList.forEach(student => {
    const row: HTMLTableRowElement = tbody.insertRow(0);
    const firstCell: HTMLTableCellElement = row.insertCell(0);
    const secondCell: HTMLTableCellElement = row.insertCell(1);

    firstCell.innerHTML = student.firstName;
    secondCell.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
