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
   * @returns { data, error } Object
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

  /**
   *
   * @param {*} emailAddress
   * @param {*} code
   * @returns { data, error } Object
   */
  async verifyOtp(emailAddress, code) {
    return await this.supabase.auth.verifyOtp({
      email: emailAddress,
      token: code,
      type: "signup",
    });
  }
}
