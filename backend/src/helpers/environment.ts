import dotenv from "dotenv";

dotenv.config({ override: true });

const requiredEnvVars = ["PORT", "CLIENT_ORIGIN"];

for (const envVar of requiredEnvVars) {
	if (!process.env[envVar]) {
		throw new Error(`Missing required environment variable: ${envVar}`);
	}
}

export const PORT = Number(process.env.PORT!);
export const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN!;
