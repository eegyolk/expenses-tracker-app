import { boot } from "quasar/wrappers";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default boot(({ app }) => {
  app.config.globalProperties.$supabase = supabase;
});

export { supabase };
