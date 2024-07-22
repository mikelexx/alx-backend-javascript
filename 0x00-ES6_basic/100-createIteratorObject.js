export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]: function* next() {
      const employees = Object.values(report.allEmployees).flat();
      for (const employee of employees) {
        yield employee;
      }
    },
  };
}
