const requiredEnvVars = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
] as const;

function getRequiredEnvVar(name: (typeof requiredEnvVars)[number]) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getSupabaseAdminConfig() {
  return {
    url: getRequiredEnvVar("NEXT_PUBLIC_SUPABASE_URL"),
    serviceRoleKey: getRequiredEnvVar("SUPABASE_SERVICE_ROLE_KEY"),
  };
}
