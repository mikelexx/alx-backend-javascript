export default class AppController {
  static getHomePage(request, response) {
    return response.status(200).send('Hello Horberton School!');
  }
}
