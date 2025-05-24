interface getContectionParams {
  email: string;
}

export default class GoogleServices {
  static async getContection({ email }: getContectionParams): Promise<any> {
    email = email.toLowerCase();
    return email;
  }
}
