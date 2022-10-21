export default class AccountCreationApi {
  /**
   *
   * @param {*} supabase
   */
  constructor(supabase) {
    this.supabase = supabase;
  }

  /**
   *
   * @param {*} fullName
   * @param {*} emailAddress
   * @param {*} password
   * @returns { data, error} Object
   */
  async signUp(fullName, emailAddress, password) {
    return await this.supabase.auth.signUp({
      email: emailAddress,
      password,
      options: {
        data: {
          fullName,
        },
      },
    });
  }

  async verifyOtp() {
    const { data, error } = await this.supabase.auth.verifyOtp({
      email: "eegyolk@gmail.com",
      token: "063765",
      type: "signup",
    });

    console.log(333, data);
    console.log(444, error);
  }
}
