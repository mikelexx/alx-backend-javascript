import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    response.write('This is the list of our students');
    const { dbPath } = request.app.locals;
    const data = await readDatabase(dbPath);
    try {
      for (const key of Object.keys(data).sort((keyV) => keyV.toLowerCase())) {
        response.write(`\nNumber of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`);
      }
      response.end();
    } catch (err) {
      response.end('Cannot load the database');
    }
    return response.status(200);
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const { dbPath } = request.app.locals;
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).end('Major parameter must be CS or SWE');
    }
    try {
      const data = await readDatabase(dbPath);
      response.write(`List: ${data[major].join(', ')}`);
      response.end();
    } catch (error) {
      response.write('Cannot load the database');
      response.end();
    }
    return response.status(200);
  }
}
