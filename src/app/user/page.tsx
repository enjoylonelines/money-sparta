import { createClient } from "@/utils/supabase/server";

export default async function User() {
  const supabase = createClient();
  const { data: user } = await supabase.from("user").select("*");

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
