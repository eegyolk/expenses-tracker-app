export default class AuthenticationApi {
  /**
   *
   * @param {*} supabase
   */
  constructor(supabase) {
    this.supabase = supabase;
  }

  /**
   *
   * @param {*} emailAddress
   * @param {*} password
   * @returns { data, error } Object
   */
  async login(emailAddress, password) {
    return await this.supabase.auth.signInWithPassword({
      email: emailAddress,
      password,
    });
  }

  /**
   *
   * @returns { error } Object
   */
  async logout() {
    return await this.supabase.auth.signOut();
  }
}
