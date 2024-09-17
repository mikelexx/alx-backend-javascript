import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    const { dbPath } = request.app.locals;
    response.write('This is the list of our students');
    try {
      const data = await readDatabase(dbPath);
      for (const key of Object.keys(data).sort((keyV) => keyV.toLowerCase())) {
        response.write(`\nNumber of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`);
      }
    } catch (err) {
      return response.status(500).end('\nCannot load the database');
    }
    return response.status(200).end();
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const { dbPath } = request.app.locals;
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(dbPath);
      response.write(`List: ${data[major].join(', ')}`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
    return response.status(200).send();
  }
}
