export default class AccountCreationApi {
  constructor(supabase) {
    this.supabase = supabase;
  }

  async signUp(email, password) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });

    console.log(111, data);
    console.log(222, error);
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
