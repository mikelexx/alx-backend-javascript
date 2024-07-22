export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]: function* next() {
	  const employees = Object.values(report.allEmployees).flat();
	  for (let idx in employees) {
		  yield employees[idx];
		  idx += 1;
	  }
    },
  };
}
