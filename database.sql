
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Database
CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "events" (
	"id" integer NOT NULL,
	"event_title" varchar(255) NOT NULL,
	"event_details" varchar(500) NOT NULL,
	"event_day" varchar(500) NOT NULL,
	"event_location" varchar(500) NOT NULL DEFAULT 'End Time Message Tabernacle'
) WITH (
  OIDS=FALSE
);

CREATE TABLE "gallery" (
	"id" serial NOT NULL UNIQUE,
	"photos" varchar(8000) NOT NULL,
	"photos_details" varchar(8000) NOT NULL,
	"photos_status" varchar(8000) NOT NULL,
	CONSTRAINT "gallery_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "contact_us" (
	"id" serial NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"email_address" varchar(255) NOT NULL,
	"request" varchar(8000) NOT NULL,
	CONSTRAINT "contact_us_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "video" (
	"id" serial NOT NULL UNIQUE,
	"link" varchar(8000) NOT NULL,
	"title" varchar(8000) NOT NULL,
	"description" varchar(8000) NOT NULL,
	CONSTRAINT "video_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



