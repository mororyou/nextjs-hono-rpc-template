CREATE TABLE "accounts" (
	"user_id" uuid NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"provider_account_id" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "accounts_provider_provider_account_id_pk" PRIMARY KEY("provider","provider_account_id")
);
--> statement-breakpoint
CREATE TABLE "authenticators" (
	"credential_id" text NOT NULL,
	"user_id" uuid NOT NULL,
	"provider_account_id" text NOT NULL,
	"credential_public_key" text NOT NULL,
	"counter" integer NOT NULL,
	"credential_device_type" text NOT NULL,
	"credential_backed_up" boolean NOT NULL,
	"transports" text,
	CONSTRAINT "authenticators_user_id_credential_id_pk" PRIMARY KEY("user_id","credential_id"),
	CONSTRAINT "authenticators_credential_id_unique" UNIQUE("credential_id")
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"session_token" text PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"expires" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "two_factor_confirmations" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid,
	CONSTRAINT "two_factor_confirmations_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"password" text,
	"email_verified" timestamp,
	"image" text,
	"is_two_factor_enabled" boolean DEFAULT false NOT NULL,
	"role" text DEFAULT 'guest' NOT NULL,
	"status" text DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verification_tokens" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "verification_tokens_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
CREATE TABLE "password_reset_tokens" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"token" char(36) NOT NULL,
	"expires" timestamp NOT NULL,
	"ip_addr" varchar NOT NULL,
	CONSTRAINT "password_reset_tokens_email_token_unique" UNIQUE("email","token")
);
--> statement-breakpoint
CREATE TABLE "registration_tokens" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"token" char(36) NOT NULL,
	"expires" timestamp NOT NULL,
	"ip_addr" varchar NOT NULL,
	CONSTRAINT "registration_tokens_email_token_unique" UNIQUE("email","token")
);
--> statement-breakpoint
CREATE TABLE "two_factor_tokens" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"token" char(6) NOT NULL,
	"expires" timestamp NOT NULL,
	"ip_addr" varchar NOT NULL,
	CONSTRAINT "two_factor_tokens_email_unique" UNIQUE("email"),
	CONSTRAINT "two_factor_tokens_email_token_unique" UNIQUE("email","token")
);
--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "authenticators" ADD CONSTRAINT "authenticators_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "two_factor_confirmations" ADD CONSTRAINT "two_factor_confirmations_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "account_user_id_idx" ON "accounts" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "user_id_idx" ON "users" USING btree ("id");--> statement-breakpoint
CREATE INDEX "user_email_idx" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "two_factor_tokens_idx" ON "two_factor_tokens" USING btree ("id");--> statement-breakpoint
CREATE INDEX "two_factor_tokens_email_token_idx" ON "two_factor_tokens" USING btree ("email","token");